import type { APIRoute } from 'astro';

export const prerender = false;

const GHL_API = 'https://services.leadconnectorhq.com';
const GHL_VERSION = '2021-07-28';

type FormField =
  | 'name'
  | 'email'
  | 'phone'
  | 'company'
  | 'employees'
  | 'pain'
  | 'message';

type FormPayload = Partial<Record<FormField, string>> & {
  source?: string;
  smsConsent?: string;
};

const splitName = (full: string): { firstName: string; lastName: string } => {
  const parts = full.trim().split(/\s+/);
  if (parts.length === 1) return { firstName: parts[0], lastName: '' };
  return { firstName: parts[0], lastName: parts.slice(1).join(' ') };
};

const jsonResponse = (status: number, body: Record<string, unknown>) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json' },
  });

const ghlHeaders = (apiKey: string) => ({
  Authorization: `Bearer ${apiKey}`,
  Version: GHL_VERSION,
  Accept: 'application/json',
  'Content-Type': 'application/json',
});

const buildNote = (data: FormPayload, smsOptedIn: boolean): string => {
  const lines: string[] = [];
  if (data.source) lines.push(`Source: ${data.source}`);
  if (data.company) lines.push(`Company: ${data.company}`);
  if (data.employees) lines.push(`Employees: ${data.employees}`);
  if (data.pain) lines.push(`Biggest IT pain: ${data.pain}`);
  if (data.message) lines.push(`Message: ${data.message}`);
  if (data.phone) {
    lines.push(
      `SMS consent: ${smsOptedIn ? 'YES' : 'NO'} at ${new Date().toISOString()} via ${data.source || 'Website'}`,
    );
  }
  return lines.join('\n');
};

export const POST: APIRoute = async ({ request }) => {
  const apiKey = import.meta.env.GHL_API_KEY;
  const locationId = import.meta.env.GHL_LOCATION_ID;

  if (!apiKey || !locationId) {
    console.error('[contact endpoint] missing GHL_API_KEY or GHL_LOCATION_ID env var');
    return jsonResponse(500, {
      ok: false,
      error: 'Something went wrong. Please email info@prestoneastsolutions.com.',
    });
  }

  let data: FormPayload;
  try {
    data = (await request.json()) as FormPayload;
  } catch {
    return jsonResponse(400, { ok: false, error: 'Invalid JSON.' });
  }

  if (!data.name || !data.email) {
    return jsonResponse(400, {
      ok: false,
      error: 'Name and email are required.',
    });
  }

  const { firstName, lastName } = splitName(data.name);
  const smsOptedIn = data.smsConsent === 'yes' && !!data.phone;

  const tags = [
    'Lead - Website',
    data.source ? `Form - ${data.source}` : 'Form - Contact',
  ];
  if (data.phone) tags.push(smsOptedIn ? 'SMS - Opted In' : 'SMS - Opted Out');

  const contactBody: Record<string, unknown> = {
    locationId,
    firstName,
    lastName,
    email: data.email,
    source: data.source || 'Website',
    tags,
  };
  if (data.phone) contactBody.phone = data.phone;
  if (data.company) contactBody.companyName = data.company;

  const contactRes = await fetch(`${GHL_API}/contacts/upsert`, {
    method: 'POST',
    headers: ghlHeaders(apiKey),
    body: JSON.stringify(contactBody),
  });

  if (!contactRes.ok) {
    const errText = await contactRes.text();
    console.error('[contact endpoint] GHL upsert failed', contactRes.status, errText);
    return jsonResponse(502, {
      ok: false,
      error: 'Could not reach our lead system. Please email info@prestoneastsolutions.com.',
    });
  }

  const contactJson = (await contactRes.json()) as {
    contact?: { id?: string };
    new?: boolean;
  };
  const contactId = contactJson?.contact?.id;

  const noteBody = buildNote(data, smsOptedIn);
  if (contactId && noteBody) {
    const noteRes = await fetch(`${GHL_API}/contacts/${contactId}/notes`, {
      method: 'POST',
      headers: ghlHeaders(apiKey),
      body: JSON.stringify({ body: noteBody, userId: locationId }),
    });
    if (!noteRes.ok) {
      console.error(
        '[contact endpoint] note attach failed',
        noteRes.status,
        await noteRes.text(),
      );
    }
  }

  return jsonResponse(200, { ok: true });
};

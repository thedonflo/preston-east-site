export interface Service {
  slug: string;
  number: string;
  category: string;
  name: string;
  emphasis: string;
  tagline: string;
  description: string;
  includes: string[];
  stat: string;
  icon: 'cloud' | 'code' | 'check' | 'shield' | 'lock' | 'compass';
}

export const services: Service[] = [
  {
    slug: 'cloud',
    number: '01',
    category: 'Cloud',
    name: 'Cloud Solutions',
    emphasis: 'Solutions',
    tagline: 'Right-sized cloud. No more surprise bills.',
    description:
      'We audit your AWS, Azure, or Google Cloud setup, eliminate waste, and design infrastructure that scales without ambushing your budget. Migration from on-prem when it makes sense — and honesty about when it doesn’t.',
    includes: [
      'Cloud architecture review',
      'Cost optimization (find &amp; eliminate waste)',
      'Migration planning &amp; execution',
      'Auto-scaling &amp; high-availability setup',
      'Backup &amp; disaster recovery',
      'Monitoring &amp; alerting',
      'Documentation you can actually read',
    ],
    stat: 'SMBs typically overpay 30–40% on cloud spend.',
    icon: 'cloud',
  },
  {
    slug: 'app-dev',
    number: '02',
    category: 'Build',
    name: 'Application Development',
    emphasis: 'Development',
    tagline: 'Custom software that ships tested and stays maintainable.',
    description:
      'The internal tool, the integration, the customer-facing app — built by an engineer who has also held DBA and QA roles, so it ships tested, documented, and built to be handed off if you ever go in-house.',
    includes: [
      'Requirements scoping &amp; technical design',
      'Build (web apps, APIs, integrations, internal tools)',
      'Database design &amp; optimization',
      'Testing baked into the build',
      'Deployment &amp; CI/CD',
      'Documentation',
      'Ongoing support',
    ],
    stat: 'Off-the-shelf software fits 70% of your needs. The other 30% is where your competitive advantage lives.',
    icon: 'code',
  },
  {
    slug: 'qa',
    number: '03',
    category: 'Quality',
    name: 'QA & Test Automation',
    emphasis: 'Automation',
    tagline: 'Catch the bug before your customer does.',
    description:
      'Manual and automated testing for your existing applications. Test plans, regression suites, CI/CD integration — backed by hands-on QA experience across SaaS, healthcare, and federal environments.',
    includes: [
      'Test strategy &amp; planning',
      'Manual test execution',
      'Automated test scripts (Selenium, Cypress, Playwright)',
      'API &amp; integration testing',
      'Regression suites',
      'CI/CD pipeline integration',
      'Bug triage &amp; detailed reporting',
    ],
    stat: 'One hour of testing saves five hours of post-launch firefighting.',
    icon: 'check',
  },
  {
    slug: 'managed-it',
    number: '04',
    category: 'Managed IT',
    name: 'Managed IT Services',
    emphasis: 'Services',
    tagline: 'Your IT department, on retainer.',
    description:
      'Day-to-day IT handled so you can run the business. Helpdesk, monitoring, patching, vendor management — without the cost of a full-time team.',
    includes: [
      'User support &amp; helpdesk',
      '24/7 system monitoring',
      'OS &amp; application patching',
      'Backup verification (actually tested)',
      'Vendor management (we deal with your ISP/SaaS vendors)',
      'Asset &amp; license tracking',
      'Monthly status reports',
    ],
    stat: 'The average SMB loses 12 hours per month to IT issues. We give that time back.',
    icon: 'shield',
  },
  {
    slug: 'security',
    number: '05',
    category: 'Security',
    name: 'Cybersecurity & Compliance',
    emphasis: 'Compliance',
    tagline: 'Stop hoping you don’t get breached. Know you’re protected.',
    description:
      'Security audits, endpoint hardening, policy, and compliance prep (HIPAA basics, SOC 2 readiness). Federal-grade security-first thinking is the default, not the add-on.',
    includes: [
      'Security audit &amp; vulnerability assessment',
      'Endpoint protection deployment',
      'Backup &amp; disaster recovery planning',
      'Access control &amp; identity review',
      'Security awareness training',
      'Compliance gap analysis (HIPAA, SOC 2, PCI basics)',
      'Incident response plan',
    ],
    stat: '60% of small businesses close within 6 months of a major breach.',
    icon: 'lock',
  },
  {
    slug: 'fractional-cto',
    number: '06',
    category: 'Strategy',
    name: 'Fractional CTO',
    emphasis: 'CTO',
    tagline: 'The CTO you couldn’t afford — on the days you need one.',
    description:
      'Monthly strategy sessions, vendor evaluations, tech roadmap, hiring guidance, and AI-readiness planning. 15 years across federal, SaaS, healthcare, finance, and e-commerce informs every recommendation.',
    includes: [
      'Monthly strategy sessions',
      'Annual tech roadmap',
      'Vendor selection &amp; negotiation',
      'Tech budget planning',
      'AI-readiness assessment',
      'Hiring &amp; team scaling advice',
      'Board / investor reporting support',
    ],
    stat: 'A full-time CTO costs $200K+. A fractional one costs less than a single bad hire.',
    icon: 'compass',
  },
];

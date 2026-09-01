import type { ContactBlock, FooterColumn } from '@/types/SubFooter';

export const contactBlock: ContactBlock = {
  lines: [
    'Electrical & Computer Engineering',
    '450 Engineering Building',
    'Brigham Young University',
    'Provo, UT 84602',
    '(801) 422-4012',
  ],
  buttonLabel: 'Contact Us',
  buttonHref: '/contact',
};

// TODO: The following links still point at routes that don't exist yet on
// this site (/alumni-and-friends, /diversity-and-belonging,
// /objectives-and-outcomes, /accreditation, /ai-policy, /event-requesting,
// /cadence). They currently land on the 404 page. Their content exists on
// the live ece.byu.edu site and can be replicated here — build those pages
// before launch. Everything else below now points at the real external
// system (or existing internal page) it belongs to.
export const subfooterColumns: FooterColumn[] = [
  {
    heading: 'Department Resources',
    links: [
      { label: 'ECE Intranet', href: 'https://eceintranet.byu.edu' },
      { label: 'ECE Purchasing', href: 'https://ecepurchasing.byu.edu' },
      { label: 'Student Employees', href: '/people/student-employees/resources' },
      { label: 'Alumni & Friends', href: '/alumni-and-friends' },
      { label: 'Diversity and Belonging', href: '/diversity-and-belonging' },
      { label: 'Objectives and Outcomes', href: '/objectives-and-outcomes' },
      { label: 'Accreditation', href: '/accreditation' },
      { label: 'Department AI Policy', href: '/ai-policy' },
      { label: 'Event Requesting', href: '/event-requesting' },
    ],
  },
  {
    heading: 'Scholarship & Employment',
    links: [
      {
        label: 'Career Services for ECE',
        href: 'https://careers.byu.edu/students/electrical_computer_manfuacturing-engineering-and-cyber-security',
      },
      { label: 'Department Scholarships', href: '/opportunities/scholarships' },
      { label: 'Handshake', href: 'https://careers.byu.edu/handshake-login' },
      { label: 'Part-Time Student Employment', href: 'https://hrs.byu.edu/student-employees' },
    ],
  },
  {
    heading: 'Help & Software',
    links: [
      { label: 'Help Wiki', href: 'https://ecehelp.byu.edu' },
      { label: 'Submit a Ticket', href: 'https://eceticket.byu.edu' },
      { label: 'CAEDM', href: 'https://caedm.et.byu.edu/cms/' },
      { label: 'Cadence Software', href: '/cadence' },
    ],
  },
];

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

// TODO: Several links below still point at routes that don't exist yet
// (/intranet, /purchasing, /alumni, /diversity, /objectives, /accreditation,
// /ai-policy, /events, /wiki, /ticket, /caedm, /cadence, /part-time, and the
// /contact button above). They currently land on the 404 page. Either build
// those pages, point them at the real external URLs, or remove them before
// launch — footer links are exactly where staff and prospective students go
// looking for this kind of thing.
export const subfooterColumns: FooterColumn[] = [
  {
    heading: 'Department Resources',
    links: [
      { label: 'ECE Intranet', href: '/intranet' },
      { label: 'ECE Purchasing', href: '/purchasing' },
      { label: 'Student Employees', href: '/people/student-employees' },
      { label: 'Alumni & Friends', href: '/alumni' },
      { label: 'Diversity and Belonging', href: '/diversity' },
      { label: 'Objectives and Outcomes', href: '/objectives' },
      { label: 'Accreditation', href: '/accreditation' },
      { label: 'Department AI Policy', href: '/ai-policy' },
      { label: 'Event Requesting', href: '/events' },
    ],
  },
  {
    heading: 'Scholarship & Employment',
    links: [
      { label: 'Career Services for ECE', href: '/opportunities/networking-internships' },
      { label: 'Department Scholarships', href: '/opportunities/scholarships' },
      { label: 'Handshake', href: 'https://app.joinhandshake.com' },
      { label: 'Part-Time Student Employment', href: '/part-time' },
    ],
  },
  {
    heading: 'Help & Software',
    links: [
      { label: 'Help Wiki', href: '/wiki' },
      { label: 'Submit a Ticket', href: '/ticket' },
      { label: 'CAEDM', href: '/caedm' },
      { label: 'Cadence Software', href: '/cadence' },
    ],
  },
];

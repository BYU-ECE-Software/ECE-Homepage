export type NavLink = {
  kind: 'link';
  label: string;
  href: string;
  roles?: string[]; // If set, only users with at least one matching role see this item
};

export type NavDropdown = {
  kind: 'dropdown';
  label: string;
  roles?: string[]; // Guards the entire dropdown; individual children can also be guarded
  children: {
    label: string;
    href: string;
    roles?: string[]; // If set, only users with at least one matching role see this child
  }[];
};

export type NavItem = NavLink | NavDropdown;

// Roles are arbitrary strings — match whatever your auth system uses
const navConfig: NavItem[] = [
    {kind: 'link', label: 'Home', href: '/'},
  {
    kind: 'dropdown',
    label: 'People',
    // roles: [],
    children: [
      { label: 'Faculty', href: '/people/faculty' },
      { label: 'Advisors', href: '/people/advisors' },
      { label: 'Staff', href: '/people/staff' },
      { label: 'Student Employees', href: '/people/student-employees' },
      { label: 'PhD Students', href: '/people/phd-students' },
    ],
  },
  {
    kind: 'dropdown',
    label: 'Undergraduate',
    children: [
      { label: 'Prospective Students', href: '/undergraduate/prospective-students' },
      { label: 'Electrical Engineering', href: '/undergraduate/electrical-engineering' },
      { label: 'Computer Engineering', href: '/undergraduate/computer-engineering' },
      { label: 'Cybersecurity', href: '/undergraduate/cybersecurity' },
      { label: 'Cybersecurity Minor', href: '/undergraduate/minors/cybersecurity' },
    ],
  },
  {
    kind: 'dropdown',
    label: 'Graduate',
    children: [
      { label: 'Current Graduate Students', href: '/graduate/current-graduate-students' },
      { label: 'Prospective Graduate Students', href: '/graduate/prospective-graduate-students' },
      { label: 'Graduate Courses', href: '/graduate/graduate-courses' },
    ],
  },
  {
    kind: 'dropdown',
    label: 'News and Events',
    children: [
      { label: 'Calendar', href: '/news-and-events/calendar' },
      { label: 'News', href: '/news-and-events/news' },
    ],
  },
  {
    kind: 'link',
    label: 'Research',
    href: '/research',
  },
  {
    kind: 'dropdown',
    label: 'Outreach',
    children: [
      { label: 'Outreach 1', href: '/outreach/outreach-1' },
      { label: 'Outreach 2', href: '/outreach/outreach-2' },
      { label: 'Outreach 3', href: '/outreach/outreach-3' },
      { label: 'Outreach 4', href: '/outreach/outreach-4' },
      { label: 'Outreach 5', href: '/outreach/outreach-5' },
      { label: 'Outreach 6', href: '/outreach/outreach-6' },
      { label: 'Outreach 7', href: '/outreach/outreach-7' },
    ],
  },
  {
    kind: 'link',
    label: 'EPIcenter',
    href: '/epicenter',
  },
];

export default navConfig;
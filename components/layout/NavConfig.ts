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
  { kind: 'link', label: 'Home', href: '/' },
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
      { label: 'Emeritus', href: '/people/emeritus' },
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
    // Department-wide opportunities, shared by all three majors. Each has its
    // own page, and they are linked from here rather than repeated inside
    // every major's pages.
    kind: 'dropdown',
    label: 'Opportunities',
    children: [
      { label: 'All Opportunities', href: '/opportunities' },
      { label: 'Student Organizations', href: '/student-organizations' },
      { label: 'Scholarships', href: '/opportunities/scholarships' },
      { label: 'Networking & Internships', href: '/opportunities/networking-internships' },
      { label: 'Undergraduate Research', href: '/opportunities/undergraduate-research' },
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
      {
        label: 'Faith and Engineering Lectures',
        href: '/news-and-events/faith-and-engineering-lectures',
      },
      { label: 'Department Tours', href: '/news-and-events/department-tours' },
    ],
  },
  {
    kind: 'link',
    label: 'Research',
    href: '/research',
  },
  // TODO: Outreach is still a placeholder. Every link below points at a route
  // that does not exist yet, so the dropdown currently sends visitors to a 404.
  // Either build these pages or leave this block commented out until they exist.
  // {
  //   kind: 'dropdown',
  //   label: 'Outreach',
  //   children: [
  //     { label: 'Outreach 1', href: '/outreach/outreach-1' },
  //   ],
  // },
  {
    kind: 'link',
    label: 'EPIcenter',
    href: '/epicenter',
  },
];

export default navConfig;

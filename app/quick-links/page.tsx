import type { Metadata } from 'next';
import PageBanner from '@/components/layout/PageBanner';
import { ResourceGrid, type ResourceItem } from '@/components/general/ContentPage';

export const metadata: Metadata = {
  title: 'Quick Links | Electrical and Computer Engineering',
  description: 'Fast access to the resources and pages ECE students, faculty, and staff use most.',
};

// Only pages not already linked from the homepage, so nothing is a click away
// from two different top-level entry points.
const peopleLinks: ResourceItem[] = [
  { title: 'Faculty', description: 'Browse ECE faculty by research area.', href: '/people/faculty' },
  { title: 'Staff', description: 'Department staff directory.', href: '/people/staff' },
  {
    title: 'PhD Students',
    description: 'Current PhD students in the department.',
    href: '/people/phd-students',
  },
  {
    title: 'Student Employees',
    description: 'Student employee directory and resources.',
    href: '/people/student-employees',
  },
  {
    title: 'Emeritus Faculty',
    description: 'Retired faculty who shaped the department.',
    href: '/people/emeritus',
  },
];

const academicsLinks: ResourceItem[] = [
  {
    title: 'Graduate Courses',
    description: 'Course offerings for graduate students.',
    href: '/graduate/graduate-courses',
  },
  {
    title: 'Current Graduate Students',
    description: 'Resources for students already in the program.',
    href: '/graduate/current-graduate-students',
  },
  {
    title: 'Prospective Graduate Students',
    description: 'How to apply to the ECE graduate program.',
    href: '/graduate/prospective-graduate-students',
  },
  {
    title: 'Scholarships',
    description: 'Department and university scholarship opportunities.',
    href: '/opportunities/scholarships',
  },
  {
    title: 'Undergraduate Research',
    description: 'Get involved in research as an undergraduate.',
    href: '/opportunities/undergraduate-research',
  },
];

const newsAndEventsLinks: ResourceItem[] = [
  { title: 'Calendar', description: 'Upcoming department events.', href: '/news-and-events/calendar' },
  {
    title: 'Faith and Engineering Lectures',
    description: 'Lecture series connecting faith and engineering.',
    href: '/news-and-events/faith-and-engineering-lectures',
  },
  {
    title: 'Event Requesting',
    description: 'Request department support for planning an event.',
    href: '/event-requesting',
  },
];

const departmentLinks: ResourceItem[] = [
  {
    title: 'Alumni & Friends',
    description: 'Stay connected and give back to the department.',
    href: '/alumni-and-friends',
  },
  {
    title: 'Diversity and Belonging',
    description: "Learn about the department's diversity initiatives.",
    href: '/diversity-and-belonging',
  },
  {
    title: 'Accreditation',
    description: 'ABET accreditation information and program outcomes.',
    href: '/accreditation',
  },
  {
    title: 'Objectives and Outcomes',
    description: 'Program educational objectives and student outcomes.',
    href: '/objectives-and-outcomes',
  },
  {
    title: 'Department AI Policy',
    description: "The department's policy on AI use in coursework.",
    href: '/ai-policy',
  },
  { title: 'Cadence Software', description: 'Access to Cadence design software.', href: '/cadence' },
  { title: 'Contact Us', description: 'Get in touch with the department.', href: '/contact' },
  { title: 'EPICenter', description: 'Engineering and Physical Sciences maker space.', href: '/epicenter' },
];

const toolsLinks: ResourceItem[] = [
  {
    title: 'Room Reservations',
    description: 'Reserve department rooms and lab space.',
    href: 'https://reserve.et.byu.edu/reservations/Web/index.php',
  },
  {
    title: 'ECE Intranet',
    description: 'Internal department resources for students and staff.',
    href: 'https://eceintranet.byu.edu',
  },
  {
    title: 'ECE Purchasing',
    description: 'Submit and track department purchasing requests.',
    href: 'https://ecepurchasing.byu.edu',
  },
  { title: 'Help Wiki', description: 'Troubleshooting and how-to guides.', href: 'https://ecehelp.byu.edu' },
  {
    title: 'Submit a Ticket',
    description: 'Request IT or facilities help from the department.',
    href: 'https://eceticket.byu.edu',
  },
  {
    title: 'CAEDM',
    description: 'Engineering computer lab and design software support.',
    href: 'https://caedm.et.byu.edu/cms/',
  },
];

export default function QuickLinksPage() {
  return (
    <>
      <PageBanner
        title="Quick Links"
        description="Fast access to the pages and tools ECE students, faculty, and staff use most."
      />
      <ResourceGrid items={peopleLinks} title="People" columns={3} />
      <div className="bg-slate-50">
        <ResourceGrid items={academicsLinks} title="Academics & Opportunities" columns={3} />
      </div>
      <ResourceGrid items={newsAndEventsLinks} title="News & Events" columns={3} />
      <div className="bg-slate-50">
        <ResourceGrid items={departmentLinks} title="Department" columns={4} />
      </div>
      <ResourceGrid items={toolsLinks} title="Tools & Resources" columns={3} />
    </>
  );
}

import type { Metadata } from 'next';
import PageBanner from '@/components/layout/PageBanner';
import { ResourceGrid, type ResourceItem } from '@/components/general/ContentPage';

export const metadata: Metadata = {
  title: 'Department Resources | Electrical and Computer Engineering',
  description: 'Resources and tools for ECE students, faculty, and staff.',
};

const resourceLinks: ResourceItem[] = [
  {
    title: 'Accreditation',
    description: 'ABET accreditation information and program outcomes.',
    href: '/accreditation',
  },
  {
    title: 'Alumni & Friends',
    description: 'Stay connected and give back to the department.',
    href: '/alumni-and-friends',
  },
  {
    title: 'Department AI Policy',
    description: "The department's policy on AI use in coursework.",
    href: '/ai-policy',
  },
  {
    title: 'Diversity and Belonging',
    description: "Learn about the department's diversity initiatives.",
    href: '/diversity-and-belonging',
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
  {
    title: 'Event Requesting',
    description: 'Request department support for planning an event.',
    href: '/event-requesting',
  },
  {
    title: 'Objectives and Outcomes',
    description: 'Program educational objectives and student outcomes.',
    href: '/objectives-and-outcomes',
  },
  {
    title: 'Quick Links',
    description: 'Fast access to the pages and tools used most across the department.',
    href: '/quick-links',
  },
  {
    title: 'Room Reservations',
    description: 'Reserve department rooms and lab space.',
    href: 'https://reserve.et.byu.edu/reservations/Web/index.php',
  },
  {
    title: 'Student Employees',
    description: 'Resources for current student employees.',
    href: '/people/student-employees/resources',
  },
];

export default function DepartmentResourcesPage() {
  return (
    <>
      <PageBanner
        title="Department Resources"
        description="Resources and tools for ECE students, faculty, and staff."
      />
      <ResourceGrid items={resourceLinks} columns={3} />
    </>
  );
}

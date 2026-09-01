import type { Metadata } from 'next';
import PageBanner from '@/components/layout/PageBanner';
import Description from '@/components/general/Description';
import CardGrid from '@/components/general/CardGrid';
import ResourceCard from '@/components/general/ResourceCard';
import type { ResourceCardData } from '@/types/Content';

export const metadata: Metadata = {
  title: 'Student Employee Resources | Electrical and Computer Engineering',
  description:
    'Hiring, training, payroll, purchasing, and travel resources for ECE student employees.',
};

// TODO: hrefs are placeholders ('#') — replace with the real destinations
// (policy pages, Qualtrics forms, Y-Time, purchasing, travel request forms)
// once they're identified.
const resources: ResourceCardData[] = [
  {
    title: 'How to Get Hired',
    description: 'Policies to start working.',
    href: '#',
    linkText: 'Learn more',
  },
  {
    title: 'New Student Employee Training',
    description: 'Safety and procedures.',
    href: '#',
    linkText: 'Learn more',
  },
  {
    title: 'Missed Punch Form',
    description: 'Correct timesheet errors.',
    href: '#',
    linkText: 'Open form',
  },
  {
    title: 'Y-Time and Payroll',
    description: 'Clocking in/out and payroll calendar.',
    href: '#',
    linkText: 'Learn more',
  },
  {
    title: 'Purchasing Options',
    description: 'How to make a purchase.',
    href: '#',
    linkText: 'Learn more',
  },
  {
    title: 'Student Travel',
    description: 'Requirements and procedures for department-related travel.',
    href: '#',
    linkText: 'Learn more',
  },
];

export default function StudentEmployeeResourcesPage() {
  return (
    <>
      <PageBanner title="Student Employee Resources" />

      <Description
        text="Resources for current ECE student employees."
        subtext="Hiring policies, training, payroll, purchasing, and travel information."
      />

      <CardGrid columns={3} paddingClass="px-10 pt-4 pb-16">
        {resources.map((item) => (
          <ResourceCard key={item.title} {...item} />
        ))}
      </CardGrid>
    </>
  );
}

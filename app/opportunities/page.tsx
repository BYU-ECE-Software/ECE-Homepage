import type { Metadata } from 'next';
import PageTitle from '@/components/layout/PageTitle';
import Description from '@/components/general/Description';
import CardGrid from '@/components/general/CardGrid';
import ResourceCard from '@/components/general/ResourceCard';
import { opportunities } from '@/data/opportunities';

export const metadata: Metadata = {
  title: 'Opportunities | Electrical and Computer Engineering',
  description:
    'Scholarships, student organizations, internships, and undergraduate research open to students in Electrical Engineering, Computer Engineering, and Cybersecurity.',
};

// Landing page for department-wide opportunities. Everything linked here is
// open to students in all three majors, which is why it lives in one place
// instead of being repeated on each major's pages.
export default function OpportunitiesPage() {
  return (
    <>
      <PageTitle title="Opportunities" />

      <Description
        text="Open to students in all three majors."
        subtext="Scholarships, clubs, internships, and research are shared across Electrical Engineering, Computer Engineering, and Cybersecurity. Start wherever fits where you are right now."
      />

      <CardGrid columns={2} paddingClass="px-10 pt-4 pb-16">
        {opportunities.map((item) => (
          <ResourceCard key={item.title} {...item} />
        ))}
      </CardGrid>
    </>
  );
}

import type { Metadata } from 'next';
import PageBanner from '@/components/layout/PageBanner';
import Description from '@/components/general/Description';
import AdvisorCard from '@/components/general/AdvisorCard';
import { advisementTeam } from '@/data/people/Advisors';

export const metadata: Metadata = {
  title: 'Advisors | Electrical and Computer Engineering',
  description: 'Schedule an appointment with an ECE academic advisor.',
};

export default function Advisors() {
  return (
    <>
      <PageBanner title="Advisors" />

      <Description
        text="Schedule an in-person appointment with an advisor in the ECEn Department office suite in 450 EB by selecting an advisor below."
        subtext="Cybersecurity students can also meet with their advisor at CTB 265. If you're unable to visit campus, reach out by phone or email instead."
        maxWidthClass="max-w-2xl"
      />

      <div className="mx-auto max-w-5xl px-6 pt-4 pb-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {advisementTeam.map((advisor) => (
            <AdvisorCard key={advisor.id} {...advisor} />
          ))}
        </div>
      </div>
    </>
  );
}

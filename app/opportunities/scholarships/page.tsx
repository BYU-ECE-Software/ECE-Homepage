import type { Metadata } from 'next';
import PageBanner from '@/components/layout/PageBanner';
import Overview from '@/components/general/Overview';
import { resolveOverview } from '@/data/undergraduate/resolveOverview';

export const metadata: Metadata = {
  title: 'Scholarships | Electrical and Computer Engineering',
  description:
    'Department scholarships awarded annually to undergraduate students in all ECE degree programs.',
};

export default function ScholarshipsPage() {
  return (
    <>
      <PageBanner title="Scholarships" />

      <section className="mx-auto max-w-3xl px-6 py-12">
        <Overview content={resolveOverview({ file: 'department-scholarships.md' })} />
      </section>
    </>
  );
}

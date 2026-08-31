import { notFound } from 'next/navigation';
import MinorLayout from '@/components/undergraduate/minors/MinorLayout';
import Overview from '@/components/general/Overview';
import { getMinor, getAllMinorSlugs } from '@/data/undergraduate/minors';
import { resolveOverview } from '@/data/undergraduate/resolveOverview';

interface Props {
  params: Promise<{
    minor: string;
  }>;
}

export function generateStaticParams() {
  return getAllMinorSlugs().map((minor) => ({ minor }));
}

export default async function MinorPage({ params }: Props) {
  const { minor: minorSlug } = await params;
  const minor = getMinor(minorSlug);

  if (!minor) {
    notFound();
  }

  return (
    <MinorLayout minor={minor}>
      <h1 className="text-byu-dark-gray text-3xl font-semibold">{minor.displayName}</h1>

      <p className="text-byu-medium-gray mt-4">{minor.description}</p>

      <Overview content={resolveOverview(minor.overview)} />
    </MinorLayout>
  );
}

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import SectionLayout from '@/components/general/section/SectionLayout';
import ResourceCard from '@/components/general/ResourceCard';
import Overview from '@/components/general/Overview';
import { getMajor, majors } from '@/data/undergraduate/majors';
import { resolveOverview } from '@/data/undergraduate/resolveOverview';

interface Props {
  params: Promise<{
    major: string;
    slug: string;
  }>;
}

export function generateStaticParams() {
  return majors.flatMap((major) =>
    Object.keys(major.content)
      .filter((slug) => slug !== 'home')
      .map((slug) => ({ major: major.slug, slug })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { major: majorSlug, slug } = await params;
  const major = getMajor(majorSlug);
  const page = major?.content[slug];

  if (!major || !page) return {};

  return {
    title: `${page.title} | ${major.displayName}`,
    description: page.description,
  };
}

export default async function MajorSubsectionPage({ params }: Props) {
  const { major: majorSlug, slug } = await params;
  const major = getMajor(majorSlug);

  if (!major) {
    notFound();
  }

  const page = major.content[slug];

  if (!page) {
    notFound();
  }

  return (
    <SectionLayout
      title={major.displayName}
      tagline={major.tagline}
      basePath={`/undergraduate/${major.slug}`}
      navigation={major.navigation}
      currentSlug={slug}
      breadcrumbs={[
        { label: 'Undergraduate', href: '/undergraduate/prospective-students' },
        { label: major.displayName, href: `/undergraduate/${major.slug}` },
        { label: page.title },
      ]}
    >
      <h1 className="text-byu-dark-gray text-3xl font-semibold">{page.title}</h1>

      <p className="text-byu-medium-gray mt-4">{page.description}</p>

      <Overview content={resolveOverview(page.overview)} />

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {page.cards.map((card) => (
          <ResourceCard key={card.title} {...card} />
        ))}
      </div>
    </SectionLayout>
  );
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SectionLayout from "@/components/general/section/SectionLayout";
import ResourceCard from "@/components/general/ResourceCard";
import Overview from "@/components/general/Overview";
import { getMajor, getAllMajorSlugs } from "@/data/undergraduate/majors";
import { resolveOverview } from "@/data/undergraduate/resolveOverview";

interface Props {
  params: Promise<{
    major: string;
  }>;
}

export function generateStaticParams() {
  return getAllMajorSlugs().map((major) => ({ major }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { major: majorSlug } = await params;
  const major = getMajor(majorSlug);

  if (!major) return {};

  return {
    title: `${major.displayName} | Electrical and Computer Engineering`,
    description: major.summary,
  };
}

export default async function MajorLandingPage({ params }: Props) {
  const { major: majorSlug } = await params;
  const major = getMajor(majorSlug);

  if (!major) {
    notFound();
  }

  const page = major.content.home;

  return (
    <SectionLayout
      title={major.displayName}
      tagline={major.tagline}
      basePath={`/undergraduate/${major.slug}`}
      navigation={major.navigation}
      breadcrumbs={[
        { label: "Undergraduate", href: "/undergraduate/prospective-students" },
        { label: major.displayName },
      ]}
    >
      <h1 className="text-3xl font-semibold text-byu-dark-gray">
        {page.title}
      </h1>

      <p className="mt-4 text-byu-medium-gray">{page.description}</p>

      <Overview content={resolveOverview(page.overview)} />

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {page.cards.map((card) => (
          <ResourceCard key={card.title} {...card} />
        ))}
      </div>
    </SectionLayout>
  );
}

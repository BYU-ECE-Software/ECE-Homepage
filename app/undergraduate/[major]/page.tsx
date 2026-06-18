import { notFound } from "next/navigation";
import ContentLayout from "@/components/undergraduate/majors/ContentLayout";
import ResourceCard from "@/components/undergraduate/majors/ResourceCard";
import Overview from "@/components/undergraduate/majors/Overview";
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

export default async function MajorLandingPage({ params }: Props) {
  const { major: majorSlug } = await params;
  const major = getMajor(majorSlug);

  if (!major) {
    notFound();
  }

  const page = major.content.home;

  if (!page) {
    notFound();
  }

  return (
    <ContentLayout major={major}>
      <h2 className="text-3xl font-semibold text-byu-dark-gray">
        {page.title}
      </h2>

      <p className="mt-4 text-byu-medium-gray">{page.description}</p>

      <Overview content={resolveOverview(page.overview)} />

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {page.cards.map((card) => (
          <ResourceCard key={card.title} {...card} />
        ))}
      </div>
    </ContentLayout>
  );
}

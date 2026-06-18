import { notFound } from "next/navigation";
import ContentLayout from "@/components/undergrad-majors/ContentLayout";
import ResourceCard from "@/components/undergrad-majors/ResourceCard";
import Overview from "@/components/undergrad-majors/Overview";
import { getMajor, majors } from "@/data/undergrad-majors";
import { resolveOverview } from "@/data/undergrad-majors/resolveOverview";

interface Props {
  params: Promise<{
    major: string;
    slug: string;
  }>;
}

export function generateStaticParams() {
  return majors.flatMap((major) =>
    Object.keys(major.content)
      .filter((slug) => slug !== "home")
      .map((slug) => ({ major: major.slug, slug }))
  );
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
    <ContentLayout major={major} currentSlug={slug}>
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
    </ContentLayout>
  );
}

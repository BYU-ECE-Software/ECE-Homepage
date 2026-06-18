import { notFound } from "next/navigation";
import MinorLayout from "@/components/undergraduate/minors/MinorLayout";
import Overview from "@/components/undergraduate/majors/Overview";
import { getMinor, getAllMinorSlugs } from "@/data/undergraduate/minors";
import { resolveOverview } from "@/data/undergraduate/resolveOverview";

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
      <h2 className="text-3xl font-semibold text-byu-dark-gray">
        {minor.displayName}
      </h2>

      <p className="mt-4 text-byu-medium-gray">{minor.description}</p>

      <Overview content={resolveOverview(minor.overview)} />
    </MinorLayout>
  );
}

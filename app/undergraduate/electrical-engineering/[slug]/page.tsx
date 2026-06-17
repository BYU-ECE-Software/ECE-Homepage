import { notFound } from "next/navigation";

import ContentLayout from "../ContentLayout";
import ResourceCard from "../ResourceCard";
import { content } from "../content";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function Page({
  params,
}: Props) {
  const { slug } = await params;

  const page = content[slug];

  if (!page) {
    notFound();
  }

  return (
    <ContentLayout currentSlug={slug}>
      <h1 className="text-3xl font-semibold text-byu-dark-gray">
        {page.title}
      </h1>

      <p className="mt-4 text-byu-medium-gray">
        {page.description}
      </p>

      <p className="mt-6">
        {page.overview}
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {page.cards.map((card) => (
          <ResourceCard
            key={card.title}
            {...card}
          />
        ))}
      </div>
    </ContentLayout>
  );
}
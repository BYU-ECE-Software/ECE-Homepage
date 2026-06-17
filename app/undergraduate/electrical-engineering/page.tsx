import ContentLayout from "./ContentLayout";
import ResourceCard from "./ResourceCard";
import { content } from "@/data/undergrad/electrical-engineering/content";

export default function ElectricalEngineeringPage() {
  const page = content.home;

  return (
    <ContentLayout>
      <h2 className="text-3xl font-semibold text-byu-dark-gray">
        {page.title}
      </h2>

      <p className="mt-4 text-byu-medium-gray">
        {page.description}
      </p>

      <p className="mt-6 text-byu-dark-gray">
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
// import ContentLayout from "@/components/layout/ContentLayout";
// import ResourceCard from "@/components/general/ResourceCard";
import ContentLayout from "./ContentLayout";
import ResourceCard from "./ResourceCard";
import { content } from "./content";

export default function ElectricalEngineeringPage() {
  const page = content.home;

  return (
    <>
      <section className="bg-byu-navy py-10 text-white">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h1 className="text-4xl font-semibold tracking-wide md:text-5xl">
            ELECTRICAL ENGINEERING
          </h1>

          <p className="mt-4 text-xl">
            Undergraduate Students
          </p>
        </div>
      </section>

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
    </>
  );
}
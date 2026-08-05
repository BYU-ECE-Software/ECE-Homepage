import type { Metadata } from "next";
import PageTitle from "@/components/layout/PageTitle";
import Description from "@/components/general/Description";
import CardGrid from "@/components/general/CardGrid";
import ResourceCard from "@/components/general/ResourceCard";
import { ResourceCardData } from "@/types/Content";

export const metadata: Metadata = {
  title: "Undergraduate Research | Electrical and Computer Engineering",
  description:
    "Research opportunities for ECE undergraduates, including the IMMERSE summer program.",
};

const resources: ResourceCardData[] = [
  {
    title: "IMMERSE",
    description:
      "A paid summer research program pairing undergraduates with faculty mentors. Applications are currently being accepted.",
    href: "https://immerse.byu.edu/",
    image: "/research/immerse_2026.jpeg",
    linkText: "Apply to IMMERSE →",
  },
  {
    title: "Faculty Research Areas",
    description:
      "Browse the department's research groups to find faculty working on problems you want to help solve, then reach out about openings in their group.",
    href: "/research",
    linkText: "Explore research →",
  },
];

export default function UndergraduateResearchPage() {
  return (
    <>
      <PageTitle title="Undergraduate Research" />

      <Description
        text="Get hands-on research experience before you graduate."
        subtext="ECEn students can participate in IMMERSE, an undergraduate summer research program. It's a great opportunity for students interested in graduate school to get hands-on experience and build relationships with professors. You can also approach faculty directly about joining their group."
      />

      <CardGrid columns={2} paddingClass="px-10 pt-4 pb-16">
        {resources.map((item) => (
          <ResourceCard key={item.title} {...item} />
        ))}
      </CardGrid>
    </>
  );
}

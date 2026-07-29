import { PageIntro, ResourceGrid, CallToAction, type ResourceItem } from "@/components/general/ContentPage";

const degrees: ResourceItem[] = [
  { title: "MS in Electrical & Computer Engineering", description: "Develop advanced technical depth while completing original research with a faculty advisor.", eyebrow: "Master of Science" },
  { title: "PhD in Electrical & Computer Engineering", description: "Prepare to lead independent research and contribute new knowledge in industry, government, or academia.", eyebrow: "Doctor of Philosophy" },
  { title: "MS in Cybersecurity", description: "Advance your knowledge of secure systems through flexible coursework and faculty-guided research.", eyebrow: "Master of Science" },
];

const paths: ResourceItem[] = [
  { title: "Prospective students", description: "Review degrees, admissions expectations, funding, and the application process.", href: "/graduate/prospective-graduate-students" },
  { title: "Current students", description: "Find handbooks, program policies, research registration, forms, and milestones.", href: "/graduate/current-graduate-students" },
  { title: "Graduate courses", description: "Search graduate offerings and see when recurring courses are normally taught.", href: "/graduate/graduate-courses" },
];

export default function GraduatePage() {
  return (
    <>
      <PageIntro eyebrow="Graduate Program" title="Graduate study in ECE" description="Join a community of scholars and innovators pursuing rigorous research, technical excellence, faith, and meaningful impact." />
      <ResourceGrid items={degrees} title="Degrees offered" columns={3} />
      <section className="bg-slate-50"><ResourceGrid items={paths} title="Graduate resources" columns={3} /></section>
      <CallToAction title="Ready to take the next step?" description="Review application expectations and connect with faculty whose work matches your interests." href="/graduate/prospective-graduate-students" label="Application information" />
    </>
  );
}

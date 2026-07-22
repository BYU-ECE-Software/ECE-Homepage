import RichText from "@/components/general/RichText";
import { PageIntro, ResourceGrid, CallToAction, type ResourceItem } from "@/components/general/ContentPage";

const resources: ResourceItem[] = [
  { title: "Application overview", description: "Prepare transcripts, recommendations, statements, and other required application materials.", linkLabel: "Review the process" },
  { title: "Financial support", description: "Learn about research assistantships, tuition awards, and travel support available to graduate students.", linkLabel: "Explore funding" },
  { title: "Faculty and research", description: "Find faculty working in computer engineering, electromagnetics, microelectronics, signals, systems, and cybersecurity.", href: "/research", linkLabel: "Find a research area" },
];

const overview = `## Admission and application

The annual application deadline is **January 15**. Competitive applicants have strong preparation in electrical engineering, computer engineering, cybersecurity, or a related technical discipline. Program-specific requirements should always be verified with BYU Graduate Studies and the current graduate catalog.

## Choosing a program

- The **MS in Electrical and Computer Engineering** combines advanced coursework with a faculty-guided research thesis.
- The **PhD in Electrical and Computer Engineering** emphasizes independent research and preparation for technical leadership.
- The **MS in Cybersecurity** provides advanced study for recent technical graduates and working professionals.

Before applying, review faculty research areas and identify several potential advisers whose work aligns with your interests. Admission and funding decisions depend in part on available faculty mentorship and research support.

## Funding

Support may include research or teaching assistantships, tuition awards, and funds for students presenting research. Availability varies by program, adviser, and academic year.`;

export default function ProspectiveGraduateStudents() {
  return (
    <>
      <PageIntro eyebrow="Graduate Program" title="Prospective graduate students" description="Explore advanced degrees, prepare a strong application, and connect your interests with faculty research." />
      <div className="px-6 py-12"><RichText content={overview} className="mx-auto" /></div>
      <section className="bg-slate-50"><ResourceGrid items={resources} title="Plan your application" columns={3} /></section>
      <CallToAction title="Explore the department's research" description="Graduate study begins with a strong match between your interests and a faculty research group." href="/research" label="View research areas" />
    </>
  );
}

import RichText from "@/components/general/RichText";
import { PageIntro, ResourceGrid, CallToAction, type ResourceItem } from "@/components/general/ContentPage";

const programs: ResourceItem[] = [
  { title: "Electrical Engineering", description: "Study circuits, communications, electromagnetics, robotics, controls, power, and signal processing.", href: "/undergraduate/electrical-engineering", eyebrow: "Bachelor's degree" },
  { title: "Computer Engineering", description: "Combine digital hardware, embedded systems, architecture, networking, and software.", href: "/undergraduate/computer-engineering", eyebrow: "Bachelor's degree" },
  { title: "Cybersecurity", description: "Develop the technical foundation needed to defend systems, networks, and information.", href: "/undergraduate/cybersecurity", eyebrow: "Bachelor's degree" },
];

const whyEce = `## Why ECE at BYU?

ECE students learn by building. Coursework is reinforced through laboratories, team projects, capstone, research groups, clubs, internships, and opportunities to serve. Students work closely with faculty while developing the technical judgment and communication skills needed for responsible engineering practice.

## Preparing for the major

- Build a strong foundation in mathematics, physics, and programming.
- Review the current degree flowchart and catalog requirements.
- Meet with an academic adviser before registration decisions become urgent.
- Visit the department, talk with students, and explore clubs and research areas.

You do not need to know your specialization before beginning. Introductory courses and department experiences are designed to help you discover which problems and technologies interest you most.`;

export default function ProspectiveStudentsPage() {
  return (
    <>
      <PageIntro eyebrow="Undergraduate" title="Find your place in ECE" description="Learn how electrical engineering, computer engineering, and cybersecurity turn curiosity into technologies that serve people." />
      <ResourceGrid items={programs} title="Explore our programs" columns={3} />
      <div className="bg-slate-50 px-6 py-12"><RichText content={whyEce} className="mx-auto" /></div>
      <CallToAction title="Experience the department in person" description="A department tour is a practical way to see teaching labs, projects, research, and the Engineering Building." href="/news-and-events/department-tours" label="Plan a department tour" />
    </>
  );
}

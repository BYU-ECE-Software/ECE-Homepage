import { PageIntro, ResourceGrid, CallToAction, type ResourceItem } from "@/components/general/ContentPage";

const services: ResourceItem[] = [
  { title: "Parts and materials", description: "Find electrical and mechanical parts for classwork, research, and personal projects.", href: "https://elcparts.byu.edu/", linkLabel: "Browse parts" },
  { title: "Project requests", description: "Submit designs for PCB milling, laser cutting, and 3D printing after reviewing shop capabilities.", href: "https://elcparts.byu.edu/", linkLabel: "Start a request" },
  { title: "ECE lab kits", description: "Purchase the parts and equipment kits required by participating ECE courses.", href: "https://eceshop.byu.edu/", linkLabel: "Lab kit information" },
  { title: "How-to videos", description: "Learn practical skills including soldering and working with common electronic components.", href: "https://eceshop.byu.edu/", linkLabel: "Watch tutorials" },
  { title: "Robotics competition", description: "Build a team and compete in the Automated Robotics Competition offered during fall and winter semesters.", href: "https://eceshop.byu.edu/", linkLabel: "Competition details" },
  { title: "Project resources", description: "Find specifications, example projects, and supporting material maintained by the shop.", href: "https://github.com/", linkLabel: "View resources" },
];

export default function Epicenter() {
  return (
    <>
      <PageIntro eyebrow="Student Resources" title="Electronic Prototype Implementation Center" description="Parts, machinery, prototyping tools, project services, and practical help for turning designs into working hardware." />
      <ResourceGrid items={services} title="Build your project" columns={3} />
      <CallToAction title="Visit the EPICenter" description="The shop is located in 416 Clyde Building and is normally open Monday through Friday, 8 a.m.–5 p.m." href="https://eceshop.byu.edu/" label="Contact and current hours" />
    </>
  );
}

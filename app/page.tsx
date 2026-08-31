import { FaChalkboardTeacher, FaMapMarkedAlt, FaFlask, FaHandsHelping } from "react-icons/fa";
import PromoHero from "@/components/general/PromoHero";
import QuickLinksGrid, { type QuickLinkItem } from "@/components/general/QuickLinksGrid";
import NewsGrid, { type NewsItem } from "@/components/general/NewsGrid";
import PromoCard, { type PromoItem } from "@/components/general/PromoCard";
import { ResourceGrid, CallToAction, type ResourceItem } from "@/components/general/ContentPage";
import { majors } from "@/data/undergraduate/majors";
import { minors } from "@/data/undergraduate/minors";

const quickLinks: QuickLinkItem[] = [
  { title: "Meet with an advisor", href: "/people/advisors", icon: FaChalkboardTeacher },
  { title: "Department tours", href: "/news-and-events/department-tours", icon: FaMapMarkedAlt },
  { title: "Research and labs", href: "/research", icon: FaFlask },
  { title: "Opportunities", href: "/opportunities", icon: FaHandsHelping },
];

// Generated from the major and minor configs so a program's description is
// written in exactly one place. Adding a major to data/undergraduate/majors
// automatically lists it here.
const degrees: ResourceItem[] = [
  ...majors.map((major) => ({
    title: major.displayName,
    description: major.summary,
    href: `/undergraduate/${major.slug}`,
    eyebrow: "BS",
  })),
  ...minors.map((minor) => ({
    title: minor.displayName,
    description: minor.description,
    href: `/undergraduate/minors/${minor.slug}`,
    eyebrow: "Minor",
  })),
  { title: "Graduate Programs", description: "Pursue advanced study through MS and PhD programs in ECE and cybersecurity.", href: "/graduate", eyebrow: "MS & PhD" },
];

const news: NewsItem[] = [
  { title: "BYU engineering students design wearable technology for search and rescue rats", description: "A capstone team improved a localization backpack for HeroRATs working in disaster response.", date: "May 21, 2026", author: "Sharman Gill", href: "https://news.byu.edu/" },
  { title: "BYU student named Honor Graduate as top U.S. Marine Corps officer candidate", description: "A BYU student received national recognition after completing the Marine Corps officer candidate program.", date: "May 19, 2026", author: "Ellie Larsen", href: "https://news.byu.edu/" },
  { title: "When GPS fails, HeroRATs and BYU engineers step in", description: "Electrical and computer engineering students helped make survivor localization easier after earthquakes.", date: "May 14, 2026", author: "Allyson Gibson", href: "/news-and-events/news" },
];

const promos: PromoItem[] = [
  { title: "Join a research community", description: "Work with faculty and students on consequential problems across hardware, computing, sensing, communications, robotics, and security.", href: "/research", linkLabel: "Explore research" },
  { title: "Find a student organization", description: "Build friendships and technical experience through clubs, competition teams, professional organizations, and service.", href: "/student-organizations", linkLabel: "Find opportunities" },
  { title: "Connect learning to your future", description: "Use internships, alumni connections, advising, capstone, and department resources to prepare for work and graduate study.", href: "/opportunities/networking-internships", linkLabel: "Career resources" },
];

export default function Home() {
  return (
    <>
      <PromoHero
        title="Imagine. Create. Contribute."
        description="Learn to solve consequential problems through engineering, computing, cybersecurity, and research at Brigham Young University."
        actions={[
          { label: "Explore undergraduate programs", href: "/undergraduate/prospective-students" },
          { label: "Explore graduate programs", href: "/graduate", variant: "secondary" },
        ]}
      />

      <QuickLinksGrid items={quickLinks} />

      <div className="bg-slate-50">
        <ResourceGrid items={degrees} title="Degrees offered" columns={3} />
      </div>

      <section className="px-6 py-14">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold tracking-widest text-byu-royal uppercase">Latest stories</p>
          <h2 className="mt-2 mb-8 text-3xl font-semibold text-byu-navy">Department news</h2>
          <NewsGrid items={news} featuredFirst />
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-14">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold tracking-widest text-byu-royal uppercase">Beyond the classroom</p>
          <h2 className="mt-2 text-3xl font-semibold text-byu-navy">Enrich your experience</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">{promos.map((item) => <PromoCard key={item.title} item={item} />)}</div>
        </div>
      </section>

      <CallToAction title="Come see ECE in action" description="Tour the department and learn about circuits, cybersecurity, coding, robotics, student projects, and research." href="/news-and-events/department-tours" label="Schedule a tour" />
    </>
  );
}

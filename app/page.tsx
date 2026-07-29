import AnnouncementCarousel, { type Announcement } from "@/components/general/AnnouncementCarousel";
import PromoHero from "@/components/general/PromoHero";
import QuickLinksGrid, { type QuickLinkItem } from "@/components/general/QuickLinksGrid";
import NewsGrid, { type NewsItem } from "@/components/general/NewsGrid";
import PromoCard, { type PromoItem } from "@/components/general/PromoCard";
import { ResourceGrid, CallToAction, type ResourceItem } from "@/components/general/ContentPage";

const announcements: Announcement[] = [
  { eyebrow: "Get involved", title: "Department tours are available for prospective students and visitors", description: "See teaching labs, student projects, and research spaces in the Engineering Building.", href: "/news-and-events/department-tours", linkLabel: "Plan a tour" },
  { eyebrow: "Graduate study", title: "Explore MS and PhD programs in ECE and cybersecurity", description: "Review degrees, research areas, application preparation, and student resources.", href: "/graduate", linkLabel: "Graduate programs" },
  { eyebrow: "Student resources", title: "Build, prototype, and get practical help at the EPICenter", description: "Find parts, project services, lab kits, tutorials, and robotics competition information.", href: "/epicenter", linkLabel: "Visit the EPICenter" },
];

const quickLinks: QuickLinkItem[] = [
  { title: "Meet with an advisor", description: "Plan courses and review requirements.", href: "/people/advisors" },
  { title: "Department tours", description: "Visit projects, labs, and teaching spaces.", href: "/news-and-events/department-tours" },
  { title: "Research and labs", description: "Explore faculty research areas.", href: "/research" },
  { title: "Graduate courses", description: "Browse recurring course offerings.", href: "/graduate/graduate-courses" },
];

const degrees: ResourceItem[] = [
  { title: "Electrical Engineering", description: "Build the systems behind communications, robotics, power, circuits, sensing, and modern electronics.", href: "/undergraduate/electrical-engineering", eyebrow: "BS" },
  { title: "Computer Engineering", description: "Design computing hardware and the software that connects digital systems to the physical world.", href: "/undergraduate/computer-engineering", eyebrow: "BS" },
  { title: "Cybersecurity", description: "Learn to protect connected systems, data, infrastructure, and the people who depend on them.", href: "/undergraduate/cybersecurity", eyebrow: "BS" },
  { title: "Cybersecurity Minor", description: "Add a practical foundation in secure computing and information systems to another major.", href: "/undergraduate/minors/cybersecurity", eyebrow: "Minor" },
  { title: "Graduate Programs", description: "Pursue advanced study through MS and PhD programs in ECE and cybersecurity.", href: "/graduate", eyebrow: "MS & PhD" },
];

const news: NewsItem[] = [
  { title: "BYU engineering students design wearable technology for search and rescue rats", description: "A capstone team improved a localization backpack for HeroRATs working in disaster response.", date: "May 21, 2026", category: "Intellect", author: "Sharman Gill", href: "https://news.byu.edu/" },
  { title: "BYU student named Honor Graduate as top U.S. Marine Corps officer candidate", description: "A BYU student received national recognition after completing the Marine Corps officer candidate program.", date: "May 19, 2026", category: "Character", author: "Ellie Larsen", href: "https://news.byu.edu/" },
  { title: "When GPS fails, HeroRATs and BYU engineers step in", description: "Electrical and computer engineering students helped make survivor localization easier after earthquakes.", date: "May 14, 2026", category: "Department News", author: "Allyson Gibson", href: "/news-and-events/news" },
];

const promos: PromoItem[] = [
  { eyebrow: "Research", title: "Join a research community", description: "Work with faculty and students on consequential problems across hardware, computing, sensing, communications, robotics, and security.", href: "/research", linkLabel: "Explore research" },
  { eyebrow: "Community", title: "Find a student organization", description: "Build friendships and technical experience through clubs, competition teams, professional organizations, and service.", href: "/undergraduate/electrical-engineering/student-organizations", linkLabel: "Find opportunities" },
  { eyebrow: "Career preparation", title: "Connect learning to your future", description: "Use internships, alumni connections, advising, capstone, and department resources to prepare for work and graduate study.", href: "/undergraduate/electrical-engineering/networking-internships", linkLabel: "Career resources" },
];

export default function Home() {
  return (
    <>
      <AnnouncementCarousel announcements={announcements} />
      <PromoHero
        eyebrow="Electrical & Computer Engineering"
        title="Imagine. Create. Contribute."
        description="Learn to solve consequential problems through engineering, computing, cybersecurity, and research at Brigham Young University."
        actions={[
          { label: "Explore undergraduate programs", href: "/undergraduate/prospective-students" },
          { label: "Explore graduate programs", href: "/graduate", variant: "secondary" },
        ]}
      />

      <QuickLinksGrid items={quickLinks} />

      <div className="bg-slate-50">
        <ResourceGrid items={degrees} title="Degrees offered" description="Choose a program that matches how you want to understand, build, and protect technology." columns={3} />
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

import { FaChalkboardTeacher, FaMapMarkedAlt, FaFlask, FaHandsHelping } from 'react-icons/fa';
import PromoHero from '@/components/general/PromoHero';
import QuickLinksGrid, { type QuickLinkItem } from '@/components/general/QuickLinksGrid';
import NewsGrid, { type NewsItem } from '@/components/general/NewsGrid';
import PromoCard, { type PromoItem } from '@/components/general/PromoCard';
import { CallToAction } from '@/components/general/ContentPage';
import TileCard, { type TileItem } from '@/components/general/TileCard';
import { majors } from '@/data/undergraduate/majors';
import { minors } from '@/data/undergraduate/minors';

// Placeholder photography until each program has its own dedicated image.
const placeholderImages = [
  '/hero/1908-02 0125.webp',
  '/hero/2201-53 0029.webp',
  '/hero/2302-11 0446.webp',
  '/hero/2304-13 0238.webp',
];

const quickLinks: QuickLinkItem[] = [
  { title: 'Meet with an advisor', href: '/people/advisors', icon: FaChalkboardTeacher },
  { title: 'Department tours', href: '/news-and-events/department-tours', icon: FaMapMarkedAlt },
  { title: 'Research and labs', href: '/research', icon: FaFlask },
  { title: 'Opportunities', href: '/opportunities', icon: FaHandsHelping },
];

// Generated from the major and minor configs so a program's description is
// written in exactly one place. Adding a major to data/undergraduate/majors
// automatically lists it here.
const degreeEntries: Omit<TileItem, 'image'>[] = [
  ...majors.map((major) => ({
    title: major.displayName,
    href: `/undergraduate/${major.slug}`,
    eyebrow: 'BS',
  })),
  ...minors.map((minor) => ({
    title: minor.displayName,
    href: `/undergraduate/minors/${minor.slug}`,
    eyebrow: 'Minor',
  })),
  {
    title: 'Graduate Programs',
    href: '/graduate',
    eyebrow: 'MS & PhD',
  },
];

const degrees: TileItem[] = degreeEntries.map((entry, i) => ({
  ...entry,
  image: placeholderImages[i % placeholderImages.length],
}));

const news: NewsItem[] = [
  {
    title: 'BYU engineering students design wearable technology for search and rescue rats',
    description:
      'A capstone team improved a localization backpack for HeroRATs working in disaster response.',
    date: 'May 21, 2026',
    author: 'Sharman Gill',
    href: 'https://news.byu.edu/',
  },
  {
    title: 'BYU student named Honor Graduate as top U.S. Marine Corps officer candidate',
    description:
      'A BYU student received national recognition after completing the Marine Corps officer candidate program.',
    date: 'May 19, 2026',
    author: 'Ellie Larsen',
    href: 'https://news.byu.edu/',
  },
  {
    title: 'When GPS fails, HeroRATs and BYU engineers step in',
    description:
      'Electrical and computer engineering students helped make survivor localization easier after earthquakes.',
    date: 'May 14, 2026',
    author: 'Allyson Gibson',
    href: '/news-and-events/news',
  },
];

const promos: PromoItem[] = [
  {
    title: 'Join a research community',
    description:
      'Work with faculty and students on consequential problems across hardware, computing, sensing, communications, robotics, and security.',
    href: '/research',
    linkLabel: 'Explore research',
  },
  {
    title: 'Find a student organization',
    description:
      'Build friendships and technical experience through clubs, competition teams, professional organizations, and service.',
    href: '/student-organizations',
    linkLabel: 'Find opportunities',
  },
  {
    title: 'Connect learning to your future',
    description:
      'Use internships, alumni connections, advising, capstone, and department resources to prepare for work and graduate study.',
    href: '/opportunities/networking-internships',
    linkLabel: 'Career resources',
  },
];

export default function Home() {
  return (
    <>
      <PromoHero
        title="Imagine. Create. Contribute."
        description="Learn to solve consequential problems through engineering, computing, cybersecurity, and research at Brigham Young University."
        actions={[
          { label: 'Explore undergraduate programs', href: '/undergraduate/prospective-students' },
          { label: 'Explore graduate programs', href: '/graduate', variant: 'secondary' },
        ]}
      />

      <QuickLinksGrid items={quickLinks} />

      <section className="bg-slate-50 px-6 py-14">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-byu-navy text-3xl font-semibold">Degrees offered</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {degrees.map((degree) => (
              <TileCard key={degree.title} {...degree} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-14">
        <div className="mx-auto max-w-6xl">
          <p className="text-byu-royal text-sm font-semibold tracking-widest uppercase">
            Latest stories
          </p>
          <h2 className="text-byu-navy mt-2 mb-8 text-3xl font-semibold">Department news</h2>
          <NewsGrid items={news} featuredFirst />
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-14">
        <div className="mx-auto max-w-6xl">
          <p className="text-byu-royal text-sm font-semibold tracking-widest uppercase">
            Beyond the classroom
          </p>
          <h2 className="text-byu-navy mt-2 text-3xl font-semibold">Enrich your experience</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {promos.map((item) => (
              <PromoCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      <CallToAction
        title="Come see ECE in action"
        description="Tour the department and learn about circuits, cybersecurity, coding, robotics, student projects, and research."
        href="/news-and-events/department-tours"
        label="Schedule a tour"
      />
    </>
  );
}

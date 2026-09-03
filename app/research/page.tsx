import PageBanner from '@/components/layout/PageBanner';

/**
 * app/research/page.tsx  (or  pages/research.tsx)
 *
 * Drop-in demo of the BYU ECE "Research & Labs" page
 * built from the five Tailwind + TypeScript components.
 *
 * Replace placeholder image paths with real assets.
 */

import Hero from '@/components/general/Hero';
import Description from '@/components/general/Description';
import Card, { type CardItem } from '@/components/general/Card';
import CardGrid from '@/components/general/CardGrid';

// ─── Types ─────────────────────────────────────────────────────────────────

interface ResearchArea {
  image: string;
  imageAlt: string;
  title: string;
  titleHref?: string;
  people: CardItem[];
}

// ─── Data ──────────────────────────────────────────────────────────────────

const heroImages: string[] = [
  '/hero/1908-02 0125.webp',
  '/hero/2201-53 0029.webp',
  '/hero/2302-11 0446.webp',
  '/hero/2304-13 0238.webp',
];

const researchAreas: ResearchArea[] = [
  {
    image: '/research/BlockY.png',
    imageAlt: 'Close-up of a circuit board with a magnifying glass',
    title: 'Analog Circuits',
    titleHref: 'https://microcl.groups.et.byu.net/',
    people: [
      { label: 'Wood Chiang', href: '/people/faculty/wood-chiang' },
      { label: 'Aaron Hawkins', href: '/people/faculty/aaron-hawkins' },
      { label: 'Stephen Schultz', href: '/people/faculty/stephen-schultz' },
    ],
  },
  {
    image: '/research/BlockY.png',
    imageAlt: 'Futuristic biomedical engineering lab',
    title: 'Biomedical Engineering',
    titleHref: 'https://ece.byu.edu/biomedical-engineering',
    people: [
      { label: 'Steven Allen', href: '/people/faculty/steven-allen' },
      { label: 'Aaron Hawkins', href: '/people/faculty/aaron-hawkins' },
      { label: 'Preston Manwaring', href: '/people/faculty/preston-manwaring' },
      { label: 'Brian Mazzeo', href: '/people/faculty/brian-mazzeo' },
      { label: 'Ben Schooley', href: '/people/faculty/ben-schooley' },
    ],
  },
  {
    image: '/research/BlockY.png',
    imageAlt: 'Glowing network of connected nodes',
    title: 'Computer Networks',
    titleHref: 'https://netlab.byu.edu/',
    people: [{ label: 'Phil Lundrigan', href: '/people/faculty/phil-lundrigan' }],
  },
  {
    image: '/research/BlockY.png',
    imageAlt: 'Digital chip on a glowing blue circuit',
    title: 'Digital Circuits & FPGAs',
    titleHref: 'https://ccl.byu.edu/',
    people: [
      { label: 'Mike Wirthlin', href: '/people/faculty/mike-wirthlin' },
      { label: 'Jeff Goeders', href: '/people/faculty/jeff-goeders' },
    ],
  },
  {
    image: '/research/BlockY.png',
    imageAlt: 'Sensors embedded in soil in a field',
    title: 'Embedded Systems',
    titleHref: 'https://ccl.byu.edu/',
    people: [
      { label: 'Brian Mazzeo', href: '/people/faculty/brian-mazzeo' },
      { label: 'Jeff Goeders', href: '/people/faculty/jeff-goeders' },
      { label: 'Mike Wirthlin', href: '/people/faculty/mike-wirthlin' },
      { label: 'Phil Lundrigan', href: '/people/faculty/phil-lundrigan' },
    ],
  },
  {
    image: '/research/BlockY.png',
    imageAlt: 'Soldier using augmented reality headset',
    title: 'Human Computer Interaction',
    titleHref: 'https://ece.byu.edu/human-computer-interaction',
    people: [
      { label: 'Derek Hansen', href: '/people/faculty/derek-hansen' },
      { label: 'Ben Schooley', href: '/people/faculty/ben-schooley' },
      { label: 'Daniel Smalley', href: '/people/faculty/daniel-smalley' },
    ],
  },
  {
    image: '/research/BlockY.png',
    imageAlt: 'Autonomous truck with LIDAR sensors on highway',
    title: 'Machine Learning / Artificial Intelligence',
    titleHref: 'https://ece.byu.edu/machine-learning-artificial-intelligence',
    people: [
      { label: 'Willie Harrison', href: '/people/faculty/willie-harrison' },
      { label: 'D.J. Lee', href: '/people/faculty/d-j-lee' },
      { label: 'Josh Mangelson', href: '/people/faculty/josh-mangelson' },
      { label: 'Cammy Peterson', href: '/people/faculty/cammy-peterson' },
      { label: 'Ben Schooley', href: '/people/faculty/ben-schooley' },
      { label: 'James Usevitch', href: '/people/faculty/james-usevitch' },
    ],
  },
  {
    image: '/research/BlockY.png',
    imageAlt: 'Microfluidics lab equipment',
    title: 'Microfluidics and MEMS',
    titleHref: 'https://ece.byu.edu/microfluidics-and-mems',
    people: [
      { label: 'Aaron Hawkins', href: '/people/faculty/aaron-hawkins' },
      { label: 'Preston Manwaring', href: '/people/faculty/preston-manwaring' },
      { label: 'Greg Nordin', href: '/people/faculty/greg-nordin' },
    ],
  },
  {
    image: '/research/BlockY.png',
    imageAlt: 'Optical engineering equipment with lenses',
    title: 'Optical Engineering',
    titleHref: 'https://ece.byu.edu/optical-engineering',
    people: [
      { label: 'Aaron Hawkins', href: '/people/faculty/aaron-hawkins' },
      { label: 'Stephen Schultz', href: '/people/faculty/stephen-schultz' },
      { label: 'Daniel Smalley', href: '/people/faculty/daniel-smalley' },
      { label: 'Greg Nordin', href: '/people/faculty/greg-nordin' },
      { label: 'Ryan Camacho', href: '/people/faculty/ryan-camacho' },
    ],
  },
  {
    image: '/research/BlockY.png',
    imageAlt: 'Quantum engineering laboratory',
    title: 'Quantum Engineering',
    titleHref: 'https://camacholab.byu.edu/',
    people: [{ label: 'Ryan Camacho', href: '/people/faculty/ryan-camacho' }],
  },
  {
    image: '/research/BlockY.png',
    imageAlt: 'Satellite in orbit above Earth',
    title: 'Remote Sensing',
    titleHref: 'https://ece.byu.edu/remote-sensing',
    people: [
      { label: 'David Long', href: '/people/faculty/david-long' },
      { label: 'Brian Jeffs' },
      { label: 'Karl Warnick', href: '/people/faculty/karl-warnick' },
    ],
  },
  {
    image: '/research/BlockY.png',
    imageAlt: 'Underwater robotics and remote vehicles',
    title: 'Robotics/Controls',
    titleHref: 'https://ece.byu.edu/robotics-controls',
    people: [
      { label: 'Randy Beard', href: '/people/faculty/randy-beard' },
      { label: 'D.J. Lee', href: '/people/faculty/d-j-lee' },
      { label: 'Josh Mangelson', href: '/people/faculty/josh-mangelson' },
      { label: 'Cammy Peterson', href: '/people/faculty/cammy-peterson' },
      { label: 'James Usevitch', href: '/people/faculty/james-usevitch' },
    ],
  },
  {
    image: '/research/BlockY.png',
    imageAlt: 'Digital signal processing visualization',
    title: 'Signal Processing and Telecommunications',
    titleHref: 'https://ece.byu.edu/signal-processing-and-telecommunications',
    people: [
      { label: 'Willie Harrison', href: '/people/faculty/willie-harrison' },
      { label: 'Brian Jeffs' },
      { label: 'Brian Mazzeo', href: '/people/faculty/brian-mazzeo' },
      { label: 'Michael Rice' },
      { label: 'Karl Warnick', href: '/people/faculty/karl-warnick' },
    ],
  },
];

// ─── Page ──────────────────────────────────────────────────────────────────

export default function Research() {
  return (
    <>
      <PageBanner title="Research" />
      {/* 1 — Hero with carousel */}
      <Hero
        images={heroImages}
        alt="BYU ECE Research and Labs"
        title="Research & Labs"
        heightClass="h-[400px]"
        autoPlay
        interval={6000}
        overlayClass="bg-black/15"
      />

      {/* 2 — Bold description + instructional subtext */}
      <Description
        text="Explore the many research labs within BYU's Electrical and Computer Engineering department, where pioneering faculty and students drive innovation across domains such as robotics and controls, biomedical engineering, photonics, quantum engineering, embedded systems, and more. From foundational device physics to cutting-edge applications in machine learning and human–computer interaction, these labs cultivate practical learning, technological breakthroughs, and real-world impact."
        subtext="Click on the images below to see the associated labs."
      />

      {/* 3 — 3-column card grid */}
      <CardGrid columns={3} paddingClass="px-10 pt-4 pb-12">
        {researchAreas.map((area) => (
          <Card
            key={area.title}
            image={area.image}
            imageAlt={area.imageAlt}
            title={area.title}
            titleHref={area.titleHref}
            items={area.people}
            textAlign="center"
            textStyle="list"
          />
        ))}
      </CardGrid>
    </>
  );
}

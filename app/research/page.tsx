import PageTitle from "@/components/layout/PageTitle";

/**
 * app/research/page.tsx  (or  pages/research.tsx)
 *
 * Drop-in demo of the BYU ECE "Research & Labs" page
 * built from the five Tailwind + TypeScript components.
 *
 * Replace placeholder image paths with real assets.
 */

import Hero from "@/components/general/Hero";
import Description from "@/components/general/Description";
import Card, { type CardItem } from "@/components/general/Card";
import CardGrid from "@/components/general/CardGrid";

// ─── Types ─────────────────────────────────────────────────────────────────

interface ResearchArea {
  image: string;
  imageAlt: string;
  title: string;
  people: CardItem[];
}

// ─── Data ──────────────────────────────────────────────────────────────────

const heroImages: string[] = [
  "/hero/LES.webp",
  "/hero/LES2.webp",
  "/hero/LES3.webp",
];

const researchAreas: ResearchArea[] = [
  {
    image: "/research/BlockY.png",
    imageAlt: "Close-up of a circuit board with a magnifying glass",
    title: "Analog Circuits",
    people: [
      { label: "Wood Chiang", href: "/faculty/wood-chiang" },
      { label: "Aaron Hawkins", href: "/faculty/aaron-hawkins" },
      { label: "Stephen Schultz", href: "/faculty/stephen-schultz" },
    ],
  },
  {
    image: "/research/BlockY.png",
    imageAlt: "Futuristic biomedical engineering lab",
    title: "Biomedical Engineering",
    people: [
      { label: "Steven Allen", href: "/faculty/steven-allen" },
      { label: "Aaron Hawkins", href: "/faculty/aaron-hawkins" },
      { label: "Preston Manwaring", href: "/faculty/preston-manwaring" },
      { label: "Brian Mazzeo", href: "/faculty/brian-mazzeo" },
      { label: "Ben Schooley", href: "/faculty/ben-schooley" },
    ],
  },
  {
    image: "/research/BlockY.png",
    imageAlt: "Glowing network of connected nodes",
    title: "Computer Networks",
    people: [{ label: "Phil Lundrigan", href: "/faculty/phil-lundrigan" }],
  },
  {
    image: "/research/BlockY.png",
    imageAlt: "Digital chip on a glowing blue circuit",
    title: "Digital Circuits & FPGAs",
    people: [
      { label: "Mike Wirthlin", href: "/faculty/mike-wirthlin" },
      { label: "Jeff Goeders", href: "/faculty/jeff-goeders" },
    ],
  },
  {
    image: "/research/BlockY.png",
    imageAlt: "Sensors embedded in soil in a field",
    title: "Embedded Systems",
    people: [
      { label: "Brian Mazzeo", href: "/faculty/brian-mazzeo" },
      { label: "Jeff Goeders", href: "/faculty/jeff-goeders" },
      { label: "Mike Wirthlin", href: "/faculty/mike-wirthlin" },
      { label: "Phil Lundrigan", href: "/faculty/phil-lundrigan" },
    ],
  },
  {
    image: "/research/BlockY.png",
    imageAlt: "Soldier using augmented reality headset",
    title: "Human Computer Interaction",
    people: [
      { label: "Derek Hansen", href: "/faculty/derek-hansen" },
      { label: "Ben Schooley", href: "/faculty/ben-schooley" },
      { label: "Daniel Smalley", href: "/faculty/daniel-smalley" },
    ],
  },
  {
    image: "/research/BlockY.png",
    imageAlt: "Autonomous truck with LIDAR sensors on highway",
    title: "Machine Learning / Artificial Intelligence",
    people: [
      { label: "Willie Harrison", href: "/faculty/willie-harrison" },
      { label: "D.J. Lee", href: "/faculty/dj-lee" },
      { label: "Josh Mangelson", href: "/faculty/josh-mangelson" },
      { label: "Cammy Peterson", href: "/faculty/cammy-peterson" },
      { label: "Ben Schooley", href: "/faculty/ben-schooley" },
      { label: "James Usevitch", href: "/faculty/james-usevitch" },
    ],
  },
  {
    image: "/research/BlockY.png",
    imageAlt: "Microfluidics lab equipment",
    title: "Microfluidics and MEMS",
    people: [
      { label: "Aaron Hawkins", href: "/faculty/aaron-hawkins" },
      { label: "Preston Manwaring", href: "/faculty/preston-manwaring" },
      { label: "Greg Nordin", href: "/faculty/greg-nordin" },
    ],
  },
  {
    image: "/research/BlockY.png",
    imageAlt: "Optical engineering equipment with lenses",
    title: "Optical Engineering",
    people: [
      { label: "Aaron Hawkins", href: "/faculty/aaron-hawkins" },
      { label: "Stephen Schultz", href: "/faculty/stephen-schultz" },
      { label: "Daniel Smalley", href: "/faculty/daniel-smalley" },
      { label: "Greg Nordin", href: "/faculty/greg-nordin" },
      { label: "Ryan Camacho", href: "/faculty/ryan-camacho" },
    ],
  },
  {
    image: "/research/BlockY.png",
    imageAlt: "Quantum engineering laboratory",
    title: "Quantum Engineering",
    people: [{ label: "Ryan Camacho", href: "/faculty/ryan-camacho" }],
  },
  {
    image: "/research/BlockY.png",
    imageAlt: "Satellite in orbit above Earth",
    title: "Remote Sensing",
    people: [
      { label: "David Long", href: "/faculty/david-long" },
      { label: "Brian Jeffs", href: "/faculty/brian-jeffs" },
      { label: "Karl Warnick", href: "/faculty/karl-warnick" },
    ],
  },
  {
    image: "/research/BlockY.png",
    imageAlt: "Underwater robotics and remote vehicles",
    title: "Robotics/Controls",
    people: [
      { label: "Randy Beard", href: "/faculty/randy-beard" },
      { label: "D.J. Lee", href: "/faculty/dj-lee" },
      { label: "Josh Mangelson", href: "/faculty/josh-mangelson" },
      { label: "Cammy Peterson", href: "/faculty/cammy-peterson" },
      { label: "James Usevitch", href: "/faculty/james-usevitch" },
    ],
  },
  {
    image: "/research/BlockY.png",
    imageAlt: "Digital signal processing visualization",
    title: "Signal Processing and Telecommunications",
    people: [
      { label: "Willie Harrison", href: "/faculty/willie-harrison" },
      { label: "Brian Jeffs", href: "/faculty/brian-jeffs" },
      { label: "Brian Mazzeo", href: "/faculty/brian-mazzeo" },
      { label: "Michael Rice", href: "/faculty/michael-rice" },
      { label: "Karl Warnick", href: "/faculty/karl-warnick" },
    ],
  },
];



// ─── Page ──────────────────────────────────────────────────────────────────

export default function Research() {
  return (
    <>
    <PageTitle title="Research"/>
      {/* 1 — Hero with carousel */}
      <Hero
        images={heroImages}
        alt="BYU ECE Research and Labs"
        title="Research & Labs"
        heightClass="h-[400px]"
        autoPlay
        interval={6000}
        overlayClass="bg-black/40"
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
            items={area.people}
            textAlign="center"
            textStyle="list"
          />
        ))}
      </CardGrid>
    </>
  );
}

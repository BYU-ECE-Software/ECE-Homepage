import { PageIntro, ResourceGrid, type ResourceItem } from '@/components/general/ContentPage';

const labs: ResourceItem[] = [
  {
    title: 'Mixed-Reality Lab',
    description:
      'Research on virtual and augmented reality technologies, led by Derek Hansen.',
    href: 'https://mrlab.byu.edu/',
    linkLabel: 'Visit lab site',
  },
  {
    title: 'Cyber Design Lab',
    description: 'Human-centered cybersecurity and design research led by Derek Hansen and Ben Schooley.',
    href: 'https://ece.byu.edu/cyber-design-lab',
    linkLabel: 'Visit lab site',
  },
];

export default function HumanComputerInteraction() {
  return (
    <>
      <PageIntro
        title="Human Computer Interaction"
        description="Research labs within BYU ECE studying how people interact with technology, from mixed reality to human-centered cybersecurity design."
      />
      <ResourceGrid items={labs} title="Labs" columns={2} />
    </>
  );
}

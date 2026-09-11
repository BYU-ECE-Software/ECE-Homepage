import { PageIntro, ResourceGrid, type ResourceItem } from '@/components/general/ContentPage';

const labs: ResourceItem[] = [
  {
    title: 'CamachoLab',
    description: 'Quantum and optical engineering research led by Ryan Camacho.',
    href: 'https://camacholab.byu.edu',
    linkLabel: 'Visit lab site',
  },
  {
    title: 'Cleanroom',
    description:
      'Shared cleanroom facility for micro- and nano-fabrication, led by Aaron Hawkins, Steve Schultz, and Greg Nordin.',
    href: 'https://cleanroom.byu.edu',
    linkLabel: 'Visit lab site',
  },
  {
    title: 'Electro-Holography',
    description: 'Holographic display research led by Daniel Smalley.',
    href: 'https://holography.byu.edu',
    linkLabel: 'Visit lab site',
  },
  {
    title: 'Photonics',
    description: 'Study of photonic systems, led by Steve Schultz.',
    href: 'http://www.photonics.byu.edu/',
    linkLabel: 'Visit lab site',
  },
];

export default function OpticalEngineering() {
  return (
    <>
      <PageIntro
        title="Optical Engineering"
        description="Research labs within BYU ECE spanning quantum optics, fabrication, holography, and photonics."
      />
      <ResourceGrid items={labs} title="Labs" columns={2} />
    </>
  );
}

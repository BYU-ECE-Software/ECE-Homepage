import { PageIntro, ResourceGrid, type ResourceItem } from '@/components/general/ContentPage';

const labs: ResourceItem[] = [
  {
    title: 'Radio Astronomy Systems',
    description: 'Radio astronomy instrumentation research led by Karl Warnick and Brian Jeffs.',
    href: 'https://ras.groups.et.byu.net/',
    linkLabel: 'Visit lab site',
  },
  {
    title: 'Smart Antenna Systems',
    description: 'Smart antenna array research led by Brian Jeffs and Karl Warnick.',
    href: 'http://csas.ee.byu.edu/',
    linkLabel: 'Visit lab site',
  },
  {
    title: 'Microwave Earth Remote Sensing (MERS)',
    description: 'Microwave remote sensing of the Earth, led by David Long.',
    href: 'https://mers.byu.edu/',
    linkLabel: 'Visit lab site',
  },
  {
    title: 'Scatterometer Climate Record Pathfinder',
    description: 'Long-term scatterometer climate data research led by David Long.',
    href: 'https://www.scp.byu.edu/',
    linkLabel: 'Visit lab site',
  },
];

export default function RemoteSensing() {
  return (
    <>
      <PageIntro
        title="Remote Sensing"
        description="Research labs within BYU ECE studying radio astronomy, antenna systems, and microwave remote sensing of the Earth."
      />
      <ResourceGrid items={labs} title="Labs" columns={2} />
    </>
  );
}

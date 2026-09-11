import { PageIntro, ResourceGrid, type ResourceItem } from '@/components/general/ContentPage';

const labs: ResourceItem[] = [
  {
    title: 'MAGICC Lab',
    description:
      'Multiple Agent Intelligent Coordination and Control Lab, led by Randy Beard, Cammy Peterson, and James Usevitch.',
    href: 'https://magicc.byu.edu',
    linkLabel: 'Visit lab site',
  },
  {
    title: 'Robotic Vision Lab',
    description: 'Computer vision and robotic perception research led by D.J. Lee.',
    href: 'https://rvl.byu.edu/',
    linkLabel: 'Visit lab site',
  },
  {
    title: 'Field Robotic Systems Lab (FRoSt Lab)',
    description: 'Field robotics research led by Josh Mangelson.',
    href: 'https://frostlab.byu.edu/',
    linkLabel: 'Visit lab site',
  },
];

export default function RoboticsControls() {
  return (
    <>
      <PageIntro
        title="Robotics/Controls"
        description="Research labs within BYU ECE developing autonomous robotics and control systems."
      />
      <ResourceGrid items={labs} title="Labs" columns={2} />
    </>
  );
}

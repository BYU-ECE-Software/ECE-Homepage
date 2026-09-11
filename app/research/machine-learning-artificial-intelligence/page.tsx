import { PageIntro, ResourceGrid, type ResourceItem } from '@/components/general/ContentPage';

const labs: ResourceItem[] = [
  {
    title: 'FRoST Lab',
    description: 'Field Robotic Systems and Technology Lab, focused on underwater and field robotics.',
    href: 'https://frostlab.byu.edu/',
    linkLabel: 'Visit lab site',
  },
  {
    title: 'MAGICC Lab',
    description:
      'Multiple Agent Intelligent Coordination and Control Lab, led by James Usevitch and Cammy Peterson.',
    href: 'https://magicc.byu.edu/',
    linkLabel: 'Visit lab site',
  },
  {
    title: 'Robotic Vision Lab',
    description: 'Computer vision and facial recognition research led by D.J. Lee.',
    href: 'https://rvl.byu.edu/',
    linkLabel: 'Visit lab site',
  },
  {
    title: 'ICE Lab',
    description:
      'Information Theory and Communications Engineering Lab, led by Willie Harrison.',
    href: 'https://icelab.byu.edu/',
    linkLabel: 'Visit lab site',
  },
];

export default function MachineLearningArtificialIntelligence() {
  return (
    <>
      <PageIntro
        title="Machine Learning / Artificial Intelligence"
        description="Research labs within BYU ECE applying machine learning and artificial intelligence to robotics, vision, and communications."
      />
      <ResourceGrid items={labs} title="Labs" columns={2} />
    </>
  );
}

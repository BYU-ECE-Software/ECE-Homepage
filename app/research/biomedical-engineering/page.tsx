import { PageIntro, ResourceGrid, type ResourceItem } from '@/components/general/ContentPage';

const labs: ResourceItem[] = [
  {
    title: 'MRI Research Facility',
    description: 'Magnetic resonance imaging research facility, led by Steven Allen.',
    href: 'https://mri.byu.edu',
    linkLabel: 'Visit lab site',
  },
];

export default function BiomedicalEngineering() {
  return (
    <>
      <PageIntro
        title="Biomedical Engineering"
        description="Research within BYU ECE applying electrical and computer engineering to medicine and human health, including magnetic resonance imaging."
      />
      <ResourceGrid items={labs} title="Labs" columns={2} />
    </>
  );
}

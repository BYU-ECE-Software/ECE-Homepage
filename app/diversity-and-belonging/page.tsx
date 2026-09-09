import type { Metadata } from 'next';
import PageBanner from '@/components/layout/PageBanner';
import { ResourceGrid, type ResourceItem } from '@/components/general/ContentPage';

export const metadata: Metadata = {
  title: 'Diversity and Belonging | Electrical and Computer Engineering',
  description: 'Diversity, belonging, and support resources for ECE students at BYU.',
};

const departmentContacts: ResourceItem[] = [
  {
    eyebrow: 'Department Advisor',
    title: 'Janalyn Mergist',
    description: '460R EB — (801) 422-4013',
  },
  {
    eyebrow: 'External Relations & Capstone Coordinator',
    title: 'Allyson Gibson',
    description: '450S EB — (801) 422-7962',
  },
];

const institutionalResources: ResourceItem[] = [
  {
    title: 'Race, Equity, and Belonging',
    description: 'Racial equity resources and the 2021 report.',
    href: 'https://race.byu.edu',
    linkLabel: 'View resources',
  },
  {
    title: 'BYU Office of Belonging',
    description: 'Campus-wide campaigns and events.',
    href: 'https://belonging.byu.edu/',
    linkLabel: 'Visit site',
  },
  {
    title: 'BYU Engineering Together',
    description: 'Resources for engineering students.',
    href: 'https://engineering.byu.edu/betogether',
    linkLabel: 'Visit site',
  },
  {
    title: 'BYU Counseling and Psychological Services',
    description: 'Clinical services, counseling, stress management, and self-help apps.',
    href: 'https://caps.byu.edu/',
    linkLabel: 'Visit site',
  },
  {
    title: "Women's Services and Resources",
    description: 'Issues, confidential reporting, and wellness. 3326 WSC — wsr@byu.edu',
    href: 'https://wsr.byu.edu',
    linkLabel: 'Visit site',
  },
  {
    title: 'Office of Student Success and Inclusion (OSSI)',
    description:
      'Programs giving students opportunities to be more proximate to diverse ideas and perspectives. 2010 WSC — ssi_assistant@byu.edu',
  },
];

export default function DiversityAndBelongingPage() {
  return (
    <>
      <PageBanner title="Diversity and Belonging" />

      <div className="mx-auto max-w-6xl px-6 pt-12">
        <div className="mb-10 rounded-2xl border border-gray-200 bg-slate-50 p-6 shadow-sm">
          <p className="text-lg leading-8 text-slate-600">
            We seek to ensure that all students in our program feel a true sense of belonging. We
            provide an inclusive environment that supports students with diverse backgrounds and
            prepares graduates to advance diversity in the workplace. Diversity and inclusion
            training is incorporated into the curriculum at key points in the program.
          </p>
        </div>
      </div>

      <ResourceGrid items={departmentContacts} title="Department Contacts" columns={2} />
      <ResourceGrid
        items={institutionalResources}
        title="Institutional Resources"
        columns={3}
      />
    </>
  );
}

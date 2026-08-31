import RichText from '@/components/general/RichText';
import { PageIntro, ResourceGrid, type ResourceItem } from '@/components/general/ContentPage';

const resources: ResourceItem[] = [
  {
    title: 'Graduate program overview',
    description:
      'Review program structure, milestones, committees, examinations, and graduation expectations.',
  },
  {
    title: 'Graduate handbook',
    description:
      'Consult department policies alongside the current BYU Graduate Studies requirements.',
  },
  {
    title: 'Graduate courses',
    description: 'Browse recurring course schedules and special-topic offerings.',
    href: '/graduate/graduate-courses',
  },
  {
    title: 'EC EN 697R research',
    description:
      'Receive additional credit for qualifying MS or PhD research beyond thesis and dissertation registrations.',
  },
  {
    title: 'Forms and petitions',
    description:
      'Keep committee, study-list, examination, and graduation records current throughout the program.',
  },
  {
    title: 'Research and faculty',
    description: 'Find department research areas, labs, and faculty contacts.',
    href: '/research',
  },
];

const guidance = `## Staying on track

Meet regularly with your faculty adviser and keep your graduate committee and program of study current. Department requirements complement—rather than replace—university graduate policies.

### Recommended checkpoints

1. Confirm your adviser and degree requirements early in the program.
2. File and maintain an approved study list.
3. Form your graduate committee by the required deadline.
4. Complete examinations, proposals, and annual evaluations on schedule.
5. Apply for graduation and schedule your defense with sufficient lead time.

Questions about registration, forms, or deadlines should be directed to the graduate program adviser.`;

export default function CurrentGraduateStudents() {
  return (
    <>
      <PageIntro
        title="Current graduate students"
        description="Program guidance, course planning, research registration, policies, and milestone resources."
      />
      <ResourceGrid items={resources} title="Program resources" columns={3} />
      <div className="bg-slate-50 px-6 py-12">
        <RichText content={guidance} className="mx-auto" />
      </div>
    </>
  );
}

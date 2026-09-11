import RichText from '@/components/general/RichText';
import { PageIntro, ResourceGrid, type ResourceItem } from '@/components/general/ContentPage';

const resources: ResourceItem[] = [
  {
    title: 'Graduate courses',
    description: 'Browse recurring course schedules and special-topic offerings.',
    href: '/graduate/graduate-courses',
  },
  {
    title: 'Graduate Studies (BYU)',
    description: 'University-wide graduate policies, the graduate catalog, and academic calendar.',
    href: 'https://gradstudies.byu.edu/',
    linkLabel: 'Visit gradstudies.byu.edu',
  },
  {
    title: 'Track your progress',
    description: 'Check committee, study-list, examination, and graduation status.',
    href: 'https://gradprogress.sim.byu.edu/',
    linkLabel: 'Open GradProgress',
  },
  {
    title: 'Graduate Writing Help',
    description: "BYU's Research and Writing Center offers dedicated support for graduate students.",
    href: 'https://rwc.byu.edu/graduate-students',
    linkLabel: 'Get writing help',
  },
  {
    title: 'Financial support',
    description: 'Assistantships, tuition awards, and travel funds for graduate students.',
    href: '/graduate/prospective-graduate-students',
    linkLabel: 'See funding options',
  },
  {
    title: 'Research and faculty',
    description: 'Find department research areas, labs, and faculty contacts.',
    href: '/research',
  },
];

const guidance = `## Staying on track

Meet regularly with your faculty advisor and keep your graduate committee and program of study current. Department requirements complement—rather than replace—university graduate policies.

### Enrollment requirements

- Enroll in a minimum of **6 credits per year** to remain an active graduate student.
- Enroll in at least **2 credits** during the semester you graduate.
- International students must enroll in **9 credits per semester**.

### EC EN 697R research credit

The EC EN 697R Research course lets you receive additional credit for qualifying MS or PhD research beyond what's covered by CYBER 699R, EC EN 699R (Thesis), and EC EN 799R (Dissertation).

### New Student Orientation

Orientation for new graduate students is held each **September and January**, ahead of fall and winter semester.

### Recommended checkpoints

1. Confirm your advisor and degree requirements early in the program.
2. File and maintain an approved study list.
3. Form your graduate committee by the required deadline.
4. Complete examinations, proposals, and annual evaluations on schedule.
5. Apply for graduation and schedule your thesis or dissertation defense with sufficient lead time.

Questions about scheduling a defense, registration, forms, or deadlines should be directed to the [department's graduate program advisor](/people/advisors).`;

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

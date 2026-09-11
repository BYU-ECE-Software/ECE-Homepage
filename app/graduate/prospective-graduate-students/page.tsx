import RichText from '@/components/general/RichText';
import {
  PageIntro,
  ResourceGrid,
  CallToAction,
  type ResourceItem,
} from '@/components/general/ContentPage';

const resources: ResourceItem[] = [
  {
    title: 'Application overview',
    description:
      'Prepare transcripts, recommendations, statements, and other required application materials.',
    href: 'https://gradstudies.byu.edu/admissions/applying',
    linkLabel: 'Review the process',
  },
  {
    title: 'Graduate advisor',
    description: 'Contact Jana Featherstone, the ECEn Graduate Program Advisor, with admissions questions.',
    href: '/people/advisors',
    linkLabel: 'Meet the advisor',
  },
  {
    title: 'Faculty and research',
    description:
      'Find faculty working in computer engineering, electromagnetics, microelectronics, signals, systems, and cybersecurity.',
    href: '/research',
    linkLabel: 'Find a research area',
  },
];

const overview = `## Admission and application

The graduate application deadline is **January 15**. Competitive applicants have strong preparation in electrical engineering, computer engineering, cybersecurity, or a related technical discipline. Program-specific requirements should always be verified with BYU Graduate Studies and the current graduate catalog.

## Choosing a program

- The **MS in Electrical and Computer Engineering** emphasizes theoretical foundations and advanced developments. Students work with a faculty advisor on research and design; applications should indicate research interests and preferred faculty advisors.
- The **PhD in Electrical and Computer Engineering** centers on independent research, with candidates collaborating with a faculty advisor to identify and investigate a research topic beyond the required advanced coursework.
- The **MS in Cybersecurity** is ideal for cybersecurity professionals and recent technical graduates. A GPA above 3.0, above-average GRE scores, and an appropriate technical background are required for admission. Many graduates go on to positions with significantly higher salaries or pursue PhD studies at top universities.

Before applying, review faculty research areas and identify several potential advisors whose work aligns with your interests. Admission and funding decisions depend in part on available faculty mentorship and research support.

## Funding

Significant scholarship funds are available for graduate student tuition, along with travel funds for students presenting research. Support may include research or teaching assistantships and tuition awards; availability varies by program, advisor, and academic year.

## Questions

Contact the [ECEn Graduate Program Advisor](/people/advisors) with questions about admissions, funding, or choosing a program.`;

export default function ProspectiveGraduateStudents() {
  return (
    <>
      <PageIntro
        title="Prospective graduate students"
        description="Explore advanced degrees, prepare a strong application, and connect your interests with faculty research."
      />
      <div className="px-6 py-12">
        <RichText content={overview} className="mx-auto" />
      </div>
      <section className="bg-slate-50">
        <ResourceGrid items={resources} title="Plan your application" columns={3} />
      </section>
      <CallToAction
        title="Explore the department's research"
        description="Graduate study begins with a strong match between your interests and a faculty research group."
        href="/research"
        label="View research areas"
      />
    </>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import RichText from '@/components/general/RichText';
import {
  PageIntro,
  ResourceGrid,
  CallToAction,
  type ResourceItem,
} from '@/components/general/ContentPage';
import { majors } from '@/data/undergraduate/majors';
import { minors } from '@/data/undergraduate/minors';
import { DEPARTMENT_COURSE_CATALOG_URL } from '@/data/undergraduate/majors/derive';

export const metadata: Metadata = {
  title: 'Prospective Students | Electrical and Computer Engineering',
  description:
    'Compare the Electrical Engineering, Computer Engineering, and Cybersecurity programs and learn how to prepare for the major.',
};

// Built from the major and minor configs, so each program is described in
// exactly one place.
const programs: ResourceItem[] = [
  ...majors.map((major) => ({
    title: major.displayName,
    description: major.summary,
    href: `/undergraduate/${major.slug}`,
    eyebrow: "Bachelor's degree",
  })),
  ...minors.map((minor) => ({
    title: minor.displayName,
    description: minor.description,
    href: `/undergraduate/minors/${minor.slug}`,
    eyebrow: 'Minor',
  })),
];

const nextSteps: ResourceItem[] = [
  {
    title: 'Opportunities',
    description:
      'Scholarships, student organizations, internships, and undergraduate research are open to students in all three majors.',
    href: '/opportunities',
    linkLabel: "See what's available",
  },
  {
    title: 'Academic Advising',
    description: 'Advisors help you plan semesters, choose a major, and stay on track to graduate.',
    href: '/people/advisors',
    linkLabel: 'Meet the advisors',
  },
  {
    title: 'Research and Labs',
    description: 'Browse faculty research areas to see the kind of work students get involved in.',
    href: '/research',
    linkLabel: 'Explore research',
  },
];

const whyEce = `## Why ECE at BYU?

ECE students learn by building. Coursework is reinforced through laboratories, team projects, capstone, research groups, clubs, internships, and opportunities to serve. Students work closely with faculty while developing the technical judgment and communication skills needed for responsible engineering practice.

## Preparing for the major

- Build a strong foundation in mathematics, physics, and programming.
- Review the current degree flowchart and catalog requirements.
- Meet with an academic advisor before registration decisions become urgent.
- Visit the department, talk with students, and explore clubs and research areas.

You do not need to know your specialization before beginning. Introductory courses and department experiences are designed to help you discover which problems and technologies interest you most.`;

/**
 * Side-by-side view of the three majors. Prospective students are usually
 * trying to answer "which of these should I pick?", which is hard to do when
 * each program lives on its own separate page. Every value here is read from
 * the major configs, so the table can't drift out of date.
 */
function ProgramComparison() {
  return (
    <section className="px-6 py-14">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-byu-navy text-3xl font-semibold">Compare the three majors</h2>
        <p className="mt-3 max-w-3xl leading-7 text-slate-600">
          All three degrees share a common core and the same department resources. Use the catalog
          requirements and the graduation flowcharts to see how the upper-division coursework
          differs.
        </p>

        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[40rem] border-collapse text-left">
            <caption className="sr-only">
              Comparison of the three undergraduate majors offered by the Department of Electrical
              and Computer Engineering
            </caption>
            <thead>
              <tr className="border-byu-navy border-b-2">
                <th scope="col" className="text-byu-navy py-3 pr-4 text-sm font-semibold">
                  Program
                </th>
                <th scope="col" className="text-byu-navy py-3 pr-4 text-sm font-semibold">
                  What you&apos;ll work on
                </th>
                <th scope="col" className="text-byu-navy py-3 pr-4 text-sm font-semibold">
                  Requirements
                </th>
                <th scope="col" className="text-byu-navy py-3 text-sm font-semibold">
                  Course maps
                </th>
              </tr>
            </thead>
            <tbody>
              {majors.map((major) => (
                <tr key={major.slug} className="border-b border-slate-200 align-top">
                  <th scope="row" className="text-byu-navy py-5 pr-4 font-semibold">
                    <Link
                      href={`/undergraduate/${major.slug}`}
                      className="underline hover:no-underline"
                    >
                      {major.displayName}
                    </Link>
                  </th>
                  <td className="py-5 pr-4 text-sm leading-6 text-slate-600">{major.summary}</td>
                  <td className="py-5 pr-4 text-sm">
                    <a
                      href={major.degreeRequirementsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-byu-royal font-medium underline hover:no-underline"
                    >
                      Catalog listing
                    </a>
                  </td>
                  <td className="py-5 text-sm">
                    <Link
                      href={`/undergraduate/${major.slug}/graduation-flowcharts`}
                      className="text-byu-royal font-medium underline hover:no-underline"
                    >
                      {major.flowcharts.years.length} flowcharts
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-6 max-w-3xl text-sm leading-6 text-slate-600">
          Still deciding?{' '}
          <a
            href={DEPARTMENT_COURSE_CATALOG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-byu-royal font-medium underline hover:no-underline"
          >
            Browse the full course catalog
          </a>{' '}
          or{' '}
          <Link
            href="/people/advisors"
            className="text-byu-royal font-medium underline hover:no-underline"
          >
            talk with an academic advisor
          </Link>
          . Advisors help students move between these majors regularly, so picking one now is not a
          permanent decision.
        </p>
      </div>
    </section>
  );
}

export default function ProspectiveStudentsPage() {
  return (
    <>
      <PageIntro
        title="Find your place in ECE"
        description="Learn how electrical engineering, computer engineering, and cybersecurity turn curiosity into technologies that serve people."
      />

      <ResourceGrid items={programs} title="Programs We Offer" columns={3} />

      <div className="bg-slate-50">
        <ProgramComparison />
      </div>

      <div className="px-6 py-12">
        <RichText content={whyEce} className="mx-auto" />
      </div>

      <div className="bg-slate-50">
        <ResourceGrid items={nextSteps} title="Once you're here" columns={3} />
      </div>

      <CallToAction
        title="Experience the department in person"
        description="A department tour is a practical way to see teaching labs, projects, research, and the Engineering Building."
        href="/news-and-events/department-tours"
        label="Plan a department tour"
      />
    </>
  );
}

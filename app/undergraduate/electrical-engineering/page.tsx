import Link from "next/link";

const sections = [
  {
    title: "Graduation Planning",
    items: [
      {
        title: "Degree Requirements",
        description:
          "Review required courses and milestones needed for graduation.",
        href: "#",
      },
      {
        title: "Academic Advising",
        description:
          "Schedule appointments and access planning resources with advisors.",
        href: "#",
      },
      {
        title: "Course Catalog",
        description:
          "Browse available courses and prerequisites for upcoming semesters.",
        href: "#",
      },
    ],
  },
  {
    title: "Opportunities",
    items: [
      {
        title: "Internships",
        description:
          "Explore internship opportunities to gain professional experience.",
        href: "#",
      },
      {
        title: "Scholarships",
        description:
          "Find financial aid and scholarship opportunities available to students.",
        href: "#",
      },
      {
        title: "Student Organizations",
        description:
          "Get involved through clubs, competitions, and campus leadership.",
        href: "#",
      },
    ],
  },
  {
    title: "Research",
    items: [
      {
        title: "Faculty Research",
        description:
          "Learn about current projects and connect with faculty mentors.",
        href: "#",
      },
      {
        title: "Undergraduate Research",
        description:
          "Discover opportunities to participate in hands-on research.",
        href: "#",
      },
      {
        title: "Research Labs",
        description:
          "Explore labs, facilities, and ongoing innovation initiatives.",
        href: "#",
      },
    ],
  },
];

export default function ElectricalEngineeringPage() {
  return (
    <>
      <section className="bg-byu-navy py-20 text-white">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h1 className="text-4xl font-semibold tracking-wide md:text-5xl">
            ELECTRICAL ENGINEERING
          </h1>

          <p className="mt-4 text-xl">
            Undergraduate Students
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="mx-auto mb-12 max-w-3xl text-center text-byu-medium-gray">
            Explore academic planning resources, professional opportunities,
            and research initiatives available to Electrical Engineering students.
          </p>

          <div className="grid gap-8 lg:grid-cols-3">
            {sections.map((section) => (
              <div
                key={section.title}
                className="rounded-lg border border-gray-200 bg-gray-50 p-6"
              >
                <h2 className="text-center text-2xl font-semibold text-byu-dark-gray">
                  {section.title}
                </h2>

                <div className="mt-4 mb-6 h-1 bg-byu-royal" />

                <div className="space-y-4">
                  {section.items.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="block rounded-lg border border-gray-100 bg-white p-5 transition-colors hover:border-byu-royal"
                    >
                      <h3 className="text-center font-semibold text-byu-royal">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-center text-sm text-byu-medium-gray">
                        {item.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
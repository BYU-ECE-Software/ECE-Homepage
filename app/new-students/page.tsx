'use client';

import { useState } from 'react';
import type { ReactNode } from 'react';
import PageBanner from '@/components/layout/PageBanner';

const qAndA: { question: string; answer: string }[] = [
  {
    question: 'What is the difference between electrical engineering and mechanical engineering?',
    answer:
      'Electrical engineering focuses on electricity, electronics, and systems such as circuits, signals, computers, and communication technologies, while mechanical engineering focuses on physical systems like machines, structures, energy, and motion. In simple terms, mechanical engineers design and build the physical components of a system, whereas electrical engineers give devices their "brain" by designing the electrical systems and using sensors, data, and programming to control, automate, and add intelligence to how those systems operate.',
  },
  {
    question: 'What is the difference between computer engineering and computer science?',
    answer:
      'Computer engineering focuses on the design and integration of computer hardware—along with networking and system-level connections—and the software that runs closely with it, including processors, embedded systems, and low-level/system software. Computer science, on the other hand, focuses more on software, algorithms, programming languages, and data processing at a higher level of abstraction. In simple terms, computer engineers work on both hardware and the software that directly controls and connects systems, while computer scientists primarily focus on creating software systems and computational methods.',
  },
  {
    question: 'What kind of jobs can I get with a degree in electrical or computer engineering?',
    answer:
      'Because electrical and computer engineers help design both the "brains" and the systems behind modern technology, their skills are in high demand. They can lead to diverse and well-paying career paths. With a degree in electrical engineering you can perform core engineering roles (control systems, power systems, radio frequency, electrical and electronics-focused), specialized tech & computing roles (hardware, embedded systems, robotics and networks), multi-disciplinary roles (aerospace, automotive, biomedical and renewable energy) as well as management and business roles (like project management, sales, tech or patent law) and more! A degree in computer engineering prepares you for roles in hardware and semi-conductor (silicon/ASIC, firmware, verification and testing), software and systems (embedded systems, cloud infrastructure and programming) and advanced tech and interdisciplinary engineering (robotics and AI).',
  },
  {
    question: 'Why should women choose engineering as a profession?',
    answer:
      "Engineering skills are transferable and are in high demand. Engineering professionals enjoy a wide range of career paths which makes it easier to transition across industries or move into leadership roles. As an engineer, you'll solve real-world problems in creative ways and enjoy unparalleled job stability and high earning potential as engineering is one of the highest-paying undergraduate fields. Women in engineering gain the opportunity to drive inclusive innovation—ensuring that technology, healthcare devices, and infrastructure are designed safely and effectively for everyone and you'll leave a tangible, positive impact on society.",
  },
];

const laptopSpecs = [
  {
    component: 'Processor (CPU)',
    minimum: 'Intel Core i5, AMD Ryzen 5, or Apple Silicon (M1 or newer)',
    recommended: 'Intel Core i5/AMD Ryzen 5 or better, or Apple Silicon (M-series)',
  },
  { component: 'Memory (RAM)', minimum: '8 GB', recommended: '16 GB' },
  { component: 'Storage', minimum: '512 GB', recommended: '1 TB' },
  { component: 'Operating System', minimum: 'Windows 11 or macOS', recommended: 'Windows 11 or macOS' },
];

function Toggle({ heading, children }: { heading: string; children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-t border-slate-200 py-5">
      <button onClick={() => setOpen(!open)} className="flex w-full items-center gap-3 text-left">
        <span
          className={`text-byu-navy inline-block min-w-[18px] text-xl leading-none font-normal transition-transform duration-200 ${open ? 'rotate-45' : ''}`}
        >
          +
        </span>
        <span className="text-byu-navy text-[15px] font-bold">{heading}</span>
      </button>
      {open && <div className="mt-3 ml-[30px] space-y-3 text-sm leading-relaxed text-slate-600">{children}</div>}
    </div>
  );
}

export default function NewStudentsPage() {
  return (
    <div className="min-h-screen w-full bg-white">
      <PageBanner title="Welcome to Electrical and Computer Engineering" />

      <div className="mx-auto max-w-3xl px-6 py-10 text-center">
        <p className="text-lg font-semibold text-gray-900">
          We are happy to have you in our department!
        </p>
      </div>

      <div className="mx-auto max-w-5xl px-6 pb-4">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {qAndA.map((item) => (
            <section
              key={item.question}
              className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
            >
              <h2 className="text-byu-navy text-lg font-bold">{item.question}</h2>
              <p className="mt-2 leading-relaxed text-gray-900">{item.answer}</p>
            </section>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-6 pb-10">
        <h2 className="text-byu-navy mt-14 mb-1 text-lg font-bold tracking-wide uppercase">
          Getting Started in ECE
        </h2>
        <div>
          <Toggle heading="How do I submit my transcripts to BYU?">
            <p>
              Official transcripts must be sent directly from your school to BYU Admissions. Make
              sure your high school transcripts show your degree before you send them over. This
              can often take 2-3 weeks after you graduate from high school.
            </p>
            <p>
              <a
                href="https://enrollment.byu.edu/admissions/submitting-transcripts-to-byu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-byu-royal underline"
              >
                Submitting Transcripts to BYU
              </a>
            </p>
            <p className="font-semibold text-gray-900">When should I register for classes?</p>
            <p>
              Your registration date is assigned based on credit hours—check your MyMAP under the
              registration tab.{' '}
              <a
                href="https://enrollment.byu.edu/registrar/register-for-classes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-byu-royal underline"
              >
                Register for Classes
              </a>
            </p>
            <p className="font-semibold text-gray-900">How do I register for classes at BYU?</p>
            <p>
              Use the registration cart before class registration opens to plan and add classes.
              The cart will lock at 6 pm MST the night before your registration date. Log in right
              at midnight on the day of your registration, see which classes you got into, and
              enroll in additional courses.{' '}
              <a
                href="https://enrollment.byu.edu/registrar/registration-cart"
                target="_blank"
                rel="noopener noreferrer"
                className="text-byu-royal underline"
              >
                Registration Cart
              </a>
            </p>
            <p className="font-semibold text-gray-900">
              Can I defer my enrollment to serve a mission?
            </p>
            <p>
              Yes, BYU allows students to defer their enrollment for missionary service. Visit this
              page for instructions and deadlines:{' '}
              <a
                href="https://enrollment.byu.edu/missionaries"
                target="_blank"
                rel="noopener noreferrer"
                className="text-byu-royal underline"
              >
                Missionary Deferment
              </a>
            </p>
          </Toggle>

          <Toggle heading="Transfer Credit, AP, and General Education Requirements">
            <p className="font-semibold text-gray-900">
              What are the general education (GE) requirements at BYU?
            </p>
            <p>
              GE requirements ensure a well-rounded education and are required for all
              undergraduate students. See the{' '}
              <a
                href="https://ge.byu.edu/faq"
                target="_blank"
                rel="noopener noreferrer"
                className="text-byu-royal underline"
              >
                GE FAQ
              </a>{' '}
              and{' '}
              <a
                href="https://catalog.byu.edu/generaleducation"
                target="_blank"
                rel="noopener noreferrer"
                className="text-byu-royal underline"
              >
                General Education catalog
              </a>
              .
            </p>
            <p className="font-semibold text-gray-900">
              Can I finish my GE and religion classes first and then focus on my major?
            </p>
            <p>
              No. The Electrical and Computer Engineering programs are designed as eight-semester
              (four-year) programs beginning with your major coursework. To stay on track, you
              should start your major classes early and spread your GE and religion courses
              throughout your time at BYU. Delaying major classes or front-loading GE courses can
              make it difficult to meet prerequisites and graduate on time.
            </p>
            <p className="font-semibold text-gray-900">
              I took dual-enrollment classes in high school—how can I find out what credits they
              transfer to at BYU?
            </p>
            <p>
              You can use the{' '}
              <a
                href="https://commtech.byu.edu/noauth/transferEquivalency/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-byu-royal underline"
              >
                Transfer Equivalency tool
              </a>{' '}
              to see how your courses may apply. The university determines how courses apply to
              general education requirements, while individual departments determine how they
              count toward your major. The university may tag some major classes as electives
              because they need to be evaluated by the department. If you have questions, contact
              your academic advisor.
            </p>
            <p>
              Instructions for sending AP scores to BYU and what classes will be awarded can be
              found in the{' '}
              <a
                href="https://enrollment.byu.edu/registrar/ap-and-ib-exam-guides"
                target="_blank"
                rel="noopener noreferrer"
                className="text-byu-royal underline"
              >
                AP and IB Exam Guides
              </a>
              . You can view the BYU classes awarded based on the year you took the test and your
              scores.
            </p>
            <p className="font-semibold text-gray-900">
              I took the AP tests, but I don&apos;t have my scores yet. What should I do?
            </p>
            <p>
              Make your best guess at what score you got on the exam and register accordingly. If
              the score comes back different from what you thought, you can always make the
              needed change.
            </p>
          </Toggle>

          <Toggle heading="Planning Your Classes and Degree Progress">
            <p className="font-semibold text-gray-900">
              What classes should I take in my first semester?
            </p>
            <p>
              To stay on track for the junior core in the fall of your junior year, every
              semester, you should be taking one of each of the following class types, and plan
              to take three major courses each semester.
            </p>
            <ul className="list-disc space-y-1 pl-6">
              <li>ECEn 191 + 192</li>
              <li>A math class (wherever you left off in high school)</li>
              <li>A science class (Physics 121, Physics 220, or Chem 105)</li>
              <li>
                A computer class (CS 110 or CS 111) — make sure to register for both the lecture
                section (3.0 credits) and the lab section (0.0 credits)
              </li>
              <li>A general education (GE) course (Univ 101)</li>
              <li>A religion class</li>
            </ul>
            <p>
              This structure helps ensure steady progress in the major while completing university
              requirements on time.
            </p>
          </Toggle>

          <Toggle heading="Should I take Physical Science as my science class?">
            <p>
              No. You should not take Physical Science if you are pursuing this major. The
              required courses CHEM 105 and PHYS 121 will already fulfill your physical science
              requirements and provide the appropriate foundation for your program. Taking
              Physical Science would be unnecessary and could delay progress in your degree.
            </p>
          </Toggle>

          <Toggle heading="When should I take my Advanced Writing course (WRTG 312 or 316)?">
            <p>
              We recommend that you wait until your junior or senior year to complete your
              Advanced Writing requirement. By that point, you will have more experience in your
              major, allowing you to apply your writing skills more effectively in your junior
              core and capstone projects.
            </p>
          </Toggle>

          <Toggle heading="Should I take WRTG 312 or WRTG 316?">
            <p>
              Both courses fulfill the Advanced Writing requirement for the major. However, we
              recommend WRTG 312 because it emphasizes persuasive and professional writing, which
              is especially valuable for electrical engineers when proposing projects, securing
              funding, and communicating technical ideas to a broader audience.
            </p>
            <p className="text-slate-500 italic">
              Note: students must complete the First-Year Writing requirement before enrolling in
              either course.
            </p>
          </Toggle>

          <Toggle heading="How many credit hours should I take each semester?">
            <p>
              A typical full-time load is about 15 credits, but it&apos;s important to plan based
              on your time and commitments.
            </p>
          </Toggle>

          <Toggle heading="Math Class Questions">
            <p className="font-semibold text-gray-900">
              How do I know which math class to start with?
            </p>
            <p>
              This would depend on the highest-level math class you took last, and how long it has
              been since you took it. Our general suggestion would be to reference the department
              major flow chart, then look at your progress report and determine if any of them
              have been fulfilled by classes or AP credit that you took in High School. Then,
              investigate which math class would be next in your math sequence.
            </p>
            <p className="font-semibold text-gray-900">
              I recently returned from a mission (or have not recently taken a math course), and I
              am afraid that I&apos;ve forgotten all I&apos;ve learned. Should I retake a course to
              relearn the material?
            </p>
            <p>
              Probably not. Know that you are not alone! Many students at BYU are recently
              returned missionaries, feeling exactly how you feel and many professors briefly
              review material as needed. Each professor will have three office hours a week where
              they can help you review material you might need help with. Experience has shown
              that, for many students, a little review goes a long way toward remembering skills.
            </p>
            <p>
              <a
                href="https://engineering.byu.edu/math"
                target="_blank"
                rel="noopener noreferrer"
                className="text-byu-royal underline"
              >
                Engineering Math Refresher
              </a>{' '}
              — email the College of Engineering Advisement Center to get a code to cover the $49.
              This is a free course for all engineering majors. The class will not appear on your
              transcript, and you will not get a grade for the class. You can do as little or as
              much of the class as you want. You take a diagnostic test and do practice problems to
              help refresh your math skills.
            </p>
          </Toggle>

          <Toggle heading="Should I start with CS 110 or CS 111?">
            <p>
              Your starting course depends on your prior programming experience—students with
              little or no experience should consider CS 110, while those with a solid foundation
              in programming concepts may be ready for CS 111. Ask your advisor for the
              &quot;Should I take CS 110 or CS 111?&quot; handout to help you decide.
            </p>
          </Toggle>

          <Toggle heading="What are the computer requirements for electrical and computer engineering students?">
            <p className="font-semibold text-gray-900">Laptop Guidance for Students</p>
            <p>
              We strongly recommend that all students have a personal laptop, as it is necessary
              for completing coursework remotely and offers the most flexibility. However, a
              laptop is not strictly required. Department computer labs are fully equipped with
              all the software required, so students can complete coursework using lab computers,
              if needed. These lab computers can also be accessed remotely (e.g., via SSH) for
              students who are comfortable using those tools.
            </p>
            <p className="font-semibold text-gray-900">Department Lab Computers (for reference)</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>CPU: Intel i5 (or equivalent)</li>
              <li>RAM: 16 GB</li>
              <li>Storage: 512 GB</li>
              <li>Operating System: Ubuntu or Windows 11</li>
            </ul>
            <p className="font-semibold text-gray-900">Recommended Laptop Specifications</p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[28rem] border-collapse text-left">
                <thead>
                  <tr className="border-byu-navy border-b-2">
                    <th scope="col" className="py-2 pr-4 font-semibold text-gray-900">
                      Component
                    </th>
                    <th scope="col" className="py-2 pr-4 font-semibold text-gray-900">
                      Minimum
                    </th>
                    <th scope="col" className="py-2 pr-4 font-semibold text-gray-900">
                      Recommended
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {laptopSpecs.map((row) => (
                    <tr key={row.component} className="border-b border-slate-200">
                      <td className="py-2 pr-4 font-medium text-gray-900">{row.component}</td>
                      <td className="py-2 pr-4">{row.minimum}</td>
                      <td className="py-2 pr-4">{row.recommended}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              Linux is an option for students who are comfortable troubleshooting and configuring
              software, but it is not recommended for most students.
            </p>
            <p className="font-semibold text-gray-900">Financial Assistance</p>
            <p>
              Students facing financial challenges may apply for a department laptop scholarship.
              To apply, write a brief one to two-paragraph statement describing your circumstances
              and submit it to your academic advisor.
            </p>
          </Toggle>
        </div>
      </div>
    </div>
  );
}

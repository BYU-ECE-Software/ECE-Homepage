import type { Metadata } from 'next';
import PageBanner from '@/components/layout/PageBanner';
import RichText from '@/components/general/RichText';

export const metadata: Metadata = {
  title: 'Objectives and Outcomes | Electrical and Computer Engineering',
  description:
    'The program educational objectives and student learning outcomes for the ECE undergraduate programs at BYU.',
};

const content = `
The Electrical and Computer Engineering programs support BYU's mission "to assist individuals in their quest for perfection and eternal life." The university aims to develop students "of faith, intellect, and character who have the skills and the desire to continue learning and to serve others throughout their lives."

## Program Educational Objectives

Graduates of the program are prepared to:

1. Apply their knowledge in service to their community and family through lifelong learning.
2. Develop fulfilling careers in industry, academia, entrepreneurship, or postgraduate study.
3. Make innovative contributions to society in positions of leadership.
4. Exemplify faith, character, and professional ethics.

## Learning Outcomes

Students completing the program should possess the following capabilities:

1. **Engineering Problems** — An ability to identify, formulate, and solve complex engineering problems by applying principles of engineering, science, and mathematics.
2. **Engineering Design** — An ability to create solutions that address specified needs, while considering health, safety, welfare, and global, cultural, environmental, and economic factors.
3. **Communication** — An ability to communicate effectively with a range of audiences.
4. **Ethics** — An ability to recognize ethical and professional responsibilities in engineering situations.
5. **Teamwork** — An ability to function effectively on a team, providing leadership and meeting objectives.
6. **Experimentation** — An ability to develop and conduct appropriate experimentation, analyze and interpret data, and use engineering judgment to draw conclusions.
7. **Lifelong Learning** — An ability to acquire and apply new knowledge as needed.

## Course Competencies

Course competencies represent specific, measurable skills taught within individual courses in the curriculum and are linked to the learning outcomes above.

## Assessment and Continuous Quality Improvement

The department regularly assesses whether students meet these learning outcomes at graduation and whether alumni go on to achieve the program educational objectives. Faculty periodically review and revise the objectives and outcomes to address the needs of students, employers, and the profession. See [Accreditation](/accreditation) for more on how this assessment is conducted.
`;

export default function ObjectivesAndOutcomesPage() {
  return (
    <>
      <PageBanner title="Objectives and Outcomes" />
      <section className="bg-white px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <RichText content={content} />
        </div>
      </section>
    </>
  );
}

import type { Metadata } from 'next';
import PageBanner from '@/components/layout/PageBanner';
import RichText from '@/components/general/RichText';

export const metadata: Metadata = {
  title: 'Accreditation | Electrical and Computer Engineering',
  description: 'ABET accreditation status and assessment process for the ECE undergraduate programs at BYU.',
};

const content = `
## Assessment of Program Educational Objectives, Learning Outcomes, and Course Competencies

The department establishes [program educational objectives](/objectives-and-outcomes) that define the career accomplishments graduates should achieve. These are assessed through alumni surveys, employer surveys, and evaluation by the Department External Advisory Board.

The program also establishes [learning outcomes](/objectives-and-outcomes) that specify the skills and knowledge students should have by graduation. These are measured through course assessments, student evaluations, and senior surveys. Individual courses align with specific competencies that support these learning outcomes.

## Evaluation and Continuous Quality Improvement

Faculty regularly evaluate assessment data to ensure students meet the learning outcomes at graduation and that alumni achieve the program educational objectives after graduation. The program periodically reviews and revises its objectives and outcomes to address the needs of students, employers, and the profession.

## Accreditation

Both undergraduate majors offered by the department hold ABET accreditation:

> The Computer Engineering BS program is accredited by the Engineering Accreditation Commission of ABET, under the commission's General Criteria and Program Criteria for Computer Engineering.

> The Electrical Engineering BS program is accredited by the Engineering Accreditation Commission of ABET, under the commission's General Criteria and Program Criteria for Electrical Engineering.
`;

export default function AccreditationPage() {
  return (
    <>
      <PageBanner title="Accreditation" />
      <section className="bg-white px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <RichText content={content} />
        </div>
      </section>
    </>
  );
}

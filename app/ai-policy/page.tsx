import type { Metadata } from 'next';
import PageBanner from '@/components/layout/PageBanner';
import RichText from '@/components/general/RichText';

export const metadata: Metadata = {
  title: 'AI Policy | Electrical and Computer Engineering',
  description: 'ECEn policy for the use of artificial intelligence in coursework.',
};

const content = `
## ECEn Policy for the Use of Artificial Intelligence in Coursework

This policy clarifies how artificial intelligence tools may be used in ECEn classes, balancing the need for students to gain practical experience with AI against protecting the educational integrity of coursework.

### Guiding Principles

1. AI functions as a professional tool that requires ethical application.
2. Developing effective AI prompting skills matters, including understanding AI's limitations, potential inaccuracies, and bias.
3. Learning involves intellectual growth that should not be circumvented by AI shortcuts.

### Permitted Uses

- Brainstorming project names or concepts.
- Learning code syntax through examples.
- Gaining topic overviews, with verification of the information provided.
- Enhancing prototypes with AI-generated text or images.

For open-book assignments, all AI-generated content must be cited: quote AI-generated language directly, document the engine and prompt used, and add code comments identifying AI-generated sections.

### Prohibited Uses

- Using AI when an instructor has explicitly forbidden it.
- Using AI in closed-book assessments.
- Submitting AI-generated reflections or lab reports intended to promote metacognition and engagement with course content.

If a particular use creates uncertainty, students should consult their instructor before proceeding.

### Consequences

Violations of this policy may result in a warning, an honor code referral, or a grade reduction, determined case-by-case by the instructor.
`;

export default function AIPolicyPage() {
  return (
    <>
      <PageBanner title="Department AI Policy" />
      <section className="bg-white px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <RichText content={content} />
        </div>
      </section>
    </>
  );
}

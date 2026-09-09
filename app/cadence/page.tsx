import type { Metadata } from 'next';
import PageBanner from '@/components/layout/PageBanner';
import RichText from '@/components/general/RichText';

export const metadata: Metadata = {
  title: 'Cadence Software | Electrical and Computer Engineering',
  description: 'How Cadence design tools are used in ECE coursework and research at BYU.',
};

const content = `
Cadence design tools play an important role in the Electrical and Computer Engineering Department at Brigham Young University.

## Undergraduate Courses

The department uses Cadence in two primary courses:

- **ECEn 445 — Introduction to Mixed Signal VLSI:** Students use Cadence tools to design and simulate a bandgap reference.
- **ECEn 551 — Introduction to Digital VLSI Circuits:** Covers layout, synthesis, timing, place and route, and validation.

Capstone design projects and other classes may also make use of these tools. Many course and research websites offer tutorials on effective Cadence usage.

## Research Applications

Two research groups make heavy use of Cadence software:

- **Micropower Circuits Laboratory (MCL)** — Focuses on ultra-low-power designs for RF, analog, and mixed-signal integrated circuits. Cadence design tools are heavily used in the design and simulation of these integrated circuits.
- **Microengineering Research Group** — Uses Cadence to lay out photomask designs for integrated optics structures, as well as MEMS and NEMS structures.

## Disclaimer

Information on this page is provided "as is" without warranty of any kind. Users are advised to test on copies of their data before working with production files.
`;

export default function CadencePage() {
  return (
    <>
      <PageBanner title="Cadence Software" />
      <section className="bg-white px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <RichText content={content} />
        </div>
      </section>
    </>
  );
}

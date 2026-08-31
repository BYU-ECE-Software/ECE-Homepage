import Link from 'next/link';
import PageBanner from '@/components/layout/PageBanner';

// Placeholder page — this exists mainly to demonstrate that a student
// organization's card can link to a page hosted on this site instead of
// an external URL. Replace this with real content: meeting times,
// officers, how to join, past projects, etc.
export default function IEEE_Association_Page() {
  return (
    <>
      <PageBanner title="BYU IEEE Association" />

      <section className="mx-auto max-w-3xl px-6 py-12">
        <p className="text-byu-medium-gray">
          Placeholder page for the IEEE student charter. Unlike the other organizations on the
          Student Organizations page, which link out to each club&apos;s own website, this one links
          to a page hosted right here on the department site.
        </p>

        <Link
          href="/student-organizations"
          className="text-byu-royal mt-8 inline-block font-medium"
        >
          ← Back to Student Organizations
        </Link>
      </section>
    </>
  );
}

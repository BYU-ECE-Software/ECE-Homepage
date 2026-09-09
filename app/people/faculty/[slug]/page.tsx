import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageBanner from '@/components/layout/PageBanner';
import { facultyMembers } from '@/data/people/Faculty';
import { facultyProfiles } from '@/data/people/FacultyProfiles';

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return facultyProfiles.map((profile) => ({ slug: profile.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const profile = facultyProfiles.find((p) => p.slug === slug);

  if (!profile) return {};

  return {
    title: `${profile.name} | Electrical and Computer Engineering`,
    description: profile.title,
  };
}

export default async function FacultyProfilePage({ params }: Props) {
  const { slug } = await params;
  const profile = facultyProfiles.find((p) => p.slug === slug);

  if (!profile) {
    notFound();
  }

  const directoryEntry = facultyMembers.find((m) => m.name === profile.name);
  const image = directoryEntry?.image;

  return (
    <>
      <PageBanner title={profile.name} tagline={profile.title} />

      <div className="mx-auto max-w-4xl px-6 py-12">
        <div className="flex flex-col gap-8 sm:flex-row">
          <div className="flex flex-shrink-0 flex-col items-center gap-3 sm:items-start">
            <div className="relative h-40 w-40 overflow-hidden rounded-full bg-gray-100">
              {image ? (
                <Image
                  src={image}
                  alt={profile.name}
                  fill
                  sizes="160px"
                  className="object-cover object-top"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-3xl font-bold text-gray-500 select-none">
                  {profile.name
                    .split(' ')
                    .map((w) => w[0])
                    .join('')
                    .slice(0, 2)
                    .toUpperCase()}
                </div>
              )}
            </div>

            <div className="flex flex-col items-center gap-1 text-sm text-gray-700 sm:items-start">
              {profile.email && (
                <a
                  href={`mailto:${profile.email}`}
                  className="text-byu-royal hover:underline"
                >
                  {profile.email}
                </a>
              )}
              {profile.phone && <span>{profile.phone}</span>}
              {profile.office && <span>{profile.office}</span>}
              {profile.personalWebsite && (
                <Link
                  href={profile.personalWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-byu-royal hover:underline"
                >
                  Personal Website
                </Link>
              )}
              {profile.cv && (
                <Link
                  href={profile.cv}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-byu-royal hover:underline"
                >
                  Curriculum Vitae
                </Link>
              )}
            </div>
          </div>

          <div className="min-w-0 flex-1">
            {profile.education && profile.education.length > 0 && (
              <section className="mb-8">
                <h2 className="text-byu-dark-gray mb-2 text-lg font-bold">Education</h2>
                <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
                  {profile.education.map((degree, i) => (
                    <li key={i}>{degree}</li>
                  ))}
                </ul>
              </section>
            )}

            {profile.biography && (
              <section className="mb-8">
                <h2 className="text-byu-dark-gray mb-2 text-lg font-bold">Biography</h2>
                {profile.biography.split('\n\n').map((paragraph, i) => (
                  <p key={i} className="mb-3 text-sm leading-relaxed text-gray-700">
                    {paragraph}
                  </p>
                ))}
              </section>
            )}
          </div>
        </div>

        {profile.publications && profile.publications.length > 0 && (
          <section className="mt-4">
            <h2 className="text-byu-dark-gray mb-3 text-lg font-bold">Publications</h2>
            <ol className="list-decimal space-y-2 pl-5 text-sm leading-relaxed text-gray-700">
              {profile.publications.map((pub, i) => (
                <li key={i}>{pub}</li>
              ))}
            </ol>
          </section>
        )}
      </div>
    </>
  );
}

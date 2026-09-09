import type { Metadata } from 'next';
import {
  PageIntro,
  ResourceGrid,
  type ResourceItem,
} from '@/components/general/ContentPage';

export const metadata: Metadata = {
  title: 'Alumni and Friends | Electrical and Computer Engineering',
  description: 'Ways for ECE alumni and friends of the department to stay connected and give back.',
};

const honoredAlumni = [
  'Aimee Wood',
  'Dan Christenson',
  'Gary Brown',
  'Scott Hansen',
  'Glenn Hinton',
  'Wei Ren',
  'Todd K. Moon',
  'Philip Carmack',
  'David Arnold',
  'Andrea Eyering',
  'J. Kelly Flanagan',
  'Ketan Kothari',
  'Richard Brown',
  'Manish Kothari',
  'Joseph Barrus',
  'Randy Mooney',
  'Doug Clifford',
  'Lynn Watson',
  'David Huber',
  'Randy Steck',
  'Darrell Ash',
  'Jim Abrams',
];

const engagementOptions: ResourceItem[] = [
  {
    title: 'BYU Connect',
    description:
      'Get involved through BYU Connect by mentoring students, offering career insight, and connecting with fellow BYU alumni.',
    href: 'https://alumni.byu.edu/byuconnect',
    linkLabel: 'Browse BYU Connect',
  },
  {
    title: 'Donate to Student Initiatives',
    description:
      'Direct your contribution toward research, mentorships, competitions, entrepreneurial pursuits, and study abroad opportunities.',
    href: 'https://donate.churchofjesuschrist.org/donations/byu/engineering/electrical-engineering.html',
    linkLabel: 'Give now',
  },
  {
    title: 'LinkedIn ECE Group',
    description: 'Connect with other alumni and keep up with what is happening in the department.',
    href: 'https://www.linkedin.com/groups/1826750/',
    linkLabel: 'Join the group',
  },
];

export default function AlumniAndFriendsPage() {
  return (
    <>
      <PageIntro
        title="Alumni and Friends"
        description='Because of the generous support of our alumni and friends, we are able to provide experiential learning opportunities to our students, including undergraduate research opportunities through IMMERSE, Capstone project sponsorship, mentorships, club and competition experiences, and more.'
      />

      <section className="bg-white px-6 py-14">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-byu-navy text-3xl font-semibold">
            Electrical and Computer Engineering Honored Alumni
          </h2>
          <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3 text-slate-700 sm:grid-cols-3 lg:grid-cols-4">
            {honoredAlumni.map((name) => (
              <li key={name} className="border-byu-royal border-l-4 pl-3">
                {name}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ResourceGrid items={engagementOptions} title="Get Involved" columns={3} />
    </>
  );
}

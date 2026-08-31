import type { Metadata } from 'next';
import PageTitle from '@/components/layout/PageTitle';
import Description from '@/components/general/Description';
import CardGrid from '@/components/general/CardGrid';
import ResourceCard from '@/components/general/ResourceCard';
import type { ResourceCardData } from '@/types/Content';

export const metadata: Metadata = {
  title: 'Networking & Internships | Electrical and Computer Engineering',
  description:
    'Career services, alumni mentoring, and internship resources for ECE undergraduate students.',
};

const resources: ResourceCardData[] = [
  {
    title: 'Jobs and Internships',
    description:
      "Career Services Director Andrea Merriman can assist you with all your employment needs. Whether you're seeking a full-time job, an internship, or just some sound advice, she is ready to help.",
    href: 'https://careers.byu.edu/andrea-merriman',
    image: '/undergraduate/career-services/andrea-merriman.png',
    linkText: 'Meet with Career Services',
  },
  {
    title: 'Connect with Alumni',
    description:
      'BYU Connect lets students reach BYU alumni at specific companies to explore career paths, ask questions, and receive mentoring and professional advice. It is a valuable resource for building your network and preparing for internships and careers after graduation.',
    href: 'https://alumni.byu.edu/byuconnect',
    image: '/undergraduate/career-services/byu-connect-alumni.jpeg',
    linkText: 'Browse BYU Connect',
  },
];

export default function NetworkingInternshipsPage() {
  return (
    <>
      <PageTitle title="Networking and Internships" />

      <Description
        text="Connect with employers, alumni, and career advisors while you're still in the program."
        subtext="Internships are one of the most direct paths from coursework to a career. Start with the resources below, and meet with your academic advisor if you need help fitting an internship into your graduation plan."
      />

      <CardGrid columns={2} paddingClass="px-10 pt-4 pb-16">
        {resources.map((item) => (
          <ResourceCard key={item.title} {...item} />
        ))}
      </CardGrid>
    </>
  );
}

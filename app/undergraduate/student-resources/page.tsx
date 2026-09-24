import type { Metadata } from 'next';
import { PageIntro } from '@/components/general/ContentPage';

export const metadata: Metadata = {
  title: 'Student Resources | Electrical and Computer Engineering',
  description: 'Resources for current undergraduate students in Electrical and Computer Engineering.',
};

export default function StudentResourcesPage() {
  return (
    <>
      <PageIntro title="Student Resources" />
    </>
  );
}

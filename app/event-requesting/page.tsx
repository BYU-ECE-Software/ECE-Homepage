import type { Metadata } from 'next';
import PageBanner from '@/components/layout/PageBanner';
import RichText from '@/components/general/RichText';
import { CallToAction } from '@/components/general/ContentPage';

export const metadata: Metadata = {
  title: 'Event Requesting | Electrical and Computer Engineering',
  description: 'How to request department support for planning an ECE event.',
};

const content = `
To enhance the efficiency of our event planning process, we have introduced an event planning request form. This initiative aims to reduce the back-and-forth communication via email, saving valuable time and minimizing errors.

### Submissions

Please ensure that all event submissions are made at least one week prior to the scheduled date. Late submissions may result in accommodations not being fully guaranteed.

### Accounts

Prior to submitting an event request, please have the complete account codes ready for any associated expenditures.

### Flyers

You have the option to either request a flyer or submit your own design for printing by our secretarial staff.

### Food Options

- Cookies and drinks
- Pizza and drinks
- Boxed meals
- Custom request

### Information Needed

- Your name
- Email
- Name of the event
- Date of event
- Time
- Location
- Number of attendees
- Sponsor of event
- Equipment needed
- Food requirements
`;

export default function EventRequestingPage() {
  return (
    <>
      <PageBanner title="Event Requesting" />
      <section className="bg-white px-6 pt-12 pb-6">
        <div className="mx-auto max-w-3xl">
          <RichText content={content} />
        </div>
      </section>
      <CallToAction
        title="Ready to submit your request?"
        description="Complete the event planning request form below at least one week before your event."
        href="https://byu.az1.qualtrics.com/jfe/form/SV_0rJ9Mv3JRbeTxCm"
        label="Request Event"
      />
    </>
  );
}

import EventGrid, { type EventItem } from '@/components/general/EventGrid';
import { PageIntro, CallToAction } from '@/components/general/ContentPage';

const events: EventItem[] = [];

const calendarSubscription =
  'https://outlook.office365.com/owa/calendar/a3e0f18708ff4147888db4e15f9bf045@byu.edu/5c669c3dec7b43f4b4501530b96369703597652552248665359/calendar.ics';

export default function ScheduleOfEvents() {
  return (
    <>
      <PageIntro
        eyebrow="News & Events"
        title="Schedule of events"
        description="Department-sponsored seminars, student activities, lectures, and events for the ECE community."
      />
      <section className="px-6 py-12">
        <div className="mx-auto max-w-5xl">
          <p className="mb-8 max-w-3xl leading-7 text-slate-600">
            This page highlights major department events. Newsletters may include additional
            opportunities intended for particular programs or student groups.
          </p>
          <EventGrid items={events} />
        </div>
      </section>
      <CallToAction
        title="Keep the department calendar with you"
        description="Add the ECE calendar to your preferred calendar application to receive newly posted events and updates."
        href={calendarSubscription}
        label="Subscribe with ICS"
      />
    </>
  );
}

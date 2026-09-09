import EventCard, { type EventItem } from './EventCard';

export default function EventGrid({ items }: { items: EventItem[] }) {
  if (items.length === 0) {
    return (
      <div className="rounded-lg border border-dashed border-slate-300 bg-slate-50 px-6 py-12 text-center">
        <h2 className="text-byu-navy text-xl font-semibold">No events are currently posted</h2>
        <p className="mx-auto mt-2 max-w-xl leading-7 text-slate-600">
          Subscribe to the department calendar for newly announced seminars, student activities, and
          department events.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-5">
      {items.map((item) => (
        <EventCard key={`${item.title}-${item.date}`} item={item} />
      ))}
    </div>
  );
}

export type { EventItem } from './EventCard';

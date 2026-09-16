import type { EventItem } from '@/components/general/EventCard';
import generatedEvents from './events.generated.json';

// Populated at build time by scripts/build-calendar-events.mjs from the
// department Outlook calendar. Empty until the first `npm run dev`/`build`.
export const events: EventItem[] = generatedEvents;

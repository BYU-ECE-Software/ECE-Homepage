import Image from 'next/image';
import type { Advisor } from '@/data/people/Advisors';

/**
 * Advisor card for the /people/advisors scheduling page: a larger photo and
 * a "Schedule Appointment" button, since booking time with an advisor (not
 * just learning who they are) is the point of this page. Distinct from the
 * smaller FacStaffCard used on the general faculty/staff directory pages.
 */
export default function AdvisorCard({ name, role, photo, schedulingUrl }: Advisor) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-lg border border-gray-200 bg-white text-center shadow-sm">
      <div className="relative h-56 w-full shrink-0 bg-gray-100">
        {photo && (
          <Image
            src={photo}
            alt={name}
            fill
            sizes="(min-width: 1024px) 320px, 90vw"
            className="object-cover object-top"
          />
        )}
      </div>

      <div className="flex flex-1 flex-col items-center p-6">
        <h3 className="text-byu-navy text-lg font-bold">{name}</h3>
        <p className="mt-1 text-sm text-gray-700">{role}</p>

        <div className="mt-auto pt-4">
          <a
            href={schedulingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-byu-royal inline-block rounded px-6 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Schedule Appointment
          </a>
        </div>
      </div>
    </div>
  );
}

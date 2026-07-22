import Link from "next/link";

export interface EventItem {
  title: string;
  date: string;
  time?: string;
  location?: string;
  description?: string;
  href?: string;
  category?: string;
}

export default function EventCard({ item }: { item: EventItem }) {
  const title = item.href?.startsWith("/") ? (
    <Link href={item.href} className="hover:underline">{item.title}</Link>
  ) : item.href ? (
    <a href={item.href} target="_blank" rel="noopener noreferrer" className="hover:underline">{item.title}</a>
  ) : item.title;

  return (
    <article className="grid overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm sm:grid-cols-[9rem_1fr]">
      <div className="flex flex-col justify-center bg-byu-navy px-5 py-6 text-white">
        {item.category && <p className="text-xs font-semibold tracking-widest text-blue-200 uppercase">{item.category}</p>}
        <time className="mt-2 text-lg font-semibold leading-snug">{item.date}</time>
        {item.time && <p className="mt-1 text-sm text-blue-100">{item.time}</p>}
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-byu-navy">{title}</h2>
        {item.location && <p className="mt-2 text-sm font-semibold text-slate-500">{item.location}</p>}
        {item.description && <p className="mt-3 leading-7 text-slate-600">{item.description}</p>}
      </div>
    </article>
  );
}

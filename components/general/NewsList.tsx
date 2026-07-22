import Link from "next/link";
import type { NewsItem } from "./NewsCard";

export default function NewsList({ items }: { items: NewsItem[] }) {
  return (
    <div className="divide-y divide-slate-200 border-y border-slate-200">
      {items.map((item) => (
        <article key={`${item.title}-${item.date}`} className="grid gap-4 py-8 md:grid-cols-[10rem_1fr]">
          <div>
            {item.category && (
              <p className="text-xs font-semibold tracking-widest text-byu-royal uppercase">
                {item.category}
              </p>
            )}
            <time className="mt-2 block text-sm text-slate-500">{item.date}</time>
          </div>
          <div>
            <h2 className="text-2xl font-semibold leading-snug text-byu-navy">
              {item.href?.startsWith("/") ? (
                <Link href={item.href} className="hover:underline">
                  {item.title}
                </Link>
              ) : item.href ? (
                <a href={item.href} className="hover:underline" target="_blank" rel="noopener noreferrer">
                  {item.title}
                </a>
              ) : (
                item.title
              )}
            </h2>
            {item.author && <p className="mt-2 text-sm font-medium text-slate-500">By {item.author}</p>}
            <p className="mt-3 max-w-3xl leading-7 text-slate-600">{item.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

export type { NewsItem } from "./NewsCard";

import Link from "next/link";

export interface QuickLinkItem {
  title: string;
  description?: string;
  href: string;
}

export default function QuickLinksGrid({ items, title = "Quick links" }: { items: QuickLinkItem[]; title?: string }) {
  return (
    <section className="px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-2xl font-semibold text-byu-navy">{title}</h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => {
            const classes = "group flex h-full items-center justify-between gap-4 rounded-md border border-slate-200 bg-white p-5 shadow-sm transition hover:border-byu-royal hover:shadow-md";
            const content = <><span><span className="block font-semibold text-byu-navy">{item.title}</span>{item.description && <span className="mt-1 block text-sm leading-6 text-slate-500">{item.description}</span>}</span><span className="text-xl text-byu-royal transition group-hover:translate-x-1" aria-hidden="true">→</span></>;
            return item.href.startsWith("/")
              ? <Link key={item.title} href={item.href} className={classes}>{content}</Link>
              : <a key={item.title} href={item.href} target="_blank" rel="noopener noreferrer" className={classes}>{content}</a>;
          })}
        </div>
      </div>
    </section>
  );
}

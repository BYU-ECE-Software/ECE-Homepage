import Link from 'next/link';
import type { IconType } from 'react-icons';

export interface QuickLinkItem {
  title: string;
  href: string;
  icon: IconType;
}

export default function QuickLinksGrid({ items }: { items: QuickLinkItem[] }) {
  return (
    <section className="px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-6">
        {items.map((item) => {
          const Icon = item.icon;
          const classes = 'group flex flex-col items-center gap-3 text-center';
          const content = (
            <>
              <span
                className="group-hover:bg-byu-navy flex h-36 w-36 items-center justify-center rounded-full text-white transition"
                style={{ backgroundColor: '#7093ef' }}
              >
                <Icon className="h-10 w-10" aria-hidden="true" />
              </span>
              <span className="text-byu-navy font-semibold">{item.title}</span>
            </>
          );
          return item.href.startsWith('/') ? (
            <Link key={item.title} href={item.href} className={classes}>
              {content}
            </Link>
          ) : (
            <a
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={classes}
            >
              {content}
            </a>
          );
        })}
      </div>
    </section>
  );
}

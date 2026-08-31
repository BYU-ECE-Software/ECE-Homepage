import Link from 'next/link';
import type { ReactNode } from 'react';

export interface ResourceItem {
  title: string;
  description: string;
  href?: string;
  eyebrow?: string;
  linkLabel?: string;
}

interface PageIntroProps {
  title: string;
  eyebrow?: string;
  description?: string;
  children?: ReactNode;
}

export function PageIntro({ title, eyebrow, description, children }: PageIntroProps) {
  return (
    <header className="bg-slate-100 px-6 py-14 sm:py-18">
      <div className="mx-auto max-w-6xl">
        {eyebrow && (
          <p className="text-byu-royal mb-3 text-sm font-semibold tracking-[0.18em] uppercase">
            {eyebrow}
          </p>
        )}
        <h1 className="text-byu-navy max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">{description}</p>
        )}
        {children && <div className="mt-7">{children}</div>}
      </div>
    </header>
  );
}

export function ResourceGrid({
  items,
  title,
  description,
  columns = 3,
}: {
  items: ResourceItem[];
  title?: string;
  description?: string;
  columns?: 2 | 3 | 4;
}) {
  const columnClass = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'sm:grid-cols-2 lg:grid-cols-4',
  }[columns];

  return (
    <section className="px-6 py-14">
      <div className="mx-auto max-w-6xl">
        {title && <h2 className="text-byu-navy text-3xl font-semibold">{title}</h2>}
        {description && <p className="mt-3 max-w-3xl leading-7 text-slate-600">{description}</p>}
        <div className={`mt-8 grid gap-6 ${columnClass}`}>
          {items.map((item) => {
            const body = (
              <article className="border-byu-royal flex h-full flex-col border-t-4 bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:shadow-md">
                {item.eyebrow && (
                  <p className="text-byu-royal mb-2 text-xs font-semibold tracking-widest uppercase">
                    {item.eyebrow}
                  </p>
                )}
                <h3 className="text-byu-navy text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 flex-1 leading-7 text-slate-600">{item.description}</p>
                {item.href && (
                  <span className="text-byu-royal mt-5 font-semibold">
                    {item.linkLabel ?? 'Learn more'}
                  </span>
                )}
              </article>
            );

            if (!item.href) return <div key={item.title}>{body}</div>;
            if (/^https?:\/\//.test(item.href)) {
              return (
                <a key={item.title} href={item.href} target="_blank" rel="noopener noreferrer">
                  {body}
                </a>
              );
            }
            return (
              <Link key={item.title} href={item.href}>
                {body}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function CallToAction({
  title,
  description,
  href,
  label,
}: {
  title: string;
  description: string;
  href: string;
  label: string;
}) {
  const buttonClass =
    'inline-flex rounded-md bg-white px-5 py-3 font-semibold text-byu-navy transition hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white';

  return (
    <section className="bg-byu-royal relative isolate overflow-hidden px-6 py-12 text-white">
      <div
        aria-hidden="true"
        className="absolute top-[-60%] left-[-15%] -z-10 aspect-square w-[90%] min-w-175 rounded-full"
        style={{
          background:
            'radial-gradient(circle, var(--color-byu-royal) 0%, var(--color-byu-royal) 45%, var(--color-byu-navy) 45%, var(--color-byu-navy) 75%, var(--color-byu-royal) 75%, var(--color-byu-royal) 100%)',
        }}
      />
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div>
          <h2 className="text-2xl font-semibold">{title}</h2>
          <p className="mt-2 max-w-2xl leading-7 text-blue-100">{description}</p>
        </div>
        {/^https?:\/\//.test(href) ? (
          <a href={href} target="_blank" rel="noopener noreferrer" className={buttonClass}>
            {label}
          </a>
        ) : (
          <Link href={href} className={buttonClass}>
            {label}
          </Link>
        )}
      </div>
    </section>
  );
}

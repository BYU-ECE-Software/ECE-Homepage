import type { ReactNode } from "react";
import RichText from "./RichText";

interface ArticleLayoutProps {
  title: string;
  content: string;
  eyebrow?: string;
  description?: string;
  author?: string;
  published?: string;
  children?: ReactNode;
}

export default function ArticleLayout({
  title,
  content,
  eyebrow = "Department News",
  description,
  author,
  published,
  children,
}: ArticleLayoutProps) {
  return (
    <article>
      <header className="border-b border-slate-200 bg-slate-50 px-6 py-14">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-semibold tracking-widest text-byu-royal uppercase">{eyebrow}</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-byu-navy sm:text-5xl">{title}</h1>
          {description && <p className="mt-5 text-xl leading-8 text-slate-600">{description}</p>}
          {(author || published) && (
            <p className="mt-6 text-sm text-slate-500">
              {author && <span className="font-medium text-slate-700">By {author}</span>}
              {author && published && <span aria-hidden="true"> · </span>}
              {published && <time>{published}</time>}
            </p>
          )}
        </div>
      </header>
      <div className="px-6 py-12">
        <RichText content={content} className="mx-auto" />
        {children && <div className="mx-auto mt-10 max-w-3xl">{children}</div>}
      </div>
    </article>
  );
}

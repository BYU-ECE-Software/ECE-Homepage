/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import type { RichTextProps } from "@/types/RichText";

const widthClasses = {
  prose: "max-w-3xl",
  wide: "max-w-5xl",
  full: "max-w-none",
};

export function RichText({
  content,
  maxWidth = "prose",
  variant = "article",
  className = "",
}: RichTextProps) {
  const compact = variant === "compact";

  return (
    <div
      className={`rich-text ${widthClasses[maxWidth]} ${compact ? "text-sm" : "text-base"} ${className}`.trim()}
    >
      <ReactMarkdown
        components={{
          h1: ({ children }) => (
            <h1 className="mt-10 mb-5 text-3xl font-bold tracking-tight text-byu-navy first:mt-0 sm:text-4xl">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="mt-10 mb-4 text-2xl font-semibold tracking-tight text-byu-navy first:mt-0">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="mt-8 mb-3 text-xl font-semibold text-byu-navy">{children}</h3>
          ),
          h4: ({ children }) => (
            <h4 className="mt-6 mb-2 text-lg font-semibold text-byu-dark-gray">{children}</h4>
          ),
          p: ({ children }) => (
            <p className={`${compact ? "mb-3 leading-6" : "mb-5 leading-8"} text-slate-700 last:mb-0`}>
              {children}
            </p>
          ),
          a: ({ href = "", children }) => {
            const classes =
              "font-medium text-byu-royal underline decoration-byu-royal/35 underline-offset-2 hover:decoration-byu-royal";
            if (href.startsWith("/")) {
              return (
                <Link href={href} className={classes}>
                  {children}
                </Link>
              );
            }
            return (
              <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
                {children}
              </a>
            );
          },
          ul: ({ children }) => (
            <ul className="mb-5 list-disc space-y-2 pl-6 text-slate-700">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="mb-5 list-decimal space-y-2 pl-6 text-slate-700">{children}</ol>
          ),
          li: ({ children }) => <li className="pl-1 leading-7">{children}</li>,
          blockquote: ({ children }) => (
            <blockquote className="my-7 border-l-4 border-byu-royal bg-blue-50/60 px-6 py-4 text-lg italic text-slate-700">
              {children}
            </blockquote>
          ),
          strong: ({ children }) => <strong className="font-semibold text-slate-900">{children}</strong>,
          hr: () => <hr className="my-10 border-slate-200" />,
          code: ({ children, className: codeClassName }) =>
            codeClassName ? (
              <code className={codeClassName}>{children}</code>
            ) : (
              <code className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-[0.9em] text-slate-800">
                {children}
              </code>
            ),
          pre: ({ children }) => (
            <pre className="my-6 overflow-x-auto rounded-lg bg-slate-950 p-5 text-sm leading-6 text-slate-100">
              {children}
            </pre>
          ),
          table: ({ children }) => (
            <div className="my-7 overflow-x-auto rounded-lg border border-slate-200">
              <table className="w-full border-collapse text-left text-sm">{children}</table>
            </div>
          ),
          thead: ({ children }) => <thead className="bg-slate-100 text-slate-900">{children}</thead>,
          th: ({ children }) => <th className="border-b border-slate-200 px-4 py-3 font-semibold">{children}</th>,
          td: ({ children }) => <td className="border-b border-slate-100 px-4 py-3 text-slate-700">{children}</td>,
          img: ({ src, alt }) => (
            <img src={src} alt={alt ?? ""} className="my-8 h-auto w-full rounded-lg" loading="lazy" />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}

export default RichText;
export type { RichTextProps } from "@/types/RichText";

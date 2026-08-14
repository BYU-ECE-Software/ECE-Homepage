"use client";

import Link from "next/link";
import ReactMarkdown from "react-markdown";

interface OverviewProps {
  content: string;
}

// Renders Markdown (headers, bold, lists, etc.) for the `overview` field,
// styled to match the site's existing color theme without requiring the
// @tailwindcss/typography plugin.
//
// Expects `content` to already be resolved (and, for inline strings,
// dedented) via resolveOverview() before being passed in here.
export default function Overview({ content }: OverviewProps) {
  return (
    <div className="mt-6 space-y-4 text-byu-dark-gray">
      <ReactMarkdown
        components={{
          h1: ({ children }) => (
            <h2 className="text-2xl font-semibold text-byu-navy">
              {children}
            </h2>
          ),
          h2: ({ children }) => (
            <h3 className="text-xl font-semibold text-byu-navy">
              {children}
            </h3>
          ),
          h3: ({ children }) => (
            <h4 className="text-lg font-semibold text-byu-navy">
              {children}
            </h4>
          ),
          p: ({ children }) => <p className="leading-relaxed">{children}</p>,
          ul: ({ children }) => (
            <ul className="list-disc space-y-1 pl-6">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal space-y-1 pl-6">{children}</ol>
          ),
          li: ({ children }) => <li>{children}</li>,
          strong: ({ children }) => (
            <strong className="font-semibold text-byu-navy">
              {children}
            </strong>
          ),
          a: ({ href, children }) => {
            const isInternal = href?.startsWith("/");
            return isInternal ? (
              <Link
                href={href ?? "#"}
                className="font-medium text-byu-royal underline hover:no-underline"
              >
                {children}
              </Link>
            ) : (
              <a
                href={href}
                className="font-medium text-byu-royal underline hover:no-underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {children}
              </a>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
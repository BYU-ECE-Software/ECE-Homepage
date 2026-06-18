import ReactMarkdown from "react-markdown";

interface OverviewProps {
  content: string;
}

// Strips leading whitespace from every line. Markdown treats 4+ spaces of
// indentation as a code block, so an inline template literal indented to
// match surrounding code (rather than a file read straight from disk) would
// otherwise render as code instead of formatted text.
function dedent(text: string): string {
  return text
    .split("\n")
    .map((line) => line.replace(/^[ \t]+/, ""))
    .join("\n")
    .trim();
}

// Renders Markdown (headers, bold, lists, etc.) for the `overview` field,
// styled to match the site's existing color theme without requiring the
// @tailwindcss/typography plugin.
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
          a: ({ href, children }) => (
            <a
              href={href}
              className="font-medium text-byu-royal underline hover:no-underline"
            >
              {children}
            </a>
          ),
        }}
      >
        {dedent(content)}
      </ReactMarkdown>
    </div>
  );
}

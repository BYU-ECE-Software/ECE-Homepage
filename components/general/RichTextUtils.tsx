import type { Spacing, Align, InlineMark } from "@/components/general/RichText";

// ─── Spacing Map ──────────────────────────────────────────────────────────────

export const spacingMap: Record<Spacing, string> = {
  none: "0",
  xs: "0.5rem",
  sm: "0.75rem",
  md: "1.25rem",
  lg: "2rem",
  xl: "3rem",
  "2xl": "4.5rem",
};

export const spacingClass: Record<Spacing, { mt: string; mb: string }> = {
  none: { mt: "mt-0", mb: "mb-0" },
  xs: { mt: "mt-2", mb: "mb-2" },
  sm: { mt: "mt-3", mb: "mb-3" },
  md: { mt: "mt-5", mb: "mb-5" },
  lg: { mt: "mt-8", mb: "mb-8" },
  xl: { mt: "mt-12", mb: "mb-12" },
  "2xl": { mt: "mt-18", mb: "mb-18" },
};

export const alignClass: Record<Align, string> = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

export function getSpacingClasses(mt?: Spacing, mb?: Spacing): string {
  const parts: string[] = [];
  if (mt) parts.push(spacingClass[mt].mt);
  if (mb) parts.push(spacingClass[mb].mb);
  return parts.join(" ");
}

// ─── Inline content renderer ──────────────────────────────────────────────────

export function renderInline(content: (string | InlineMark)[]): React.ReactNode[] {
  return content.map((item, i) => {
    if (typeof item === "string") return item;

    let node: React.ReactNode = item.text;

    if (item.code) {
      node = (
        <code
          key={i}
          className="px-1.5 py-0.5 rounded bg-slate-100 text-slate-800 font-mono text-[0.875em] border border-slate-200"
        >
          {node}
        </code>
      );
    } else {
      const classes = [
        item.bold ? "font-semibold" : "",
        item.italic ? "italic" : "",
        item.underline ? "underline underline-offset-2" : "",
        item.strikethrough ? "line-through" : "",
      ]
        .filter(Boolean)
        .join(" ");

      if (classes) {
        node = (
          <span key={i} className={classes}>
            {node}
          </span>
        );
      }
    }

    if (item.link) {
      const linkClasses =
        "text-blue-700 underline underline-offset-2 decoration-blue-300 hover:text-blue-900 hover:decoration-blue-600 transition-colors duration-150";
      node = (
        <a
          key={i}
          href={item.link.href}
          aria-label={item.link.label}
          target={item.link.external ? "_blank" : undefined}
          rel={item.link.external ? "noopener noreferrer" : undefined}
          className={linkClasses}
        >
          {node}
          {item.link.external && (
            <svg
              className="inline-block ml-0.5 mb-0.5 h-3 w-3 opacity-60"
              fill="none"
              viewBox="0 0 12 12"
              aria-hidden
            >
              <path
                d="M3.5 3H2a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V8.5M7 1h4m0 0v4m0-4L5.5 6.5"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </a>
      );
    }

    return <span key={i}>{node}</span>;
  });
}
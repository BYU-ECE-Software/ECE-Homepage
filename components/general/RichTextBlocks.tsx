"use client";

import React from "react";
import {
  ParagraphBlock,
  HeadingBlock,
  ListBlock,
  ImageBlock,
  ButtonBlock,
  ButtonGroupBlock,
  CalloutBlock,
  QuoteBlock,
  CodeBlock,
  DividerBlock,
  SpacerBlock,
  TableBlock,
  EmbedBlock,
  BadgeBlock,
  BadgeGroupBlock,
  CardBlock,
  GridBlock,
  RichTextBlock,
} from "@/types/RichText";
import { alignClass, getSpacingClasses, renderInline } from "./RichTextUtils";

// ─── Paragraph ────────────────────────────────────────────────────────────────

export function Paragraph({ block }: { block: ParagraphBlock }) {
  const sizeMap = {
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
  };
  const classes = [
    block.lead
      ? "text-xl text-slate-600 leading-relaxed font-light"
      : `${sizeMap[block.size ?? "base"]} text-slate-700 leading-7`,
    block.muted ? "text-slate-500" : "",
    alignClass[block.align ?? "left"],
    getSpacingClasses(block.mt, block.mb),
  ]
    .filter(Boolean)
    .join(" ");

  return <p className={classes}>{renderInline(block.content)}</p>;
}

// ─── Heading ──────────────────────────────────────────────────────────────────

export function Heading({ block }: { block: HeadingBlock }) {
  const Tag = `h${block.level}` as keyof JSX.IntrinsicElements;

  const sizeMap: Record<number, string> = {
    1: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-tight",
    2: "text-3xl font-bold tracking-tight text-slate-900 leading-snug",
    3: "text-2xl font-semibold text-slate-900 leading-snug",
    4: "text-xl font-semibold text-slate-800",
    5: "text-lg font-semibold text-slate-800",
    6: "text-base font-semibold text-slate-700 uppercase tracking-wider",
  };

  const classes = [
    sizeMap[block.level],
    alignClass[block.align ?? "left"],
    getSpacingClasses(block.mt, block.mb),
  ]
    .filter(Boolean)
    .join(" ");

  const anchor = block.anchor ?? block.content.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");

  return (
    <div className={getSpacingClasses(block.mt, block.mb)}>
      <Tag id={anchor} className={`${sizeMap[block.level]} ${alignClass[block.align ?? "left"]} group scroll-mt-20`}>
        {block.content}
        <a
          href={`#${anchor}`}
          aria-label={`Link to "${block.content}"`}
          className="ml-2 opacity-0 group-hover:opacity-40 text-blue-500 text-[0.6em] align-middle transition-opacity duration-150 select-none"
        >
          ¶
        </a>
      </Tag>
      {block.subtitle && (
        <p className={`mt-1.5 text-slate-500 font-normal text-base ${alignClass[block.align ?? "left"]}`}>
          {block.subtitle}
        </p>
      )}
    </div>
  );
}

// ─── List ─────────────────────────────────────────────────────────────────────

const CHECK_ICON = (
  <svg className="shrink-0 mt-0.5 h-4 w-4 text-blue-600" viewBox="0 0 16 16" fill="none" aria-hidden>
    <path d="M2.5 8l4 4 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ARROW_ICON = (
  <svg className="shrink-0 mt-1 h-4 w-4 text-blue-500" viewBox="0 0 16 16" fill="none" aria-hidden>
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export function List({ block }: { block: ListBlock }) {
  const isOrdered = block.style === "decimal";
  const isCustom = block.style === "check" || block.style === "arrow";

  const Tag = isOrdered ? "ol" : "ul";
  const listClass = isOrdered
    ? "list-decimal list-outside pl-6"
    : block.style === "disc"
    ? "list-disc list-outside pl-6"
    : block.style === "none"
    ? "list-none pl-0"
    : "list-none pl-0";

  const gapClass = block.tight ? "space-y-1" : "space-y-2";
  const colClass =
    block.columns === 2
      ? "grid-cols-1 sm:grid-cols-2"
      : block.columns === 3
      ? "grid-cols-1 sm:grid-cols-3"
      : "";

  const itemsClass = block.columns ? `grid ${colClass} gap-x-6 ${gapClass}` : `${gapClass}`;

  return (
    <Tag
      className={`${listClass} ${getSpacingClasses(block.mt, block.mb)} text-slate-700`}
    >
      <div className={itemsClass}>
        {block.items.map((item, i) => {
          const content = typeof item === "string" ? item : renderInline(item);

          if (isCustom) {
            return (
              <li key={i} className="flex items-start gap-2.5">
                {block.style === "check" ? CHECK_ICON : ARROW_ICON}
                <span className="leading-6">{content}</span>
              </li>
            );
          }

          return (
            <li key={i} className="leading-7 pl-1">
              {content}
            </li>
          );
        })}
      </div>
    </Tag>
  );
}

// ─── Image ────────────────────────────────────────────────────────────────────

export function ImageBlock_({ block }: { block: ImageBlock }) {
  const alignMap = {
    left: "mr-auto",
    center: "mx-auto",
    right: "ml-auto",
    full: "w-full",
  };

  const ratioMap: Record<string, string> = {
    "16/9": "aspect-video",
    "4/3": "aspect-[4/3]",
    "1/1": "aspect-square",
    "3/2": "aspect-[3/2]",
    auto: "",
  };

  const img = (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={block.src}
      alt={block.alt}
      width={block.width}
      height={block.height}
      className={[
        "object-cover w-full h-full",
        block.rounded ? "rounded-xl" : "",
      ].join(" ")}
    />
  );

  return (
    <figure
      className={[
        block.align === "full" ? "w-full" : "max-w-full",
        alignMap[block.align ?? "center"],
        getSpacingClasses(block.mt, block.mb),
      ].join(" ")}
    >
      <div
        className={[
          ratioMap[block.aspectRatio ?? "auto"] ?? "",
          block.shadow ? "shadow-lg" : "",
          block.rounded ? "rounded-xl overflow-hidden" : "overflow-hidden",
        ].join(" ")}
      >
        {block.href ? (
          <a href={block.href} target="_blank" rel="noopener noreferrer">
            {img}
          </a>
        ) : (
          img
        )}
      </div>
      {block.caption && (
        <figcaption className="mt-2.5 text-sm text-slate-500 text-center italic">
          {block.caption}
        </figcaption>
      )}
    </figure>
  );
}

// ─── Button ───────────────────────────────────────────────────────────────────

const buttonVariants = {
  primary:
    "bg-blue-700 text-white hover:bg-blue-800 active:bg-blue-900 border border-blue-700 shadow-sm",
  secondary:
    "bg-white text-blue-700 border border-blue-300 hover:bg-blue-50 hover:border-blue-400 shadow-sm",
  ghost:
    "bg-transparent text-slate-700 border border-slate-200 hover:bg-slate-50 hover:border-slate-300",
  danger:
    "bg-red-600 text-white hover:bg-red-700 border border-red-600 shadow-sm",
};

const buttonSizes = {
  sm: "px-3.5 py-1.5 text-sm rounded-md gap-1.5",
  md: "px-5 py-2.5 text-sm rounded-lg gap-2",
  lg: "px-7 py-3.5 text-base rounded-xl gap-2.5",
};

export function Button_({ block }: { block: ButtonBlock }) {
  const variantClass = buttonVariants[block.variant ?? "primary"];
  const sizeClass = buttonSizes[block.size ?? "md"];
  const alignMap: Record<string, string> = {
    left: "justify-start",
    center: "justify-center",
    right: "justify-end",
  };

  const inner = (
    <>
      {block.icon && block.iconPosition !== "right" && <span>{block.icon}</span>}
      <span>{block.label}</span>
      {block.icon && block.iconPosition === "right" && <span>{block.icon}</span>}
    </>
  );

  const btnClass = `inline-flex items-center font-medium transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ${variantClass} ${sizeClass} ${block.fullWidth ? "w-full justify-center" : ""}`;

  const wrapper = `flex ${block.fullWidth ? "w-full" : ""} ${alignMap[block.align ?? "left"]} ${getSpacingClasses(block.mt, block.mb)}`;

  if (block.href) {
    return (
      <div className={wrapper}>
        <a
          href={block.href}
          target={block.external ? "_blank" : undefined}
          rel={block.external ? "noopener noreferrer" : undefined}
          className={btnClass}
          aria-disabled={block.disabled}
        >
          {inner}
        </a>
      </div>
    );
  }

  return (
    <div className={wrapper}>
      <button onClick={block.onClick} disabled={block.disabled} className={btnClass}>
        {inner}
      </button>
    </div>
  );
}

// ─── ButtonGroup ──────────────────────────────────────────────────────────────

const gapSizeMap: Record<string, string> = {
  none: "gap-0",
  xs: "gap-1",
  sm: "gap-2",
  md: "gap-3",
  lg: "gap-4",
  xl: "gap-6",
  "2xl": "gap-8",
};

export function ButtonGroup({ block }: { block: ButtonGroupBlock }) {
  const alignMap: Record<string, string> = {
    left: "justify-start",
    center: "justify-center",
    right: "justify-end",
  };

  return (
    <div
      className={`flex flex-wrap items-center ${alignMap[block.align ?? "left"]} ${gapSizeMap[block.gap ?? "sm"]} ${getSpacingClasses(block.mt, block.mb)}`}
    >
      {block.buttons.map((btn, i) => (
        <Button_
          key={i}
          block={{ type: "button", ...btn }}
        />
      ))}
    </div>
  );
}

// ─── Callout ──────────────────────────────────────────────────────────────────

const calloutVariants: Record<
  string,
  { bar: string; bg: string; title: string; icon: React.ReactNode }
> = {
  info: {
    bar: "bg-blue-500",
    bg: "bg-blue-50 border border-blue-100",
    title: "text-blue-900",
    icon: (
      <svg className="h-5 w-5 text-blue-500 shrink-0 mt-px" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clipRule="evenodd" />
      </svg>
    ),
  },
  warning: {
    bar: "bg-amber-400",
    bg: "bg-amber-50 border border-amber-100",
    title: "text-amber-900",
    icon: (
      <svg className="h-5 w-5 text-amber-500 shrink-0 mt-px" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
        <path fillRule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
      </svg>
    ),
  },
  success: {
    bar: "bg-emerald-500",
    bg: "bg-emerald-50 border border-emerald-100",
    title: "text-emerald-900",
    icon: (
      <svg className="h-5 w-5 text-emerald-500 shrink-0 mt-px" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
      </svg>
    ),
  },
  error: {
    bar: "bg-red-500",
    bg: "bg-red-50 border border-red-100",
    title: "text-red-900",
    icon: (
      <svg className="h-5 w-5 text-red-500 shrink-0 mt-px" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clipRule="evenodd" />
      </svg>
    ),
  },
  note: {
    bar: "bg-slate-400",
    bg: "bg-slate-50 border border-slate-200",
    title: "text-slate-800",
    icon: (
      <svg className="h-5 w-5 text-slate-400 shrink-0 mt-px" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
        <path d="M2.695 14.763l-1.262 3.154a.5.5 0 00.65.65l3.155-1.262a4 4 0 001.343-.885L17.5 5.5a2.121 2.121 0 00-3-3L3.58 13.42a4 4 0 00-.885 1.343z" />
      </svg>
    ),
  },
};

export function Callout({ block }: { block: CalloutBlock }) {
  const v = calloutVariants[block.variant ?? "info"];
  return (
    <div
      className={`relative flex gap-3.5 rounded-xl pl-5 pr-5 py-4 ${v.bg} ${getSpacingClasses(block.mt, block.mb)}`}
    >
      {/* Left accent bar */}
      <div className={`absolute left-0 top-3 bottom-3 w-1 rounded-full ${v.bar}`} />
      <div className="mt-px">{block.icon ?? v.icon}</div>
      <div className="flex-1 min-w-0">
        {block.title && (
          <p className={`font-semibold text-sm mb-1 ${v.title}`}>{block.title}</p>
        )}
        <div className="text-sm text-slate-700 leading-6">
          {renderInline(block.content)}
        </div>
      </div>
    </div>
  );
}

// ─── Quote ────────────────────────────────────────────────────────────────────

export function Quote({ block }: { block: QuoteBlock }) {
  return (
    <blockquote
      className={`relative border-l-4 border-blue-300 pl-6 pr-4 py-2 italic text-slate-600 text-lg leading-relaxed ${block.align ? `text-${block.align}` : ""} ${getSpacingClasses(block.mt, block.mb)}`}
    >
      <span className="absolute -top-3 left-4 text-6xl text-blue-100 font-serif leading-none select-none" aria-hidden>
        "
      </span>
      <p className="relative z-10">{block.content}</p>
      {block.cite && (
        <footer className="mt-3 text-sm not-italic text-slate-500">
          —{" "}
          {block.citeHref ? (
            <a href={block.citeHref} className="text-blue-600 hover:underline">
              {block.cite}
            </a>
          ) : (
            block.cite
          )}
        </footer>
      )}
    </blockquote>
  );
}

// ─── Code ─────────────────────────────────────────────────────────────────────

export function Code({ block }: { block: CodeBlock }) {
  return (
    <div className={`rounded-xl overflow-hidden border border-slate-200 shadow-sm ${getSpacingClasses(block.mt, block.mb)}`}>
      {(block.filename || block.language) && (
        <div className="flex items-center justify-between bg-slate-100 border-b border-slate-200 px-4 py-2">
          <span className="text-xs font-mono text-slate-500">
            {block.filename ?? block.language}
          </span>
          {block.language && !block.filename && (
            <span className="text-xs font-mono bg-slate-200 text-slate-600 px-2 py-0.5 rounded">
              {block.language}
            </span>
          )}
        </div>
      )}
      <pre className="bg-slate-950 text-slate-100 text-sm font-mono overflow-x-auto p-5 leading-6">
        <code>{block.code}</code>
      </pre>
    </div>
  );
}

// ─── Divider ──────────────────────────────────────────────────────────────────

export function Divider({ block }: { block: DividerBlock }) {
  const styleMap: Record<string, string> = {
    solid: "border-slate-200",
    dashed: "border-dashed border-slate-300",
    dotted: "border-dotted border-slate-300",
    fade: "border-0",
  };

  return (
    <div className={`relative ${getSpacingClasses(block.mt ?? "lg", block.mb ?? "lg")}`}>
      {block.style === "fade" ? (
        <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
      ) : (
        <hr className={`border-t ${styleMap[block.style ?? "solid"]}`} />
      )}
      {block.label && (
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="bg-white px-3 text-xs text-slate-400 uppercase tracking-wider font-medium">
            {block.label}
          </span>
        </span>
      )}
    </div>
  );
}

// ─── Spacer ───────────────────────────────────────────────────────────────────

const spacerSizeMap: Record<string, string> = {
  none: "h-0",
  xs: "h-2",
  sm: "h-3",
  md: "h-5",
  lg: "h-8",
  xl: "h-12",
  "2xl": "h-20",
};

export function Spacer({ block }: { block: SpacerBlock }) {
  return <div className={spacerSizeMap[block.size]} aria-hidden />;
}

// ─── Table ────────────────────────────────────────────────────────────────────

export function Table({ block }: { block: TableBlock }) {
  return (
    <div className={`overflow-x-auto rounded-xl border border-slate-200 shadow-sm ${getSpacingClasses(block.mt, block.mb)}`}>
      <table className="w-full text-sm text-left">
        {block.caption && (
          <caption className="py-2 px-4 text-xs text-slate-500 text-left bg-slate-50 border-b border-slate-200">
            {block.caption}
          </caption>
        )}
        <thead className="bg-slate-50 border-b border-slate-200">
          <tr>
            {block.headers.map((h, i) => (
              <th
                key={i}
                scope="col"
                className={`font-semibold text-slate-700 ${block.compact ? "px-3 py-2" : "px-4 py-3"}`}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-slate-100">
          {block.rows.map((row, ri) => (
            <tr
              key={ri}
              className={block.striped && ri % 2 === 1 ? "bg-slate-50" : ""}
            >
              {row.map((cell, ci) => (
                <td
                  key={ci}
                  className={`text-slate-700 ${block.compact ? "px-3 py-2" : "px-4 py-3"} ${block.bordered ? "border-r border-slate-200 last:border-0" : ""}`}
                >
                  {typeof cell === "string" ? cell : renderInline(cell)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ─── Embed ────────────────────────────────────────────────────────────────────

export function Embed({ block }: { block: EmbedBlock }) {
  const ratioMap: Record<string, string> = {
    "16/9": "aspect-video",
    "4/3": "aspect-[4/3]",
    "1/1": "aspect-square",
  };

  return (
    <div className={`rounded-xl overflow-hidden border border-slate-200 shadow-sm ${ratioMap[block.aspectRatio ?? "16/9"]} ${getSpacingClasses(block.mt, block.mb)}`}>
      <iframe
        src={block.src}
        title={block.title}
        className="w-full h-full"
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
}

// ─── Badge ────────────────────────────────────────────────────────────────────

const badgeColors: Record<string, string> = {
  blue: "bg-blue-100 text-blue-700 ring-blue-200/60",
  green: "bg-emerald-100 text-emerald-700 ring-emerald-200/60",
  red: "bg-red-100 text-red-700 ring-red-200/60",
  yellow: "bg-amber-100 text-amber-700 ring-amber-200/60",
  purple: "bg-purple-100 text-purple-700 ring-purple-200/60",
  gray: "bg-slate-100 text-slate-600 ring-slate-200/60",
};

export function Badge({ block }: { block: BadgeBlock }) {
  const sizeClass = block.size === "sm" ? "text-xs px-2 py-0.5" : "text-xs px-2.5 py-1";
  return (
    <span
      className={`inline-flex items-center font-medium rounded-full ring-1 ring-inset ${badgeColors[block.color ?? "blue"]} ${sizeClass} ${getSpacingClasses(block.mt, block.mb)}`}
    >
      {block.label}
    </span>
  );
}

export function BadgeGroup({ block }: { block: BadgeGroupBlock }) {
  const alignMap: Record<string, string> = {
    left: "justify-start",
    center: "justify-center",
    right: "justify-end",
  };
  return (
    <div
      className={`flex flex-wrap gap-2 ${alignMap[block.align ?? "left"]} ${getSpacingClasses(block.mt, block.mb)}`}
    >
      {block.badges.map((b, i) => (
        <Badge key={i} block={{ type: "badge", ...b }} />
      ))}
    </div>
  );
}

// ─── Card ─────────────────────────────────────────────────────────────────────

export function Card({ block, renderBlocks }: { block: CardBlock; renderBlocks: (blocks: RichTextBlock[]) => React.ReactNode }) {
  const inner = (
    <>
      {block.image && (
        <div className="overflow-hidden rounded-t-xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={block.image.src}
            alt={block.image.alt}
            className="w-full object-cover aspect-video"
          />
        </div>
      )}
      <div className="p-5">
        {block.title && (
          <p className="font-semibold text-slate-900 text-base mb-0.5">{block.title}</p>
        )}
        {block.subtitle && (
          <p className="text-sm text-slate-500 mb-3">{block.subtitle}</p>
        )}
        {renderBlocks(block.content)}
      </div>
    </>
  );

  const containerClass = `rounded-xl overflow-hidden ${block.border !== false ? "border border-slate-200" : ""} ${block.shadow ? "shadow-md" : ""} ${getSpacingClasses(block.mt, block.mb)}`;

  if (block.href) {
    return (
      <a href={block.href} className={`block group hover:shadow-lg transition-shadow duration-200 ${containerClass}`}>
        {inner}
      </a>
    );
  }

  return <div className={containerClass}>{inner}</div>;
}

// ─── Grid ─────────────────────────────────────────────────────────────────────

const gridColsMap: Record<number, string> = {
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
};

export function Grid({
  block,
  renderBlocks,
}: {
  block: GridBlock;
  renderBlocks: (blocks: RichTextBlock[]) => React.ReactNode;
}) {
  return (
    <div
      className={`grid ${gridColsMap[block.columns]} ${gapSizeMap[block.gap ?? "md"]} ${getSpacingClasses(block.mt, block.mb)}`}
    >
      {block.items.map((item, i) => (
        <div key={i}>{renderBlocks([item])}</div>
      ))}
    </div>
  );
}
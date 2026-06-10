// ─── RichText Block Types ────────────────────────────────────────────────────

export type Spacing = "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
export type Align = "left" | "center" | "right";
export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;
export type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";
export type ButtonSize = "sm" | "md" | "lg";
export type ListStyle = "disc" | "decimal" | "check" | "arrow" | "none";
export type CalloutVariant = "info" | "warning" | "success" | "error" | "note";
export type DividerStyle = "solid" | "dashed" | "dotted" | "fade";

// ─── Inline Marks ─────────────────────────────────────────────────────────────

export interface InlineMark {
  text: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  code?: boolean;
  strikethrough?: boolean;
  link?: {
    href: string;
    external?: boolean;
    label?: string; // aria-label
  };
}

// ─── Block Definitions ────────────────────────────────────────────────────────

export interface BaseBlock {
  id?: string;
  mt?: Spacing; // margin-top override
  mb?: Spacing; // margin-bottom override
}

export interface ParagraphBlock extends BaseBlock {
  type: "paragraph";
  content: (string | InlineMark)[];
  align?: Align;
  size?: "sm" | "base" | "lg" | "xl";
  muted?: boolean;
  lead?: boolean; // larger intro paragraph styling
}

export interface HeadingBlock extends BaseBlock {
  type: "heading";
  level: HeadingLevel;
  content: string;
  anchor?: string; // generates id + anchor link
  align?: Align;
  subtitle?: string;
}

export interface ListBlock extends BaseBlock {
  type: "list";
  style: ListStyle;
  items: (string | InlineMark[])[];
  nested?: ListBlock; // for nesting
  tight?: boolean; // reduce spacing between items
  columns?: 1 | 2 | 3; // multi-column list layout
}

export interface ImageBlock extends BaseBlock {
  type: "image";
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
  align?: "left" | "center" | "right" | "full";
  rounded?: boolean;
  shadow?: boolean;
  aspectRatio?: "auto" | "16/9" | "4/3" | "1/1" | "3/2";
  href?: string; // clickable image
}

export interface ButtonBlock extends BaseBlock {
  type: "button";
  label: string;
  href?: string;
  onClick?: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  external?: boolean;
  disabled?: boolean;
  align?: Align;
  fullWidth?: boolean;
}

export interface ButtonGroupBlock extends BaseBlock {
  type: "button-group";
  buttons: Omit<ButtonBlock, "type">[];
  align?: Align;
  gap?: Spacing;
}

export interface CalloutBlock extends BaseBlock {
  type: "callout";
  variant?: CalloutVariant;
  title?: string;
  content: (string | InlineMark)[];
  icon?: React.ReactNode;
}

export interface QuoteBlock extends BaseBlock {
  type: "quote";
  content: string;
  cite?: string;
  citeHref?: string;
  align?: Align;
}

export interface CodeBlock extends BaseBlock {
  type: "code";
  code: string;
  language?: string;
  filename?: string;
  showLineNumbers?: boolean;
  highlight?: number[]; // line numbers to highlight
}

export interface DividerBlock extends BaseBlock {
  type: "divider";
  style?: DividerStyle;
  label?: string; // optional centered label
  spacing?: Spacing;
}

export interface SpacerBlock extends BaseBlock {
  type: "spacer";
  size: Spacing;
}

export interface TableBlock extends BaseBlock {
  type: "table";
  headers: string[];
  rows: (string | InlineMark[])[][];
  caption?: string;
  striped?: boolean;
  bordered?: boolean;
  compact?: boolean;
}

export interface GridBlock extends BaseBlock {
  type: "grid";
  columns: 2 | 3 | 4;
  gap?: Spacing;
  items: RichTextBlock[];
}

export interface CardBlock extends BaseBlock {
  type: "card";
  title?: string;
  subtitle?: string;
  content: RichTextBlock[];
  image?: Omit<ImageBlock, "type">;
  href?: string;
  border?: boolean;
  shadow?: boolean;
}

export interface EmbedBlock extends BaseBlock {
  type: "embed";
  src: string;
  title: string;
  aspectRatio?: "16/9" | "4/3" | "1/1";
}

export interface BadgeBlock extends BaseBlock {
  type: "badge";
  label: string;
  color?: "blue" | "green" | "red" | "yellow" | "purple" | "gray";
  size?: "sm" | "md";
}

export interface BadgeGroupBlock extends BaseBlock {
  type: "badge-group";
  badges: Omit<BadgeBlock, "type">[];
  align?: Align;
}

// ─── Union ────────────────────────────────────────────────────────────────────

export type RichTextBlock =
  | ParagraphBlock
  | HeadingBlock
  | ListBlock
  | ImageBlock
  | ButtonBlock
  | ButtonGroupBlock
  | CalloutBlock
  | QuoteBlock
  | CodeBlock
  | DividerBlock
  | SpacerBlock
  | TableBlock
  | GridBlock
  | CardBlock
  | EmbedBlock
  | BadgeBlock
  | BadgeGroupBlock;

// ─── Root Props ───────────────────────────────────────────────────────────────

export interface RichTextProps {
  blocks: RichTextBlock[];
  /** Base font size for the container */
  baseSize?: "sm" | "base" | "lg";
  /** Max width preset */
  maxWidth?: "prose" | "wide" | "full" | "none";
  /** Extra className on the root wrapper */
  className?: string;
}
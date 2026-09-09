export type RichTextWidth = 'prose' | 'wide' | 'full';

export interface RichTextProps {
  /** Markdown source. Keep layout components such as cards and galleries outside it. */
  content: string;
  /** Reading-width preset. */
  maxWidth?: RichTextWidth;
  /** Slightly tighter typography for summaries and card content. */
  variant?: 'article' | 'compact';
  className?: string;
}

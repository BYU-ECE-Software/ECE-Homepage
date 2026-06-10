"use client";

import React from "react";
import type { RichTextBlock, RichTextProps } from "@/types/RichText";
import {
  Paragraph,
  Heading,
  List,
  ImageBlock_,
  Button_,
  ButtonGroup,
  Callout,
  Quote,
  Code,
  Divider,
  Spacer,
  Table,
  Embed,
  Badge,
  BadgeGroup,
  Card,
  Grid,
} from "./RichTextBlocks";

// ─── Block Renderer ───────────────────────────────────────────────────────────

function renderBlock(block: RichTextBlock, renderBlocks: (blocks: RichTextBlock[]) => React.ReactNode): React.ReactNode {
  const key = block.id ?? Math.random().toString(36).slice(2);

  switch (block.type) {
    case "paragraph":
      return <Paragraph key={key} block={block} />;
    case "heading":
      return <Heading key={key} block={block} />;
    case "list":
      return <List key={key} block={block} />;
    case "image":
      return <ImageBlock_ key={key} block={block} />;
    case "button":
      return <Button_ key={key} block={block} />;
    case "button-group":
      return <ButtonGroup key={key} block={block} />;
    case "callout":
      return <Callout key={key} block={block} />;
    case "quote":
      return <Quote key={key} block={block} />;
    case "code":
      return <Code key={key} block={block} />;
    case "divider":
      return <Divider key={key} block={block} />;
    case "spacer":
      return <Spacer key={key} block={block} />;
    case "table":
      return <Table key={key} block={block} />;
    case "embed":
      return <Embed key={key} block={block} />;
    case "badge":
      return <Badge key={key} block={block} />;
    case "badge-group":
      return <BadgeGroup key={key} block={block} />;
    case "card":
      return <Card key={key} block={block} renderBlocks={renderBlocks} />;
    case "grid":
      return <Grid key={key} block={block} renderBlocks={renderBlocks} />;
    default:
      if (process.env.NODE_ENV === "development") {
        // @ts-expect-error unknown block type guard
        console.warn("[RichText] Unknown block type:", block.type);
      }
      return null;
  }
}

// ─── Main Component ───────────────────────────────────────────────────────────

const maxWidthMap = {
  prose: "max-w-prose",
  wide: "max-w-4xl",
  full: "max-w-full",
  none: "",
};

const baseSizeMap = {
  sm: "text-sm",
  base: "text-base",
  lg: "text-lg",
};

export function RichText({ blocks, baseSize = "base", maxWidth = "prose", className = "" }: RichTextProps) {
  const renderBlocks = (bs: RichTextBlock[]) =>
    bs.map((b, i) => <React.Fragment key={b.id ?? i}>{renderBlock(b, renderBlocks)}</React.Fragment>);

  return (
    <div
      className={[
        "rich-text",
        "space-y-5",
        maxWidthMap[maxWidth],
        baseSizeMap[baseSize],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {renderBlocks(blocks)}
    </div>
  );
}

export default RichText;
export type { RichTextProps, RichTextBlock } from "@/types/RichText";
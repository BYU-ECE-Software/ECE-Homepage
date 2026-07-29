import ArticleLayout from "@/components/general/ArticleLayout";

const exampleArticle = `Engineering articles usually need a small, predictable vocabulary: headings, paragraphs, emphasis, links, lists, quotations, code, tables, and images. Markdown provides that vocabulary without requiring authors to construct a nested array of presentation objects.

## Authoring an article

Store the article body as Markdown in a data file, CMS field, or standalone \`.md\` file. Metadata such as title, author, publish date, summary, and hero image belongs beside the body—not embedded inside it.

### Supported content

- **Bold**, *italic*, and inline \`code\`
- Ordered and unordered lists
- [Internal links](/graduate) and external links
- Quotes, code blocks, tables, and images

> Layout components such as cards, galleries, newsletter forms, and related stories should remain typed React components outside article prose.

## Example

~~~tsx
<ArticleLayout
  title="A department story"
  author="Author Name"
  published="July 21, 2026"
  content={markdown}
/>
~~~

This keeps the article renderer server-side, makes content portable, and prevents editorial data from containing callbacks or arbitrary React nodes.`;

export default function RichTextExample() {
  return (
    <ArticleLayout
      eyebrow="Component example"
      title="Markdown-backed articles"
      description="The simplified RichText component handles article prose while normal components handle page layout."
      author="BYU ECE"
      published="July 21, 2026"
      content={exampleArticle}
    />
  );
}

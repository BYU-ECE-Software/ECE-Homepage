import fs from "fs";
import path from "path";
import { OverviewFile } from "./majors/types";

// Strips leading whitespace from every line. Markdown treats 4+ spaces of
// indentation as a code block, so an inline template literal indented to
// match surrounding code would otherwise render as code instead of
// formatted text. Only applied to inline strings, since Markdown files on
// disk are written without that constraint and may use indentation
// intentionally (e.g. for an actual code block).
function dedent(text: string): string {
  return text
    .split("\n")
    .map((line) => line.replace(/^[ \t]+/, ""))
    .join("\n")
    .trim();
}

// Resolves the `overview` field of a PageContent into a final Markdown
// string. If given a plain string, dedents and returns it. If given a
// { file } reference, reads that file from the undergraduate content
// directory at build time (this runs in a server component during
// `next build`, never in the browser). The basename keeps reads scoped to
// that directory and prevents content configuration from traversing the project.
export function resolveOverview(overview: string | OverviewFile): string {
  if (typeof overview === "string") {
    return dedent(overview);
  }

  const absolutePath = path.join(
    process.cwd(),
    "data",
    "undergraduate",
    "content",
    path.basename(overview.file),
  );

  try {
    return fs.readFileSync(absolutePath, "utf-8");
  } catch {
    throw new Error(
      `Could not read overview markdown file at "${overview.file}" (resolved to "${absolutePath}"). ` +
        `Check that the path is correct and relative to the project root.`
    );
  }
}


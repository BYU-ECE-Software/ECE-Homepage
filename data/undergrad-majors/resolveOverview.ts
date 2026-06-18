import fs from "fs";
import path from "path";
import { OverviewFile } from "./types";

// Resolves the `overview` field of a PageContent into a final Markdown
// string. If given a plain string, returns it unchanged. If given a
// { file } reference, reads that file from disk relative to the project
// root, at build time (this runs in a server component during
// `next build`, never in the browser).
export function resolveOverview(overview: string | OverviewFile): string {
  if (typeof overview === "string") {
    return overview;
  }

  const absolutePath = path.join(process.cwd(), overview.file);

  try {
    return fs.readFileSync(absolutePath, "utf-8");
  } catch (error) {
    throw new Error(
      `Could not read overview markdown file at "${overview.file}" (resolved to "${absolutePath}"). ` +
        `Check that the path is correct and relative to the project root.`
    );
  }
}

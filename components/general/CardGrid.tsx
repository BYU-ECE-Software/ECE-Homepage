import { ReactNode } from "react";

interface CardGridProps {
  children: ReactNode;
  /**
   * Number of columns at desktop breakpoint.
   * Collapses to 2 at md, 1 at sm automatically.
   * Supports 2, 3, or 4. Default: 3.
   */
  columns?: 2 | 3 | 4;
  /** Optional section heading rendered above the grid. */
  title?: string;
  /** Tailwind padding class for the outer section. Default: "px-10 pt-4 pb-12". */
  paddingClass?: string;
}

const colClasses: Record<number, string> = {
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
};

export default function CardGrid({
  children,
  columns = 3,
  title,
  paddingClass = "px-10 pt-4 pb-12",
}: CardGridProps) {
  return (
    <section className={`w-full bg-white ${paddingClass}`}>
      {title && (
        <h2 className="text-xl font-bold text-gray-900 text-center mb-6">
          {title}
        </h2>
      )}
      <div
        className={`grid ${colClasses[columns] ?? colClasses[3]} gap-8 max-w-6xl mx-auto`}
      >
        {children}
      </div>
    </section>
  );
}

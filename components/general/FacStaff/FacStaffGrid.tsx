import FacStaffCard, { FacStaffMember } from "./FacStaffCard";

interface FacStaffGridProps {
  /** Section heading text, e.g. "FACULTY" */
  title?: string;
  /** Array of faculty member data objects */
  members: FacStaffMember[];
  /**
   * Number of columns at the largest breakpoint.
   * Supported: 2 | 3 | 4 (default: 4)
   */
  columns?: 2 | 3 | 4;
}

const colClasses: Record<number, string> = {
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
};

export default function FacStaffGrid({
  title,
  members = [],
  columns = 4,
}: FacStaffGridProps) {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12">
      {title && (
        <h2 className="text-center text-xs font-bold tracking-[0.18em] uppercase text-gray-900 mb-10">
          {title}
        </h2>
      )}

      <div className={`grid ${colClasses[columns]} gap-y-10 gap-x-6`}>
        {members.map((member, i) => (
          <FacStaffCard key={i} {...member} />
        ))}
      </div>
    </section>
  );
}
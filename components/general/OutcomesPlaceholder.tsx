const STATS = ["Average Starting Salary", "Job Placement Rate", "Graduate School Continuation Rate"];

// Live site shows real outcome stats per major; ours aren't collected yet.
// Swap this for actual figures once they're available instead of guessing.
export default function OutcomesPlaceholder() {
  return (
    <div className="mt-10">
      <h2 className="text-xl font-semibold text-byu-navy">Career Outcomes</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        {STATS.map((label) => (
          <div
            key={label}
            className="rounded-lg border border-dashed border-byu-medium-gray/50 bg-slate-50 p-6 text-center"
          >
            <p className="text-2xl font-semibold text-byu-medium-gray">Coming Soon</p>
            <p className="mt-1 text-sm text-byu-medium-gray">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const STATS = [
  'Average Starting Salary',
  'Job Placement Rate',
  'Graduate School Continuation Rate',
];

// Live site shows real outcome stats per major; ours aren't collected yet.
// Swap this for actual figures once they're available instead of guessing.
export default function OutcomesPlaceholder() {
  return (
    <div className="mt-10">
      <h2 className="text-byu-navy text-xl font-semibold">Career Outcomes</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        {STATS.map((label) => (
          <div
            key={label}
            className="border-byu-medium-gray/50 rounded-lg border border-dashed bg-slate-50 p-6 text-center"
          >
            <p className="text-byu-medium-gray text-2xl font-semibold">Coming Soon</p>
            <p className="text-byu-medium-gray mt-1 text-sm">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

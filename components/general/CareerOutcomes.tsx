import type { OutcomesData } from '@/data/undergraduate/majors/types';

export default function CareerOutcomes({ startingSalary, placementRate, gradSchoolRate, sourceLabel }: OutcomesData) {
  const stats = [
    { label: 'Average Starting Salary', value: startingSalary },
    { label: 'Job Placement Rate', value: placementRate },
    ...(gradSchoolRate
      ? [{ label: 'Graduate School Continuation Rate', value: gradSchoolRate }]
      : []),
  ];

  return (
    <div className="mt-10">
      <h2 className="text-byu-navy text-xl font-semibold">Career Outcomes</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.label} className="border-byu-medium-gray/50 rounded-lg border bg-slate-50 p-6 text-center">
            <p className="text-byu-navy text-2xl font-semibold">{stat.value}</p>
            <p className="text-byu-medium-gray mt-1 text-sm">{stat.label}</p>
          </div>
        ))}
      </div>
      <p className="text-byu-medium-gray mt-3 text-xs">Source: {sourceLabel}</p>
    </div>
  );
}

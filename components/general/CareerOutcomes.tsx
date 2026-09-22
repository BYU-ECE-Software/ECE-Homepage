import type { OutcomesData } from '@/data/undergraduate/majors/types';

export default function CareerOutcomes({
  startingSalary,
  startingSalaryDesc,
  placementRate,
  placementRateDesc,
  gradSchoolRate,
  gradSchoolRateDesc,
  sourceLabel,
}: OutcomesData) {
  const stats = [
    { value: startingSalary, desc: startingSalaryDesc },
    { value: placementRate, desc: placementRateDesc },
    ...(gradSchoolRate && gradSchoolRateDesc
      ? [{ value: gradSchoolRate, desc: gradSchoolRateDesc }]
      : []),
  ];

  return (
    <div className="relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] mt-10 grid min-h-52 w-screen place-items-center bg-sky-50 px-6 py-12">
      <div className="mx-auto w-full max-w-7xl">
        <div className={`grid gap-6 ${stats.length === 3 ? 'sm:grid-cols-3' : 'sm:grid-cols-2'}`}>
          {stats.map((stat) => (
            <div key={stat.desc} className="text-center">
              <p className="text-byu-navy text-4xl font-bold">{stat.value}</p>
              <p className="text-byu-dark-gray mt-2 text-sm leading-snug">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <p className="text-byu-medium-gray absolute bottom-3 text-xs">
        Source: {sourceLabel}
      </p>
    </div>
  );
}

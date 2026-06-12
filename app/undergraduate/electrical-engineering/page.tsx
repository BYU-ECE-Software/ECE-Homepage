// import PageTitle from "@/components/layout/PageTitle";

// export default function ElectricalEngineering() {
//   return (
//     <PageTitle title="Electrical Engineering"/>
//   );
// }

import CardGrid from "@/components/general/CardGrid";
import StatsBanner from "@/components/general/StatsBanner";
 
// ── Flowchart cards ────────────────────────────────────────────────────────────
 
function FlowchartCard({ title, description }: { title: string; description: string }) {
  return (
    <a
      href="#"
      className="group block border border-gray-200 rounded overflow-hidden hover:shadow-md transition-shadow bg-white"
    >
      {/* Swap this div for <Image> when you have real flowchart images */}
      <div className="bg-gray-100 h-40 flex items-center justify-center">
        <div className="grid grid-cols-4 gap-1 p-3 opacity-40 pointer-events-none">
          {Array.from({ length: 16 }).map((_, i) => (
            <div key={i} className="bg-blue-400 rounded-sm h-3" />
          ))}
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-[#002E5D] text-base group-hover:underline">{title}</h3>
        <p className="text-gray-600 text-sm mt-1 leading-snug">{description}</p>
      </div>
    </a>
  );
}
 
// ── Resource cards ─────────────────────────────────────────────────────────────
 
function ResourceCard({
  emoji,
  title,
  description,
  bgColor = "bg-gray-50",
}: {
  emoji: string;
  title: string;
  description: string;
  bgColor?: string;
}) {
  return (
    <a
      href="#"
      className="group block border border-gray-200 rounded overflow-hidden hover:shadow-md transition-shadow bg-white"
    >
      <div className={`${bgColor} h-40 flex items-center justify-center text-5xl`}>{emoji}</div>
      <div className="p-4">
        <h3 className="font-bold text-[#002E5D] text-base group-hover:underline">{title}</h3>
        <p className="text-gray-600 text-sm mt-1 leading-snug">{description}</p>
      </div>
    </a>
  );
}
 
// ── Page ───────────────────────────────────────────────────────────────────────
 
export default function EEUndergraduatePage() {
  return (
    <>
      {/* Hero heading banner — large centered text, navy bg */}
      <StatsBanner
        heading="Electrical Engineering"
        subheading="Undergraduate Students"
        stats={[]}
        bgColorClass="bg-[#002E5D]"
        textColorClass="text-white"
        mutedTextColorClass="text-blue-200"
        textPosition="center"
        statTextSize="xl"
      />
 
      {/* Outcome stats banner — slightly lighter, left-aligned on desktop */}
      <StatsBanner
        heading=""
        stats={[
          { value: "$86.8k", label: "BYU Student Average Starting Salary (2023–2024)" },
          { value: "38%", label: "BYU EE Undergrads Continue to Grad School" },
          { value: "100%", label: "Job-Seeking BYU EE Graduates Employed Within 6 Months (2022–2024)" },
        ]}
        bgColorClass="bg-[#003DA5]"
        textColorClass="text-white"
        mutedTextColorClass="text-blue-200"
        textPosition="center"
        statTextSize="xl"
      />
 
      {/* Flowcharts + Advisor */}
      <CardGrid columns={3} paddingClass="px-10 pt-8 pb-4">
        {[
          { title: "EE Flowchart 26–27", desc: "Course requirements for students who started the program in 2026–27. See your advisor if you have questions." },
          { title: "EE Flowchart 25–26", desc: "Course requirements for students who started the program in 2025–26. See your advisor if you have questions." },
          { title: "EE Flowchart 24–25", desc: "Course requirements for students who started the program in 2024–25. See your advisor if you have questions." },
          { title: "EE Flowchart 23–24", desc: "Course requirements for students who started the program in 2023–24. See your advisor if you have questions." },
          { title: "EE Flowchart 22–23", desc: "Course requirements for students who started the program in 2022–23. See your advisor if you have questions." },
        ].map((fc) => (
          <FlowchartCard key={fc.title} title={fc.title} description={fc.desc} />
        ))}
 
        {/* Advisor card */}
        <a
          href="#"
          className="group block border border-gray-200 rounded overflow-hidden hover:shadow-md transition-shadow bg-white"
        >
          <div className="bg-blue-50 h-40 flex items-center justify-center text-5xl">🎓</div>
          <div className="p-4">
            <h3 className="font-bold text-[#002E5D] text-base group-hover:underline">Speak with an Advisor</h3>
            <p className="text-gray-600 text-sm mt-1 leading-snug">
              Book an appointment to speak with an undergraduate advisor.
            </p>
          </div>
        </a>
      </CardGrid>
 
      {/* Resources */}
      <CardGrid columns={3} paddingClass="px-10 pt-4 pb-16">
        {[
          { emoji: "💼", title: "Jobs and Internships", desc: "Career Services Director Andrea Merriman can assist with full-time, internship, or part-time employment needs.", bg: "bg-blue-50" },
          { emoji: "🤝", title: "Connect with Alumni", desc: "Connect directly with BYU ECE alumni to explore career paths, ask questions, and receive professional mentorship.", bg: "bg-indigo-50" },
          { emoji: "🔬", title: "IMMERSE", desc: "Participate in faculty-mentored engineering research as an undergraduate student.", bg: "bg-cyan-50" },
          { emoji: "🎓", title: "Department Scholarships", desc: "Learn more about department scholarships available to undergraduate students.", bg: "bg-yellow-50" },
          { emoji: "📚", title: "Classes", desc: "Courses currently offered through the department.", bg: "bg-green-50" },
          { emoji: "📖", title: "University Catalog", desc: "Access the University Catalog for course descriptions and the EE MAP sheet.", bg: "bg-orange-50" },
        ].map((r) => (
          <ResourceCard key={r.title} emoji={r.emoji} title={r.title} description={r.desc} bgColor={r.bg} />
        ))}
      </CardGrid>
    </>
  );
}
 
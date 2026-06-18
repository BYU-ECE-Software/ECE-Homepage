interface Stat {
  value: string;
  label: string;
}
 
type TextSize = "sm" | "md" | "lg" | "xl";
type TextPosition = "left" | "center" | "right";
 
interface StatsBannerProps {
  /** Main heading text */
  heading: string;
  /** Subheading/eyebrow text rendered below the heading */
  subheading?: string;
  /** Array of stats to display */
  stats: Stat[];
  /** Background color as a Tailwind class or hex. Default: "bg-[#002E5D]" */
  bgColorClass?: string;
  /** Text color class. Default: "text-white" */
  textColorClass?: string;
  /** Muted text color for labels/subheading. Default: "text-blue-200" */
  mutedTextColorClass?: string;
  /** Size of the stat values. Default: "lg" */
  statTextSize?: TextSize;
  /** Alignment of all text content. Default: "center" */
  textPosition?: TextPosition;
}
 
const statSizeClasses: Record<TextSize, string> = {
  sm: "text-2xl",
  md: "text-3xl",
  lg: "text-4xl",
  xl: "text-5xl",
};
 
const positionClasses: Record<TextPosition, string> = {
  left: "text-left items-start",
  center: "text-center items-center",
  right: "text-right items-end",
};
 
export default function StatsBanner({
  heading,
  subheading,
  stats,
  bgColorClass = "bg-[#002E5D]",
  textColorClass = "text-white",
  mutedTextColorClass = "text-blue-200",
  statTextSize = "lg",
  textPosition = "center",
}: StatsBannerProps) {
  const pos = positionClasses[textPosition];
 
  return (
    <section className={`${bgColorClass} ${textColorClass} py-12 px-4`}>
      <div className={`max-w-5xl mx-auto flex flex-col ${pos}`}>
        <h2 className="text-3xl font-bold mb-1 tracking-wide uppercase">{heading}</h2>
        {subheading && (
          <p className={`${mutedTextColorClass} uppercase tracking-widest text-sm mb-10`}>
            {subheading}
          </p>
        )}
 
        <div
          className={`grid grid-cols-1 md:grid-cols-${stats.length <= 3 ? stats.length : 3} gap-8 w-full mt-4`}
        >
          {stats.map((stat) => (
            <div key={stat.value} className={`flex flex-col ${pos}`}>
              <span className={`${statSizeClasses[statTextSize]} font-extrabold tracking-tight`}>
                {stat.value}
              </span>
              <span className={`${mutedTextColorClass} text-sm mt-2 max-w-[220px] leading-snug uppercase tracking-wide`}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
 
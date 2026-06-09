interface DescriptionProps {
  /** Main bold paragraph text. */
  text: string;
  /** Lighter instructional line rendered below the main text. */
  subtext?: string;
  /** Text alignment. Default: "center". */
  align?: "center" | "left";
  /** Tailwind max-width class for the inner container. Default: "max-w-3xl". */
  maxWidthClass?: string;
}

export default function Description({
  text,
  subtext,
  align = "center",
  maxWidthClass = "max-w-3xl",
}: DescriptionProps) {
  const alignClass = align === "center" ? "text-center" : "text-left";

  return (
    <section className="w-full bg-white px-6 pt-10 pb-6">
      <div className={`${maxWidthClass} mx-auto ${alignClass}`}>
        <p className="text-sm font-bold text-gray-900 leading-relaxed mb-3">
          {text}
        </p>
        {subtext && (
          <p className="text-sm text-gray-700 leading-relaxed">{subtext}</p>
        )}
      </div>
    </section>
  );
}

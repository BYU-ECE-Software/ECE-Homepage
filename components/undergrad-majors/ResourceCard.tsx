import Link from "next/link";

interface ResourceCardProps {
  title: string;
  description: string;
  href: string;
  image: string;
}

export default function ResourceCard({
  title,
  description,
  href,
  image,
}: ResourceCardProps) {
  return (
    <Link
      href={href}
      className="overflow-hidden rounded-lg border border-gray-200 bg-white transition hover:shadow-md"
    >
      <div className="h-48 bg-gray-200">
        {/* Replace with next/image later */}
        <div className="flex h-full items-center justify-center text-byu-medium-gray">
          Image Placeholder
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-lg font-semibold text-byu-navy">{title}</h3>

        <p className="mt-2 text-sm text-byu-medium-gray">{description}</p>

        <span className="mt-4 inline-block font-medium text-byu-royal">
          Learn More →
        </span>
      </div>
    </Link>
  );
}

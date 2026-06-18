import Image from "next/image";
import Link from "next/link";

interface ResourceCardProps {
  title: string;
  description: string;
  href: string;
  image: string;
  linkText?: string;
}

export default function ResourceCard({
  title,
  description,
  href,
  image,
  linkText,
}: ResourceCardProps) {
  return (
    <Link
      href={href}
      className="overflow-hidden rounded-lg border border-gray-200 bg-white transition hover:shadow-md"
    >
      <div className="relative h-48 bg-gray-200">
        <Image
          src={image}
          alt={title}
          fill
          unoptimized
          className="object-cover"
        />
      </div>

      <div className="p-6">
        <h3 className="text-lg font-semibold text-byu-navy">{title}</h3>

        <p className="mt-2 text-sm text-byu-medium-gray">{description}</p>

        {linkText && (
          <span className="mt-4 inline-block font-medium text-byu-royal">
            {linkText}
          </span>
        )}
      </div>
    </Link>
  );
}
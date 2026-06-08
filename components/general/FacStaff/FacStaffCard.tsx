import Image from "next/image";
import Link from "next/link";

export interface FacStaffMember {
  name: string;
  title?: string;
  email?: string;
  phone?: string;
  office?: string;
  /** Path relative to /public, e.g. "/faculty/beard.jpg" */
  image?: string;
  /** Optional URL — wraps photo + name in a Next.js Link */
  link?: string;
}

export default function FacStaffCard({
  name,
  title,
  email,
  phone,
  office,
  image,
  link,
}: FacStaffMember) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const PhotoAndName = (
    <>
      <div className="relative w-[130px] h-[130px] rounded-full overflow-hidden bg-gray-100 mb-3 flex-shrink-0 transition-shadow duration-200 group-hover:shadow-lg">
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            sizes="130px"
            className="object-cover object-top"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-2xl font-bold text-gray-500 select-none">
            {initials}
          </div>
        )}
      </div>
      <span className="text-[0.85rem] font-bold text-gray-900 leading-snug group-hover:underline underline-offset-2">
        {name}
      </span>
    </>
  );

  return (
    <div className="flex flex-col items-center text-center">
      {link ? (
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-center"
        >
          {PhotoAndName}
        </Link>
      ) : (
        <div className="group flex flex-col items-center cursor-default">
          {PhotoAndName}
        </div>
      )}

      <div className="mt-1.5 flex flex-col items-center gap-0.5">
        {title && (
          <p className="text-[0.82rem] font-semibold text-gray-900 leading-snug mb-1" style={{ fontFamily: "'Georgia', serif" }}>
            {title}
          </p>
        )}
        {email && (
          <a
            href={`mailto:${email}`}
            className="text-[0.76rem] text-gray-600 hover:text-blue-700 hover:underline transition-colors"
          >
            {email}
          </a>
        )}
        {phone && (
          <span className="text-[0.76rem] text-gray-600">{phone}</span>
        )}
        {office && (
          <span className="text-[0.76rem] text-gray-600">{office}</span>
        )}
      </div>
    </div>
  );
}
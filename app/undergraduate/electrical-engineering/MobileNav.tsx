"use client";

import { useRouter } from "next/navigation";
import { navigation } from "./navigation";

interface MobileNavProps {
  currentSlug?: string;
}

export default function MobileNav({
  currentSlug,
}: MobileNavProps) {
  const router = useRouter();

  const items = navigation.flatMap((section) => section.items);

  return (
    <select
      value={currentSlug ?? ""}
      onChange={(e) =>
        router.push(
          `/undergraduate/electrical-engineering/${e.target.value}`
        )
      }
      className="w-full rounded border border-gray-300 p-3"
    >
      <option value="">Select Section</option>

      {items.map((item) => (
        <option key={item.slug} value={item.slug}>
          {item.title}
        </option>
      ))}
    </select>
  );
}
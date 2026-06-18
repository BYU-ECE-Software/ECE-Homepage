import Sidebar from "./Sidebar";
import MobileNav from "./MobileNav";
import { MajorConfig } from "@/data/undergraduate/majors/types";

interface ContentLayoutProps {
  major: MajorConfig;
  currentSlug?: string;
  children: React.ReactNode;
}

export default function ContentLayout({
  major,
  currentSlug,
  children,
}: ContentLayoutProps) {
  return (
    <div className="bg-white">
      <section className="bg-byu-navy py-4 text-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-baseline justify-center gap-x-3 px-6 text-center">
          <h1 className="text-xl font-semibold tracking-wide md:text-2xl">
            {major.displayName}
          </h1>
        
          <span className="text-white/40">|</span>
        
          <p className="text-sm text-white/80 md:text-base">{major.tagline}</p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-6 lg:hidden">
          <MobileNav
            majorSlug={major.slug}
            navigation={major.navigation}
            currentSlug={currentSlug}
          />
        </div>

        <div className="grid gap-10 lg:grid-cols-[280px_1fr]">
          <div className="hidden lg:block">
            <Sidebar
              majorSlug={major.slug}
              navigation={major.navigation}
              currentSlug={currentSlug}
            />
          </div>

          <main>{children}</main>
        </div>
      </div>
    </div>
  );
}

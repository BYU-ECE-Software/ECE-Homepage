import Sidebar from "./Sidebar";
import MobileNav from "./MobileNav";

interface ContentLayoutProps {
  currentSlug?: string;
  children: React.ReactNode;
}

export default function ContentLayout({
  currentSlug,
  children,
}: ContentLayoutProps) {
  return (
    <div className="bg-white">
      <section className="bg-byu-navy py-4 text-white">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h1 className="text-4xl font-semibold tracking-wide md:text-5xl">
            ELECTRICAL ENGINEERING
          </h1>

          <p className="mt-4 text-xl">
            Undergraduate Students
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-6 lg:hidden">
          <MobileNav currentSlug={currentSlug} />
        </div>

        <div className="grid gap-10 lg:grid-cols-[280px_1fr]">
          <div className="hidden lg:block">
            <Sidebar currentSlug={currentSlug} />
          </div>

          <main>{children}</main>
        </div>
      </div>
    </div>
  );
}
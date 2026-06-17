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
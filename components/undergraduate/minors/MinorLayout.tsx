import PageBanner from '@/components/layout/PageBanner';
import type { MinorConfig } from '@/data/undergraduate/minors/types';

interface MinorLayoutProps {
  minor: MinorConfig;
  children: React.ReactNode;
}

export default function MinorLayout({ minor, children }: MinorLayoutProps) {
  return (
    <div className="bg-white">
      <PageBanner title={minor.displayName} tagline={minor.tagline} />

      <div className="mx-auto max-w-3xl px-6 py-12">
        <div>{children}</div>
      </div>
    </div>
  );
}

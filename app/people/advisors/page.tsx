import FacStaffGrid from '@/components/general/FacStaff/FacStaffGrid';
import PageBanner from '@/components/layout/PageBanner';
import { advisementTeam } from '@/data/people/Advisors';

export default function Advisors() {
  return (
    <>
      <PageBanner title="Advisors" />
      <div className="min-h-screen bg-white">
        <FacStaffGrid title="" members={advisementTeam} columns={3} />
      </div>
    </>
  );
}

import FacStaffGrid from '@/components/general/FacStaff/FacStaffGrid';
import PageBanner from '@/components/layout/PageBanner';
import { emeritusMembers } from '@/data/people/Emeritus';

export default function Emeritus() {
  return (
    <>
      <PageBanner title="Faculty Emeritus" />
      <div className="min-h-screen bg-white">
        <FacStaffGrid title="" members={emeritusMembers} columns={4} />
      </div>
    </>
  );
}

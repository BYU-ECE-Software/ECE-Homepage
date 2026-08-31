import FacStaffGrid from '@/components/general/FacStaff/FacStaffGrid';
import PageBanner from '@/components/layout/PageBanner';
import { staffMembers } from '@/data/people/Staff';

export default function Staff() {
  return (
    <>
      <PageBanner title="Staff" />
      <div className="min-h-screen bg-white">
        <FacStaffGrid title="" members={staffMembers} columns={4} />
      </div>
    </>
  );
}

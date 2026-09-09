import FacStaffGrid from '@/components/general/FacStaff/FacStaffGrid';
import PageBanner from '@/components/layout/PageBanner';
import { facultyMembers } from '@/data/people/Faculty';

export default function Faculty() {
  return (
    <>
      <PageBanner title="Faculty" />
      <div className="min-h-screen bg-white">
        <FacStaffGrid title="" members={facultyMembers} columns={4} />
      </div>
    </>
  );
}

import FacStaffGrid from '@/components/general/FacStaff/FacStaffGrid';
import PageTitle from '@/components/layout/PageTitle';
import { facultyMembers } from '@/data/people/Faculty';

export default function Faculty() {
  return (
    <>
      <PageTitle title="Faculty" />
      <div className="min-h-screen bg-white">
        <FacStaffGrid title="" members={facultyMembers} columns={4} />
      </div>
    </>
  );
}

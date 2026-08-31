import FacStaffGrid from '@/components/general/FacStaff/FacStaffGrid';
import PageTitle from '@/components/layout/PageTitle';
import { emeritusMembers } from '@/data/people/Emeritus';

export default function Emeritus() {
  return (
    <>
      <PageTitle title="Faculty Emeritus" />
      <div className="min-h-screen bg-white">
        <FacStaffGrid title="" members={emeritusMembers} columns={4} />
      </div>
    </>
  );
}

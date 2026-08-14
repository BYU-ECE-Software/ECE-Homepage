import FacStaffGrid from "@/components/general/FacStaff/FacStaffGrid";
import PageTitle from "@/components/layout/PageTitle";
import { staffMembers } from "@/data/people/Staff";

export default function Staff() {
  return (
    <>
    <PageTitle title="Staff"/>
    <div className="min-h-screen bg-white">
      <FacStaffGrid title="" members={staffMembers} columns={4} />
    </div>
    </>
  );
}
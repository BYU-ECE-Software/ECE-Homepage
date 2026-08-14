import FacStaffGrid from "@/components/general/FacStaff/FacStaffGrid";
import PageTitle from "@/components/layout/PageTitle";
import { advisementTeam } from "@/data/people/Advisors";

export default function Advisors() {
  return (
    <>
    <PageTitle title="Advisors"/>
    <div className="min-h-screen bg-white">
      <FacStaffGrid title="" members={advisementTeam} columns={3} />
    </div>
    </>
  );
}
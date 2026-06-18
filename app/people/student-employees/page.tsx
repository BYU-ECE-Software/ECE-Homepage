import FacStaffGrid from "@/components/general/FacStaff/FacStaffGrid";
import PageTitle from "@/components/layout/PageTitle";
import { studentWorkers } from "@/data/people/StudentWorkers";

export default function FacultyAndStaff() {
  return (
    <>
    <PageTitle title="Student Employees"/>
    <main className="min-h-screen bg-white">
      <FacStaffGrid title="" members={studentWorkers} columns={4} />
    </main>
    </>
  );
}
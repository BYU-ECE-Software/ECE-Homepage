import FacStaffGrid from "@/components/general/FacStaff/FacStaffGrid";
import PageTitle from "@/components/layout/PageTitle";
import { facultyMembers, staffMembers, studentWorkers } from "@/data/faculty-and-staff/FacStaff";

export default function FacultyAndStaff() {
  return (
    <>
    <PageTitle title="Faculty & Staff"/>
    <main className="min-h-screen bg-white">
      <FacStaffGrid title="FACULTY" members={facultyMembers} columns={4} />
      <FacStaffGrid title="STAFF" members={staffMembers} columns={4} />
      <FacStaffGrid title="STUDENT WORKERS" members={studentWorkers} columns={4} />
    </main>
    </>
  );
}
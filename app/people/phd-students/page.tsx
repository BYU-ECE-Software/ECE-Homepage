import FacStaffGrid from '@/components/general/FacStaff/FacStaffGrid';
import PageTitle from '@/components/layout/PageTitle';
import { phdStudents } from '@/data/people/phdStudents';

export default function FacultyAndStaff() {
  return (
    <>
      <PageTitle title="PhD Students" />
      <div className="min-h-screen bg-white">
        <FacStaffGrid title="" members={phdStudents} columns={4} />
      </div>
    </>
  );
}

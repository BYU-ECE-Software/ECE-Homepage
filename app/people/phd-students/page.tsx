import FacStaffGrid from '@/components/general/FacStaff/FacStaffGrid';
import PageBanner from '@/components/layout/PageBanner';
import { phdStudents } from '@/data/people/phdStudents';

export default function FacultyAndStaff() {
  return (
    <>
      <PageBanner title="PhD Students" />
      <div className="min-h-screen bg-white">
        <FacStaffGrid title="" members={phdStudents} columns={4} />
      </div>
    </>
  );
}

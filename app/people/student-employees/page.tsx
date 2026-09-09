import FacStaffGrid from '@/components/general/FacStaff/FacStaffGrid';
import PageBanner from '@/components/layout/PageBanner';
import { studentWorkers } from '@/data/people/StudentWorkers';

export default function FacultyAndStaff() {
  return (
    <>
      <PageBanner title="Student Employees" />
      <div className="min-h-screen bg-white">
        <FacStaffGrid title="" members={studentWorkers} columns={4} />
      </div>
    </>
  );
}

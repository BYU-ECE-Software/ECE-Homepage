import PageTitle from "@/components/layout/PageTitle";
import Description from "@/components/general/Description";
import CardGrid from "@/components/general/CardGrid";
import ResourceCard from "@/components/undergraduate/majors/ResourceCard";
import { studentOrganizations } from "@/data/studentOrganizations";

// One shared page for all majors. Every major's sidebar "Student
// Organizations" item links here (see the `href` on that NavItem in each
// major's config) instead of to a per-major page, since these clubs are
// common to the whole department.
export default function StudentOrganizationsPage() {
  return (
    <>
      <PageTitle title="Student Organizations" />

      <Description
        text="Get involved outside the classroom."
        subtext="These clubs and teams are open to students across every major in the department. Browse what's out there, and reach out to get connected."
      />

      <CardGrid columns={3} paddingClass="px-10 pt-4 pb-16">
        {studentOrganizations.map((org) => (
          <ResourceCard key={org.title} {...org} />
        ))}
      </CardGrid>
    </>
  );
}

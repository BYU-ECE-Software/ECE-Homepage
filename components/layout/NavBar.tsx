'use client';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { FiChevronDown } from 'react-icons/fi';

type NavBarProps = {
  navPadLeft?: number;
  mobileOpen: boolean;
  setMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const NavBar = ({ navPadLeft = 128, mobileOpen, setMobileOpen }: NavBarProps) => {
  const [facultyAndStaffOpen, setFacultyAndStaffOpen] = useState(false);
  const [undergraduateOpen, setUndergraduateOpen] = useState(false);
  const [graduateOpen, setGraduateOpen] = useState(false);
  const [scheduleOpen, setScheduleOpen] = useState(false);
  const [outreachOpen, setOutreachOpen] = useState(false);

  const desktopNavRef = useRef<HTMLDivElement | null>(null);
  const desktopDropdownRefFacultyAndStaff = useRef<HTMLDivElement | null>(null);
  const desktopDropdownRefUndergraduate = useRef<HTMLDivElement | null>(null);
  const desktopDropdownRefGraduate = useRef<HTMLDivElement | null>(null);
  const desktopDropdownRefSchedule = useRef<HTMLDivElement | null>(null);
  const desktopDropdownRefOutreach = useRef<HTMLDivElement | null>(null);
  const mobileDropdownRefFacultyAndStaff = useRef<HTMLDivElement | null>(null);
  const mobileDropdownRefUndergraduate = useRef<HTMLDivElement | null>(null);
  const mobileDropdownRefGraduate = useRef<HTMLDivElement | null>(null);
  const mobileDropdownRefSchedule = useRef<HTMLDivElement | null>(null);
  const mobileDropdownRefOutreach = useRef<HTMLDivElement | null>(null);

  const [navSize, setNavSize] = useState<'base' | 'sm' | 'xs'>('base');

  useLayoutEffect(() => {
    const el = desktopNavRef.current;
    if (!el) return;

    const fits = () => el.scrollWidth <= el.clientWidth;

    const update = () => {
      setNavSize('base');

      requestAnimationFrame(() => {
        if (fits()) return;

        setNavSize('sm');

        requestAnimationFrame(() => {
          if (fits()) return;
          setNavSize('xs');
        });
      });
    };

    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [navPadLeft, facultyAndStaffOpen, undergraduateOpen, graduateOpen, scheduleOpen, outreachOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      const clickedDesktopDropdown =
        (desktopDropdownRefFacultyAndStaff.current?.contains(target) ?? false) ||
        (desktopDropdownRefUndergraduate.current?.contains(target) ?? false) ||
        (desktopDropdownRefGraduate.current?.contains(target) ?? false) ||
        (desktopDropdownRefSchedule.current?.contains(target) ?? false) ||
        (desktopDropdownRefOutreach.current?.contains(target) ?? false);
      const clickedMobileDropdown =
        (mobileDropdownRefFacultyAndStaff.current?.contains(target) ?? false) ||
        (mobileDropdownRefUndergraduate.current?.contains(target) ?? false) ||
        (mobileDropdownRefGraduate.current?.contains(target) ?? false) ||
        (mobileDropdownRefSchedule.current?.contains(target) ?? false) ||
        (mobileDropdownRefOutreach.current?.contains(target) ?? false);

      if (!clickedDesktopDropdown && !clickedMobileDropdown) {
        setFacultyAndStaffOpen(false);
        setUndergraduateOpen(false);
        setGraduateOpen(false);
        setScheduleOpen(false);
        setOutreachOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setFacultyAndStaffOpen(false);
        setUndergraduateOpen(false);
        setGraduateOpen(false);
        setScheduleOpen(false);
        setOutreachOpen(false);
        setMobileOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [setMobileOpen]);

  return (
    <>
      {/* ------ Mobile nav bar ------ */}
      {mobileOpen && (
        <div id="mobile-menu" className="text-byu-navy w-full border-t bg-white shadow md:hidden">
          <nav className="flex flex-col py-2 text-base font-medium">
            <div ref={mobileDropdownRefFacultyAndStaff}>
              <button
                type="button"
                onClick={() => {
                  setFacultyAndStaffOpen((open) => !open);
                  setUndergraduateOpen(false);
                  setGraduateOpen(false);
                  setScheduleOpen(false);
                  setOutreachOpen(false);
                }}
                aria-expanded={facultyAndStaffOpen}
                className={`flex w-full items-center justify-between px-6 py-4 text-left hover:bg-[#FAFAFA] ${
                  facultyAndStaffOpen ? 'bg-[#FAFAFA]' : ''
                }`}
              >
                <span>Faculty And Staff</span>
                <FiChevronDown className="text-byu-navy h-4 w-4" aria-hidden="true" />
              </button>

              {facultyAndStaffOpen && (
                <div className="flex flex-col text-sm">
                  <Link
                    href="/faculty-and-staff/faculty-and-staff"
                    onClick={() => {
                      setFacultyAndStaffOpen(false);
                      setMobileOpen(false);
                    }}
                    className="text-byu-navy px-10 py-2 text-left hover:bg-[#FAFAFA]"
                  >
                    Faculty & Staff
                  </Link>
                  <Link
                    href="/faculty-and-staff/faith-and-engineering-lectures"
                    onClick={() => {
                      setFacultyAndStaffOpen(false);
                      setMobileOpen(false);
                    }}
                    className="text-byu-navy px-10 py-2 text-left hover:bg-[#FAFAFA]"
                  >
                    Faith and Engineering Lectures
                  </Link>
                </div>
              )}
            </div>

            <div ref={mobileDropdownRefUndergraduate}>
              <button
                type="button"
                onClick={() => {
                  setUndergraduateOpen((open) => !open);
                  setFacultyAndStaffOpen(false);
                  setGraduateOpen(false);
                  setScheduleOpen(false);
                  setOutreachOpen(false);
                }}
                aria-expanded={undergraduateOpen}
                className={`flex w-full items-center justify-between px-6 py-4 text-left hover:bg-[#FAFAFA] ${
                  undergraduateOpen ? 'bg-[#FAFAFA]' : ''
                }`}
              >
                <span>Undergraduate</span>
                <FiChevronDown className="text-byu-navy h-4 w-4" aria-hidden="true" />
              </button>

              {undergraduateOpen && (
                <div className="flex flex-col text-sm">
                  <Link
                    href="/undergraduate/electrical-engineering"
                    onClick={() => {
                      setUndergraduateOpen(false);
                      setMobileOpen(false);
                    }}
                    className="text-byu-navy px-10 py-2 text-left hover:bg-[#FAFAFA]"
                  >
                    Electrical Engineering
                  </Link>
                  <Link
                    href="/undergraduate/computer-engineering"
                    onClick={() => {
                      setUndergraduateOpen(false);
                      setMobileOpen(false);
                    }}
                    className="text-byu-navy px-10 py-2 text-left hover:bg-[#FAFAFA]"
                  >
                    Computer Engineering
                  </Link>
                  <Link
                    href="/undergraduate/cybersecurity"
                    onClick={() => {
                      setUndergraduateOpen(false);
                      setMobileOpen(false);
                    }}
                    className="text-byu-navy px-10 py-2 text-left hover:bg-[#FAFAFA]"
                  >
                    Cybersecurity
                  </Link>
                  <Link
                    href="/undergraduate/cybersecurity-minor"
                    onClick={() => {
                      setUndergraduateOpen(false);
                      setMobileOpen(false);
                    }}
                    className="text-byu-navy px-10 py-2 text-left hover:bg-[#FAFAFA]"
                  >
                    Cybersecurity Minor
                  </Link>
                </div>
              )}
            </div>

            <div ref={mobileDropdownRefGraduate}>
              <button
                type="button"
                onClick={() => {
                  setGraduateOpen((open) => !open);
                  setFacultyAndStaffOpen(false);
                  setUndergraduateOpen(false);
                  setScheduleOpen(false);
                  setOutreachOpen(false);
                }}
                aria-expanded={graduateOpen}
                className={`flex w-full items-center justify-between px-6 py-4 text-left hover:bg-[#FAFAFA] ${
                  graduateOpen ? 'bg-[#FAFAFA]' : ''
                }`}
              >
                <span>Graduate</span>
                <FiChevronDown className="text-byu-navy h-4 w-4" aria-hidden="true" />
              </button>

              {graduateOpen && (
                <div className="flex flex-col text-sm">
                  <Link
                    href="/graduate/prospective-graduate-students"
                    onClick={() => {
                      setGraduateOpen(false);
                      setMobileOpen(false);
                    }}
                    className="text-byu-navy px-10 py-2 text-left hover:bg-[#FAFAFA]"
                  >
                    Prospective Graduate Students
                  </Link>
                  <Link
                    href="/graduate/current-graduate-students"
                    onClick={() => {
                      setGraduateOpen(false);
                      setMobileOpen(false);
                    }}
                    className="text-byu-navy px-10 py-2 text-left hover:bg-[#FAFAFA]"
                  >
                    Current Graduate Students
                  </Link>
                </div>
              )}
            </div>

            <div ref={mobileDropdownRefSchedule}>
              <button
                type="button"
                onClick={() => {
                  setScheduleOpen((open) => !open);
                  setFacultyAndStaffOpen(false);
                  setUndergraduateOpen(false);
                  setGraduateOpen(false);
                  setOutreachOpen(false);
                }}
                aria-expanded={scheduleOpen}
                className={`flex w-full items-center justify-between px-6 py-4 text-left hover:bg-[#FAFAFA] ${
                  scheduleOpen ? 'bg-[#FAFAFA]' : ''
                }`}
              >
                <span>Schedule</span>
                <FiChevronDown className="text-byu-navy h-4 w-4" aria-hidden="true" />
              </button>

              {scheduleOpen && (
                <div className="flex flex-col text-sm">
                  <Link
                    href="/schedule/department-tours"
                    onClick={() => {
                      setScheduleOpen(false);
                      setMobileOpen(false);
                    }}
                    className="text-byu-navy px-10 py-2 text-left hover:bg-[#FAFAFA]"
                  >
                    Department Tours
                  </Link>
                  <Link
                    href="/schedule/schedule-of-events"
                    onClick={() => {
                      setScheduleOpen(false);
                      setMobileOpen(false);
                    }}
                    className="text-byu-navy px-10 py-2 text-left hover:bg-[#FAFAFA]"
                  >
                    Schedule of Events
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/research"
              onClick={() => setMobileOpen(false)}
              className="px-6 py-4 text-left hover:bg-[#FAFAFA]"
            >
              Research
            </Link>

            <div ref={mobileDropdownRefOutreach}>
              <button
                type="button"
                onClick={() => {
                  setOutreachOpen((open) => !open);
                  setFacultyAndStaffOpen(false);
                  setUndergraduateOpen(false);
                  setGraduateOpen(false);
                  setScheduleOpen(false);
                }}
                aria-expanded={outreachOpen}
                className={`flex w-full items-center justify-between px-6 py-4 text-left hover:bg-[#FAFAFA] ${
                  outreachOpen ? 'bg-[#FAFAFA]' : ''
                }`}
              >
                <span>Outreach</span>
                <FiChevronDown className="text-byu-navy h-4 w-4" aria-hidden="true" />
              </button>

              {outreachOpen && (
                <div className="flex flex-col text-sm">
                  <Link
                    href="/outreach/outreach-1"
                    onClick={() => {
                      setOutreachOpen(false);
                      setMobileOpen(false);
                    }}
                    className="text-byu-navy px-10 py-2 text-left hover:bg-[#FAFAFA]"
                  >
                    Outreach 1
                  </Link>
                  <Link
                    href="/outreach/outreach-2"
                    onClick={() => {
                      setOutreachOpen(false);
                      setMobileOpen(false);
                    }}
                    className="text-byu-navy px-10 py-2 text-left hover:bg-[#FAFAFA]"
                  >
                    Outreach 2
                  </Link>
                  <Link
                    href="/outreach/outreach-3"
                    onClick={() => {
                      setOutreachOpen(false);
                      setMobileOpen(false);
                    }}
                    className="text-byu-navy px-10 py-2 text-left hover:bg-[#FAFAFA]"
                  >
                    Outreach 3
                  </Link>
                  <Link
                    href="/outreach/outreach-4"
                    onClick={() => {
                      setOutreachOpen(false);
                      setMobileOpen(false);
                    }}
                    className="text-byu-navy px-10 py-2 text-left hover:bg-[#FAFAFA]"
                  >
                    Outreach 4
                  </Link>
                  <Link
                    href="/outreach/outreach-5"
                    onClick={() => {
                      setOutreachOpen(false);
                      setMobileOpen(false);
                    }}
                    className="text-byu-navy px-10 py-2 text-left hover:bg-[#FAFAFA]"
                  >
                    Outreach 5
                  </Link>
                  <Link
                    href="/outreach/outreach-6"
                    onClick={() => {
                      setOutreachOpen(false);
                      setMobileOpen(false);
                    }}
                    className="text-byu-navy px-10 py-2 text-left hover:bg-[#FAFAFA]"
                  >
                    Outreach 6
                  </Link>
                  <Link
                    href="/outreach/outreach-7"
                    onClick={() => {
                      setOutreachOpen(false);
                      setMobileOpen(false);
                    }}
                    className="text-byu-navy px-10 py-2 text-left hover:bg-[#FAFAFA]"
                  >
                    Outreach 7
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/epicenter"
              onClick={() => setMobileOpen(false)}
              className="px-6 py-4 text-left hover:bg-[#FAFAFA]"
            >
              EPIcenter
            </Link>
          </nav>
        </div>
      )}

      {/* ------ Desktop nav bar ------ */}
      <nav className="text-byu-navy hidden w-full bg-white shadow md:block">
        <div
          ref={desktopNavRef}
          className={`flex px-6 font-medium`}
          style={{ paddingLeft: navPadLeft }}
        >
          <div className="relative" ref={desktopDropdownRefFacultyAndStaff}>
            <button
              type="button"
              onClick={() => {
                setFacultyAndStaffOpen((open) => !open);
                setUndergraduateOpen(false);
                setGraduateOpen(false);
                setScheduleOpen(false);
                setOutreachOpen(false);
              }}
              aria-expanded={facultyAndStaffOpen}
              className={`nav-link-hover inline-flex items-center gap-2 px-8 py-4 whitespace-nowrap hover:bg-[#FAFAFA]`}
            >
              <span>Faculty And Staff</span>
              <FiChevronDown className="text-byu-navy h-3 w-3" aria-hidden="true" />
            </button>

            {facultyAndStaffOpen && (
              <div className="absolute top-full left-0 w-56 border border-gray-200 bg-white shadow-lg">
                <Link
                  href="/faculty-and-staff/faculty-and-staff"
                  onClick={() => setFacultyAndStaffOpen(false)}
                  className="text-byu-navy block w-full px-6 py-3 text-left hover:bg-gray-50"
                >
                Faculty & Staff
                </Link>
                <Link
                  href="/faculty-and-staff/faith-and-engineering-lectures"
                  onClick={() => setFacultyAndStaffOpen(false)}
                  className="text-byu-navy block w-full px-6 py-3 text-left hover:bg-gray-50"
                >
                  Faith and Engineering Lectures
                </Link>
              </div>
            )}
          </div>

          <div className="relative" ref={desktopDropdownRefUndergraduate}>
            <button
              type="button"
              onClick={() => {
                setUndergraduateOpen((open) => !open);
                setFacultyAndStaffOpen(false);
                setGraduateOpen(false);
                setScheduleOpen(false);
                setOutreachOpen(false);
              }}
              aria-expanded={undergraduateOpen}
              className={`nav-link-hover inline-flex items-center gap-2 px-8 py-4 whitespace-nowrap hover:bg-[#FAFAFA]`}
            >
              <span>Undergraduate</span>
              <FiChevronDown className="text-byu-navy h-3 w-3" aria-hidden="true" />
            </button>

            {undergraduateOpen && (
              <div className="absolute top-full left-0 w-56 border border-gray-200 bg-white shadow-lg">
                <Link
                  href="/undergraduate/electrical-engineering"
                  onClick={() => setUndergraduateOpen(false)}
                  className="text-byu-navy block w-full px-6 py-3 text-left hover:bg-gray-50"
                >
                  Electrical Engineering
                </Link>
                <Link
                  href="/undergraduate/computer-engineering"
                  onClick={() => setUndergraduateOpen(false)}
                  className="text-byu-navy block w-full px-6 py-3 text-left hover:bg-gray-50"
                >
                  Computer Engineering
                </Link>
                <Link
                  href="/undergraduate/cybersecurity"
                  onClick={() => setUndergraduateOpen(false)}
                  className="text-byu-navy block w-full px-6 py-3 text-left hover:bg-gray-50"
                >
                  Cybersecurity
                </Link>
                <Link
                  href="/undergraduate/cybersecurity-minor"
                  onClick={() => setUndergraduateOpen(false)}
                  className="text-byu-navy block w-full px-6 py-3 text-left hover:bg-gray-50"
                >
                  Cybersecurity Minor
                </Link>
              </div>
            )}
          </div>

          <div className="relative" ref={desktopDropdownRefGraduate}>
            <button
              type="button"
              onClick={() => {
                setGraduateOpen((open) => !open);
                setFacultyAndStaffOpen(false);
                setUndergraduateOpen(false);
                setScheduleOpen(false);
                setOutreachOpen(false);
              }}
              aria-expanded={graduateOpen}
              className={`nav-link-hover inline-flex items-center gap-2 px-8 py-4 whitespace-nowrap hover:bg-[#FAFAFA]`}
            >
              <span>Graduate</span>
              <FiChevronDown className="text-byu-navy h-3 w-3" aria-hidden="true" />
            </button>

            {graduateOpen && (
              <div className="absolute top-full left-0 w-56 border border-gray-200 bg-white shadow-lg">
                <Link
                  href="/graduate/current-graduate-students"
                  onClick={() => setGraduateOpen(false)}
                  className="text-byu-navy block w-full px-6 py-3 text-left hover:bg-gray-50"
                >
                  Current Graduate Students
                </Link>
                <Link
                  href="/graduate/prospective-graduate-students"
                  onClick={() => setGraduateOpen(false)}
                  className="text-byu-navy block w-full px-6 py-3 text-left hover:bg-gray-50"
                >
                  Prospective Graduate Students
                </Link>
              </div>
            )}
          </div>

          <div className="relative" ref={desktopDropdownRefSchedule}>
            <button
              type="button"
              onClick={() => {
                setScheduleOpen((open) => !open);
                setFacultyAndStaffOpen(false);
                setUndergraduateOpen(false);
                setGraduateOpen(false);
                setOutreachOpen(false);
              }}
              aria-expanded={scheduleOpen}
              className={`nav-link-hover inline-flex items-center gap-2 px-8 py-4 whitespace-nowrap hover:bg-[#FAFAFA]`}
            >
              <span>Schedule</span>
              <FiChevronDown className="text-byu-navy h-3 w-3" aria-hidden="true" />
            </button>

            {scheduleOpen && (
              <div className="absolute top-full left-0 w-56 border border-gray-200 bg-white shadow-lg">
                <Link
                  href="/schedule/schedule-of-events"
                  onClick={() => setScheduleOpen(false)}
                  className="text-byu-navy block w-full px-6 py-3 text-left hover:bg-gray-50"
                >
                  Schedule of Events
                </Link>
                <Link
                  href="/schedule/department-tours"
                  onClick={() => setScheduleOpen(false)}
                  className="text-byu-navy block w-full px-6 py-3 text-left hover:bg-gray-50"
                >
                  Department Tours
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/research"
            onClick={() => {
              setFacultyAndStaffOpen(false);
              setUndergraduateOpen(false);
              setGraduateOpen(false);
              setScheduleOpen(false);
              setOutreachOpen(false);
            }}
            className="nav-link-hover px-8 py-4 whitespace-nowrap hover:bg-[#FAFAFA]"
          >
            Research
          </Link>

          <div className="relative" ref={desktopDropdownRefOutreach}>
            <button
              type="button"
              onClick={() => {
                setOutreachOpen((open) => !open);
                setFacultyAndStaffOpen(false);
                setUndergraduateOpen(false);
                setGraduateOpen(false);
                setScheduleOpen(false);
              }}
              aria-expanded={outreachOpen}
              className={`nav-link-hover inline-flex items-center gap-2 px-8 py-4 whitespace-nowrap hover:bg-[#FAFAFA]`}
            >
              <span>Outreach</span>
              <FiChevronDown className="text-byu-navy h-3 w-3" aria-hidden="true" />
            </button>

            {outreachOpen && (
              <div className="absolute top-full left-0 w-56 border border-gray-200 bg-white shadow-lg">
                <Link
                  href="/outreach/outreach-1"
                  onClick={() => setOutreachOpen(false)}
                  className="text-byu-navy block w-full px-6 py-3 text-left hover:bg-gray-50"
                >
                  Outreach 1
                </Link>
                <Link
                  href="/outreach/outreach-2"
                  onClick={() => setOutreachOpen(false)}
                  className="text-byu-navy block w-full px-6 py-3 text-left hover:bg-gray-50"
                >
                  Outreach 2
                </Link>
                <Link
                  href="/outreach/outreach-3"
                  onClick={() => setOutreachOpen(false)}
                  className="text-byu-navy block w-full px-6 py-3 text-left hover:bg-gray-50"
                >
                  Outreach 3
                </Link>
                <Link
                  href="/outreach/outreach-4"
                  onClick={() => setOutreachOpen(false)}
                  className="text-byu-navy block w-full px-6 py-3 text-left hover:bg-gray-50"
                >
                  Outreach 4
                </Link>
                <Link
                  href="/outreach/outreach-5"
                  onClick={() => setOutreachOpen(false)}
                  className="text-byu-navy block w-full px-6 py-3 text-left hover:bg-gray-50"
                >
                  Outreach 5
                </Link>
                <Link
                  href="/outreach/outreach-6"
                  onClick={() => setOutreachOpen(false)}
                  className="text-byu-navy block w-full px-6 py-3 text-left hover:bg-gray-50"
                >
                  Outreach 6
                </Link>
                <Link
                  href="/outreach/outreach-7"
                  onClick={() => setOutreachOpen(false)}
                  className="text-byu-navy block w-full px-6 py-3 text-left hover:bg-gray-50"
                >
                  Outreach 7
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/epicenter"
            onClick={() => {
              setFacultyAndStaffOpen(false);
              setUndergraduateOpen(false);
              setGraduateOpen(false);
              setScheduleOpen(false);
              setOutreachOpen(false);
            }}
            className="nav-link-hover px-8 py-4 whitespace-nowrap hover:bg-[#FAFAFA]"
          >
            EPIcenter
          </Link>
        </div>
      </nav>

      <button type="button" className="sr-only" aria-hidden="true" tabIndex={-1} />
    </>
  );
};

export default NavBar;
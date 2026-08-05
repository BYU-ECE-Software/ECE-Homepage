'use client';

import { useState } from 'react';
import NavBar from './NavBar';
import Link from 'next/link';
import Image from 'next/image';

const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 w-full">
      <header className="bg-[#002E5D] relative w-full py-4 text-white shadow-md md:w-full">
        <div className="flex items-center justify-between px-6">
          <div className="flex items-center">
            <Link
              href="/"
              className="border-byu-royal mr-4 border-r pr-4"
              aria-label="Electrical and Computer Engineering home"
            >
              <Image src="/BYU_monogram_white.svg" width={40} height={40} alt="BYU logo" className="h-10 w-auto" />
            </Link>
            {/* Deliberately not an <h1>: this appears on every page, and each
                page supplies its own <h1>. Two competing top-level headings
                confuse screen readers and search engines. */}
            <Link href="/" className="text-2xl hover:underline">
              Electrical and Computer Engineering
            </Link>
          </div>
            <Link
            href={"https://give.churchofjesuschrist.org/campaigns/81249/donations/new"}
            target='_blank'
            rel="noopener noreferrer"
            className='px-5 py-2 text-sm font-medium ml-auto text-white bg-byu-royal rounded-full hover:bg-blue-600 transition duration-150'
            >
              Give to ECE
            </Link>

          <div className="flex items-center gap-3 pr-6 text-base">

            <button
              type="button"
              className="inline-flex items-center justify-center rounded p-2 hover:bg-white/10 focus:outline-none md:hidden"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              onClick={() => setMobileOpen((v) => !v)}
            >
              <span className="text-xl" aria-hidden="true">
                {mobileOpen ? '✕' : '☰'}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* <NavBar navPadLeft={128} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} /> */}
      <NavBar navPadLeft={128} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
    </div>
  );
};

export default Header;
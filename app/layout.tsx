import './globals.css';
import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import SubFooter from '@/components/layout/SubFooter';
import { contactBlock, subfooterColumns } from '@/components/layout/SubFooterConfig';

export const metadata: Metadata = {
  title: 'Electrical and Computer Engineering',
  description: 'Template for all things ECE websites',
};

export default async function RootLayout({ children }: { children: ReactNode }) {

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100..700;1,100..700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/BYU_Block_Y_white.svg" type="image/svg+xml" />
      </head>
      <body className="flex min-h-screen flex-col">
          {/* Lets keyboard and screen-reader users jump past the header and
              nav straight to the page content. Visible only when focused. */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:font-medium focus:text-byu-navy focus:shadow-lg"
          >
            Skip to main content
          </a>
          <Header />
          <main id="main-content" className="flex-1">{children}</main>
          <SubFooter columns={subfooterColumns} contactBlock={contactBlock} />
          <Footer />
      </body>
    </html>
  );
}

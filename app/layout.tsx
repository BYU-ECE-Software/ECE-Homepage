import './globals.css';
import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

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
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100..700;1,100..700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/BYU_Block_Y_white.svg" type="image/svg+xml" />
      </head>
      <body className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
      </body>
    </html>
  );
}
'use client';

import Link from 'next/link';
// This page catches unexpected runtime errors that weren't caught by a try/catch.
// It will NOT trigger for 404s or 403s — those have their own pages.

import { useEffect } from 'react';

type ErrorPageProps = {
  error: Error;
  reset: () => void; // re-renders the page and tries again
};

export default function Error({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error('Runtime error caught by error.tsx:', error);
  }, [error]);

  return (
    <div className="flex min-h-[calc(100vh-125px)] flex-col items-center justify-center bg-white px-4 font-mono">
      <div className="w-full max-w-md text-center">
        <h1 className="text-byu-navy mb-0 text-center text-8xl font-black tracking-tight">500</h1>
        <p className="text-byu-navy mb-8 text-center text-lg">something went wrong</p>

        {/* The spinning wheel of death */}
        <div className="mb-4 flex justify-center">
          <div
            className="h-32 w-32 animate-spin rounded-full"
            style={{
              background:
                'conic-gradient(#ef4444 0deg, #f97316 45deg, #eab308 90deg, #22c55e 135deg, #3b82f6 180deg, #8b5cf6 225deg, #ec4899 270deg, #ef4444 315deg)',
              animationDuration: '1.5s',
              animationTimingFunction: 'linear',
            }}
          />
        </div>

        <p className="mb-8 text-sm text-gray-400">
          An unexpected error occurred. We have no idea what happened.
          <br />
          Honestly neither does the wheel. It&apos;s just spinning.
        </p>

        <div className="flex justify-center gap-3">
          <button
            onClick={reset}
            className="bg-byu-navy rounded-lg px-6 py-3 text-sm font-medium text-white transition hover:opacity-90 cursor-pointer"
          >
            let the wheel decide again
          </button>

          <Link
            href="/"
            className="rounded-lg border border-gray-300 px-6 py-3 text-sm font-medium text-gray-600 transition hover:bg-gray-50"
          >
            go home
          </Link>
        </div>
      </div>
    </div>
  );
}
// Next.js App Router has specific file conventions that trigger this page. Any 404 error will automatically show this page

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-125px)] flex-col items-center justify-center bg-white px-4 font-mono">
      <div className="w-full max-w-xl">
        {/* Big 404 */}
        <h1 className="text-byu-navy mb-0 text-center text-8xl font-black tracking-tight">404</h1>
        <p className="text-byu-navy mb-4 text-center text-lg">page not found</p>
        <p className="mb-8 text-lg font-semibold text-red-500">Segmentation fault (core dumped)</p>

        {/* Short fake trace */}
        <div className="mb-6 space-y-1 text-xs text-gray-500">
          <p>
            <span className="text-gray-300">#0</span>{' '}
            <span className="text-blue-400">0x00000404</span> in{' '}
            <span className="text-gray-700">page_render()</span>{' '}
            <span className="text-gray-400">(the-page-you-wanted/page.tsx:1)</span>
          </p>
          <p>
            <span className="text-gray-300">#1</span>{' '}
            <span className="text-blue-400">0xDEADBEEF</span> in{' '}
            <span className="text-gray-700">reality.check()</span>{' '}
            <span className="text-gray-400">(universe/physics.ts:404)</span>
          </p>
          <p>
            <span className="text-gray-300">#2</span>{' '}
            <span className="text-blue-400">0x????????</span> in{' '}
            <span className="text-gray-700">???</span>{' '}
            <span className="text-gray-400">(???:???)</span>
          </p>
        </div>

        {/* Crash analysis */}
        <div className="mb-8 rounded border border-red-200 bg-red-50 p-4 text-xs leading-relaxed text-gray-600">
          <p className="mb-2 font-bold text-red-500">Crash analysis:</p>
          <ul className="list-disc space-y-1 pl-4 text-gray-500">
            <li>
              The page was never created <span className="text-gray-400">(skill issue)</span>
            </li>
            <li>
              You mistyped the URL{' '}
              <span className="text-gray-400">(we&apos;ve all been there)</span>
            </li>
            <li>
              Cosmic ray bit flip{' '}
              <span className="text-gray-400">(unlikely but not ruled out)</span>
            </li>
          </ul>
        </div>

        {/* Home button */}
        <div className="flex justify-center">
          <Link
            href="/"
            className="bg-byu-navy inline-block rounded-lg px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
          >
            $ cd /home
          </Link>
        </div>
      </div>
    </div>
  );
}

'use client';

import { useState } from 'react';
import PageBanner from '@/components/layout/PageBanner';

// if you want to add more lectures, just add them to this array with the title, date, and video URL (if available)
const lectures = [
  {
    title: 'Dr. Randy Beard: "Reflections on life, education, career, and faith"',
    date: '10/30/25',
    videoUrl:
      'https://brightspotcdn.byu.edu/36/14/69ec7b4640a798902725ebe880a6/gmt20251031-003116-recording-1832x982.mp4',
  },
  {
    title: 'Dr. Barry Lunt: "Thoughts on how God works through/with us"',
    date: '11/20/25',
    videoUrl:
      'https://brightspotcdn.byu.edu/bc/ca/fb8a36fd4b2eb2b167c1b3ac3cb6/gmt20251121-012807-recording-1920x1200.mp4',
  },
  {
    title: 'Dr. Michael Rice: "How did I get here?"',
    date: '1/29/26',
    videoUrl: 'https://brightspotcdn.byu.edu/c2/4d/82c0904345f585fce79000f00b33/rice-edited.mp4',
  },
  {
    title: `Dr. Brian Jeffs: "God's Handiwork Seen Through an Engineer's Eyes"`,
    date: '3/12/26',
    videoUrl: null, // video URL unavailable at time of build
  },
];

function LectureCard({
  title,
  date,
  videoUrl,
}: {
  title: string;
  date: string;
  videoUrl: string | null;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="border-t border-slate-200 py-5">
      <button onClick={() => setExpanded(!expanded)} className="w-full text-left">
        <h3
          className={`text-byu-navy text-[17px] font-bold ${videoUrl ? 'underline' : ''}`}
        >
          {title}
        </h3>
        <p className="mt-1 text-sm text-slate-500">{date}</p>
      </button>

      {expanded && videoUrl && (
        <div className="mt-4 overflow-hidden rounded-lg shadow-md">
          <video controls className="block w-full" src={videoUrl}>
            Your browser does not support the video tag.
          </video>
        </div>
      )}

      {expanded && !videoUrl && (
        <p className="mt-3 text-sm text-slate-400 italic">Video not yet available.</p>
      )}
    </div>
  );
}

export default function FaithEngineeringLectureSeries() {
  return (
    <div className="min-h-screen w-full bg-white">
      <PageBanner title="Faith & Engineering Lecture Series" />

      <div className="mx-auto max-w-4xl px-6 pt-12">
        <div className="mb-10 rounded-2xl border border-gray-200 bg-slate-50 p-6 shadow-sm">
          <p className="text-lg leading-8 text-slate-600">
            This lecture series will include faculty reflections on integrating faith and
            profession. The hope is to help you get to know the faculty on a more personal level,
            and to understand how faculty members integrate faith and profession, and how they
            balance family, church, profession, and hobbies.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-6 pb-12">
        <h2 className="text-byu-navy text-2xl font-semibold tracking-tight">Recorded Lectures</h2>
        <div>
          {lectures.map((lecture) => (
            <LectureCard
              key={lecture.title}
              title={lecture.title}
              date={lecture.date}
              videoUrl={lecture.videoUrl}
            />
          ))}
          <div className="border-t border-slate-200" />
        </div>
      </div>
    </div>
  );
}

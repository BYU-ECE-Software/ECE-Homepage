"use client";

import { useState } from "react";

// if you want to add more lectures, just add them to this array with the title, date, and video URL (if available)
const lectures = [
  {
    title: 'Dr. Randy Beard: "Reflections on life, education, career, and faith"',
    date: "10/30/25",
    videoUrl:
      "https://brightspotcdn.byu.edu/36/14/69ec7b4640a798902725ebe880a6/gmt20251031-003116-recording-1832x982.mp4",
  },
  {
    title: 'Dr. Barry Lunt: "Thoughts on how God works through/with us"',
    date: "11/20/25",
    videoUrl:
      "https://brightspotcdn.byu.edu/bc/ca/fb8a36fd4b2eb2b167c1b3ac3cb6/gmt20251121-012807-recording-1920x1200.mp4",
  },
  {
    title: 'Dr. Michael Rice: "How did I get here?"',
    date: "1/29/26",
    videoUrl:
      "https://brightspotcdn.byu.edu/c2/4d/82c0904345f585fce79000f00b33/rice-edited.mp4",
  },
  {
    title: `Dr. Brian Jeffs: "God's Handiwork Seen Through an Engineer's Eyes"`,
    date: "3/12/26",
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
    <div
      style={{
        borderTop: "1px solid #d0d7e2",
        paddingTop: 20,
        paddingBottom: 20,
      }}
    >
      <button
        onClick={() => setExpanded(!expanded)}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: 0,
          textAlign: "left",
          width: "100%",
        }}
      >
        <h3
          style={{
            margin: "0 0 4px 0",
            fontSize: 17,
            fontWeight: 700,
            color: "#002E5D",
            fontFamily: "'Open Sans', Arial, sans-serif",
            textDecoration: videoUrl ? "underline" : "none",
          }}
        >
          {title}
        </h3>
        <p
          style={{
            margin: 0,
            fontSize: 13,
            color: "#666666",
            fontFamily: "'Open Sans', Arial, sans-serif",
          }}
        >
          {date}
        </p>
      </button>

      {expanded && videoUrl && (
        <div
          style={{
            marginTop: 16,
            borderRadius: 4,
            overflow: "hidden",
            boxShadow: "0 2px 10px rgba(0,46,93,0.12)",
          }}
        >
          <video
            controls
            style={{ width: "100%", display: "block" }}
            src={videoUrl}
          >
            Your browser does not support the video tag.
          </video>
        </div>
      )}

      {expanded && !videoUrl && (
        <p
          style={{
            marginTop: 12,
            fontSize: 14,
            color: "#888",
            fontFamily: "'Open Sans', Arial, sans-serif",
            fontStyle: "italic",
          }}
        >
          Video not yet available.
        </p>
      )}
    </div>
  );
}

export default function FaithEngineeringLectureSeries() {
  return (
    <div style={{ backgroundColor: "#ffffff", minHeight: "100vh", width: "100%" }}>
      <div
        style={{
          fontFamily: "'Open Sans', Arial, sans-serif",
          maxWidth: 900,
          margin: "0 auto",
          padding: "48px 24px",
        }}
      >
        {/* Page Title */}
        <h1
          style={{
            fontSize: 32,
            fontWeight: 700,
            color: "#002E5D",
            fontFamily: "'Open Sans', Arial, sans-serif",
            marginBottom: 16,
            marginTop: 0,
          }}
        >
          Faith &amp; Engineering Lecture Series
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: 16,
            lineHeight: 1.7,
            color: "#333333",
            marginBottom: 24,
            fontStyle: "",
          }}
        >
          This lecture series will include faculty reflections on integrating
          faith and profession. The hope is to help you get to know the faculty
          on a more personal level, and to understand how faculty members
          integrate faith and profession, and how they balance family, church,
          profession, and hobbies.
        </p>

        {/* Notice Banner */}
        <div
          style={{
            backgroundColor: "#f4f6f9",
            border: "1px solid #c0cad8",
            borderLeft: "4px solid #002E5D",
            borderRadius: 3,
            padding: "14px 18px",
            marginBottom: 40,
          }}
        >
          <p style={{ margin: 0, fontSize: 14, color: "#333333", fontWeight: 600 }}>
            The next Faith and Engineering Lecture will be given in the Fall
            semester. Good luck finishing your classes and have a great summer!
          </p>
        </div>

        {/* Lectures Section */}
        <h2
          style={{
            fontSize: 22,
            fontWeight: 700,
            color: "#002E5D",
            fontFamily: "'Open Sans', Arial, sans-serif"
          }}
        >
          Recorded Lectures
        </h2>
        <div>
          {lectures.map((lecture) => (
            <LectureCard
              key={lecture.title}
              title={lecture.title}
              date={lecture.date}
              videoUrl={lecture.videoUrl}
            />
          ))}
          {/* closing border */}
          <div style={{ borderTop: "1px solid #d0d7e2" }} />
        </div>
      </div>
    </div>
  );
}
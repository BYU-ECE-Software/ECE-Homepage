'use client';

import { useEffect, useState } from 'react';

const faqs = [
  {
    question: 'Where do I go to take a tour?',
    answer:
      "450 EB is the department office for Electrical and Computer Engineering. If you enter the main doors please go up to the 4th floor by stairs or elevator and you will find us in the atrium just south of the main staircase. Just let the front desk secretaries know that you're interested in taking a tour.",
  },
  {
    question: 'Do tours cost money?',
    answer: 'No, free for all!',
  },
  {
    question: 'Will the tours be fun?',
    answer:
      'Absolutely! The tour is designed to be engaging and informative, with interactive stops that showcase exciting projects and research. Our enthusiastic student guides make the experience enjoyable for everyone.',
  },
  {
    question: 'Can I bring a friend with me?',
    answer:
      "Of course! The more the merrier. And if you're here with your family before the start of the school year, bring them too!",
  },
  {
    question: 'When can I take a tour?',
    answer: 'Tours are offered on the hour from 1 PM to 4 PM, or you can simply walk in anytime.',
  },
  {
    question: 'How long are the tours?',
    answer: 'Each tour lasts about 30 minutes.',
  },
  {
    question: 'Is it just for Engineering students?',
    answer:
      "No! It's a beautiful building, and the research projects are fun and interesting to learn about, no matter what you plan to study.",
  },
  {
    question: 'What if I am not in the Provo area?',
    answer: 'You can take the tour virtually on our YouTube channel!',
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        borderBottom: '1px solid #d0d7e2',
        padding: '18px 0',
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 14,
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: 0,
          width: '100%',
          textAlign: 'left',
        }}
      >
        <span
          style={{
            fontSize: 22,
            color: '#002E5D',
            fontWeight: 400,
            lineHeight: 1,
            transform: open ? 'rotate(45deg)' : 'none',
            transition: 'transform 0.2s ease',
            display: 'inline-block',
            minWidth: 18,
          }}
        >
          +
        </span>
        <span
          style={{
            fontSize: 15,
            fontWeight: 700,
            color: '#002E5D',
            fontFamily: "'Open Sans', Arial, sans-serif",
          }}
        >
          {question}
        </span>
      </button>
      {open && (
        <p
          style={{
            margin: '12px 0 0 32px',
            fontSize: 14,
            color: '#444444',
            lineHeight: 1.65,
            fontFamily: "'Open Sans', Arial, sans-serif",
          }}
        >
          {answer}
        </p>
      )}
    </div>
  );
}

export default function CampusTours() {
  useEffect(() => {
    document.body.style.backgroundColor = '#ffffff';
    document.body.style.margin = '0';
    return () => {
      document.body.style.backgroundColor = '';
      document.body.style.margin = '';
    };
  }, []);

  const channelUrl = 'https://www.youtube.com/channel/UCj2sMA0jEfi8oYhgX6h5g5A';
  const embedUrl = 'https://www.youtube.com/embed/-c9Wj5iFsyc';

  const sectionHeading: React.CSSProperties = {
    fontSize: 26,
    fontWeight: 700,
    color: '#002E5D',
    paddingBottom: 8,
    marginBottom: 24,
    marginTop: 0,
    fontFamily: "'Open Sans', Arial, sans-serif",
  };

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', width: '100%' }}>
      <div
        style={{
          fontFamily: "'Open Sans', Arial, sans-serif",
          color: '#222222',
          maxWidth: 900,
          margin: '0 auto',
          padding: '48px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: 48,
        }}
      >
        {/* Section 1: On Campus Tour */}
        <section>
          <h2 style={sectionHeading}>Schedule an On Campus Tour</h2>

          <p style={{ fontSize: 15, lineHeight: 1.75, color: '#333333', marginBottom: 24 }}>
            Join us for a guided tour hosted by the Department of Electrical and Computer
            Engineering. Discover our stunning new building and exciting program through interactive
            stops. Learn about our curricula, student clubs and programs, and research
            opportunities. Get an in-depth look at the Electrical Engineering, Computer Engineering,
            and Cybersecurity programs, all led by enthusiastic student guides. Have questions?
            Check out our FAQ or visit us in person!
          </p>

          <a
            href="https://ecentours.youcanbook.me/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              backgroundColor: '#002E5D',
              color: '#ffffff',
              fontWeight: 700,
              fontSize: 14,
              padding: '12px 28px',
              borderRadius: 3,
              textDecoration: 'none',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
            }}
          >
            Reserve Now
          </a>

          {/* FAQ */}
          <h3
            style={{
              fontSize: 18,
              fontWeight: 700,
              color: '#002E5D',
              marginTop: 40,
              marginBottom: 4,
              fontFamily: "'Open Sans', Arial, sans-serif",
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
            }}
          >
            FAQ
          </h3>
          <div>
            {faqs.map((faq) => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </section>

        {/* Section 2: Virtual Tours */}
        <section>
          <h2 style={sectionHeading}>Virtual Campus Tours</h2>

          <div
            style={{
              position: 'relative',
              paddingBottom: '56.25%',
              height: 0,
              overflow: 'hidden',
              borderRadius: 4,
              boxShadow: '0 2px 12px rgba(0,46,93,0.15)',
            }}
          >
            <iframe
              src={embedUrl}
              title="BYU ECE Department Virtual Tour"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                border: 0,
              }}
            />
          </div>

          <a
            href={channelUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              marginTop: 16,
              color: '#002E5D',
              fontWeight: 600,
              fontSize: 15,
              textDecoration: 'underline',
              letterSpacing: '0.01em',
            }}
          >
            Visit Our YouTube Channel
          </a>
        </section>
      </div>
    </div>
  );
}

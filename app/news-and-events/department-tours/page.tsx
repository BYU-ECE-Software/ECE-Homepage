'use client';

import { useState } from 'react';
import PageBanner from '@/components/layout/PageBanner';

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
    <div className="border-t border-slate-200 py-5">
      <button onClick={() => setOpen(!open)} className="flex w-full items-center gap-3 text-left">
        <span
          className={`text-byu-navy inline-block min-w-[18px] text-xl leading-none font-normal transition-transform duration-200 ${open ? 'rotate-45' : ''}`}
        >
          +
        </span>
        <span className="text-byu-navy text-[15px] font-bold">{question}</span>
      </button>
      {open && <p className="mt-3 ml-[30px] text-sm leading-relaxed text-slate-600">{answer}</p>}
    </div>
  );
}

export default function CampusTours() {
  const channelUrl = 'https://www.youtube.com/channel/UCj2sMA0jEfi8oYhgX6h5g5A';
  const embedUrl = 'https://www.youtube.com/embed/-c9Wj5iFsyc';

  return (
    <div className="min-h-screen w-full bg-white">
      <PageBanner title="Schedule an On Campus Tour" />

      <div className="mx-auto flex max-w-3xl flex-col gap-8 px-6 py-10">
        <section>
          <p className="leading-normal text-gray-900">
            Join us for a guided tour hosted by the Department of Electrical and Computer
            Engineering. Discover our stunning new building and exciting program through
            interactive stops. Learn about our curricula, student clubs and programs, and research
            opportunities. Get an in-depth look at the Electrical Engineering, Computer
            Engineering, and Cybersecurity programs, all led by enthusiastic student guides. Have
            questions? Check out our FAQ or visit us in person!
          </p>

          <a
            href="https://ecentours.youcanbook.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-byu-royal mt-6 inline-block rounded px-7 py-3 text-sm font-bold tracking-wide text-white uppercase transition hover:opacity-90"
          >
            Reserve Now
          </a>

          <h2 className="text-byu-navy mt-10 mb-1 text-lg font-bold tracking-wide uppercase">
            FAQ
          </h2>
          <div>
            {faqs.map((faq) => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-byu-navy mb-6 text-2xl font-bold">Virtual Tour</h2>

          <div className="relative h-0 overflow-hidden rounded-md pb-[56.25%] shadow-lg">
            <iframe
              src={embedUrl}
              title="BYU ECE Department Virtual Tour"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 h-full w-full border-0"
            />
          </div>

          <a
            href={channelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-byu-navy mt-4 inline-block text-[15px] font-semibold underline"
          >
            Electrical and Computer Engineering YouTube Channel
          </a>
        </section>
      </div>
    </div>
  );
}

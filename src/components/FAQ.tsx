import { useState } from 'react';

const faqs = [
  {
    question: 'Do I need to know Git to use ControlZebra?',
    answer: 'Not at all! ControlZebra is designed specifically for people who don\'t want to learn Git. We handle all the complexity behind the scenes. You just click "Save", "Sync", and "Share"—the same actions you\'re used to with any file.',
  },
  {
    question: 'What file types does ControlZebra support?',
    answer: 'ControlZebra works with any file type that Git supports. For large binary files (PSDs, videos, CAD files, PLC programs, etc.), we automatically configure Git LFS to handle them efficiently. We\'re starting with industrial automation formats and expanding to creative/multimedia workflows.',
  },
  {
    question: 'Does it work with my existing Git repositories?',
    answer: 'Yes! ControlZebra is fully compatible with standard Git repositories hosted on GitHub, GitLab, Bitbucket, or any other Git server. You can use it alongside traditional Git tools if your team has mixed preferences.',
  },
  {
    question: 'How does ControlZebra handle merge conflicts?',
    answer: 'When someone else has changed the same file as you, ControlZebra shows you a clear "Conflict Helper" screen. For each conflicted file, you can choose to keep your version, keep theirs, or open the file to manually resolve. No cryptic error messages—just clear options.',
  },
  {
    question: 'Is my data stored on your servers?',
    answer: 'No. ControlZebra is a desktop application that runs entirely on your computer. Your files stay on your machine and your chosen Git host (GitHub, GitLab, etc.). We don\'t have access to your files or repositories.',
  },
  {
    question: 'What platforms does ControlZebra run on?',
    answer: 'ControlZebra runs on Windows, macOS, and Linux. We\'re building it to work wherever you work.',
  },
  {
    question: 'Is ControlZebra free?',
    answer: 'We\'re still finalizing pricing. There will be a free tier for individual use and small teams. Join the waitlist to get early access pricing and help shape what features matter most to you.',
  },
  {
    question: 'When will ControlZebra be available?',
    answer: 'We\'re currently in development with early access planned for 2026. Join our waitlist to be among the first to try it and provide feedback that shapes the final product.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-gray-900/30">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-400">
            Got questions? We've got answers.
          </p>
        </div>

        {/* FAQ list */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-xl bg-gray-900/50 border border-gray-800 overflow-hidden"
            >
              <button
                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-medium text-white">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-gray-400 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-gray-400 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}

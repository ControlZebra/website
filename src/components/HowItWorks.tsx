const steps = [
  {
    number: '01',
    title: 'Open Your Project',
    description: 'Point ControlZebra to your project folder. It automatically detects if it\'s a Git repository and shows you what\'s going on.',
    visual: (
      <div className="rounded-lg bg-gray-900 border border-gray-800 p-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 rounded bg-primary-500/20 flex items-center justify-center">
            <svg className="w-4 h-4 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
            </svg>
          </div>
          <div>
            <div className="text-sm font-medium text-white">Line-3-PLC-Project</div>
            <div className="text-xs text-gray-500">main branch • 2 changes</div>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm">
            <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
            <span className="text-gray-300">MainProgram.acd</span>
            <span className="text-xs text-gray-500 ml-auto">Modified</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            <span className="text-gray-300">SafetyRoutine.L5X</span>
            <span className="text-xs text-gray-500 ml-auto">Added</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    number: '02',
    title: 'Make Changes & Save',
    description: 'Work on your files as usual. When you\'re ready, click "Save Changes" to create a checkpoint. We automatically make a new branch for you so your main branch stays safe. Add a short note about what you changed.',
    visual: (
      <div className="rounded-lg bg-gray-900 border border-gray-800 p-4">
        <div className="mb-4">
          <label className="text-xs text-gray-500 block mb-2">What did you change?</label>
          <div className="rounded bg-gray-800 border border-gray-700 p-3 text-sm text-gray-300">
            Added safety interlock for conveyor startup sequence
          </div>
        </div>
        <button className="w-full rounded-lg bg-primary-600 py-2 text-sm font-semibold text-white flex items-center justify-center gap-2">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          Save Changes
        </button>
      </div>
    ),
  },
  {
    number: '03',
    title: 'Sync & Share',
    description: 'Get updates from your team with "Sync". Share your work with "Share". ControlZebra handles the details and warns you about conflicts.',
    visual: (
      <div className="rounded-lg bg-gray-900 border border-gray-800 p-4">
        <div className="grid grid-cols-2 gap-3 mb-4">
          <button className="rounded-lg bg-gray-800 border border-gray-700 py-3 text-sm font-medium text-gray-300 flex items-center justify-center gap-2 hover:bg-gray-700 transition-colors">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
            </svg>
            Sync
          </button>
          <button className="rounded-lg bg-primary-600 py-3 text-sm font-semibold text-white flex items-center justify-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
            Share
          </button>
        </div>
        <div className="flex items-center gap-2 text-sm text-primary-400">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>All synced! Your team has the latest.</span>
        </div>
      </div>
    ),
  },
  {
    number: '04',
    title: 'Merge Changes into Main',
    description: 'When you\'re happy with your work, merge it back into the main branch. ControlZebra guides you step by step and keeps things simple.',
    visual: (
      <div className="rounded-lg bg-gray-900 border border-gray-800 p-4">
        <div className="mb-4">
          <div className="text-sm font-medium text-white">Ready to merge?</div>
          <div className="text-xs text-gray-500">Main branch • 1 change set</div>
        </div>
        <button className="w-full rounded-lg bg-primary-600 py-2 text-sm font-semibold text-white flex items-center justify-center gap-2">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12m6-6H6" />
          </svg>
          Merge into Main
        </button>
        <div className="mt-3 text-xs text-gray-400">
          We\'ll check for conflicts and help you fix them if needed.
        </div>
      </div>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-gray-900/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Version control doesn't have to be complicated. Here's how ControlZebra simplifies your daily workflow.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-16 lg:space-y-24">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'
              } gap-8 lg:gap-16 items-center`}
            >
              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-5xl font-bold text-primary-500/20">{step.number}</span>
                  <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                </div>
                <p className="text-lg text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Visual */}
              <div className="flex-1 w-full max-w-md">
                {step.visual}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

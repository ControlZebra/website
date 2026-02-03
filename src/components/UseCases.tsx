const useCases = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Video Production',
    description: 'Track project files, exports, and assets across your team. Keep every version of your edits safe and accessible.',
    formats: ['PRPROJ', 'AEP', 'FCP', 'DRP'],
    comingSoon: true,
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Design & Creative',
    description: 'Version control for designers. Track PSDs, Figma exports, and assets without filling up your hard drive with "final_v2_FINAL.psd".',
    formats: ['PSD', 'AI', 'INDD', 'SKETCH'],
    comingSoon: true,
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
    title: 'Industrial Automation',
    description: 'Track changes to PLC programs, HMI screens, and controller configs. See exactly what logic changed between versions.',
    formats: ['ACD', 'L5X', 'MER', 'AWL'],
    comingSoon: false,
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
      </svg>
    ),
    title: 'CAD & 3D Modeling',
    description: 'Manage CAD files and 3D models with full history. Compare revisions and roll back to any previous design.',
    formats: ['DWG', 'STEP', 'STL', 'BLEND'],
    comingSoon: true,
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
      </svg>
    ),
    title: 'Audio & Music Production',
    description: 'Version your DAW projects and stems. Collaborate with producers without overwriting each other\'s work.',
    formats: ['ALS', 'FLP', 'LOGIC', 'PTX'],
    comingSoon: true,
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    title: 'Any Complex Project',
    description: 'If you work with files that don\'t play nice with traditional version control, ControlZebra is for you.',
    formats: ['Any'],
    comingSoon: false,
  },
];

export default function UseCases() {
  return (
    <section id="use-cases" className="py-24 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Built for <span className="text-primary-400">Complex Files</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            ControlZebra handles the files that traditional Git clients struggle with—large binaries, 
            proprietary formats, and everything in between.
          </p>
        </div>

        {/* Use case grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="relative rounded-xl bg-gray-900/50 border border-gray-800 p-8 hover:border-primary-500/30 transition-colors"
            >
              {useCase.comingSoon && (
                <span className="absolute top-4 right-4 text-xs font-medium text-accent-500 bg-accent-500/10 px-2 py-1 rounded">
                  Coming Soon
                </span>
              )}
              <div className="flex flex-col gap-4">
                <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-500">
                  {useCase.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {useCase.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {useCase.formats.map((format, i) => (
                      <span
                        key={i}
                        className="inline-block px-2 py-1 text-xs font-mono text-gray-500 bg-gray-800 rounded"
                      >
                        {format.toLowerCase() === 'any' ? 'any format' : `.${format.toLowerCase()}`}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Coming soon note */}
        <div className="mt-12 p-6 rounded-xl bg-primary-500/5 border border-primary-500/20 text-center">
          <div className="flex items-center justify-center gap-2 text-primary-400 mb-2">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="font-semibold">Roadmap</span>
          </div>
          <p className="text-gray-400">
            We're starting with industrial automation, then expanding to creative and multimedia workflows. 
            Join the waitlist to influence which formats we support next.
          </p>
        </div>
      </div>
    </section>
  );
}

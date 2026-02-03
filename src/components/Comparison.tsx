const comparisons = [
  {
    aspect: 'Learning Curve',
    controlZebra: 'Minutes to learn. Click buttons, not type commands.',
    traditional: 'Weeks to months. Command line, branching strategies, merge conflicts.',
    winner: 'controlzebra',
  },
  {
    aspect: 'Large Binary Files',
    controlZebra: 'Automatic Git LFS for PSDs, videos, CAD, and more.',
    traditional: 'Manual LFS setup, easy to misconfigure.',
    winner: 'controlzebra',
  },
  {
    aspect: 'Error Recovery',
    controlZebra: '"Undo Last Save" and "Discard Changes" buttons.',
    traditional: 'Google "how to undo git commit" for the 100th time.',
    winner: 'controlzebra',
  },
  {
    aspect: 'Merge Conflicts',
    controlZebra: 'Visual helper: "Keep Mine", "Keep Theirs", or edit.',
    traditional: 'Edit cryptic conflict markers in text files.',
    winner: 'controlzebra',
  },
  {
    aspect: 'Team Onboarding',
    controlZebra: 'New team member productive in minutes.',
    traditional: 'Days of training, ongoing support needed.',
    winner: 'controlzebra',
  },
  {
    aspect: 'Advanced Features',
    controlZebra: 'Escape hatch to terminal for power users.',
    traditional: 'Full flexibility, full complexity.',
    winner: 'tie',
  },
];

export default function Comparison() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Why <span className="text-primary-400">ControlZebra</span>?
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            We're not trying to replace Git. We're making it accessible for the rest of the 90% 
            who just want to save their work and collaborate safely.
          </p>
        </div>

        {/* Comparison table */}
        <div className="rounded-xl border border-gray-800 overflow-hidden">
          {/* Table header */}
          <div className="grid grid-cols-3 bg-gray-900/80 border-b border-gray-800">
            <div className="p-4 text-sm font-medium text-gray-400"></div>
            <div className="p-4 text-center">
              <span className="inline-flex items-center gap-2 text-primary-400 font-semibold">
                <svg className="w-5 h-5" viewBox="0 0 48 48" fill="none">
                  <circle cx="24" cy="24" r="18" fill="currentColor" fillOpacity="0.2"/>
                  <circle cx="24" cy="16" r="2" fill="currentColor"/>
                  <circle cx="20" cy="24" r="2" fill="currentColor"/>
                  <circle cx="28" cy="24" r="2" fill="currentColor"/>
                  <circle cx="24" cy="32" r="2" fill="currentColor"/>
                </svg>
                ControlZebra
              </span>
            </div>
            <div className="p-4 text-center text-gray-400 font-medium">
              Traditional Git
            </div>
          </div>

          {/* Table rows */}
          {comparisons.map((row, index) => (
            <div
              key={index}
              className={`grid grid-cols-3 ${
                index !== comparisons.length - 1 ? 'border-b border-gray-800' : ''
              }`}
            >
              <div className="p-4 text-sm font-medium text-white bg-gray-900/30">
                {row.aspect}
              </div>
              <div className={`p-4 text-sm text-center ${
                row.winner === 'controlzebra' ? 'bg-primary-500/5' : 'bg-gray-900/10'
              }`}>
                <span className={row.winner === 'controlzebra' ? 'text-primary-400' : 'text-gray-300'}>
                  {row.controlZebra}
                </span>
                {row.winner === 'controlzebra' && (
                  <span className="block mt-1">
                    <svg className="w-4 h-4 mx-auto text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                )}
              </div>
              <div className="p-4 text-sm text-center text-gray-400 bg-gray-900/10">
                {row.traditional}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="mt-8 text-center text-gray-500 text-sm">
          * ControlZebra uses Git under the hood, so you get all the benefits of a proven 
          version control system without the complexity.
        </p>
      </div>
    </section>
  );
}

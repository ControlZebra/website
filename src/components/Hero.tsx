import WaitlistForm from './WaitlistForm';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center gradient-hero overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 zebra-stripes opacity-30" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 gradient-glow opacity-50" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 gradient-glow opacity-30" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-primary-500/10 border border-primary-500/20 px-4 py-1.5 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
            </span>
            <span className="text-sm font-medium text-primary-400">Coming Soon — Join the Waitlist</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">
            <span className="block text-white">Version Control</span>
            <span className="block bg-gradient-to-r from-primary-400 via-accent-400 to-primary-400 bg-clip-text text-transparent animated-gradient-text">
              For the Rest of Us
            </span>
          </h1>

          {/* Subheadline */}
          <p className="mx-auto max-w-2xl text-lg sm:text-xl text-gray-400 mb-10">
            Built for designers, engineers, and creators who work with complex files. No command line. No confusion. Just save, sync, and share.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="#waitlist"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-primary-600 px-8 py-4 text-lg font-semibold text-white hover:bg-primary-500 transition-all hover:scale-105 shadow-lg shadow-primary-500/25"
            >
              <span>Get Early Access</span>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="#how-it-works"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg border border-gray-700 bg-gray-900/50 px-8 py-4 text-lg font-semibold text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
            >
              <span>See How It Works</span>
            </a>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Deep integration with GitHub</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Handles Large Binary Files</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Windows, Mac & Linux</span>
            </div>
          </div>
        </div>

        {/* App Preview */}
        <div className="mt-16 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent z-10 pointer-events-none" />
          <div className="relative mx-auto max-w-5xl">
            <div className="rounded-xl overflow-hidden border border-gray-800 shadow-2xl shadow-primary-500/10">
              {/* Mock window chrome */}
              <div className="bg-gray-900 px-4 py-3 flex items-center gap-2 border-b border-gray-800">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex-1 text-center text-sm text-gray-500">ControlZebra</div>
              </div>
              {/* App preview placeholder */}
              <div className="bg-gray-900 aspect-[16/10] flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="inline-flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-primary-500/20 flex items-center justify-center">
                      <svg className="w-6 h-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="text-left">
                      <div className="text-lg font-semibold text-white">All Changes Synced</div>
                      <div className="text-sm text-gray-400">Last sync: 2 minutes ago</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
                    <div className="rounded-lg bg-gray-800/50 border border-gray-700 p-4">
                      <div className="text-2xl font-bold text-primary-400">12</div>
                      <div className="text-xs text-gray-500">Saves Today</div>
                    </div>
                    <div className="rounded-lg bg-gray-800/50 border border-gray-700 p-4">
                      <div className="text-2xl font-bold text-accent-400">3</div>
                      <div className="text-xs text-gray-500">Active Tasks</div>
                    </div>
                    <div className="rounded-lg bg-gray-800/50 border border-gray-700 p-4">
                      <div className="text-2xl font-bold text-white">✓</div>
                      <div className="text-xs text-gray-500">Up to Date</div>
                    </div>
                  </div>
                  <p className="mt-8 text-gray-500 text-sm">App preview coming soon...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

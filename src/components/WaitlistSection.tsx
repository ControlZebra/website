import WaitlistForm from './WaitlistForm';

export default function WaitlistSection() {
  return (
    <section id="waitlist" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] gradient-glow opacity-30" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Be First in Line
            </h2>
            <p className="text-lg text-gray-400 mb-8">
              ControlZebra is coming soon. Join our waitlist to get early access, 
              exclusive pricing, and the chance to shape the product with your feedback.
            </p>

            {/* Benefits */}
            <ul className="space-y-4">
              {[
                'Early access before public launch',
                'Founding member pricing (locked in forever)',
                'Direct line to the development team',
                'Influence which features we build next',
              ].map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-300">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right form */}
          <div>
            <WaitlistForm />
          </div>
        </div>
      </div>
    </section>
  );
}

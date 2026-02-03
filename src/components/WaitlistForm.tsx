import { useState } from 'react';

// Replace with your deployed Google Apps Script Web App URL
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyYlxD0fjntZYzZCrZFqBaBjxKgBHrTUoUS-pmurmfzVSLgjq3I5vwzPHij7O7Tdsst/exec';

interface WaitlistFormProps {
  variant?: 'inline' | 'card';
}

export default function WaitlistForm({ variant = 'card' }: WaitlistFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [honeypot, setHoneypot] = useState(''); // spam trap
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Honeypot check - bots fill hidden fields
    if (honeypot) {
      setStatus('success');
      setMessage('Thanks for joining! We\'ll be in touch soon.');
      return;
    }
    
    setStatus('loading');
    
    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Google Apps Script requires this
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, role, timestamp: new Date().toISOString() }),
      });
      
      // no-cors means we can't read the response, assume success
      setStatus('success');
      setMessage('Thanks for joining! We\'ll be in touch soon.');
      setName('');
      setEmail('');
      setRole('');
    } catch (error) {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  if (variant === 'inline') {
    return (
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="flex-1 rounded-lg bg-gray-800 border border-gray-700 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="rounded-lg bg-primary-600 px-6 py-3 font-semibold text-white hover:bg-primary-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
        </button>
        {status === 'success' && (
          <span className="text-primary-400 text-sm self-center">{message}</span>
        )}
      </form>
    );
  }

  return (
    <div className="rounded-2xl bg-gray-900/80 border border-gray-800 p-8 backdrop-blur-xl">
      <h3 className="text-2xl font-bold text-white mb-2">Get Early Access</h3>
      <p className="text-gray-400 mb-6">
        Be the first to know when ControlZebra launches. Join our waitlist and we'll send you an invite.
      </p>

      {status === 'success' ? (
        <div className="rounded-lg bg-primary-500/10 border border-primary-500/20 p-6 text-center">
          <div className="w-12 h-12 rounded-full bg-primary-500/20 flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <p className="text-primary-400 font-medium">{message}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Honeypot field - hidden from users, bots fill it */}
          <input
            type="text"
            name="website"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
            className="absolute -left-[9999px]"
            tabIndex={-1}
            autoComplete="off"
          />

          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              required
              className="w-full rounded-lg bg-gray-800 border border-gray-700 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              required
              className="w-full rounded-lg bg-gray-800 border border-gray-700 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="role" className="block text-sm font-medium text-gray-300 mb-2">
              What best describes you?
            </label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full rounded-lg bg-gray-800 border border-gray-700 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="">Select your role...</option>
              <option value="plc-programmer">PLC Programmer</option>
              <option value="controls-engineer">Controls Engineer</option>
              <option value="hmi-developer">HMI Developer</option>
              <option value="automation-engineer">Automation Engineer</option>
              <option value="systems-integrator">Systems Integrator</option>
              <option value="manager">Engineering Manager</option>
              <option value="other">Other</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full rounded-lg bg-primary-600 px-6 py-3 font-semibold text-white hover:bg-primary-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === 'loading' ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                <span>Joining...</span>
              </span>
            ) : (
              'Join the Waitlist'
            )}
          </button>

          <p className="text-xs text-gray-500 text-center">
            We respect your privacy. No spam, ever.
          </p>
        </form>
      )}
    </div>
  );
}

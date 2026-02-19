import React, { useState } from "react";
import Layout from "@theme/Layout";
import styles from "./index.module.css";

// ─── Data ────────────────────────────────────────────────────────────────────

const steps = [
  {
    number: 1,
    title: "Open Your Project",
    description:
      "Open any folder. ControlZebra detects your repository and shows what changed.",
  },
  {
    number: 2,
    title: "Make Changes & Save",
    description:
      'Work on your files as usual. When ready, click "Save Changes" to create a checkpoint.',
  },
  {
    number: 3,
    title: "Sync & Share",
    description:
      'Click "Sync" to pull team updates and "Share" to push your work. That\'s it.',
  },
  {
    number: 4,
    title: "Review History",
    description:
      "Browse every past save. Compare versions, undo mistakes, and restore files.",
  },
];

const comparisons = [
  {
    aspect: "Learning Curve",
    cz: "Minutes to learn",
    trad: "Weeks to months",
  },
  {
    aspect: "Large Binary Files",
    cz: "In-built preview & diff visualizer",
    trad: "No native support, manual setup needed",
  },
  {
    aspect: "Error Recovery",
    cz: "Undo / Discard buttons",
    trad: 'Internet to rescue',
  },
  {
    aspect: "Merge Conflicts",
    cz: "Visual conflict helper",
    trad: "Edit cryptic markers",
  },
  {
    aspect: "Team Onboarding",
    cz: "Productive in minutes",
    trad: "Days of training",
  },
];

const faqs = [
  {
    q: "Do I need to know Git to use ControlZebra?",
    a: 'Not at all. ControlZebra is designed for people who don\'t want to learn Git. You just click "Save", "Sync", and "Share".',
  },
  {
    q: "What file types does ControlZebra support?",
    a: "Any file type that Git supports. For large binary files (PSDs, videos, CAD files, PLC programs), we automatically configure Git LFS.",
  },
  {
    q: "Does it work with existing Git repositories?",
    a: "Yes. ControlZebra is fully compatible with standard Git repositories hosted on GitHub, GitLab, Bitbucket, or any other Git server.",
  },
  {
    q: "How does it handle merge conflicts?",
    a: 'When someone else changed the same file, ControlZebra shows a clear Conflict Helper. Choose "Keep Mine", "Keep Theirs", or manually edit. No cryptic error messages.',
  },
  {
    q: "Is my data stored on your servers?",
    a: "No. ControlZebra is a desktop application that runs entirely on your computer. Your files stay on your machine and your chosen Git host.",
  },
  {
    q: "What platforms does it run on?",
    a: "Windows, macOS, and Linux.",
  },
  {
    q: "Is ControlZebra free?",
    a: "We're still finalizing pricing. There will be a free tier for individual use. Join the waitlist for early access pricing.",
  },
];

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyYlxD0fjntZYzZCrZFqBaBjxKgBHrTUoUS-pmurmfzVSLgjq3I5vwzPHij7O7Tdsst/exec";

// ─── Components ──────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <h1 className={styles.heroTitle}>
          <span className={styles.heroFunkyText}>Git, in High-Res</span>
          <br />
          <span className={styles.heroHighlight}>See what you ship</span>
        </h1>
        <p className={styles.heroSubtitle}>
          Collaboration tool for high performance automation teams. Simple, visual, and open.
        </p>
        <div className={styles.heroCta}>
          <a href="#waitlist" className={styles.ctaPrimary}>
            Get Early Access →
          </a>
          <a href="#how-it-works" className={styles.ctaSecondary}>
            See How It Works
          </a>
        </div>
        <div className={styles.trustIndicators}>
          <span className={styles.trustItem}>
            <span className={styles.checkIcon}>✓</span> Deep integration with
            GitHub
          </span>
          <span className={styles.trustItem}>
            <span className={styles.checkIcon}>✓</span> PDF and Image Visual Diff
            Files
          </span>
          <span className={styles.trustItem}>
            <span className={styles.checkIcon}>✓</span> Ladder Logic Visual Diff
          </span>
        </div>

        {/* App screenshot */}
        <div className={styles.screenshotWrapper}>
          <div className={styles.screenshotFrame}>
            <img
              src="/img/app-screenshot.png"
              alt="ControlZebra desktop application showing file browser and change tracking"
              className={styles.screenshotImg}
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className={styles.sectionAlt} id="how-it-works">
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>How It Works</h2>
          <p className={styles.sectionSubtitle}>
            Version control doesn't have to be complicated. Four steps — that's it.
          </p>
        </div>
        <div className={styles.timeline}>
          {steps.map((s, i) => (
            <div key={s.number} className={styles.timelineItem}>
              <div className={styles.timelineLeft}>
                <div className={styles.timelineDot}>
                  <span className={styles.timelineDotInner}>{s.number}</span>
                </div>
                {i < steps.length - 1 && <div className={styles.timelineLine} />}
              </div>
              <div className={styles.timelineContent}>
                <h3 className={styles.timelineTitle}>{s.title}</h3>
                <p className={styles.timelineDesc}>{s.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Comparison() {
  return (
    <section className={styles.section} id="comparison">
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            Why <span className={styles.comparisonHighlight}>ControlZebra</span>?
          </h2>
          <p className={styles.sectionSubtitle}>
            Leading companies choose ControlZebra to keep teams in sync without the Git headaches. Here's how we compare to traditional version control systems.
          </p>
        </div>
        <div className={styles.comparisonWrap}>
          <div className={styles.comparisonGrid}>
            <div className={styles.comparisonHeaderRow}>
              <div className={styles.comparisonAspectHeader}></div>
              <div className={`${styles.comparisonColumnHeader} ${styles.comparisonColumnHeaderCz}`}>
                ControlZebra
              </div>
              <div className={styles.comparisonColumnHeader}>Traditional Git</div>
            </div>

            {comparisons.map((c, i) => (
              <div key={i} className={styles.comparisonRow}>
                <div className={styles.comparisonAspect}><strong>{c.aspect}</strong></div>
                <div className={`${styles.comparisonCell} ${styles.comparisonCellCz}`}>
                  <span className={`${styles.comparisonIcon} ${styles.comparisonIconCheck}`}>✓</span>
                  {c.cz}
                </div>
                <div className={styles.comparisonCell}>
                  <span className={`${styles.comparisonIcon} ${styles.comparisonIconCross}`}>✕</span>
                  {c.trad}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className={styles.sectionAlt} id="faq">
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
        </div>
        <ul className={styles.faqList}>
          {faqs.map((f, i) => (
            <li key={i} className={styles.faqItem}>
              <button
                className={styles.faqQuestion}
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span>{f.q}</span>
                <span
                  className={`${styles.faqArrow} ${open === i ? styles.faqArrowOpen : ""}`}
                >
                  ▾
                </span>
              </button>
              {open === i && <div className={styles.faqAnswer}>{f.a}</div>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function WaitlistCTA() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot) {
      setStatus("success");
      return;
    }
    setStatus("loading");
    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          role,
          timestamp: new Date().toISOString(),
        }),
      });
      setStatus("success");
      setName("");
      setEmail("");
      setRole("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className={styles.ctaSection} id="waitlist">
      <div className="container">
        <h2 className={styles.ctaTitle}>Get Early Access</h2>
        <p className={styles.ctaSubtitle}>
          Join the waitlist. Be the first to know when ControlZebra launches.
        </p>
        {status === "success" ? (
          <p className={styles.successMessage}>
            Thanks for joining! We'll be in touch soon.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className={styles.waitlistForm}>
            {/* Honeypot */}
            <input
              type="text"
              name="website"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              className={styles.hidden}
              tabIndex={-1}
              autoComplete="off"
            />
            <div className={styles.formRow}>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                required
                className={styles.formInput}
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
                className={styles.formInput}
              />
            </div>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className={styles.formSelect}
            >
              <option value="">What best describes you?</option>
              <option value="controls-engineer">Controls / PLC Engineer</option>
              <option value="design-engineer">Design / CAD Engineer</option>
              <option value="creative">Creative Professional</option>
              <option value="software-dev">Software Developer</option>
              <option value="manager">Engineering Manager</option>
              <option value="other">Other</option>
            </select>
            <button
              type="submit"
              disabled={status === "loading"}
              className={styles.formSubmit}
            >
              {status === "loading" ? "Joining…" : "Join Waitlist"}
            </button>
            {status === "error" && (
              <p className={styles.errorMessage}>
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        )}
      </div>
    </section>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function Home(): React.JSX.Element {
  return (
    <Layout
      title="Version Control for the Rest of Us"
      description="ControlZebra is a simplified desktop Git client for engineers, designers, and creators who work with complex files."
    >
      <main>
        <Hero />
        <HowItWorks />
        <Comparison />
        <FAQ />
        <WaitlistCTA />
      </main>
    </Layout>
  );
}

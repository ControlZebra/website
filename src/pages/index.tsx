import React, { useState, useEffect, useRef } from "react";
import Layout from "@theme/Layout";
import styles from "./index.module.css";

// MUI Icons
import SearchIcon from "@mui/icons-material/Search";
import TimelineIcon from "@mui/icons-material/Timeline";
import HandshakeIcon from "@mui/icons-material/Handshake";
import RestoreIcon from "@mui/icons-material/Restore";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import ShieldIcon from "@mui/icons-material/Shield";
import GroupsIcon from "@mui/icons-material/Groups";

// ─── Data ────────────────────────────────────────────────────────────────────

const bentoFeatures = [
  {
    title: "Visual Diff for Industrial Assets",
    description:
      "Compare PLC logic, PDFs, images, and other critical files with purpose-built visual tools.",
    icon: <SearchIcon fontSize="inherit" />,
    size: "large" as const,
  },
  {
    title: "End-to-End Change Timeline",
    description:
      "Track every saved checkpoint with searchable history so teams can audit and understand change intent.",
    icon: <TimelineIcon fontSize="inherit" />,
    size: "small" as const,
  },
  {
    title: "Conflict Helper for Real Teams",
    description:
      "Resolve overlapping edits with guided options instead of cryptic Git errors.",
    icon: <HandshakeIcon fontSize="inherit" />,
    size: "small" as const,
  },
  {
    title: "Safe Rollback and Recovery",
    description:
      "Undo risky updates quickly and recover from mistakes without losing context.",
    icon: <RestoreIcon fontSize="inherit" />,
    size: "medium" as const,
  },
  {
    title: "No Vendor Lock-In",
    description:
      "Use GitHub, GitLab, Azure DevOps, Bitbucket, or self-hosted Git. Your data and workflows remain portable.",
    icon: <LockOpenIcon fontSize="inherit" />,
    size: "medium" as const,
  },
  {
    title: "Built for OT Workflows",
    description:
      "Designed for controls engineers, systems integrators, and plant teams — not only software developers.",
    icon: <PrecisionManufacturingIcon fontSize="inherit" />,
    size: "small" as const,
  },
  {
    title: "Local-First Security",
    description:
      "Your files stay on your machine and your chosen Git host. We never store or access your confidential files.",
    icon: <ShieldIcon fontSize="inherit" />,
    size: "small" as const,
  },
];

const howItWorksSteps = [
  {
    number: "01",
    title: "Connect Your Repo",
    description: "Open a local or cloned project repository.",
  },
  {
    number: "02",
    title: "Review Visual Changes",
    description:
      "See diffs for PLC logic, PDFs, images, and more with purpose-built viewers.",
  },
  {
    number: "03",
    title: "Share Safely",
    description:
      "Save, push, and sync using plain-language actions your whole team understands.",
  },
];

const faqs = [
  {
    q: "Is ControlZebra available today?",
    a: "ControlZebra is currently in Closed Beta. We are onboarding selected teams and expanding access in phases.",
  },
  {
    q: "Do we need to be Git experts to use it?",
    a: "No. ControlZebra is designed for non-technical and cross-functional industrial teams, with plain-language workflows.",
  },
  {
    q: "What types of assets can we manage?",
    a: "You can manage all repository files, with enhanced visual workflows for industrial assets such as PLC files (L5X, L5K), PDFs, images, and related engineering artifacts.",
  },
  {
    q: "Are we locked into your platform?",
    a: "No. ControlZebra follows open Git standards. You can use GitHub, GitLab, Azure DevOps, Bitbucket, or self-hosted Git.",
  },
  {
    q: "Where is our data stored?",
    a: "Your source files stay in your repository environment and local workspace. You keep control over your infrastructure and access policies.",
  },
  {
    q: "Can ControlZebra work with our existing repositories?",
    a: "Yes. It is built to work with standard Git repositories and existing team workflows.",
  },
  {
    q: "How does it reduce deployment risk?",
    a: "By making changes visible before release, improving review quality, and providing clear rollback paths when issues are detected.",
  },
  {
    q: "How do we join the beta?",
    a: 'Use the "Request Early Access" form on this page. We\'ll follow up with qualification and onboarding steps.',
  },
];

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyYlxD0fjntZYzZCrZFqBaBjxKgBHrTUoUS-pmurmfzVSLgjq3I5vwzPHij7O7Tdsst/exec";

// ─── Hooks ───────────────────────────────────────────────────────────────────

function useIntersectionFade(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add(styles.visible);
          observer.unobserve(el);
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return ref;
}

// ─── Components ──────────────────────────────────────────────────────────────

function HeroEmailCapture() {
  const [email, setEmail] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot) { setStatus("success"); return; }
    setStatus("loading");
    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, timestamp: new Date().toISOString() }),
      });
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className={styles.heroEmailSuccess}>
        <span className={styles.successCheck}>✓</span> You're on the list. We'll be in touch soon.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={styles.heroEmailForm}>
      <input
        type="text"
        name="website"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        className={styles.hidden}
        tabIndex={-1}
        autoComplete="off"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your work email"
        required
        className={styles.heroEmailInput}
      />
      <button type="submit" disabled={status === "loading"} className={styles.heroEmailButton}>
        {status === "loading" ? "Submitting…" : "Request Early Access"}
      </button>
      {status === "error" && (
        <p className={styles.heroEmailError}>Something went wrong. Please try again.</p>
      )}
    </form>
  );
}

function Hero() {
  return (
    <section className={styles.hero}>
      {/* Animated background layers */}
      <div className={styles.heroBgAnimation}>
        <div className={styles.heroBgMesh1} />
        <div className={styles.heroBgMesh2} />
        <div className={styles.heroBgGrid} />
      </div>
      <div className={styles.heroGradientOrb} />
      <div className={styles.heroGradientOrb2} />
      <div className={`container ${styles.heroInner}`}>
        <div className={styles.betaBadge}>
          <span className={styles.betaDot} />
          Running Closed Beta
        </div>
        <h1 className={styles.heroTitle}>
          Industrial DevOps +<br />
          <span className={styles.heroHighlight}>Track Changes Visually</span>
        </h1>
        <p className={styles.heroSubtitle}>
          ControlZebra gives industrial teams a visual way to review and manage
          changes across PLC logic, SCADA/HMI files, network configurations,
          PDFs, and other critical plant assets — without vendor lock-in.
        </p>
        <HeroEmailCapture />
        <p className={styles.heroTrust}>
          No spam. Early access invites sent monthly. Your data stays yours.
        </p>

        {/* App mockup */}
        <div className={styles.heroMockup}>
          <div className={styles.heroMockupFrame}>
            <div className={styles.heroMockupBar}>
              <span className={styles.mockupDot} />
              <span className={styles.mockupDot} />
              <span className={styles.mockupDot} />
            </div>
            <img
              src="/img/app-screenshot.png"
              alt="ControlZebra desktop application showing visual change tracking for industrial files"
              className={styles.heroMockupImg}
              loading="eager"
            />
          </div>
        </div>


      </div>
    </section>
  );
}

function ProblemStatement() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [shouldLoadImage, setShouldLoadImage] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible || shouldLoadImage) return;

    let timeoutId: number | null = null;
    let idleId: number | null = null;

    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      idleId = (window as Window & {
        requestIdleCallback: (
          callback: () => void,
          options?: { timeout: number }
        ) => number;
      }).requestIdleCallback(() => {
        setShouldLoadImage(true);
      }, { timeout: 500 });
    } else {
      timeoutId = window.setTimeout(() => {
        setShouldLoadImage(true);
      }, 160);
    }

    return () => {
      if (
        idleId !== null &&
        typeof window !== "undefined" &&
        "cancelIdleCallback" in window
      ) {
        (window as Window & { cancelIdleCallback: (id: number) => void }).cancelIdleCallback(idleId);
      }
      if (timeoutId !== null) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [isVisible, shouldLoadImage]);

  return (
    <section
      className={`${styles.problemSection} ${isVisible ? styles.visible : ""}`}
      ref={sectionRef}
    >
      <div className={`container ${styles.problemInner}`}>
        <div className={styles.problemLayout}>
          {/* Left: text content */}
          <div className={styles.problemText}>
            <div className={styles.sectionLabel} style={{ textAlign: 'left' }}>The Problem</div>
            <div className={styles.painGrid}>
              {[
                "No clear visibility into what changed between PLC/SCADA versions.",
                "Hard to review non-text assets (PDFs, ladder logic, network files) with traditional tools.",
                "Critical edits made under time pressure with no reliable audit trail.",
                "When incidents happen, root-cause analysis is slow because change context is fragmented.",
              ].map((pain, i) => (
                <div key={i} className={styles.painCard}>
                  <span className={styles.painIcon}>✕</span>
                  <p>{pain}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Right: image with text overlay */}
          <div className={styles.problemImageWrap}>
            {shouldLoadImage ? (
              <img
                src="/img/thisisengineering-WjOWazUPAss-unsplash.jpg"
                alt="Engineer working on industrial control systems"
                className={styles.problemImage}
                loading="lazy"
                decoding="async"
                fetchPriority="low"
              />
            ) : (
              <div className={styles.problemImagePlaceholder} aria-hidden="true" />
            )}
            <div className={styles.problemImageOverlay}>
              <h2 className={styles.problemImageTitle}>
                Industrial teams make high-impact changes every day — but most
                workflows still rely on tribal knowledge, screenshots, and reactive
                troubleshooting.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const ref = useIntersectionFade();
  return (
    <section className={styles.howSection} id="how-it-works" ref={ref}>
      <div className="container">
        <div className={styles.sectionLabel}>How It Works</div>
        <h2 className={styles.sectionTitle}>Three steps to full change visibility</h2>
        <div className={styles.stepsGrid}>
          {howItWorksSteps.map((step) => (
            <div key={step.number} className={styles.stepCard}>
              <span className={styles.stepNumber}>{step.number}</span>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BentoGrid() {
  const ref = useIntersectionFade();
  return (
    <section className={styles.bentoSection} ref={ref}>
      <div className="container">
        <div className={styles.sectionLabel}>Capabilities</div>
        <h2 className={styles.sectionTitle}>
          Everything your team needs to manage industrial changes
        </h2>
        <div className={styles.bentoGrid}>
          {bentoFeatures.map((f, i) => (
            <div
              key={i}
              className={`${styles.bentoCard} ${styles[`bento_${f.size}`]}`}
            >
              <div className={styles.bentoCardInner}>
                <span className={styles.bentoIcon}>{f.icon}</span>
                <h3 className={styles.bentoTitle}>{f.title}</h3>
                <p className={styles.bentoDesc}>{f.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const ref = useIntersectionFade();

  return (
    <section className={styles.faqSection} id="faq" ref={ref}>
      <div className="container">
        <div className={styles.sectionLabel}>FAQ</div>
        <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
        <ul className={styles.faqList}>
          {faqs.map((f, i) => (
            <li key={i} className={styles.faqItem}>
              <button
                className={styles.faqQuestion}
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span>{f.q}</span>
                <span className={`${styles.faqChevron} ${open === i ? styles.faqChevronOpen : ""}`}>
                  ›
                </span>
              </button>
              <div className={`${styles.faqAnswer} ${open === i ? styles.faqAnswerOpen : ""}`}>
                <p>{f.a}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function FinalCTA() {
  const ref = useIntersectionFade();
  return (
    <section className={styles.finalCta} id="waitlist" ref={ref}>
      <div className={styles.finalCtaGlow} />
      <div className={`container ${styles.finalCtaInner}`}>
        <h2 className={styles.finalCtaTitle}>
          Ready to bring visibility to your industrial changes?
        </h2>
        <p className={styles.finalCtaSubtitle}>
          Join selected industrial teams already shaping the future of OT change
          management.
        </p>
        <HeroEmailCapture />
        <p className={styles.heroTrust}>
          No vendor lock-in. No spam. Cancel anytime.
        </p>
      </div>
    </section>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function Home(): React.JSX.Element {
  return (
    <Layout
      title="Industrial DevOps — Track Changes Visually"
      description="ControlZebra gives industrial teams a visual way to review and manage changes across PLC logic, SCADA/HMI files, and critical plant assets. No vendor lock-in."
    >
      <main>
        <Hero />
        <ProblemStatement />
        <HowItWorks />
        <BentoGrid />
        <FAQ />
        <FinalCTA />
      </main>
    </Layout>
  );
}

import Link from "@docusaurus/Link";
import styles from "./ModernFooter.module.css";

export default function ModernFooter() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerInner}`}>
        <div className={styles.footerGrid}>
          <div className={styles.footerBrand}>
            <div className={styles.footerLogo}>
              <img src="/img/logo.svg" alt="ControlZebra" width={28} height={28} />
              <span>ControlZebra</span>
            </div>
            <p className={styles.footerBrandDesc}>
              Industrial DevOps for teams that manage critical plant assets.
            </p>
          </div>

          <div className={styles.footerColumn}>
            <h4>Product</h4>
            <Link to="/docs">Documentation</Link>
            <Link to="/docs/getting-started/installation">Quickstart</Link>
            <Link to="/docs/core-workflows/daily-workflow">Core Workflows</Link>
          </div>

          <div className={styles.footerColumn}>
            <h4>Community</h4>
            <a href="https://github.com/ControlZebra" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://discord.gg/ewh4qs5rkd" target="_blank" rel="noopener noreferrer">
              Discord
            </a>
          </div>

          <div className={styles.footerColumn}>
            <h4>Support</h4>
            <a
              href="https://github.com/ControlZebra/controlzebra-releases/issues"
              target="_blank"
              rel="noopener noreferrer"
            >
              Report an Issue
            </a>
            <a href="mailto:hello@controlzebra.com">Contact Us</a>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>© {new Date().getFullYear()} ControlZebra. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

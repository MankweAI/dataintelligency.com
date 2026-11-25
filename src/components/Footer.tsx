import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-inner">
          <div>
            <div className="footer-brand">
              <BrandMark />
            </div>
            <p className="footer-sub">
              Brand Protection Intelligence for DTC founders. Takedown briefings
              &amp; LOA onboarding:{" "}
              <a
                href="mailto:briefings@dataintelligency.com"
                style={{ color: "#fbbf24" }}
              >
                briefings@dataintelligency.com
              </a>
              .
            </p>
          </div>

          <div className="footer-links">
            <Link href="/#captures">Takedown Walkthrough</Link>
            <Link href="/#anatomy">Why Manual Fails</Link>
            <Link href="/#deliverable">Protection Suite</Link>
            <Link href="/portal">Client Portal</Link>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Engagement Terms</Link>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {year} DataIntelligency · Brand Protection Intelligence</span>
          <span>Zero admin access required · Authorized DMCA Enforcement</span>
        </div>
      </div>
    </footer>
  );
}

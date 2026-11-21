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
              External affiliate attribution &amp; coupon-ring intelligence for DTC
              brands. New program inquiries:{" "}
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
            <Link href="/#captures">Case Walkthrough</Link>
            <Link href="/#anatomy">Why Rings Hide</Link>
            <Link href="/#deliverable">Cleanup File</Link>
            <Link href="/portal">Client Portal</Link>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Engagement Terms</Link>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {year} DataIntelligency · External Telemetry &amp; Cleanup Files</span>
          <span>No admin access required · Fixed-fee delivery</span>
        </div>
      </div>
    </footer>
  );
}

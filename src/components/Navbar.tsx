import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";

export function Navbar() {
  return (
    <header className="site-nav">
      <div className="container nav-inner">
        <Link href="/" aria-label="DataIntelligency Home">
          <BrandMark />
        </Link>

        <nav className="nav-links" aria-label="Primary">
          <Link href="/#overview" className="nav-link">
            Overview
          </Link>
          <Link href="/#captures" className="nav-link">
            Case Walkthrough
          </Link>
          <Link href="/#anatomy" className="nav-link">
            Why Rings Hide
          </Link>
          <Link href="/#deliverable" className="nav-link">
            Deliverable
          </Link>
          <Link href="/#faq" className="nav-link">
            FAQ
          </Link>
        </nav>

        <Link href="/portal" className="nav-portal-btn">
          <span>Client Portal</span>
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </header>
  );
}

export const metadata = {
  title: "Privacy Policy — DataIntelligency",
};

export default function PrivacyPage() {
  return (
    <div className="container prose-wrap">
      <span className="section-label">Legal · Privacy Policy</span>
      <h1>Privacy Policy</h1>
      <p className="prose-meta">Last updated: November 2026 · DataIntelligency</p>

      <h2>1. External Intelligence Scope</h2>
      <p>
        DataIntelligency conducts external brand-protection monitoring using
        publicly accessible search results, publicly reachable storefront URLs,
        DNS and WHOIS infrastructure records, and publicly served product imagery.
        We do not collect, process, or store personal consumer payment details or
        end-customer profiles.
      </p>

      <h2>2. Storefront Account Independence</h2>
      <p>
        We do not request administrative logins, Shopify staff credentials, payment
        processor passwords, or private store analytics to detect clone domains
        or submit Authorized DMCA Agent enforcement notices.
      </p>

      <h2>3. Business Inquiries &amp; Authorization Records</h2>
      <p>
        When brand executives correspond with DataIntelligency via{" "}
        <a
          href="mailto:briefings@dataintelligency.com"
          style={{ color: "#fbbf24" }}
        >
          briefings@dataintelligency.com
        </a>
        , corporate contact details and Letters of Authorization (LOA) are used
        strictly to execute authorized takedowns, deliver evidence briefs, and
        manage ongoing clone monitoring. We never sell or syndicate contact lists.
      </p>

      <h2>4. Aggregate Website Analytics</h2>
      <p>
        This site uses cookieless Vercel Web Analytics solely to record aggregate page
        views and country-level visitor metrics without storing advertising cookies or
        tracking users across unrelated domains.
      </p>
    </div>
  );
}

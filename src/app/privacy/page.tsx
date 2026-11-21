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
        DataIntelligency conducts external attribution integrity research using
        publicly accessible search results, publicly served coupon bridge domains,
        DNS/infrastructure records, and public affiliate redirect parameters. We do
        not collect, process, or store personal consumer payment details or end-customer
        profiles.
      </p>

      <h2>2. Merchant Account Independence</h2>
      <p>
        We do not request administrative logins, affiliate network credentials, or
        private store analytics to produce our cleanup files. Client brands validate
        our external findings inside their own affiliate ledger.
      </p>

      <h2>3. Business Inquiries &amp; Communications</h2>
      <p>
        When brand executives correspond with DataIntelligency via{" "}
        <a
          href="mailto:briefings@dataintelligency.com"
          style={{ color: "#fbbf24" }}
        >
          briefings@dataintelligency.com
        </a>
        , business contact details are used strictly to evaluate audit requests,
        deliver intelligence files, and answer compliance questions. We do not sell,
        rent, or syndicate contact lists to third parties.
      </p>
    </div>
  );
}

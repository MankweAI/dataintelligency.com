import { CaptureViewer } from "@/components/CaptureViewer";

const DELIVERABLE_ITEMS = [
  {
    num: "01 · Actionable CSV Workbook",
    title: "Complete Affiliate ID & Bridge Map",
    body: "Every disguised partner ID, dashboard creator alias, external bridge domain, and shared infrastructure signal formatted for immediate bulk deactivation.",
  },
  {
    num: "02 · Timestamped Visual Chain",
    title: "Unredacted Browser Captures & HAR Logs",
    body: "Clean desktop screenshots and redirect chains proving each listed ID intercepted branded checkout traffic on your domain.",
  },
  {
    num: "03 · Dispute & Clawback Log",
    title: "Commission Reversal Documentation",
    body: "Network parameter logs (utm_campaign, sscid, irclickid, click timestamps) organized for Impact, ShareASale, Awin, or Refersion reversals.",
  },
];

const FAQ_ITEMS = [
  {
    question: "Do you need access to our Impact, ShareASale, or Shopify account?",
    answer:
      "No. Everything in our cleanup file is captured externally using browser telemetry, DNS/infrastructure clustering, and live redirect verification. You never share API keys, logins, or customer data.",
  },
  {
    question: "Why didn't our affiliate manager or platform fraud filters catch this?",
    answer:
      "Platform filters look for extreme spikes on a single publisher ID. Disguised rings split checkout traffic across 5 to 15 separate accounts disguised as creators or editorial blogs so each account stays below alert thresholds.",
  },
  {
    question: "Is this a recurring SaaS subscription or monthly retainer?",
    answer:
      "No. We price each mapped cleanup file as a flat one-off fee with zero ongoing commitment. You receive the full evidence dossier, deactivate the linked IDs in your dashboard, and keep 100% of the recovered margin.",
  },
  {
    question: "How do we validate findings before purchasing a cleanup file?",
    answer:
      "Every audit opens with two concrete sample affiliate IDs and active bridge domains observed against your storefront. Your team verifies those initial IDs inside your own affiliate ledger before ordering the full fixed-fee map.",
  },
];

export default function HomePage() {
  return (
    <>
      <section id="overview" className="hero">
        <div className="hero-backdrop" aria-hidden="true">
          <img
            src="/hero-telemetry.jpg"
            alt=""
            className="hero-backdrop-img"
          />
          <div className="hero-backdrop-scrim" />
        </div>

        <div className="container hero-content">
          <div className="hero-left">
            <p className="hero-kicker">Brand Protection Intelligence</p>

            <h1 className="hero-title">
              You&apos;re paying commissions to syndicates{" "}
              <span className="hero-title-accent">
                hijacking your own checkout.
              </span>
            </h1>

            <p className="hero-subtitle">
              These coupon syndicates register disguised creator accounts to
              intercept branded searches seconds before payment.
            </p>
          </div>
        </div>
      </section>

      <section id="captures" className="section section-trace">
        <div className="container">
          <span className="section-label">Illustrative Brand Captures</span>
          <h2 className="section-title">
            How a branded search gets stamped as an affiliate sale
          </h2>
          <p className="section-lead">
            Follow the complete browser sequence from a branded promo-code search to an
            injected affiliate payout tag stamped on checkout.
          </p>

          <CaptureViewer />
        </div>
      </section>

      <section id="anatomy" className="section section-editorial">
        <div className="container">
          <span className="section-label">Methodology · How Rings Hide</span>
          <h2 className="section-title">
            Why split coupon rings pass routine affiliate program checks
          </h2>
          <p className="section-lead">
            Modern coupon hijackers rarely rely on one loud publisher account or overt
            trademark bidding on brand URLs. They distribute traffic across lookalike
            accounts built to blend into standard DTC affiliate programs.
          </p>

          <div className="editorial-cols">
            <article className="editorial-col">
              <div className="editorial-step">01 · Fragmentation</div>
              <h3 className="editorial-title">Split-ID Account Clustering</h3>
              <p className="editorial-body">
                Operators register 5 to 15 seemingly unrelated affiliate accounts under
                creator aliases or review personas. By capping volume per ID, none trigger
                automated velocity or reversal thresholds on their own.
              </p>
            </article>

            <article className="editorial-col">
              <div className="editorial-step">02 · Cloaked Infrastructure</div>
              <h3 className="editorial-title">Rotating Bridge Domains</h3>
              <p className="editorial-body">
                Each ID routes through throwaway promo-code domains bidding or ranking on
                &ldquo;[brand] coupon code&rdquo; queries. Clicking to reveal or copy a
                code silently triggers the outbound affiliate redirect hop.
              </p>
            </article>

            <article className="editorial-col">
              <div className="editorial-step">03 · Attribution Theft</div>
              <h3 className="editorial-title">Last-Click Checkout Overwrite</h3>
              <p className="editorial-body">
                Buyers already in checkout return with a freshly stamped affiliate cookie
                or query string. Your brand pays commission on customers already earned
                through paid acquisition, email, or direct loyalty.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="deliverable" className="section section-deliverable">
        <div className="container">
          <span className="section-label">Deliverable Package</span>
          <h2 className="section-title">What is inside a DataIntelligency cleanup file</h2>
          <p className="section-lead">
            No extra dashboard seat or software onboarding. Every flat-fee audit delivers
            an immediately actionable workbook and evidence folder built for Finance and
            Affiliate Ops to execute in one pass.
          </p>

          <div className="deliverable-split">
            <div className="deliverable-specs">
              {DELIVERABLE_ITEMS.map((item) => (
                <div key={item.num} className="deliverable-spec">
                  <div className="editorial-step">{item.num}</div>
                  <h3 className="editorial-title">{item.title}</h3>
                  <p className="editorial-body">{item.body}</p>
                </div>
              ))}
            </div>

            <div className="trace-stage-media">
              <img
                src="/captures/deliverable-package.png"
                alt="Cleanup file workbook (solvik_recovery_ring_cleanup.csv) listing 9 linked affiliate IDs paired with an executive Case Brief PDF summary."
              />
            </div>
          </div>

          <div className="verify-banner">
            <div className="verify-banner-text">
              <h3>Request an external program check</h3>
              <p>
                Share your storefront domain and affiliate network with{" "}
                <a
                  href="mailto:briefings@dataintelligency.com"
                  className="verify-email-link"
                >
                  briefings@dataintelligency.com
                </a>
                . Our research desk inspects public promo-code SERPs and redirect paths
                for disguised coupon rings—zero dashboard logins or tracking pixels
                required.
              </p>
            </div>
            <a
              href="mailto:briefings@dataintelligency.com?subject=External%20Affiliate%20Program%20Inquiry"
              className="btn-verify"
            >
              <span>Request a Program Audit</span>
              <span aria-hidden="true" style={{ color: "#fbbf24" }}>
                →
              </span>
            </a>
          </div>
        </div>
      </section>

      <section id="faq" className="section section-editorial">
        <div className="container">
          <span className="section-label">Verification FAQ</span>
          <h2 className="section-title">Common questions from brand operators</h2>

          <div className="faq-grid">
            {FAQ_ITEMS.map((item) => (
              <div key={item.question} className="faq-item">
                <h3 className="faq-q">{item.question}</h3>
                <p className="faq-a">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

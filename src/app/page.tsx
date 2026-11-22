import { CaptureViewer } from "@/components/CaptureViewer";
import { InquiryForm } from "@/components/InquiryForm";

const DELIVERABLE_ITEMS = [
  {
    num: "01 · Day 1 — Cleanup File",
    title: "Complete Affiliate ID & Bridge Map",
    body: "Delivered on Day 1: every disguised partner ID, dashboard alias, external bridge domain, and shared infrastructure signal for all flagged events—formatted for immediate deactivation.",
  },
  {
    num: "02 · Day 1 — Evidence & Clawback Log",
    title: "Unredacted Captures & Reversal Logs",
    body: "Delivered on Day 1: timestamped browser captures, redirect chains, and parameter logs (utm_campaign, sscid, irclickid) organized for commission clawbacks.",
  },
  {
    num: "03 · Days 2–30 — Re-Entry Watch",
    title: "30-Day External Re-Rotation Sweeps",
    body: "If banned syndicates spin up replacement creator aliases or rotated bridge URLs over the following 30 days, our desk catches them externally and updates your list.",
  },
];

const FAQ_ITEMS = [
  {
    question: "Do you need access to our Impact, ShareASale, or Shopify account?",
    answer:
      "No. Both the Day 1 cleanup file and the 30-day re-entry watch run 100% externally using browser telemetry, DNS clustering, and live redirect verification. You never share API keys or logins.",
  },
  {
    question: "Why didn't our affiliate manager or platform fraud filters catch this?",
    answer:
      "Platform filters look for extreme spikes on a single publisher ID. Disguised rings split checkout traffic across 5 to 15 separate accounts disguised as creators or editorial blogs so each account stays below alert thresholds.",
  },
  {
    question: "Is this a recurring SaaS subscription or monthly retainer?",
    answer:
      "No. The 30-Day External Cleanup & Re-Entry Watch is a flat $499 one-off fee with zero auto-renewal or ongoing retainer. You get the full Day 1 cleanup file plus 30 days of external re-entry coverage.",
  },
  {
    question: "How do we validate findings before paying $499?",
    answer:
      "Every audit opens with two concrete sample affiliate IDs and active bridge domains observed against your storefront. Your team verifies those initial IDs inside your own affiliate ledger before starting the 30-day watch.",
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
          <span className="section-label">
            30-Day External Cleanup &amp; Re-Entry Watch · $499 Flat
          </span>
          <h2 className="section-title">
            Day 1 cleanup file—plus 30 days of re-entry protection
          </h2>
          <p className="section-lead">
            For a single flat $499 fee (no retainer or auto-renewal), you receive the
            complete cleanup file on Day 1 for all flagged hijacking events, backed by 30
            days of external monitoring if the syndicate tries to rotate onto new IDs.
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

          <InquiryForm />
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

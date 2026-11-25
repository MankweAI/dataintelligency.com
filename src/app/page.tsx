import { CaptureViewer } from "@/components/CaptureViewer";
import { InquiryForm } from "@/components/InquiryForm";

const DELIVERABLE_ITEMS = [
  {
    num: "01 · Free Sample Proof",
    title: "Verify Enforcement Before Spending a Dollar",
    body: "Start with a free sample takedown on an active clone domain targeting your brand, or request a baseline scan showing the unauthorized storefronts running your product photos right now.",
  },
  {
    num: "02 · Sprint Takedown ($499 Flat)",
    title: "Done-For-You Multi-Layer Clone Removal",
    body: "We act as your Authorized DMCA Agent under 17 U.S.C. § 512(c)(3)(A) to file copyright, impersonation, and registrar abuse notices across hosts, DNS registrars, search indexes, and payment gateways.",
  },
  {
    num: "03 · Ongoing Shield ($399/mo Optional)",
    title: "24/7 Respawn Monitoring & Automatic Takedowns",
    body: "Clone rings come back wherever stealing your ads is profitable. Continuous 24/7 sweeps catch newly registered .shop, .store, and lookalike checkouts so your team never plays whack-a-mole.",
  },
];

const FAQ_ITEMS = [
  {
    question: "Do you need access to our Shopify admin, Stripe, or ad accounts?",
    answer:
      "No. Detection, evidence capture, and DMCA/impersonation enforcement run 100% externally. You never share store logins, API keys, or customer data.",
  },
  {
    question: "How can you file takedowns without us hiring an IP law firm?",
    answer:
      "Under U.S. copyright law (17 U.S.C. § 512(c)(3)(A)), takedown notices may be executed by an authorized enforcement agent acting on behalf of the copyright owner. Confirming authorization from your corporate domain email empowers us to file directly—and your brand owns automatic copyright on its original product photography.",
  },
  {
    question: "Why didn't our previous manual DMCA takedown stop them?",
    answer:
      "Manual one-off notices usually hit a single URL while leaving the operator's sister domains, upstream product feeds, and payment descriptors untouched. Where clones remain profitable, operators simply spin up a new .shop or .store domain days later unless monitored continuously.",
  },
  {
    question: "Can we test your team on one clone store first?",
    answer:
      "Yes. Request a sample takedown check below or reply directly to our briefing email with confirmation from your corporate domain—we will execute an initial sample takedown to prove execution speed before any $499 sprint engagement.",
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
              Unauthorized storefronts are{" "}
              <span className="hero-title-accent">
                cloning your products.
              </span>
            </h1>

            <p className="hero-subtitle">
              We take down lookalike clone domains across hosts, registrars, and
              search—and monitor your catalog 24/7 to shut down new clones as
              they appear.
            </p>
          </div>
        </div>
      </section>

      <section id="captures" className="section section-trace">
        <div className="container">
          <span className="section-label">Illustrative Takedown Sequence</span>
          <h2 className="section-title">
            How unauthorized clone storefronts are detected and shut down
          </h2>
          <p className="section-lead">
            Follow the complete external workflow from stolen-photo fingerprint
            matching to multi-layer enforcement and 24/7 respawn monitoring.
          </p>

          <CaptureViewer />
        </div>
      </section>

      <section id="anatomy" className="section section-editorial">
        <div className="container">
          <span className="section-label">Methodology · Why Clones Return</span>
          <h2 className="section-title">
            Why manual takedowns hardly deter profitable clone rings
          </h2>
          <p className="section-lead">
            Submitting an isolated form against one storefront treats the symptom,
            not the operation. Here is why copycat rings survive one-off cleanups—and
            how structured enforcement shuts them down.
          </p>

          <div className="editorial-cols">
            <article className="editorial-col">
              <div className="editorial-step">01 · Visual Theft</div>
              <h3 className="editorial-title">Stolen Studio Photography</h3>
              <p className="editorial-body">
                Operators mirror your product pages on cheap .shop, .store, and
                typosquat domains, running 70%-off ads to intercept buyers warmed
                up by your own paid social and search campaigns.
              </p>
            </article>

            <article className="editorial-col">
              <div className="editorial-step">02 · Rapid Respawns</div>
              <h3 className="editorial-title">Whack-a-Mole Domain Rotation</h3>
              <p className="editorial-body">
                When one storefront is reported manually, syndicates deploy a
                pre-built replacement domain using your same CDN photography within
                days—pushing scammed customers back into your support inbox.
              </p>
            </article>

            <article className="editorial-col">
              <div className="editorial-step">03 · Full-Stack Enforcement</div>
              <h3 className="editorial-title">Coordinated Takedown &amp; Watch</h3>
              <p className="editorial-body">
                Under 17 U.S.C. § 512(c)(3)(A), we hit storefront hosts, DNS
                registrars, search indexes, and payment processors together—then
                watch 24/7 to kill respawns automatically.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="deliverable" className="section section-deliverable">
        <div className="container">
          <span className="section-label">
            Done-For-You Takedown Sprint &amp; 24/7 Monitoring
          </span>
          <h2 className="section-title">
            Start with a free sample takedown—scale only when proven
          </h2>
          <p className="section-lead">
            Zero homework for your ops or legal team. We capture the evidence,
            prepare and file every notice as your Authorized Enforcement Agent,
            and deliver verified offline proof across all targets.
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
                alt="Clone takedown enforcement ledger showing offline HTTP 404 / NXDOMAIN verification alongside executive takedown brief."
              />
            </div>
          </div>

          <InquiryForm />
        </div>
      </section>

      <section id="faq" className="section section-editorial">
        <div className="container">
          <span className="section-label">Operator FAQ</span>
          <h2 className="section-title">Common questions from brand founders</h2>

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

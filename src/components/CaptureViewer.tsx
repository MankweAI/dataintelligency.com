interface TraceStage {
  id: string;
  num: string;
  time: string;
  tag: string;
  heading: string;
  explanation: string;
  image: string;
  alt: string;
}

const TRACE_STAGES: TraceStage[] = [
  {
    id: "hop1",
    num: "01",
    time: "Catalog Scrape",
    tag: "Stolen Studio Photography",
    heading: "Syndicates clone your product photos and deploy a lookalike domain",
    explanation:
      "Using perceptual visual hashing, we match your original studio photography (here shown on illustrative brand Alder & Loom) against unauthorized .shop, .store, and lookalike checkouts even when scammers alter titles to dodge keyword alerts.",
    image: "/captures/stage1.png",
    alt: "Visual fingerprint comparison matching Alder & Loom official CDN photography against lookalike domain alderandloomonline.shop.",
  },
  {
    id: "hop2",
    num: "02",
    time: "Infrastructure Audit",
    tag: "Live Fake Checkout",
    heading: "Every clone exposes underlying host, registrar, and payment rails",
    explanation:
      "Before sending a single notice, our desk maps the clone storefront's live checkout, unedited template markers, hosting platform instance, registrar abuse desk, and linked sibling domains running the same stolen catalog.",
    image: "/captures/stage2.png",
    alt: "Live clone product page for Alder & Loom Shearling Tote marked down 70% alongside extracted Shopify ID and registrar telemetry.",
  },
  {
    id: "hop3",
    num: "03",
    time: "Under 24 Hours",
    tag: "Authorized DMCA Enforcement",
    heading: "Multi-layer filings hit the storefront, registrar, search index, and gateway together",
    explanation:
      "Acting as your Authorized Enforcement Agent under 17 U.S.C. § 512(c)(3)(A), we submit evidence-backed copyright and impersonation notices simultaneously across storefront hosts, domain registrars, Google Search/Shopping, and payment processors.",
    image: "/captures/stage3.png",
    alt: "Enforcement console showing parallel DMCA and abuse filings submitted across Shopify, Registrar, Google Search, and Payment Processors.",
  },
  {
    id: "hop4",
    num: "04",
    time: "Continuous 24/7",
    tag: "Termination & Respawn Watch",
    heading: "Offline proof is verified—and new clone spawns are caught immediately",
    explanation:
      "Because profitable clone rings immediately register replacement .shop or .store domains after a takedown, our 24/7 watch sweeps daily for respawns and queues follow-on enforcement before new clones capture holiday or ad-driven traffic.",
    image: "/captures/stage4.png",
    alt: "NXDOMAIN 404 offline verification for terminated clone domain alongside live 24/7 respawn feed catching replacement spawn.",
  },
];

export function CaptureViewer() {
  const total = TRACE_STAGES.length;
  return (
    <div className="trace-stages">
      {TRACE_STAGES.map((stage, idx) => (
        <article key={stage.id} className="trace-stage-row">
          <div className="trace-stage-copy">
            <div className="trace-stage-tag">
              <span className="trace-stage-counter">
                Stage {idx + 1}/{total}
              </span>
              <span className="trace-stage-sub">
                {stage.time} · {stage.tag}
              </span>
            </div>
            <h3 className="trace-heading">{stage.heading}</h3>
            <p className="trace-prose">{stage.explanation}</p>
          </div>

          <div className="trace-stage-media">
            <img src={stage.image} alt={stage.alt} />
          </div>
        </article>
      ))}
    </div>
  );
}

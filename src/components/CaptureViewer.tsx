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
    time: "t+00.0s",
    tag: "High-Intent Checkout Buyer",
    heading: "Ready-to-buy shopper pauses at checkout to search for a code",
    explanation:
      "The customer already has an item in their cart on Solvik Recovery and opens Google for a promo code. Disguised coupon aggregators dominate the top sponsored and organic slots seconds before payment.",
    image: "/captures/stage1.png",
    alt: "Google search results showing CouponSip and PromoDeck sponsored promo code listings above Solvik Recovery.",
  },
  {
    id: "hop2",
    num: "02",
    time: "t+04.2s",
    tag: "Disguised Bridge Property",
    heading: "Throwaway coupon domain masks an approved affiliate ID",
    explanation:
      "Inside your affiliate dashboard, this partner poses as an ordinary creator or deal reviewer. Externally, CouponSip runs paid search arbitrage across rotating bridge domains split across separate IDs so none trip velocity alerts.",
    image: "/captures/stage2.png",
    alt: "CouponSip bridge page for Solvik Recovery showing Google Ads gclid parameter and Show Coupon Code buttons.",
  },
  {
    id: "hop3",
    num: "03",
    time: "t+09.8s",
    tag: "Click-to-Copy Redirect",
    heading: "Clicking \"Copy Code\" silently fires the outbound affiliate hop",
    explanation:
      "Clicking to reveal the code opens the pop-over modal and triggers the ShareASale relay link in the background (visible in the lower-left preview bar), stamping a fresh affiliate tracking cookie in the buyer's browser.",
    image: "/captures/stage3.png",
    alt: "CouponSip click-to-copy modal showing code SOLVIK20 and the ShareASale tracking relay URL in Chrome's status bar.",
  },
  {
    id: "hop4",
    num: "04",
    time: "t+11.1s",
    tag: "Last-Click Reassignment",
    heading: "Your storefront returns stamped with affiliate payout parameters",
    explanation:
      "The shopper lands back on your storefront carrying utm_source=shareasale and an active click ID in the address bar. Standard last-click rules pay the commission when they complete checkout.",
    image: "/captures/stage4.png",
    alt: "Solvik Recovery infrared sauna homepage carrying active ShareASale UTM and sscid parameters in the browser address bar.",
  },
];

export function CaptureViewer() {
  return (
    <div className="trace-stages">
      {TRACE_STAGES.map((stage) => (
        <article key={stage.id} className="trace-stage-row">
          <div className="trace-stage-copy">
            <div className="trace-stage-tag">
              Stage {stage.num} · {stage.time} · {stage.tag}
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

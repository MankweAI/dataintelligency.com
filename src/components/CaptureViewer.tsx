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
      "The customer already holds an item in their bag on Alder & Pine Supply and opens Google for a promo code. Disguised coupon aggregators dominate the top sponsored and organic slots seconds before payment.",
    image: "/captures/stage1.png",
    alt: "Simulated Chrome search window showing CouponSip and PromoDeck sponsored promo code results above Alder & Pine Supply.",
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
    alt: "Simulated CouponSip bridge page for Alder & Pine showing Google Ads gclid parameter and Show Coupon Code triggers.",
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
    alt: "Simulated CouponSip click-to-copy modal showing code ALDER20 and the ShareASale tracking link in Chrome's bottom-left status bar.",
  },
  {
    id: "hop4",
    num: "04",
    time: "t+11.1s",
    tag: "Last-Click Reassignment",
    heading: "Your storefront returns stamped with affiliate payout parameters",
    explanation:
      "Even when the revealed coupon code is rejected at checkout, the landing URL already carries utm_source=shareasale and an active click ID. Standard last-click rules pay the commission when the shopper finishes buying.",
    image: "/captures/stage4.png",
    alt: "Simulated Alder & Pine Supply storefront with bag open showing rejected ALDER20 code while ShareASale UTM tags sit active in the URL bar.",
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

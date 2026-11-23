"use client";

import { useEffect, useState } from "react";
import { Analytics, type BeforeSendEvent } from "@vercel/analytics/next";

const BOT_UA_RE =
  /bot|crawl|spider|slurp|headless|phantom|puppeteer|playwright|selenium|cypress|lighthouse|pagespeed|gtmetrix|pingdom|uptimerobot|ahrefs|semrush|mj12bot|dotbot|bytespider|gptbot|claudebot|perplexity|ccbot|facebookexternalhit|linkedinbot|twitterbot|slackbot|discordbot|whatsapp|telegrambot|applebot|bingpreview|urlscan|virustotal|mimecast|proofpoint|barracuda/i;

function isLikelyAutomatedBrowser(): boolean {
  if (typeof window === "undefined" || typeof navigator === "undefined") {
    return true;
  }
  const ua = navigator.userAgent || "";
  if (!ua || BOT_UA_RE.test(ua)) {
    return true;
  }
  if (navigator.webdriver) {
    return true;
  }
  // Headless browsers often expose 0 languages or 0 screen dimensions
  if (
    (Array.isArray(navigator.languages) && navigator.languages.length === 0) ||
    window.screen?.width === 0 ||
    window.screen?.height === 0
  ) {
    return true;
  }
  return false;
}

export function HumanAnalytics() {
  const [isVerifiedHuman, setIsVerifiedHuman] = useState(false);

  useEffect(() => {
    if (isLikelyAutomatedBrowser()) {
      return;
    }

    let activated = false;
    let firstPointer: { x: number; y: number } | null = null;

    const activate = () => {
      if (activated) return;
      activated = true;
      cleanup();
      setIsVerifiedHuman(true);
    };

    const onScrollOrWheel = () => {
      if (window.scrollY > 12) {
        activate();
      }
    };

    const onWheel = (e: WheelEvent) => {
      if (e.isTrusted && (Math.abs(e.deltaY) > 0 || Math.abs(e.deltaX) > 0)) {
        activate();
      }
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!e.isTrusted) return;
      if (!firstPointer) {
        firstPointer = { x: e.clientX, y: e.clientY };
        return;
      }
      const dist = Math.hypot(e.clientX - firstPointer.x, e.clientY - firstPointer.y);
      if (dist > 14) {
        activate();
      }
    };

    const onDirectInput = (e: Event) => {
      if (e.isTrusted) {
        activate();
      }
    };

    const cleanup = () => {
      window.removeEventListener("scroll", onScrollOrWheel);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("touchstart", onDirectInput);
      window.removeEventListener("keydown", onDirectInput);
      window.removeEventListener("mousedown", onDirectInput);
    };

    window.addEventListener("scroll", onScrollOrWheel, { passive: true });
    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("touchstart", onDirectInput, { passive: true });
    window.addEventListener("keydown", onDirectInput, { passive: true });
    window.addEventListener("mousedown", onDirectInput, { passive: true });

    return cleanup;
  }, []);

  if (!isVerifiedHuman) {
    return null;
  }

  return (
    <Analytics
      beforeSend={(event: BeforeSendEvent) => {
        if (isLikelyAutomatedBrowser()) {
          return null;
        }
        return event;
      }}
    />
  );
}

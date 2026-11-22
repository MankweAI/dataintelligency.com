"use client";

import { FormEvent, useState } from "react";

const NETWORK_OPTIONS = [
  "ShareASale",
  "Impact",
  "Awin",
  "Refersion",
  "Other / Not sure",
];

export function InquiryForm() {
  const [domain, setDomain] = useState("");
  const [email, setEmail] = useState("");
  const [network, setNetwork] = useState(NETWORK_OPTIONS[0]);
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const cleanDomain = domain.trim();
    const cleanEmail = email.trim();

    if (!cleanDomain || !cleanDomain.includes(".")) {
      setError("Enter your storefront domain (for example, yourbrand.com).");
      return;
    }
    if (!cleanEmail || !cleanEmail.includes("@")) {
      setError("Enter a valid work email address.");
      return;
    }

    setError(null);
    setSubmitted(true);
  }

  const mailtoSubject = encodeURIComponent(
    `Program Check Request: ${domain.trim()}`
  );
  const mailtoBody = encodeURIComponent(
    `Storefront domain: ${domain.trim()}\nWork email: ${email.trim()}\nAffiliate network: ${network}\n\nRequesting the $499 30-Day External Cleanup & Re-Entry Watch details.`
  );

  return (
    <div className="verify-banner inquiry-banner">
      <div className="inquiry-copy">
        <span className="inquiry-kicker">
          30-Day Cleanup &amp; Re-Entry Watch · $499 Flat
        </span>
        <h3>Request an external program check</h3>
        <p>
          Enter your storefront domain and work email. Our desk inspects public
          promo-code SERPs and redirect chains for your Day 1 cleanup file—zero
          dashboard logins required.
        </p>
        <p className="inquiry-direct">
          Direct desk:{" "}
          <a
            href="mailto:briefings@dataintelligency.com"
            className="verify-email-link"
          >
            briefings@dataintelligency.com
          </a>
        </p>
      </div>

      <div className="inquiry-form-wrap">
        {submitted ? (
          <div className="inquiry-success" role="status">
            <div className="inquiry-success-title">
              Submitted — {domain.trim()}
            </div>
            <p className="inquiry-success-body">
              Your request for the <strong>{network}</strong> external check is
              logged for <strong>{email.trim()}</strong>. Need priority follow-up
              via your inbox?
            </p>
            <div className="inquiry-success-actions">
              <a
                href={`mailto:briefings@dataintelligency.com?subject=${mailtoSubject}&body=${mailtoBody}`}
                className="btn-verify"
              >
                <span>Open Pre-Filled Email</span>
                <span aria-hidden="true" style={{ color: "#fbbf24" }}>
                  →
                </span>
              </a>
              <button
                type="button"
                className="inquiry-reset-btn"
                onClick={() => {
                  setSubmitted(false);
                  setDomain("");
                  setEmail("");
                  setNetwork(NETWORK_OPTIONS[0]);
                  setError(null);
                }}
              >
                Check another domain
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="inquiry-form" noValidate>
            <div className="inquiry-row">
              <div>
                <label htmlFor="inquiry-domain" className="input-label">
                  Storefront Domain
                </label>
                <input
                  id="inquiry-domain"
                  name="domain"
                  type="text"
                  value={domain}
                  onChange={(e) => {
                    setDomain(e.target.value);
                    if (error) setError(null);
                  }}
                  placeholder="yourbrand.com"
                  className="text-input inquiry-input"
                />
              </div>

              <div>
                <label htmlFor="inquiry-email" className="input-label">
                  Work Email
                </label>
                <input
                  id="inquiry-email"
                  name="workEmail"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError(null);
                  }}
                  placeholder="john.doe@company.com"
                  className="text-input inquiry-input"
                />
              </div>
            </div>

            <div className="inquiry-row inquiry-row-submit">
              <div>
                <label htmlFor="inquiry-network" className="input-label">
                  Affiliate Network
                </label>
                <select
                  id="inquiry-network"
                  name="network"
                  value={network}
                  onChange={(e) => setNetwork(e.target.value)}
                  className="text-input inquiry-input"
                >
                  {NETWORK_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <button type="submit" className="inquiry-submit-btn">
                <span>Request Program Check</span>
                <span aria-hidden="true">→</span>
              </button>
            </div>

            {error && (
              <div className="portal-error inquiry-error" role="alert">
                {error}
              </div>
            )}
          </form>
        )}
      </div>
    </div>
  );
}

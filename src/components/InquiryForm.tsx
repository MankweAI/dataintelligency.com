"use client";

import { FormEvent, useState } from "react";

const SCOPE_OPTIONS = [
  "Free Sample Clone Takedown",
  "Full Clone Ring Cleanup ($499 Sprint)",
  "Ongoing 24/7 Monitoring ($399/mo)",
  "3P Marketplace / Impersonation Ads",
];

export function InquiryForm() {
  const [domain, setDomain] = useState("");
  const [email, setEmail] = useState("");
  const [scope, setScope] = useState(SCOPE_OPTIONS[0]);
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const cleanDomain = domain.trim();
    const cleanEmail = email.trim();

    if (!cleanDomain || !cleanDomain.includes(".")) {
      setError("Enter your official brand domain (for example, yourbrand.com).");
      return;
    }
    if (!cleanEmail || !cleanEmail.includes("@")) {
      setError("Enter a valid corporate email address.");
      return;
    }

    setError(null);
    setSubmitted(true);
  }

  const mailtoSubject = encodeURIComponent(
    `Clone Protection & Takedown Request: ${domain.trim()}`
  );
  const mailtoBody = encodeURIComponent(
    `Official Brand Domain: ${domain.trim()}\nCorporate Email: ${email.trim()}\nRequested Action: ${scope}\n\nPlease run an external clone scan / initiate a free sample takedown.`
  );

  return (
    <div className="verify-banner inquiry-banner">
      <div className="inquiry-copy">
        <span className="inquiry-kicker">
          Brand Protection Intelligence · Zero Admin Access Required
        </span>
        <h3>Request a free sample takedown or clone scan</h3>
        <p>
          Enter your brand domain and corporate email. Our desk verifies active
          .shop, .store, and lookalike clone storefronts targeting your catalog—or
          executes a sample takedown once authorized.
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
              Logged — {domain.trim()}
            </div>
            <p className="inquiry-success-body">
              Your request for <strong>{scope}</strong> is ready for{" "}
              <strong>{email.trim()}</strong>. Send direct corporate authorization
              to open your case immediately:
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
                  setScope(SCOPE_OPTIONS[0]);
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
                  Official Brand Domain
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
                  Corporate Email
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
                  placeholder="founder@yourbrand.com"
                  className="text-input inquiry-input"
                />
              </div>
            </div>

            <div className="inquiry-row inquiry-row-submit">
              <div>
                <label htmlFor="inquiry-scope" className="input-label">
                  Enforcement Scope
                </label>
                <select
                  id="inquiry-scope"
                  name="scope"
                  value={scope}
                  onChange={(e) => setScope(e.target.value)}
                  className="text-input inquiry-input"
                >
                  {SCOPE_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <button type="submit" className="inquiry-submit-btn">
                <span>Request Clone Scan</span>
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

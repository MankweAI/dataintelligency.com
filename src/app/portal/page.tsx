"use client";

import { FormEvent, useState } from "react";

export default function PortalPage() {
  const [email, setEmail] = useState("");
  const [workspaceKey, setWorkspaceKey] = useState("");
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmedEmail = email.trim();
    const trimmedKey = workspaceKey.trim();

    if (!trimmedEmail || !trimmedEmail.includes("@")) {
      setError("Enter your provisioned corporate email address.");
      return;
    }
    if (!trimmedKey) {
      setError("Enter your workspace key.");
      return;
    }

    setError(
      "Credentials not recognized. For LOA activation or workspace access, contact briefings@dataintelligency.com."
    );
  }

  return (
    <section className="portal-page">
      <div className="container">
        <div className="portal-split">
          <div className="portal-overview">
            <span
              className="section-label"
              style={{ color: "#f59e0b", letterSpacing: "0.12em" }}
            >
              Client Portal
            </span>
            <h1 className="portal-headline">
              Clone Takedown &amp; 24/7 Protection Workspace
            </h1>
            <p className="portal-intro">
              Direct access to active clone domain dossiers, DMCA filing
              tickets, HTTP 404 offline proofs, and 24/7 respawn alerts.
            </p>
          </div>

          <div className="portal-panel">
            <div className="portal-card-body">
              <h2 className="portal-title">Workspace Sign-In</h2>

              <form onSubmit={handleSubmit} noValidate>
                <label htmlFor="work-email" className="input-label">
                  Corporate Email
                </label>
                <input
                  id="work-email"
                  name="workEmail"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError(null);
                  }}
                  placeholder="founder@yourbrand.com"
                  autoComplete="email"
                  className="text-input"
                />

                <label htmlFor="workspace-key" className="input-label">
                  Workspace Key
                </label>
                <input
                  id="workspace-key"
                  name="workspaceKey"
                  type="password"
                  value={workspaceKey}
                  onChange={(e) => {
                    setWorkspaceKey(e.target.value);
                    if (error) setError(null);
                  }}
                  placeholder="••••••••••••••••"
                  autoComplete="off"
                  className="text-input"
                />

                {error && (
                  <div className="portal-error" role="alert">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  className="btn-verify"
                  style={{ width: "100%", justifyContent: "center", cursor: "pointer" }}
                >
                  <span>Sign In</span>
                  <span aria-hidden="true" style={{ color: "#fbbf24" }}>
                    →
                  </span>
                </button>
              </form>

              <div className="portal-note">
                Access provisioning:{" "}
                <a href="mailto:briefings@dataintelligency.com">
                  briefings@dataintelligency.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

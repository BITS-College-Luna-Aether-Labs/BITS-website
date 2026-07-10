"use client";

export function DataProtectionPolicyContent() {
  return (
    <div className="min-h-screen bg-[var(--bits-page)]">
      {/* Hero */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[var(--bits-green-dark)] to-[var(--bits-green)] pb-16 pt-20 sm:pt-24 lg:pt-28">
        <div className="absolute inset-0 opacity-15 [background:radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.6),transparent_50%),radial-gradient(circle_at_80%_70%,rgba(180,140,30,0.3),transparent_40%)]" />
        <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-block rounded-full bg-white/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/90 backdrop-blur-sm">Legal</span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">Data Protection Policy</h1>
          <p className="mt-3 text-base text-white/70">Last Updated: 11/07/2026 Gregorian Calendar or 04/11/2018 Ethiopian Calendar</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[var(--bits-page)] to-transparent" />
      </div>

      {/* Content */}
      <div className="relative -mt-10 mx-auto max-w-4xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-[var(--bits-green)]/20 bg-[var(--bits-surface)] shadow-sm">
          {[
            {
              num: "1", title: "Purpose and Scope",
              content: <p>This Data Protection Policy sets out how BITS College protects personal data in connection with the operation of www.bitscollege.edu.et. It is intended for internal governance purposes and for transparency to visitors, and complements the Privacy Policy.</p>,
            },
            {
              num: "2", title: "Legal Framework",
              content: <p>This Policy is based on Ethiopia&apos;s Personal Data Protection Proclamation No. 1321/2024 and reflects BITS College&apos;s commitment to lawful, fair, transparent, and secure processing of personal data. Where applicable, BITS College follows the rights, obligations, safeguards, and requirements established under the Proclamation.</p>,
            },
            {
              num: "3", title: "Data Processed Through This Website",
              content: (
                <>
                  <p>Given the current design of the Site (a static/informational website with no on-site forms or user accounts), the only data processed through www.bitscollege.edu.et is:</p>
                  <ul className="mt-3 space-y-1.5">
                    {[
                      "Standard web server access logs (IP address, requested page, timestamp, referrer, user agent), collected automatically for security and operations",
                      "A single locally-stored display preference (light/dark mode) that never reaches BITS College&apos;s servers",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-[var(--bits-text)]">
                        <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[var(--bits-green)]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-3">No sensitive personal data (as defined by the Proclamation — e.g., health, biometric, religious, or political data) is knowingly collected through this Site.</p>
                </>
              ),
            },
            {
              num: "4", title: "Roles and Responsibilities",
              content: <p>BITS College is the data controller for information processed through this Site. For this Site, BITS College acts as the data controller only for limited processing activities directly under its control, such as managing website-related inquiries received through external communication channels. Any hosting or infrastructure provider used to serve the Site acts as a data processor on our behalf and is expected to process data only on our instructions and to maintain appropriate security safeguards.</p>,
            },
            {
              num: "5", title: "Data Protection Principles Applied",
              content: (
                <ul className="space-y-2">
                  {[
                    { label: "Lawfulness, fairness, and transparency", desc: "this Policy and the Privacy Policy describe what is collected and why" },
                    { label: "Purpose limitation", desc: "server logs are used only for security and Site operation" },
                    { label: "Data minimization", desc: "the Site is designed to avoid collecting personal data wherever possible (no forms, no accounts, no analytics)" },
                    { label: "Storage limitation", desc: "logs are retained only as long as reasonably necessary for security and operational purposes" },
                    { label: "Integrity and confidentiality", desc: "see Section 6 below" },
                  ].map((item) => (
                    <li key={item.label} className="flex items-start gap-2.5 text-[var(--bits-text)]">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[var(--bits-green)]" />
                      <span><strong className="text-[var(--bits-heading)]">{item.label}:</strong> {item.desc}</span>
                    </li>
                  ))}
                </ul>
              ),
            },
            {
              num: "6", title: "Technical and Organizational Security Measures",
              content: (
                <ul className="space-y-2">
                  {[
                    "All traffic is served over HTTPS, with HTTP Strict Transport Security (HSTS) enforced in production",
                    "Standard security headers are applied (X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy) to reduce common web attack surfaces",
                    "The application runs as a non-root user in its deployment environment, following standard containerization security practice",
                    "Hosting backups and infrastructure-level recovery mechanisms are provided according to the hosting services supplied by Yegara Host. BITS College relies on the hosting provider&apos;s available backup mechanisms and does not represent that backups eliminate all risk of data loss.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[var(--bits-text)]">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[var(--bits-green)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ),
            },
            {
              num: "7", title: "Third-Party Processors",
              content: (
                <>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2.5 text-[var(--bits-text)]">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[var(--bits-green)]" />
                      <span>Embedded YouTube content is provided by Google LLC/YouTube, which independently processes data according to its own privacy practices when its embedded player is loaded.</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-[var(--bits-text)]">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[var(--bits-green)]" />
                      <span>BITS College may use third-party technology and infrastructure providers to support its digital services. The processing arrangements with such providers may vary depending on service requirements.</span>
                    </li>
                  </ul>
                  <p className="mt-3">No other third parties are intentionally provided with personal data collected through this Site. Any processing performed by third-party infrastructure providers is limited to the operation, security, and availability of the hosting environment.</p>
                </>
              ),
            },
            {
              num: "8", title: "Data Subject Rights and How to Exercise Them",
              content: <p>Consistent with the Personal Data Protection Proclamation No. 1321/2024, individuals may request information about, access to, correction of, or deletion of any personal data BITS College holds about them in connection with this Site, and may object to processing. Requests can be made using the contact details in Section 10. Because the Site collects minimal, largely non-identifying technical data, most requests can be resolved quickly; where server logs cannot be tied to a specific individual, we will explain this in our response.</p>,
            },
            {
              num: "9", title: "Data Breach Response",
              content: <p>In the event of a data breach affecting personal data processed through this Site, BITS College will assess the risk to affected individuals and, where required, notify the Ethiopian Communications Authority and any affected individuals in accordance with applicable law and required timeframes.</p>,
            },
            {
              num: "10", title: "Contact / Data Protection Point of Contact",
              content: (
                <>
                  <p>For any data protection inquiry, request, or concern related to this Site:</p>
                  <p className="mt-3">
                    BITS College, Yeka Sub-City, Woreda 05, Next To Yeka Park, Addis Ababa, Ethiopia<br />
                    Phone: +251-982-363636<br />
                    Email: info@bitscollege.edu.et
                  </p>
                  <p className="mt-4 text-[var(--bits-text)]">BITS College manages privacy and data protection matters through appropriate institutional processes and communication channels.</p>
                </>
              ),
            },
            {
              num: "11", title: "Review and Updates",
              content: <p>This Policy will be reviewed periodically and updated as the Site&apos;s functionality changes (for example, if forms, accounts, or analytics are added in the future, this Policy and the Privacy Policy must be updated accordingly before launch).</p>,
            },
          ].map((section) => (
            <div key={section.num} className="flex gap-5 border-b border-[var(--bits-green)]/10 px-6 py-6 last:border-b-0 sm:px-8 sm:py-7">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[var(--bits-green)] to-[var(--bits-green-dark)] text-sm font-bold text-white shadow-sm">
                {section.num}
              </span>
              <div className="min-w-0 flex-1 font-['Times_New_Roman']">
                <h2 className="text-lg font-semibold text-[var(--bits-heading)] sm:text-xl">{section.title}</h2>
                <div className="mt-2 text-base leading-7 text-[var(--bits-text)]">{section.content}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

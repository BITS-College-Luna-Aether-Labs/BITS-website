"use client";

export function TermsOfUseContent() {
  return (
    <div className="min-h-screen bg-[var(--bits-page)]">
      {/* Hero */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[var(--bits-green-dark)] to-[var(--bits-green)] pb-16 pt-20 sm:pt-24 lg:pt-28">
        <div className="absolute inset-0 opacity-15 [background:radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.6),transparent_50%),radial-gradient(circle_at_80%_70%,rgba(180,140,30,0.3),transparent_40%)]" />
        <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-block rounded-full bg-white/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/90 backdrop-blur-sm">Legal</span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">Terms of Use</h1>
          <p className="mt-3 text-base text-white/70">Last Updated: 11/07/2026 Gregorian Calendar or 04/11/2018 Ethiopian Calendar</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[var(--bits-page)] to-transparent" />
      </div>

      {/* Content */}
      <div className="relative -mt-10 mx-auto max-w-4xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-[var(--bits-green)]/20 bg-[var(--bits-surface)] shadow-sm">
          {[
            {
              num: "1", title: "Acceptance of Terms",
              content: <p>By accessing or using www.bitscollege.edu.et (the &quot;Site&quot;), you agree to these Terms of Use. If you do not agree, please do not use the Site.</p>,
            },
            {
              num: "2", title: "About This Website",
              content: <p>This Site is an informational website operated by BITS College, providing information about our academic programs, admissions, faculty, facilities, and news. It is not itself an enrollment, payment, or account system.</p>,
            },
            {
              num: "3", title: "Intellectual Property",
              content: <p>All content on this Site — including but not limited to text, graphics, logos, images, videos, documents, and website design — is the property of BITS College and is protected by applicable copyright and intellectual property laws. No part of this Site may be copied, reproduced, distributed, modified, transmitted, displayed, published, or used for commercial purposes without the prior written permission of BITS College. Unauthorized use of any material on this Site may violate copyright, trademark, and other applicable laws. For permission requests, contact us using the details below.</p>,
            },
            {
              num: "4", title: "Acceptable Use",
              content: <p>You agree not to: use the Site in any way that could damage, disable, or impair it or interfere with anyone else&apos;s use; attempt to gain unauthorized access to any part of the Site or its underlying systems; use automated means to scrape or extract content beyond normal browsing; or use the Site to transmit anything unlawful, harmful, or infringing.</p>,
            },
            {
              num: "5", title: "Third-Party Links and Content",
              content: <p>The Site contains links to third-party websites and services we do not control, including social media platforms, YouTube, Google Maps, and other BITS College systems such as applications.bitscollege.edu.et, online.bitscollege.edu.et, and intranet.bitscollege.edu.et. We are not responsible for the content, accuracy, or practices of these third-party sites, and linking to them does not imply endorsement of their content. Some linked services may be operated by third parties or separate BITS College systems with their own terms and privacy practices.</p>,
            },
            {
              num: "6", title: "Accuracy of Information",
              content: <p>We make reasonable efforts to keep information on the Site (such as program details, tuition, and admission requirements) accurate and current, but details are subject to change without notice. In case of any discrepancy, official documents and direct confirmation from BITS College administration take precedence over information published on the Site.</p>,
            },
            {
              num: "7", title: "No Warranty",
              content: <p>The Site is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, express or implied, including as to accuracy, completeness, or uninterrupted availability.</p>,
            },
            {
              num: "8", title: "Website Availability",
              content: <p>BITS College aims to maintain reliable access to the Site but does not guarantee that the Site will always be available, uninterrupted, or free from errors due to maintenance, technical issues, hosting limitations, security events, or circumstances beyond its reasonable control.</p>,
            },
            {
              num: "9", title: "Limitation of Liability",
              content: <p>To the fullest extent permitted by applicable law, BITS College shall not be liable for any indirect, incidental, or consequential damages arising from your use of, or inability to use, the Site.</p>,
            },
            {
              num: "10", title: "Applications and Enrollment",
              content: <p>This Site does not process applications or payments. Any admissions application must be submitted through the official admissions portal at applications.bitscollege.edu.et. That portal is a separate system and may collect and process personal information under its own privacy notice, terms, and security practices.</p>,
            },
            {
              num: "11", title: "Changes to the Website and These Terms",
              content: <p>We may update the Site or these Terms of Use at any time without prior notice. Continued use of the Site after changes are posted constitutes acceptance of the revised Terms.</p>,
            },
            {
              num: "12", title: "Governing Law",
              content: <p>These Terms are governed by the laws of the Federal Democratic Republic of Ethiopia. Any disputes arising from use of the Site shall be subject to the jurisdiction of the competent courts of Ethiopia.</p>,
            },
            {
              num: "13", title: "Contact",
              content: (
                <p>
                  BITS College, Yeka Sub-City, Woreda 05, Next To Yeka Park, Addis Ababa, Ethiopia<br />
                  Phone: +251-982-363636<br />
                  Email: info@bitscollege.edu.et
                </p>
              ),
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

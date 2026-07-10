"use client";

export function PrivacyPolicyContent() {
  return (
    <div className="min-h-screen bg-[var(--bits-page)]">
      {/* Hero */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[var(--bits-green-dark)] to-[var(--bits-green)] pb-16 pt-20 sm:pt-24 lg:pt-28">
        <div className="absolute inset-0 opacity-15 [background:radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.6),transparent_50%),radial-gradient(circle_at_80%_70%,rgba(180,140,30,0.3),transparent_40%)]" />
        <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-block rounded-full bg-white/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/90 backdrop-blur-sm">Legal</span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">Privacy Policy</h1>
          <p className="mt-3 text-base text-white/70">Last Updated: 11/07/2026 Gregorian Calendar or 04/11/2018 Ethiopian Calendar</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[var(--bits-page)] to-transparent" />
      </div>

      {/* Content */}
      <div className="relative -mt-10 mx-auto max-w-4xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-[var(--bits-green)]/20 bg-[var(--bits-surface)] shadow-sm">
          {[
            {
              num: "1",
              title: "Introduction",
              content: (
                <p>This Privacy Policy explains how BITS College handles information collected through its digital services, including www.bitscollege.edu.et and related BITS College online services such as applications.bitscollege.edu.et. The public website provides information about academic programs, admissions, facilities, and news, while certain related services allow users to provide information directly for registration, admission, and other institutional purposes.</p>
              ),
            },
            {
              num: "2",
              title: "Information We Collect",
              content: (
                <>
                  <p>Depending on the service you use, BITS College may collect different categories of information.</p>
                  <h3 className="mt-4 font-semibold text-[var(--bits-heading)]">a) Information provided by users</h3>
                  <p className="mt-1">When users interact with BITS College services, including application services, they may provide information such as personal details, contact information, educational information, and other information required for registration, admission processing, communication, or institutional services.</p>
                  <p className="mt-1">Users are responsible for ensuring that information they provide is accurate and complete.</p>
                  <h3 className="mt-4 font-semibold text-[var(--bits-heading)]">b) Technical information</h3>
                  <p className="mt-1">When users access BITS College websites, certain technical information may be automatically processed, including IP address, browser type, device information, requested pages, timestamps, and related technical information. This information may be used for security, maintenance, service improvement, and operational purposes.</p>
                  <h3 className="mt-4 font-semibold text-[var(--bits-heading)]">c) Information from communications</h3>
                  <p className="mt-1">If users contact BITS College through email, telephone, or other communication channels, information provided during those communications may be processed to respond to requests and provide institutional services.</p>
                  <h3 className="mt-4 font-semibold text-[var(--bits-heading)]">d) Local storage</h3>
                  <p className="mt-1">The Site stores a small preference on your device using your browser&apos;s local storage: whether you have selected light or dark display mode. This value is stored locally on your device and is not intended to identify individual users. You can clear it by clearing your browser&apos;s site data.</p>
                </>
              ),
            },
            {
              num: "3", title: "Cookies",
              content: <p>BITS College websites may use cookies or similar technologies where necessary for functionality, security, service improvement, or protection against abuse. Third-party services used by BITS College, such as security or embedded content providers, may use their own cookies or similar technologies according to their own privacy policies.</p>,
            },
            {
              num: "4", title: "Embedded Third-Party Content",
              content: (
                <p>Some pages include embedded YouTube videos. When a page containing an embedded video loads, YouTube (operated by Google LLC) may collect data and set cookies. We do not control this data collection. These services may process technical information when users interact with them. When users interact with third-party embedded content, any resulting data collection is governed by the third party&apos;s privacy practices rather than this Privacy Policy. You can review Google&apos;s privacy practices at <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="font-medium text-[var(--bits-green-dark)] underline decoration-[var(--bits-green)]/40 underline-offset-2 transition hover:decoration-[var(--bits-green)]">https://policies.google.com/privacy</a>. We also link out to a Google Maps location and to our social media pages (Facebook, X/Twitter, Instagram, YouTube); each of those platforms has its own separate privacy policy governing your interaction with them.</p>
              ),
            },
            {
              num: "5", title: "Other BITS College Websites",
              content: (
                <>
                  <p>This Site links to other BITS College-operated systems that are separate applications with their own data handling, including:</p>
                  <ul className="mt-3 space-y-1.5">
                    {["applications.bitscollege.edu.et (admissions application portal)", "online.bitscollege.edu.et (online learning portal)", "intranet.bitscollege.edu.et (library/intranet)"].map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-[var(--bits-text)]">
                        <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[var(--bits-green)]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-3">This Privacy Policy applies to BITS College digital services identified within this Policy. Some specialized systems, including internal student or institutional platforms, may have additional privacy notices or specific terms depending on their functions.</p>
                </>
              ),
            },
            {
              num: "6", title: "How We Use Information",
              content: <p>The information described above is used to operate, secure, and maintain BITS College digital services, to respond to inquiries, and to provide institutional services. BITS College does not use personal information for purposes unrelated to the operation of its services unless permitted by law or with appropriate legal basis.</p>,
            },
            {
              num: "7", title: "Data Sharing and Disclosure",
              content: <p>BITS College may share information with trusted service providers, including hosting, infrastructure, security, communication, or technology providers, where necessary to operate and maintain its services. Such providers are expected to process information only for authorized purposes.</p>,
            },
            {
              num: "8", title: "Data Retention",
              content: <p>Personal information is retained only for as long as reasonably necessary for the purposes for which it was collected, including operational, institutional, legal, and recordkeeping requirements.</p>,
            },
            {
              num: "9", title: "Your Rights",
              content: <p>Subject to applicable Ethiopian law, individuals may have rights relating to their personal data, including rights to information, access, correction, deletion, objection, and other rights provided under applicable legislation. If you wish to exercise any such rights, please contact us using the details below.</p>,
            },
            {
              num: "10", title: "Children&apos;s Privacy",
              content: <p>BITS College services may be accessed by prospective students and members of the public. Where personal information is collected through admission or institutional processes, appropriate information is provided according to the nature of the service and applicable requirements.</p>,
            },
            {
              num: "11", title: "Security",
              content: <p>BITS College implements reasonable technical and organizational measures designed to protect information against unauthorized access, loss, misuse, alteration, or disclosure. Security measures may be updated as technology and operational requirements change.</p>,
            },
            {
              num: "12", title: "Changes to This Policy",
              content: <p>We may update this Privacy Policy from time to time. The date above will reflect the date of the latest revision.</p>,
            },
            {
              num: "13", title: "Contact Us",
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

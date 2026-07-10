"use client";

export function AccessibilityPolicyContent() {
  return (
    <div className="min-h-screen bg-[var(--bits-page)]">
      {/* Hero */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[var(--bits-green-dark)] to-[var(--bits-green)] pb-16 pt-20 sm:pt-24 lg:pt-28">
        <div className="absolute inset-0 opacity-15 [background:radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.6),transparent_50%),radial-gradient(circle_at_80%_70%,rgba(180,140,30,0.3),transparent_40%)]" />
        <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-block rounded-full bg-white/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/90 backdrop-blur-sm">Legal</span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">Accessibility Statement</h1>
          <p className="mt-3 text-base text-white/70">Last Updated: 11/07/2026 Gregorian Calendar or 04/11/2018 Ethiopian Calendar</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[var(--bits-page)] to-transparent" />
      </div>

      {/* Content */}
      <div className="relative -mt-10 mx-auto max-w-4xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-[var(--bits-green)]/20 bg-[var(--bits-surface)] shadow-sm">
          {[
            {
              num: "1", title: "Our Commitment",
              content: <p>BITS College is committed to making www.bitscollege.edu.et usable by as many visitors as possible, including people who use assistive technologies such as screen readers, keyboard-only navigation, or browser zoom/reduced-motion settings.</p>,
            },
            {
              num: "2", title: "Conformance Target",
              content: <p>We aim for our Site to conform to the Web Content Accessibility Guidelines (WCAG) 2.1, Level AA, as a working standard. This is a goal we are actively building toward rather than a certified or independently audited conformance claim — please see &quot;Known Limitations&quot; below. The Site has implemented accessibility-related features; however, no independent accessibility audit has been completed.</p>,
            },
            {
              num: "3", title: "Accessibility Features Currently Implemented",
              content: (
                <ul className="space-y-2">
                  {[
                    "A &quot;Skip to main content&quot; link for keyboard users to bypass repeated navigation",
                    "Visible keyboard focus indicators on interactive elements",
                    "Semantic HTML structure (header, nav, main, footer, article, section) with descriptive ARIA labeling on landmarks and interactive controls",
                    "ARIA attributes on navigation menus and dropdowns (aria-expanded, aria-haspopup, aria-current) and decorative graphics hidden from assistive technology (aria-hidden)",
                    "Support for your device&apos;s &quot;reduce motion&quot; setting — animations and transitions are automatically minimized or disabled if you have this preference enabled in your operating system or browser",
                    "A responsive layout that adapts to different screen sizes and supports browser zoom",
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
              num: "4", title: "Known Limitations",
              content: <p>We have not yet completed a formal, independent accessibility audit of the Site. As with most websites, some pages, embedded third-party content (such as YouTube videos and embedded PDF documents), or older content sections may not yet fully meet every WCAG 2.1 AA success criterion. We are working to identify and address these over time. Accessibility improvements remain an ongoing process.</p>,
            },
            {
              num: "5", title: "Feedback",
              content: (
                <>
                  <p>If you encounter an accessibility barrier anywhere on this Site, please let us know — your report helps us prioritize fixes. Please include the web page URL and a description of the issue.</p>
                  <p className="mt-3">Email: info@bitscollege.edu.et<br />Phone: +251-982-363636</p>
                </>
              ),
            },
            {
              num: "6", title: "Ongoing Efforts",
              content: <p>We review and improve accessibility as the Site evolves and welcome feedback from the community, including students and staff who use assistive technology.</p>,
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

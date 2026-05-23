
import React, { useMemo, useState } from "react";

type ScholarshipType = {
  title: string;
  summary: string;
  accent: string;
  bullets: string[];
};

const scholarshipTypes: ScholarshipType[] = [
  {
    title: "Merit-based Scholarship",
    summary:
      "Granted solely based on academic performance. This option supports both incoming and already-enrolled students.",
    accent: "from-[#5c6674] to-[#6c7684]",
    bullets: [
      "Outstanding academic achievement is the main criterion.",
      "Financial need is not considered for this category.",
      "Mandatory on-campus employment may apply.",
    ],
  },
  {
    title: "Need-Based Scholarship",
    summary:
      "Awarded to students who demonstrate financial need and strong grades, with a more balanced eligibility threshold.",
    accent: "from-[#7ac143] to-[#6dbb3e]",
    bullets: [
      "Financial assistance is combined with grade review.",
      "More flexible than the merit-based track.",
      "Mandatory on-campus employment may apply.",
    ],
  },
  {
    title: "Female Scholarship",
    summary:
      "Reserved for academically qualified female students who also demonstrate financial need.",
    accent: "from-[#5c6674] to-[#4b5563]",
    bullets: [
      "Designed to strengthen women’s participation.",
      "Encourages applications from promising students.",
      "Mandatory on-campus employment may apply.",
    ],
  },
  {
    title: "Work Study Program",
    summary:
      "Provides on-campus employment opportunities for already-enrolled students with strong performance.",
    accent: "from-[#7ac143] to-[#8bd44e]",
    bullets: [
      "Built for students who need work opportunities.",
      "Focused on performance and eligibility.",
      "Students may work up to 12 hours weekly.",
    ],
  },
];

const quickLinks = [
  "Home",
  "Who We Are",
  "Facilities",
  "Partners and Clients",
  "Faculty",
  "Undergraduate Programs",
  "Graduate Programs",
  "Research",
  "Undergraduate Admission",
  "Graduate Admission",
  "Scholarship & Aid",
  "Student Support",
  "News & Events",
];

function AppNavItem({ label }: { label: string }) {
  return (
    <a
      href="#"
      className="rounded-full px-3 py-2 text-sm font-medium tracking-tight text-slate-700 transition-all duration-300 hover:bg-[#eef3ee] hover:text-[#6fb93d]"
    >
      {label}
    </a>
  );
}

function ScholarshipCard({ item, index }: { item: ScholarshipType; index: number }) {
  return (
    <article
      className="group relative overflow-hidden rounded-[28px] border border-white/60 bg-white/80 p-6 shadow-[0_10px_30px_rgba(92,102,116,0.08)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(92,102,116,0.14)]"
      style={{ animationDelay: `${index * 90}ms` }}
    >
      <div className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${item.accent}`} />
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-slate-800">{item.title}</h3>
          <p className="mt-2 max-w-prose text-sm leading-6 text-slate-600">
            {item.summary}
          </p>
        </div>
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#f3f7f2] text-xl text-[#6fb93d] transition-transform duration-500 group-hover:scale-110">
          ✦
        </div>
      </div>

      <ul className="space-y-3 text-sm leading-6 text-slate-700">
        {item.bullets.map((bullet) => (
          <li key={bullet} className="flex gap-3">
            <span className="mt-2 h-2 w-2 rounded-full bg-[#7ac143]"></span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function GlowBlob({ className }: { className: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute rounded-full blur-3xl ${className}`}
    />
  );
}

export default function ScholarshipAidPage() {
  const brochureUrl = useMemo(
    () => "/BITS_SCHOLARSHIPS_INFORMATION_BROCHURE_2023.pdf",
    []
  );
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f4f6f5] text-slate-800">
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes floaty {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-10px) translateX(6px); }
        }
        @keyframes pulseSoft {
          0%, 100% { opacity: .45; transform: scale(1); }
          50% { opacity: .7; transform: scale(1.03); }
        }
        .animate-fadeUp {
          animation: fadeUp .8s ease both;
        }
        .animate-floaty {
          animation: floaty 9s ease-in-out infinite;
        }
        .animate-pulseSoft {
          animation: pulseSoft 8s ease-in-out infinite;
        }
      `}</style>

      <header className="sticky top-0 z-40 border-b border-white/60 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f2f6ef] shadow-sm">
              <div className="h-6 w-6 rounded-md border-2 border-[#6fb93d] border-t-transparent rotate-12" />
            </div>
            <div>
              <div className="text-xl font-semibold tracking-[0.24em] text-[#5c6674]">
                BITS
              </div>
              <div className="text-[11px] uppercase tracking-[0.35em] text-slate-400">
                from collecting . . . to connecting . . .
              </div>
            </div>
          </div>

          <nav className="hidden items-center gap-1 lg:flex">
            {quickLinks.slice(0, 12).map((label) => (
              <AppNavItem key={label} label={label} />
            ))}
          </nav>

          <button
            className="rounded-full bg-[#7ac143] px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(122,193,67,0.35)] transition-transform duration-300 hover:-translate-y-0.5"
            onClick={() => setMobileMenuOpen((v) => !v)}
            type="button"
          >
            Apply Now
          </button>
        </div>

        {mobileMenuOpen ? (
          <div className="border-t border-slate-200 bg-white px-4 py-4 lg:hidden">
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {quickLinks.map((label) => (
                <a
                  key={label}
                  href="#"
                  className="rounded-2xl bg-slate-50 px-3 py-2 text-sm text-slate-700 transition hover:bg-[#eef6ea] hover:text-[#6fb93d]"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        ) : null}
      </header>

      <main className="relative overflow-hidden">
        <GlowBlob className="left-[-6rem] top-20 h-72 w-72 bg-[#7ac143]/20" />
        <GlowBlob className="right-[-8rem] top-56 h-96 w-96 bg-[#5c6674]/15" />
        <GlowBlob className="bottom-[-10rem] left-1/3 h-[26rem] w-[26rem] bg-[#7ac143]/10" />

        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="animate-fadeUp">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#d9e9d1] bg-[#f6fbf2] px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#6fb93d]">
                Admissions · Scholarship & Aid
              </div>
              <h1 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-[#5c6674] sm:text-5xl lg:text-6xl">
                Scholarship &amp; Aid
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                In order to make the College accessible to all, BITS offers a limited
                number of scholarships primarily for academic expenses such as tuition,
                transportation allowance, and equipment funding.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  { value: "4", label: "scholarship tracks" },
                  { value: "12h", label: "max work hours/week" },
                  { value: "1", label: "brochure preview" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-[24px] border border-white bg-white/80 p-5 shadow-[0_10px_30px_rgba(92,102,116,0.08)]"
                  >
                    <div className="text-2xl font-semibold text-[#6fb93d]">{stat.value}</div>
                    <div className="mt-1 text-sm text-slate-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 mx-auto h-[25rem] w-[25rem] rounded-full bg-[#7ac143]/10 blur-2xl animate-pulseSoft" />
              <div className="relative h-[23rem] w-[23rem] rounded-full border-[14px] border-white bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.9),rgba(255,255,255,0.2)),linear-gradient(145deg,#edf4ea,#d9e6d1)] shadow-[0_18px_55px_rgba(92,102,116,0.15)] animate-floaty">
                <div className="absolute inset-6 rounded-full border border-dashed border-[#6fb93d]/35" />
                <div className="absolute left-6 top-8 h-24 w-24 rounded-full bg-[#5c6674]/15 blur-2xl" />
                <div className="absolute bottom-7 right-8 h-28 w-28 rounded-full bg-[#7ac143]/20 blur-2xl" />
                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 px-8 text-center">
                  <div className="mx-auto w-fit rounded-full bg-white/75 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#6fb93d]">
                    Limited opportunities
                  </div>
                  <div className="mt-4 text-3xl font-semibold leading-tight text-[#5c6674]">
                    BITS Scholarships
                  </div>
                  <div className="mx-auto mt-3 max-w-sm text-sm leading-7 text-slate-600">
                    Academic merit, need-based support, women’s empowerment, and work-study
                    pathways are organized with a clean, high-contrast layout.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {scholarshipTypes.map((item, index) => (
              <ScholarshipCard key={item.title} item={item} index={index} />
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[30px] bg-[#5c6674] p-7 text-white shadow-[0_18px_40px_rgba(92,102,116,0.22)]">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-xl">
                  ⟡
                </div>
                <h2 className="text-2xl font-semibold">Recognition of Donors</h2>
              </div>
              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-100/90">
                BITS College recognizes financial aid contributions through annual reports,
                recognition ceremonies, and special events that celebrate generosity and support.
              </p>
              <div className="mt-6 rounded-[24px] border border-white/10 bg-white/5 p-5">
                <p className="text-sm leading-7 text-slate-100/90">
                  This area mirrors the visual rhythm of the source page while giving the
                  interface a cleaner animated finish.
                </p>
              </div>
            </div>

            <div className="rounded-[30px] border border-white/70 bg-white/85 p-7 shadow-[0_18px_40px_rgba(92,102,116,0.08)] backdrop-blur-sm">
              <div className="flex flex-col gap-6 md:flex-row md:items-center">
                <div className="min-w-0 flex-1">
                  <div className="inline-flex items-center gap-2 rounded-full bg-[#f3f8ef] px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#6fb93d]">
                    For More Information
                  </div>
                  <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#5c6674]">
                    Download the scholarship brochure
                  </h2>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">
                    The downloaded brochure is embedded below and linked from the call-to-action
                    button, so the page keeps the “read more” path anchored to the source document.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href={brochureUrl}
                      className="rounded-full bg-[#7ac143] px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(122,193,67,0.32)] transition-transform duration-300 hover:-translate-y-0.5"
                    >
                      Open brochure PDF
                    </a>
                    <a
                      href="#contact"
                      className="rounded-full border border-[#d5e4cb] bg-white px-5 py-3 text-sm font-semibold text-[#5c6674] transition-colors hover:bg-[#f6fbf2] hover:text-[#6fb93d]"
                    >
                      Jump to contact
                    </a>
                  </div>
                </div>

                <div className="overflow-hidden rounded-[24px] border border-slate-200 bg-slate-50 shadow-inner">
                  <iframe
                    title="BITS Scholarship Brochure preview"
                    src={brochureUrl}
                    className="h-[20rem] w-full min-w-[18rem] md:w-[24rem]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="border-t border-white/70 bg-white/70 px-4 py-10 backdrop-blur-sm sm:px-6 lg:px-8"
        >
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_1fr_1fr]">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.3em] text-[#7ac143]">
                from collecting . . . to connecting . . .
              </div>
              <h3 className="mt-3 text-2xl font-semibold text-[#5c6674]">Contact Info</h3>
              <div className="mt-5 space-y-3 text-sm leading-7 text-slate-600">
                <p>info@bitscollege.edu.et</p>
                <p>+251-982-363636</p>
                <p>Yeka Sub-city, Woreda 05, next to Yeka Park</p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-[#5c6674]">Quick Link</h3>
              <div className="mt-5 grid grid-cols-2 gap-3 text-sm text-slate-600">
                {[
                  "Tuition",
                  "Undergraduate Program Admission",
                  "Graduate Program Admission",
                  "Undergraduate Accreditation",
                  "Graduate Accreditation",
                  "News & Events",
                ].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="rounded-2xl border border-slate-200 bg-white px-4 py-3 transition hover:border-[#cfe6c3] hover:bg-[#f7fbf3] hover:text-[#6fb93d]"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] bg-[#7ac143] p-6 text-white shadow-[0_18px_40px_rgba(122,193,67,0.24)]">
              <div className="text-sm font-semibold uppercase tracking-[0.25em] text-white/80">
                brochure source
              </div>
              <p className="mt-3 text-lg font-medium leading-8">
                BITS SCHOLARSHIPS INFORMATION BROCHURE 2023
              </p>
              <a
                href={brochureUrl}
                className="mt-6 inline-flex rounded-full border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-[#6fb93d]"
              >
                Download / Preview PDF
              </a>
            </div>
          </div>

          <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-slate-200 pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
            <div>Copyright © 2026 BITS College</div>
            <div className="text-slate-400">Recreated with motion, softer typography, and preserved palette.</div>
          </div>
        </section>
      </main>
    </div>
  );
}

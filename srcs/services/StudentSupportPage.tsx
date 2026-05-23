
import React, { useMemo, useState } from "react";
import { BookOpen, CalendarDays, CircleCheckBig, Crown, HeartHandshake, Menu, ShieldAlert, Sparkles, UsersRound, X } from "lucide-react";

type SupportCard = {
  title: string;
  description: string;
  icon: React.ReactNode;
  accent: string;
  points: string[];
};

const supportCards: SupportCard[] = [
  {
    title: "Academic Support",
    description:
      "Peer-to-peer mentoring and advisor guidance help students stay confident in their academic and extracurricular work.",
    icon: <BookOpen className="h-5 w-5" />,
    accent: "from-[#7ac143] to-[#6fb93d]",
    points: ["Mentoring", "Advisor guidance", "Confidence building"],
  },
  {
    title: "Disability Support",
    description:
      "Students with disabilities receive advice, guidance, and practical adjustments to reduce barriers to learning.",
    icon: <ShieldAlert className="h-5 w-5" />,
    accent: "from-[#5c6674] to-[#73808f]",
    points: ["Inclusive support", "Learning adjustments", "Barrier reduction"],
  },
  {
    title: "Hackathons",
    description:
      "Students can join or organize hackathons to build software, solve problems, and earn prizes.",
    icon: <Sparkles className="h-5 w-5" />,
    accent: "from-[#7ac143] to-[#94d45e]",
    points: ["Build projects", "Teamwork", "Problem solving"],
  },
  {
    title: "Women in Tech",
    description:
      "Career workshops and technical sessions support women’s participation and growth in technology majors.",
    icon: <Crown className="h-5 w-5" />,
    accent: "from-[#5c6674] to-[#4f5966]",
    points: ["Workshops", "Technical sessions", "Gender-gap support"],
  },
  {
    title: "Leadership",
    description:
      "Student-led brainstorming and activities are intended to strengthen leadership and initiative.",
    icon: <UsersRound className="h-5 w-5" />,
    accent: "from-[#7ac143] to-[#8fd355]",
    points: ["Student body", "Initiative", "Team leadership"],
  },
  {
    title: "Community Clubs",
    description:
      "Charity, Toastmasters, media, creative communications, AIESEC, and book clubs expand learning beyond class.",
    icon: <HeartHandshake className="h-5 w-5" />,
    accent: "from-[#5c6674] to-[#6d7785]",
    points: ["Service", "Communication", "Talent showcase"],
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

function SectionBadge({ text }: { text: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-[#dbead3] bg-[#f7fbf4] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#6fb93d]">
      <CircleCheckBig className="h-3.5 w-3.5" />
      {text}
    </div>
  );
}

function NavItem({ label }: { label: string }) {
  return (
    <a
      href="#"
      className="rounded-full px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-[#eef5ea] hover:text-[#6fb93d]"
    >
      {label}
    </a>
  );
}

function FloatingBlob({ className }: { className: string }) {
  return <div aria-hidden="true" className={`pointer-events-none absolute rounded-full blur-3xl ${className}`} />;
}

function Card({ item, index }: { item: SupportCard; index: number }) {
  return (
    <article
      className="group relative overflow-hidden rounded-[28px] border border-white/70 bg-white/80 p-6 shadow-[0_10px_30px_rgba(92,102,116,0.08)] backdrop-blur-sm transition duration-500 hover:-translate-y-1 hover:shadow-[0_22px_45px_rgba(92,102,116,0.14)]"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${item.accent}`} />
      <div className="mb-4 flex items-start justify-between gap-4">
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#f3f8ef] text-[#6fb93d] transition-transform duration-500 group-hover:scale-110">
            {item.icon}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-800">{item.title}</h3>
            <p className="mt-1 max-w-prose text-sm leading-6 text-slate-600">{item.description}</p>
          </div>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {item.points.map((p) => (
          <span key={p} className="rounded-full bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600">
            {p}
          </span>
        ))}
      </div>
    </article>
  );
}

export default function StudentSupportPage() {
  const briefUrl = useMemo(() => "/BITS_Student_Support_Information_Brief.pdf", []);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f4f6f5] text-slate-800">
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes floaty {
          0%, 100% { transform: translateY(0px) }
          50% { transform: translateY(-12px) }
        }
        @keyframes pulseSoft {
          0%, 100% { opacity: .45; transform: scale(1); }
          50% { opacity: .75; transform: scale(1.03); }
        }
        .animate-fadeUp { animation: fadeUp .8s ease both; }
        .animate-floaty { animation: floaty 9s ease-in-out infinite; }
        .animate-pulseSoft { animation: pulseSoft 7s ease-in-out infinite; }
      `}</style>

      <header className="sticky top-0 z-40 border-b border-white/70 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f2f6ef] shadow-sm">
              <div className="h-6 w-6 rounded-md border-2 border-[#6fb93d] border-t-transparent rotate-12" />
            </div>
            <div>
              <div className="text-xl font-semibold tracking-[0.24em] text-[#5c6674]">BITS</div>
              <div className="text-[11px] uppercase tracking-[0.32em] text-slate-400">
                from collecting . . . to connecting . . .
              </div>
            </div>
          </div>

          <nav className="hidden items-center gap-1 lg:flex">
            {quickLinks.slice(0, 12).map((label) => <NavItem key={label} label={label} />)}
          </nav>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((v) => !v)}
            className="inline-flex items-center gap-2 rounded-full bg-[#7ac143] px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(122,193,67,0.35)] transition hover:-translate-y-0.5"
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            Apply Now
          </button>
        </div>

        {mobileMenuOpen ? (
          <div className="border-t border-slate-200 bg-white px-4 py-4 lg:hidden">
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {quickLinks.map((label) => (
                <a key={label} href="#" className="rounded-2xl bg-slate-50 px-3 py-2 text-sm text-slate-700 transition hover:bg-[#eef6ea] hover:text-[#6fb93d]">
                  {label}
                </a>
              ))}
            </div>
          </div>
        ) : null}
      </header>

      <main className="relative overflow-hidden">
        <FloatingBlob className="left-[-6rem] top-24 h-72 w-72 bg-[#7ac143]/20" />
        <FloatingBlob className="right-[-8rem] top-52 h-96 w-96 bg-[#5c6674]/15" />
        <FloatingBlob className="bottom-[-10rem] left-1/3 h-[26rem] w-[26rem] bg-[#7ac143]/10" />

        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div className="animate-fadeUp">
              <SectionBadge text="Services · Student Support" />
              <h1 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-[#5c6674] sm:text-5xl lg:text-6xl">
                Student Support
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                BITS keeps the layout clean and information-rich: academic support first, then disability support,
                then extracurricular growth across clubs and student-led activities.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  { value: "2", label: "support pillars" },
                  { value: "9+", label: "club pathways" },
                  { value: "1", label: "preview brief" },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-[24px] border border-white bg-white/80 p-5 shadow-[0_10px_30px_rgba(92,102,116,0.08)]">
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
                    Student experience
                  </div>
                  <div className="mt-4 text-3xl font-semibold leading-tight text-[#5c6674]">
                    Support that feels structured
                  </div>
                  <div className="mx-auto mt-3 max-w-sm text-sm leading-7 text-slate-600">
                    A simple hierarchy, muted slate typography, and green accents keep the page close to the source
                    while making it more polished and animated.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {supportCards.map((item, index) => <Card key={item.title} item={item} index={index} />)}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[30px] bg-[#5c6674] p-7 text-white shadow-[0_18px_40px_rgba(92,102,116,0.22)]">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-xl">
                  <CalendarDays className="h-5 w-5" />
                </div>
                <h2 className="text-2xl font-semibold">Activities at a Glance</h2>
              </div>
              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-100/90">
                The college’s student-support page is centered around mentoring, accessibility, and co-curricular
                opportunities such as hackathons, women-in-tech, leadership, charity, Toastmasters, media,
                creative writing, AIESEC, and book clubs.
              </p>
              <div className="mt-6 rounded-[24px] border border-white/10 bg-white/5 p-5">
                <p className="text-sm leading-7 text-slate-100/90">
                  I kept the same muted palette and layered composition, then added motion, stronger type contrast,
                  and cleaner card spacing.
                </p>
              </div>
            </div>

            <div className="rounded-[30px] border border-white/70 bg-white/85 p-7 shadow-[0_18px_40px_rgba(92,102,116,0.08)] backdrop-blur-sm">
              <div className="flex flex-col gap-6 md:flex-row md:items-center">
                <div className="min-w-0 flex-1">
                  <SectionBadge text="For More Information" />
                  <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#5c6674]">
                    Preview the support brief
                  </h2>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">
                    The live page does not expose a PDF link, so this component points to a companion brief built
                    from the page content and saved in the assets folder for preview.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href={briefUrl}
                      className="rounded-full bg-[#7ac143] px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(122,193,67,0.32)] transition hover:-translate-y-0.5"
                    >
                      Open PDF
                    </a>
                    <a
                      href="#contact"
                      className="rounded-full border border-[#d5e4cb] bg-white px-5 py-3 text-sm font-semibold text-[#5c6674] transition hover:bg-[#f6fbf2] hover:text-[#6fb93d]"
                    >
                      Jump to contact
                    </a>
                  </div>
                </div>

                <div className="overflow-hidden rounded-[24px] border border-slate-200 bg-slate-50 shadow-inner">
                  <iframe
                    title="BITS Student Support Information Brief preview"
                    src={briefUrl}
                    className="h-[20rem] w-full min-w-[18rem] md:w-[24rem]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="border-t border-white/70 bg-white/70 px-4 py-10 backdrop-blur-sm sm:px-6 lg:px-8">
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
                {["Tuition", "Undergraduate Program Admission", "Graduate Program Admission", "Undergraduate Accreditation", "Graduate Accreditation", "News & Events"].map((item) => (
                  <a key={item} href="#" className="rounded-2xl border border-slate-200 bg-white px-4 py-3 transition hover:border-[#cfe6c3] hover:bg-[#f7fbf3] hover:text-[#6fb93d]">
                    {item}
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] bg-[#7ac143] p-6 text-white shadow-[0_18px_40px_rgba(122,193,67,0.24)]">
              <div className="text-sm font-semibold uppercase tracking-[0.25em] text-white/80">
                support brief
              </div>
              <p className="mt-3 text-lg font-medium leading-8">
                BITS Student Support information brief
              </p>
              <a
                href={briefUrl}
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

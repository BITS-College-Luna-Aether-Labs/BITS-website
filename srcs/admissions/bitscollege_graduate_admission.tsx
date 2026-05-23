
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
    interface ElementChildrenAttribute {
      children: {};
    }
  }
}

type ReactNodeLike = any;
type NavItem = {
  label: string;
  href?: string;
  children?: { label: string; href?: string }[];
};

const navigation: NavItem[] = [
  { label: 'Home', href: '#' },
  {
    label: 'About',
    children: [
      { label: 'Who We Are', href: '#' },
      { label: 'Facilities', href: '#' },
      { label: 'Partners and Clients', href: '#' },
    ],
  },
  {
    label: 'Academics',
    children: [
      { label: 'Faculty', href: '#' },
      { label: 'Undergraduate Programs', href: '#' },
      { label: 'Graduate Programs', href: '#' },
      { label: 'Research', href: '#' },
    ],
  },
  {
    label: 'Admissions',
    children: [
      { label: 'Undergraduate Admission', href: '#' },
      { label: 'Graduate Admission', href: '#' },
      { label: 'Scholarship & Aid', href: '#' },
    ],
  },
  {
    label: 'Services',
    children: [
      { label: 'Student Support', href: '#' },
      { label: 'Online Learning', href: '#' },
      { label: 'Library', href: '#' },
      { label: 'Professional Trainings', href: '#' },
    ],
  },
  { label: 'News & Events', href: '#' },
] as const;

const quickLinks = [
  'Tuition',
  'Undergraduate Program Admission',
  'Graduate Program Admission',
  'Undergraduate Accreditation',
  'Graduate Accreditation',
];

const requirements = [
  'A first degree in fields related to IT (Computer Science, Information Science/Systems, Software Engineering and Computer Engineering, from an accredited institution of higher learning) or',
  'A first degree in any field of study with a minor in Computer Science, Information Science/Systems, Software Engineering and Computer Engineering, from an accredited institution of higher learning.',
  'To secure the minimum mark in the college Entrance Exam result.',
];

function LogoMark() {
  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-lg shadow-emerald-600/20">
      <span className="text-lg font-black tracking-tight">B</span>
    </div>
  );
}

function IconBubble({ children }: { children: ReactNodeLike }) {
  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-600/10 text-emerald-700 ring-1 ring-emerald-100">
      {children}
    </div>
  );
}

function FloatingImage({ label }: { label: string }) {
  return (
    <div className="float-card group relative overflow-hidden rounded-3xl border border-emerald-100 bg-gradient-to-br from-white to-emerald-50 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.12),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(107,114,128,0.10),transparent_45%)]" />
      <div className="relative flex aspect-[16/11] items-center justify-center p-8">
        <div className="text-center">
          <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-600/10 text-emerald-700 transition-transform duration-300 group-hover:scale-110">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-10 w-10">
              <path d="M4 19.5V6.8a2 2 0 0 1 1.17-1.82l5-2.27a2 2 0 0 1 1.66 0l5 2.27A2 2 0 0 1 18 6.8v12.7" />
              <path d="M4 19.5h16" />
              <path d="M9 10h6" />
              <path d="M9 13h6" />
            </svg>
          </div>
          <p className="text-sm font-medium tracking-[0.32em] text-slate-500">{label}</p>
          <p className="mt-2 text-lg font-semibold text-slate-800">Image placeholder</p>
        </div>
      </div>
    </div>
  );
}

function Chevron() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 transition-transform duration-300 group-open:rotate-180">
      <path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.95l3.71-3.72a.75.75 0 1 1 1.06 1.06l-4.24 4.25a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08Z" />
    </svg>
  );
}

function SmallIcon({ name }: { name: 'mail' | 'phone' | 'map' | 'facebook' | 'twitter' | 'instagram' | 'youtube' }) {
  const common = 'h-4 w-4';
  switch (name) {
    case 'mail':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
          <path d="M4 6h16v12H4z" />
          <path d="m4 7 8 6 8-6" />
        </svg>
      );
    case 'phone':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
          <path d="M7 3h3l2 5-2 1.5a12 12 0 0 0 5.5 5.5L17 13l5 2v3a2 2 0 0 1-2 2A17 17 0 0 1 3 7a2 2 0 0 1 2-2h2Z" />
        </svg>
      );
    case 'map':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
          <path d="M12 21s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10Z" />
          <circle cx="12" cy="11" r="2.1" />
        </svg>
      );
    case 'facebook':
      return <span className="text-sm font-black">f</span>;
    case 'twitter':
      return <span className="text-sm font-black">𝕏</span>;
    case 'instagram':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
          <rect x="5" y="5" width="14" height="14" rx="4" />
          <circle cx="12" cy="12" r="3.2" />
          <circle cx="17" cy="7" r="0.7" fill="currentColor" stroke="none" />
        </svg>
      );
    case 'youtube':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
          <rect x="4" y="6" width="16" height="12" rx="3" />
          <path d="m10 9 5 3-5 3V9Z" fill="currentColor" stroke="none" />
        </svg>
      );
  }
}

export default function GraduateAdmissionPage() {
  return (
    <div className="min-h-screen bg-[#f7faf8] text-slate-900">
      <style>{`
        @keyframes drift {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 18px 50px rgba(16,185,129,.16); }
          50% { box-shadow: 0 22px 70px rgba(16,185,129,.26); }
        }
        .float-card { animation: drift 8s ease-in-out infinite; }
        .float-card:nth-child(2) { animation-delay: -4s; }
        .apply-glow { animation: pulseGlow 4.5s ease-in-out infinite; }
        .soft-focus { backdrop-filter: blur(18px); }
      `}</style>

      <a
        href="#content"
        className="absolute left-4 top-4 z-50 -translate-y-16 rounded-full bg-white px-4 py-2 text-sm font-medium text-emerald-700 shadow-lg ring-1 ring-emerald-100 transition-transform focus:translate-y-0 focus:outline-none"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-40 border-b border-emerald-100/70 bg-white/88 soft-focus">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <LogoMark />
              <div className="leading-tight">
                <div className="text-sm font-semibold uppercase tracking-[0.38em] text-emerald-700">BITS College</div>
                <div className="text-xs text-slate-500">School of Systems and Technology</div>
              </div>
            </div>

            <nav className="hidden items-center gap-1 lg:flex">
              {navigation.map((item) =>
                item.children ? (
                  <details key={item.label} className="group relative">
                    <summary className="flex list-none cursor-pointer items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-emerald-50 hover:text-emerald-700">
                      {item.label}
                      <Chevron />
                    </summary>
                    <div className="invisible absolute left-0 top-full pt-3 opacity-0 transition group-open:visible group-open:opacity-100">
                      <div className="w-64 rounded-2xl border border-emerald-100 bg-white p-2 shadow-2xl shadow-slate-900/10">
                        {item.children.map((child) => (
                          <a
                            key={child.label}
                            href={child.href}
                            className="block rounded-xl px-4 py-3 text-sm text-slate-700 transition hover:bg-emerald-50 hover:text-emerald-700"
                          >
                            {child.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  </details>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    className="rounded-full px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-emerald-50 hover:text-emerald-700"
                  >
                    {item.label}
                  </a>
                )
              )}
            </nav>

            <a
              href="#apply"
              className="apply-glow hidden items-center gap-2 rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-600/25 transition hover:-translate-y-0.5 hover:bg-emerald-700 lg:inline-flex"
            >
              Apply Now
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </header>

      {/* Keeps the original site's repeated menu/logo block, but compressed and cleaner. */}
      <div className="border-b border-emerald-100 bg-white/70">
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-emerald-600" />
              <span>Main Menu</span>
            </div>
            <a href="#apply" className="font-semibold text-emerald-700">
              Apply Now
            </a>
          </div>
        </div>
      </div>

      <main id="content">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,185,129,0.07),transparent_35%),radial-gradient(circle_at_top_right,rgba(107,114,128,0.10),transparent_30%)]" />
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="space-y-7">
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-medium text-emerald-700 shadow-sm">
                  <span className="text-emerald-700">✦</span>
                  Graduate Admission
                </div>

                <div className="space-y-4">
                  <h1 className="max-w-2xl text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                    Admission to the Graduate Program
                  </h1>
                  <p className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                    The graduate programs are intended for candidates with an undergraduate degree or a postgraduate
                    diploma in IT related fields.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  {[
                    { title: 'Academic Readiness', text: 'IT-related foundation', icon: 'book' },
                    { title: 'Cohort Selective', text: 'Entrance exam required', icon: 'users' },
                    { title: 'Accredited Path', text: 'Recognized institutions', icon: 'shield' },
                  ].map((card) => (
                    <div
                      key={card.title}
                      className="rounded-3xl border border-emerald-100 bg-white p-5 shadow-[0_20px_50px_rgba(15,23,42,0.06)] transition hover:-translate-y-1"
                    >
                      <IconBubble>
                        {card.icon === 'book' ? (
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
                            <path d="M6 4h10a2 2 0 0 1 2 2v14H8a2 2 0 0 0-2 2V4Z" />
                            <path d="M8 4v18" />
                          </svg>
                        ) : card.icon === 'users' ? (
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
                            <path d="M17 20v-1a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v1" />
                            <circle cx="10.5" cy="8" r="3" />
                            <path d="M20 20v-1a3.5 3.5 0 0 0-2.5-3.36" />
                            <path d="M16.5 5.2a3 3 0 0 1 0 5.8" />
                          </svg>
                        ) : (
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
                            <path d="M12 3 4 7v6c0 5 3.5 7.9 8 10 4.5-2.1 8-5 8-10V7l-8-4Z" />
                            <path d="m9 12 2 2 4-4" />
                          </svg>
                        )}
                      </IconBubble>
                      <h3 className="mt-3 text-sm font-bold uppercase tracking-[0.2em] text-slate-800">
                        {card.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-slate-500">{card.text}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 pt-2" id="apply">
                  <a
                    href="#"
                    className="apply-glow inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-600/20 transition hover:-translate-y-0.5 hover:bg-emerald-700"
                  >
                    Apply Now <span aria-hidden>→</span>
                  </a>
                  <a
                    href="#requirements"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-emerald-200 hover:text-emerald-700"
                  >
                    View Requirements
                  </a>
                </div>
              </div>

              <div className="grid gap-5">
                <FloatingImage label="Image 1" />
                <FloatingImage label="Image 2" />
              </div>
            </div>
          </div>
        </section>

        <section id="requirements" className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-emerald-100 bg-white p-6 shadow-[0_18px_60px_rgba(15,23,42,0.06)] sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <IconBubble>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
                  <path d="M6 4h10a2 2 0 0 1 2 2v14H8a2 2 0 0 0-2 2V4Z" />
                  <path d="M8 4v18" />
                </svg>
              </IconBubble>
              <div>
                <h2 className="text-2xl font-bold text-slate-900">Admission Requirements</h2>
                <p className="text-sm text-slate-500">The page is intentionally compact, mirroring the source layout.</p>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-base leading-8 text-slate-600">
                In particular, the following requirements must be fulfilled.
              </p>

              <ul className="grid gap-4">
                {requirements.map((item, index) => (
                  <li
                    key={index}
                    className="flex gap-4 rounded-2xl border border-slate-100 bg-slate-50/70 p-4 text-sm leading-7 text-slate-700"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-xs font-bold text-white">
                      {index + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-emerald-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <LogoMark />
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-700">BITS College</p>
                  <p className="text-xs text-slate-500">from collecting . . . to connecting . . .</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-slate-700">Contact Info</h3>
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex items-center gap-3">
                  <SmallIcon name="mail" /> info@bitscollege.edu.et
                </li>
                <li className="flex items-center gap-3">
                  <SmallIcon name="phone" /> +251-982-363636
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-emerald-700"><SmallIcon name="map" /></span>
                  <span>Yeka Sub-city, Woreda 05, next to Yeka Park</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-slate-700">Social</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  { icon: 'facebook' as const, label: 'Facebook' },
                  { icon: 'twitter' as const, label: 'Twitter' },
                  { icon: 'instagram' as const, label: 'Instagram' },
                  { icon: 'youtube' as const, label: 'Youtube' },
                ].map((item) => (
                  <a
                    key={item.label}
                    href="#"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 text-slate-600 transition hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-700"
                    aria-label={item.label}
                  >
                    <SmallIcon name={item.icon} />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-slate-700">Quick Link</h3>
              <ul className="space-y-3 text-sm text-slate-600">
                {quickLinks.map((item) => (
                  <li key={item}>
                    <a href="#" className="transition hover:text-emerald-700">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 border-t border-slate-100 pt-6 text-sm text-slate-500">Copyright © 2026 BITS College</div>
        </div>
      </footer>
    </div>
  );
}

"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Award,
  BookOpen,
  ChevronRight,
  GraduationCap,
  HeartHandshake,
  Sparkles,
  Target,
  Users,
  ShieldCheck,
  X,
} from "lucide-react";
import { EASE_PREMIUM } from "@/lib/motion-presets";
import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

const sections = [
  { id: "overview", label: "Overview" },
  { id: "mission", label: "Mission & Vision" },
  { id: "dean", label: "Message from the Dean" },
  { id: "accreditation", label: "Accreditation" },
  { id: "student-support", label: "Student Support" },
];

const missionPoints = [
  "Providing quality higher education and research relevant to sustainable development.",
  "Offering a welcoming and rewarding environment for students, faculty, and staff.",
  "Fostering innovative learning, entrepreneurship, community engagement, and industry partnership.",
  "Building capacity to unlock technology-enabled education without boundaries.",
  "Cultivating strategic partnerships with industry leaders and academic institutions.",
  "Maintaining financing plans to sustain innovation and growth.",
];

const values = [
  "Open-mindedness, dynamism, and innovation",
  "Performance without compromising quality",
  "A nurturing environment for students and employees",
  "Integrity, mutual respect, collaboration, and unity",
  "Responsible governance and a commitment to service",
];

const accreditationItems = [
  {
    title: "Graduate Accreditation",
    description: "Documented recognition for graduate-level study and academic compliance.",
    pdfUrl: "/images/About-Who%20we%20are/graduate_accreditation.pdf",
  },
  {
    title: "Undergraduate Accreditation",
    description: "Documented recognition for undergraduate-level programs and standards.",
    pdfUrl: "/images/About-Who%20we%20are/undergraduate_accreditation.pdf",
  },
];

function SectionHeader({ icon: Icon, label, title }: { icon: React.ElementType; label: string; title: string }) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 text-bits-green">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-bits-muted">{label}</p>
        <h2 className="text-2xl font-semibold tracking-tight text-bits-heading sm:text-3xl">{title}</h2>
      </div>
    </div>
  );
}

function ContentCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <section
      className={`scroll-mt-24 rounded-[2rem] border border-emerald-950/8 bg-[var(--bits-surface)] p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)] sm:p-8 dark:border-white/10 ${className}`}
    >
      {children}
    </section>
  );
}

function buildContentMap(selectedPdf: string | null, setSelectedPdf: (v: string | null) => void): Record<string, React.ReactNode> {
  return {
  overview: (
    <ContentCard key="overview">
      <SectionHeader icon={BookOpen} label="Overview" title="Overview" />
      <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
        <div className="space-y-5">
          <div className="rounded-3xl bg-[linear-gradient(135deg,rgba(125,194,67,0.07),rgba(84,89,95,0.05))] p-5">
            <p className="text-lg font-semibold text-bits-green-dark">Attributes behind the brand</p>
            <p className="mt-3 leading-7 text-bits-text">
              The brand identity is built around the meaning of BITS, the visual logic of the logo, and a color
              pairing that communicates freshness, energy, creativity, and determination.
            </p>
          </div>

          <div className="flex justify-center py-4">
            <Image
              src="/images/logo.png"
              alt="BITS College Logo"
              width={400}
              height={400}
              className="h-auto w-80 object-contain"
            />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-[var(--bits-surface)] p-5">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-50 text-bits-green">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <p className="text-sm font-semibold text-bits-heading">BITS meaning</p>
              <p className="mt-2 text-sm leading-6 text-bits-text">
                Business, Innovation, Technology, and System.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-[var(--bits-surface)] p-5">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-50 text-bits-green">
                <Target className="h-5 w-5" />
              </div>
              <p className="text-sm font-semibold text-bits-heading">Logo narrative</p>
              <p className="mt-2 text-sm leading-6 text-bits-text">
                Learning and growth through connected knowledge in an infinity of combinations.
              </p>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-3xl bg-[linear-gradient(180deg,rgba(125,194,67,0.09),rgba(125,194,67,0.02))] p-5 sm:p-6">
          <div className="absolute right-0 top-0 h-36 w-36 rounded-full bg-emerald-400/10 blur-3xl" />
          <div className="relative space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--bits-surface)] shadow-sm">
                <span className="text-xl font-black text-bits-green-dark">B</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-bits-heading">BITS College</p>
                <p className="text-xs text-bits-muted">Private higher learning institution</p>
              </div>
            </div>

            <p className="text-sm leading-7 text-bits-text">
              BITS began from a focused system development and training company and is pursuing a full-fledged
              university vision through faculty expertise, academic design, and technology-forward delivery.
            </p>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl bg-[var(--bits-surface)]/90 p-4 shadow-sm backdrop-blur">
                <p className="text-xs uppercase tracking-[0.24em] text-bits-muted">Current</p>
                <p className="mt-1 text-lg font-semibold text-bits-heading">335+ Students</p>
              </div>
              <div className="rounded-2xl bg-[var(--bits-surface)]/90 p-4 shadow-sm backdrop-blur">
                <p className="text-xs uppercase tracking-[0.24em] text-bits-muted">Goal</p>
                <p className="mt-1 text-lg font-semibold text-bits-heading">Full-fledged University</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContentCard>
  ),
  mission: (
    <ContentCard key="mission">
      <SectionHeader icon={Target} label="Mission and Vision" title="Mission and Vision" />
      <div className="grid gap-4">
        <div className="rounded-3xl border border-emerald-950/8 bg-[var(--bits-surface)] p-5 sm:p-6">
          <p className="text-lg font-semibold text-bits-heading">Mission</p>
          <p className="mt-3 leading-7 text-bits-text">
            The purpose of BITS College is to enable its community to grow, thrive, and prosper through continual
            innovation in education, research, and entrepreneurship.
          </p>
          <ul className="mt-5 space-y-3">
            {missionPoints.map((point) => (
              <li key={point} className="flex gap-3 text-sm leading-6 text-bits-text">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-bits-green" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border border-emerald-950/8 bg-[linear-gradient(135deg,rgba(125,194,67,0.08),var(--bits-surface))] p-5 sm:p-6">
          <p className="text-lg font-semibold text-bits-heading">Vision</p>
          <p className="mt-3 leading-7 text-bits-text">
            By 2030, BITS College aspires to grow in reputation nationally as a model of academic excellence and
            innovative student support in an environment strengthened by industry partnerships and technology
            enablement.
          </p>
        </div>

        <div className="rounded-3xl border border-emerald-950/8 bg-[var(--bits-surface)] p-5 sm:p-6">
          <p className="text-lg font-semibold text-bits-heading">Values</p>
          <div className="mt-4 grid gap-3">
            {values.map((value) => (
              <div key={value} className="flex items-start gap-3 rounded-2xl bg-[var(--bits-surface-muted)] p-4">
                <Sparkles className="mt-0.5 h-4 w-4 text-bits-green" />
                <p className="text-sm leading-6 text-bits-text">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ContentCard>
  ),
  dean: (
    <ContentCard key="dean">
      <SectionHeader icon={Users} label="Message from the Dean" title="Message from the Dean" />
      <blockquote className="rounded-3xl border-l-4 border-bits-green bg-[linear-gradient(135deg,rgba(125,194,67,0.06),var(--bits-surface))] p-6 sm:p-8">
        <p className="text-sm leading-7 text-bits-text sm:text-base">
          On behalf of our faculty and staff and on my own behalf, I warmly welcome you to our website.
        </p>
        <p className="mt-4 text-sm leading-7 text-bits-text sm:text-base">
          BITS college is conceived and established by caring and committed educators, innovators and business people who seek to contribute to the ongoing efforts of improving the quality of higher education in the country.
        </p>
        <p className="mt-4 text-sm leading-7 text-bits-text sm:text-base">
          At BITS College, we strive to promote excellence in the production, growth and dissemination of advanced scientific knowledge through teaching, research, innovation, consultancy and community service. We intend to contribute to the high-level human resource need of the country by providing and advancing quality and relevant education to our students.
        </p>
        <p className="mt-4 text-sm leading-7 text-bits-text sm:text-base">
          We are proud of our College facilities designed entirely with the ambitions of our Higher Education students in mind: – well-equipped classrooms, computer labs and libraries as well as state of the art technology facilities.
        </p>
        <p className="mt-4 text-sm leading-7 text-bits-text sm:text-base">
          This year the college opens its doors to 300 students for its regular program: – 180 in its undergraduate programs and 130 in its graduate programs. Other than normal classroom lectures and studies, we cherish development in the field of IT, community service and extracurricular activities. One of the best things about our college is that it gives equal importance to each and every area so that students will get a chance to achieve the overall skills and personality development as they progress in their careers.
        </p>
        <p className="mt-4 text-sm leading-7 text-bits-text sm:text-base">
          I would like to cordially invite all of you who are interested in expanding your knowledge and enriching your careers to explore our college further either online through a vertical visit (through our website) or visiting our campus in person.
        </p>

        <div className="mt-6 flex items-center gap-4">
          <div className="h-20 w-20 overflow-hidden rounded-full">
            <Image
              src="/images/Faculty%20Members/Dr%20Tesfaye%20Biru.png"
              alt="Dr Tesfaye Biru"
              width={80}
              height={80}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="font-semibold text-bits-heading text-xl">Tesfaye Biru (PHD),</p>
            <p className="text-base text-bits-muted">Dean</p>
          </div>
        </div>
      </blockquote>
    </ContentCard>
  ),
  accreditation: (
    <ContentCard key="accreditation">
      <SectionHeader icon={Award} label="Accreditation" title="Accreditation" />
      <div className="grid gap-4 md:grid-cols-2">
        {accreditationItems.map((item) => (
          <button
            key={item.title}
            type="button"
            onClick={() => setSelectedPdf(item.pdfUrl)}
            className="group w-full rounded-3xl border border-slate-200 bg-[linear-gradient(180deg,var(--bits-surface),var(--bits-surface-muted))] p-5 text-left transition hover:-translate-y-1 hover:border-emerald-900/15 hover:shadow-lg hover:shadow-emerald-900/10"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-lg font-semibold text-bits-heading">{item.title}</p>
                <p className="mt-2 max-w-md text-sm leading-6 text-bits-text">{item.description}</p>
              </div>
              <ChevronRight className="mt-1 h-5 w-5 shrink-0 text-bits-muted transition group-hover:translate-x-1 group-hover:text-bits-green" />
            </div>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-bits-green-dark">
              View document
            </div>
          </button>
        ))}
      </div>

      {selectedPdf && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
          onClick={() => setSelectedPdf(null)}
        >
          <div
            className="relative flex h-[80vh] w-full max-w-5xl flex-col overflow-hidden rounded-3xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b px-6 py-4">
              <p className="text-sm font-semibold text-bits-heading">Accreditation Document</p>
              <button
                type="button"
                onClick={() => setSelectedPdf(null)}
                className="flex h-8 w-8 items-center justify-center rounded-full text-bits-muted transition hover:bg-bits-surface-muted hover:text-bits-heading"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <iframe
              src={selectedPdf}
              className="h-full w-full"
              title="Accreditation PDF"
            />
          </div>
        </div>
      )}
    </ContentCard>
  ),
  "student-support": (
    <ContentCard key="student-support">
      <SectionHeader icon={HeartHandshake} label="Student Support" title="Student Support" />
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div className="space-y-5">
          <p className="leading-7 text-bits-text">
            BITS College is committed to providing comprehensive support services that help students thrive
            academically, professionally, and personally throughout their educational journey.
          </p>
          <div className="grid gap-3">
            {[
              { title: "Academic Support", desc: "Peer-to-peer mentoring and advisor guidance for academic success." },
              { title: "Disability Support", desc: "Advice, guidance, and accommodations for students with physical disabilities." },
              { title: "Extra Curricular Activities", desc: "Hackathons, leadership programs, charity clubs, Toastmasters, media, and more." },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-3 rounded-2xl bg-[var(--bits-surface-muted)] p-4">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-bits-green" />
                <div>
                  <p className="text-sm font-semibold text-bits-heading">{item.title}</p>
                  <p className="mt-0.5 text-sm leading-6 text-bits-text">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-3xl bg-[linear-gradient(135deg,rgba(125,194,67,0.07),rgba(84,89,95,0.04))] p-6 text-center">
          <HeartHandshake className="mx-auto h-16 w-16 text-bits-green" />
          <p className="mt-4 text-lg font-semibold text-bits-heading">We&apos;re Here to Help</p>
          <p className="mt-2 text-sm leading-6 text-bits-text">
            Explore our full range of student support services designed to help you succeed.
          </p>
          <a
            href="/student-support"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-bits-green-dark px-6 py-3 text-sm font-semibold text-white transition hover:bg-bits-green"
          >
            View All Services
            <ChevronRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </ContentCard>
  ),
  };
}

export function WhoWeAreContent() {
  return (
    <Suspense fallback={null}>
      <WhoWeAreContentInner />
    </Suspense>
  );
}

function WhoWeAreContentInner() {
  const searchParams = useSearchParams();
  const [activeSection, setActiveSection] = useState("overview");
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);
  const contentMap = buildContentMap(selectedPdf, setSelectedPdf);

  useEffect(() => {
    const section = searchParams.get("section");
    if (section && sections.some((s) => s.id === section)) {
      setActiveSection(section);
    }
  }, [searchParams]);

  return (
    <div className="bg-[var(--bits-surface-muted)]">
      <section className="relative overflow-hidden border-b border-emerald-950/5 bg-[radial-gradient(circle_at_top_left,rgba(125,194,67,0.08),transparent_35%),linear-gradient(180deg,var(--bits-surface),var(--bits-surface-muted))]">
        <div className="mx-auto max-w-site px-4 pt-24 pb-8 sm:px-6 lg:px-8 lg:pt-28 lg:pb-10">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE_PREMIUM }}
            className="max-w-3xl"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-900/10 bg-[var(--bits-surface)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-bits-green shadow-sm">
              <Sparkles className="h-3.5 w-3.5" />
              Institutional profile
            </div>
            <h1 className="text-4xl font-semibold tracking-tight text-bits-heading sm:text-5xl lg:text-6xl">
              Who We Are
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-bits-text sm:text-lg">
              Learn about BITS College
            </p>
          </motion.div>
        </div>
      </section>

      <div className="mx-auto max-w-site px-4 pt-4 pb-10 sm:px-6 lg:px-8 lg:pt-6 lg:pb-12">
        <div className="grid gap-8 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-10">
          <aside className="lg:sticky lg:top-24 lg:h-fit">
            <div className="rounded-3xl border border-emerald-950/8 bg-[var(--bits-surface)] p-5 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-bits-muted">On this page</p>
              <div className="mt-4 space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    type="button"
                    onClick={() => setActiveSection(section.id)}
                    className={`flex w-full items-center justify-between rounded-2xl border px-4 py-3 text-sm font-medium transition hover:border-emerald-900/10 hover:bg-emerald-50 hover:text-bits-green ${
                      activeSection === section.id
                        ? "border-black/20 bg-black/5 text-black dark:border-white/30 dark:bg-white/10 dark:text-white font-semibold"
                        : "border-transparent text-bits-text"
                    }`}
                  >
                    <span>{section.label}</span>
                    <ChevronRight className={`h-4 w-4 shrink-0 transition ${activeSection === section.id ? "text-black dark:text-white" : ""}`} />
                  </button>
                ))}
              </div>

              <div className="mt-6 rounded-2xl bg-[var(--bits-surface-muted)] p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-bits-muted">About BITS COLLEGE</p>
                <div className="mt-4 grid gap-3">
                  <div className="rounded-2xl bg-[var(--bits-surface)] p-4 shadow-sm">
                    <div className="flex items-center gap-3">
                      <Users className="h-5 w-5 text-bits-green" />
                      <div>
                        <p className="text-2xl font-semibold text-bits-heading">335+</p>
                        <p className="text-xs text-bits-muted">Students enrolled</p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-2xl bg-[var(--bits-surface)] p-4 shadow-sm">
                    <div className="flex items-center gap-3">
                      <GraduationCap className="h-5 w-5 text-bits-green" />
                      <div>
                        <p className="text-2xl font-semibold text-bits-heading">135+</p>
                        <p className="text-xs text-bits-muted">Enrolled within 2017 EC</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          <div className="space-y-8">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.3, ease: EASE_PREMIUM }}
              >
                {contentMap[activeSection]}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Award, BookOpen, ChevronRight, GraduationCap, HeartHandshake,
  Sparkles, Target, Users, ShieldCheck, X,
} from "lucide-react";
import { EASE_PREMIUM } from "@/lib/motion-presets";
import { PDFViewer } from "@/components/ui/PDFViewer";
import { MISSION_POINTS, VALUES, ACCREDITATION_ITEMS, SUPPORT_ITEMS } from "./data";

export function SectionHeader({ icon: Icon, label, title }: { icon: React.ElementType; label: string; title: string }) {
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

export function ContentCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <section
      className={`scroll-mt-24 rounded-[2rem] border border-emerald-950/8 bg-[var(--bits-surface)] p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)] sm:p-8 dark:border-white/10 ${className}`}
    >
      {children}
    </section>
  );
}

export function AccreditationModal({ selectedPdf, onClose }: { selectedPdf: string | null; onClose: () => void }) {
  if (!selectedPdf) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative flex h-[80vh] w-full max-w-5xl flex-col overflow-hidden rounded-3xl bg-white shadow-2xl dark:bg-gray-900"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b px-6 py-4 dark:border-gray-700">
          <p className="text-sm font-semibold text-bits-heading">Accreditation Document</p>
          <button
            type="button"
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full text-bits-muted transition hover:bg-bits-surface-muted hover:text-bits-heading"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <PDFViewer pdfUrl={selectedPdf} title="Accreditation Document" />
      </div>
    </div>
  );
}

export function OverviewTab() {
  return (
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
            <div className="mt-4 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 rounded-xl bg-white/60 px-3 py-2 dark:bg-gray-800/60">
                <span className="h-4 w-4 rounded-full bg-[#7DC243]" />
                <span className="text-sm text-bits-text">
                  Green for <strong>freshness</strong>, <strong>energy</strong>, and <strong>online</strong>
                </span>
              </div>
              <div className="flex items-center gap-2 rounded-xl bg-white/60 px-3 py-2 dark:bg-gray-800/60">
                <span className="h-4 w-4 rounded-full bg-[#54595F]" />
                <span className="text-sm text-bits-text">
                  Gray for <strong>creativity</strong> & <strong>determination</strong>
                </span>
              </div>
            </div>
          </div>

          <div className="flex justify-center py-4 dark:rounded-xl dark:bg-white/90 dark:p-4">
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
  );
}

export function MissionTab() {
  return (
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
            {MISSION_POINTS.map((point) => (
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
            {VALUES.map((value) => (
              <div key={value} className="flex items-start gap-3 rounded-2xl bg-[var(--bits-surface-muted)] p-4">
                <Sparkles className="mt-0.5 h-4 w-4 text-bits-green" />
                <p className="text-sm leading-6 text-bits-text">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ContentCard>
  );
}

export function DeanTab() {
  return (
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
              src="/images/Faculty-Members/Dr%20Tesfaye%20Biru.png"
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
  );
}

export function AccreditationTab({ onShowPdf }: { onShowPdf: (url: string) => void }) {
  return (
    <ContentCard key="accreditation">
      <SectionHeader icon={Award} label="Accreditation" title="Accreditation" />
      <div className="grid gap-4 md:grid-cols-2">
        {ACCREDITATION_ITEMS.map((item) => (
          <button
            key={item.title}
            type="button"
            onClick={() => onShowPdf(item.pdfUrl)}
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
    </ContentCard>
  );
}

export function StudentSupportTab() {
  return (
    <ContentCard key="student-support">
      <SectionHeader icon={HeartHandshake} label="Student Support" title="Student Support" />
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div className="space-y-5">
          <p className="leading-7 text-bits-text">
            BITS College is committed to providing comprehensive support services that help students thrive
            academically, professionally, and personally throughout their educational journey.
          </p>
          <div className="grid gap-3">
            {SUPPORT_ITEMS.map((item) => (
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
  );
}

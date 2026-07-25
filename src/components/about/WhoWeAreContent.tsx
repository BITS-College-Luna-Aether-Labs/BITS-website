/** Who We Are — tabbed subpage: overview, mission & vision, dean's message, accreditation (PDF), student support */
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ChevronRight, Users, GraduationCap } from "lucide-react";
import { EASE_PREMIUM } from "@/lib/motion-presets";
import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { SECTIONS, ACCREDITATION_ITEMS } from "@/components/about/who-we-are/data";
import {
  OverviewTab,
  MissionTab,
  DeanTab,
  AccreditationTab,
  StudentSupportTab,
  AccreditationModal,
} from "@/components/about/who-we-are/sections";

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

  useEffect(() => {
    const section = searchParams.get("section");
    if (section && SECTIONS.some((s) => s.id === section)) {
      setActiveSection(section);
    }

    const doc = searchParams.get("doc");
    if (section === "accreditation" && doc) {
      const match = ACCREDITATION_ITEMS.find((item) =>
        item.title.toLowerCase().includes(doc.toLowerCase())
      );
      if (match) setSelectedPdf(match.pdfUrl);
    }
  }, [searchParams]);

  const tabContent: Record<string, React.ReactNode> = {
    overview: <OverviewTab />,
    mission: <MissionTab />,
    dean: <DeanTab />,
    accreditation: <AccreditationTab onShowPdf={setSelectedPdf} />,
    "student-support": <StudentSupportTab />,
  };

  return (
    <div className="bg-[var(--bits-surface-muted)]">
      <section className="relative overflow-hidden border-b border-emerald-950/5 bg-[radial-gradient(circle_at_top_left,rgba(125,194,67,0.08),transparent_35%),linear-gradient(180deg,var(--bits-surface),var(--bits-surface-muted))]">
        <div className="mx-auto max-w-site px-4 pt-24 pb-8 sm:px-6 lg:px-8 lg:pt-28 lg:pb-10">
          <motion.div
            initial={{ opacity: 1, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: EASE_PREMIUM }}
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
                {SECTIONS.map((section) => (
                  <button
                    key={section.id}
                    type="button"
                    onClick={() => setActiveSection(section.id)}
                    className={`flex w-full items-center justify-between rounded-2xl border px-4 py-3 text-sm font-medium transition hover:border-emerald-900/10 hover:bg-emerald-50 hover:text-bits-green dark:hover:bg-emerald-950/30 dark:hover:text-bits-green ${
                      activeSection === section.id
                        ? "border-black/20 bg-black/5 text-black dark:border-white/30 dark:bg-white/10 dark:text-white font-semibold"
                        : "border-transparent text-bits-text"
                    }`}
                  >
                    <span className="truncate">{section.label}</span>
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
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              >
                {tabContent[activeSection]}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <AccreditationModal selectedPdf={selectedPdf} onClose={() => setSelectedPdf(null)} />
    </div>
  );
}

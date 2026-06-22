/** Scholarship & Aid — four scholarship types with alternating layout, info brochure PDF modal */
"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, X } from "lucide-react";
import { useState } from "react";
import { PDFViewer } from "@/components/ui/PDFViewer";

const PDF_URL = "/images/Admissions-Scholarship/BITS%20SCHOLARSHIPS_INFORMATION_BROCHURE_2023.pdf";

const IMG = "/images/Admissions-Scholarship/";

const scholarships = [
  {
    title: "Merit-based Scholarship",
    body: "Granted solely based on students' merits/academic performance. This scholarship type primarily consists of two targets: incoming students and those already enrolled in the College.\n\nThis type of scholarship has mandatory on-campus employment for a maximum of 12 work hours per week.\n\nMeet our 2023/24 Scholarship Recipients",
    image: `${IMG}Scholarship%201.webp`,
  },
  {
    title: "Need-Based Scholarship",
    body: "Granted to students based on demonstrated need for financial assistance as well as excellent grades. Grade requirements for need-based scholarship should not be as rigorous as that of merit-based scholarship but should nevertheless set a competitive grade requirement for eligibility.\n\nThis type of scholarship has mandatory on-campus employment for a maximum of 12 work hours per week.",
    image: `${IMG}Scholarship%202.png`,
  },
  {
    title: "Female Scholarship",
    body: "Reserved specifically for female students who have demonstrated need for financial assistance while at the same time having a strong academic performance. The main objective of this scholarship category is to create awareness about our women's empowerment scholarship program and increase applications from promising female students\n\nThis type of scholarship has mandatory on-campus employment for a maximum of 12 work hours per week.",
    image: `${IMG}Scholarship%203.webp`,
  },
  {
    title: "Work Study Program",
    body: "This Program provides on-campus employment opportunities for already enrolled students. It is granted to students based on outstanding academic performance and has a competitive grade requirement for eligibility.\n\nStudents will be given maximum of 12 work hours per week.",
    image: `${IMG}Scholarships%204.webp`,
  },
];

const types = [
  { label: "Merit-based Scholarship", id: "merit-based-scholarship" },
  { label: "Need-Based Scholarship", id: "need-based-scholarship" },
  { label: "Female Scholarship", id: "female-scholarship" },
  { label: "Work Study Program", id: "work-study-program" },
];

export function ScholarshipAidContent() {
  const [showPdf, setShowPdf] = useState(false);

  return (
    <div className="min-h-screen bg-[var(--bits-page)] text-bits-heading">
      <section className="mx-auto max-w-site px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-16"
        >
          <div className="text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-900/10 bg-[var(--bits-surface)] px-4 py-2 text-sm font-medium text-bits-green-dark shadow-sm">
              <GraduationCap className="h-4 w-4" />
              Admissions &middot; Scholarship &amp; Aid
            </div>
            <h1 className="text-4xl font-semibold tracking-tight text-bits-heading sm:text-5xl lg:text-6xl">
              Scholarship &amp; Aid
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-bits-text sm:text-lg">
              In order to make the College accessible to all, BITS offers limited number of
              scholarships primarily for academic expenses (tuition), transportation allowance,
              and equipment funding.
            </p>
          </div>

          <div className="rounded-[2rem] border border-emerald-900/10 bg-[var(--bits-surface)] p-8 shadow-[0_20px_80px_rgba(16,24,40,0.06)] sm:p-10">
            <h2 className="text-2xl font-semibold tracking-tight text-bits-heading sm:text-3xl">
              The following are the types of Scholarships at BITS College
            </h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {types.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="flex items-center gap-3 rounded-2xl border border-emerald-900/10 bg-[var(--bits-surface-muted)] px-5 py-4 text-sm font-medium text-bits-heading transition hover:border-emerald-900/20 hover:bg-emerald-50 hover:text-bits-green-dark"
                  >
                    <span className="h-2 w-2 rounded-full bg-bits-green-dark" />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {scholarships.map((item, index) => (
            <div
              key={item.title}
              id={types[index]?.id}
              className="scroll-mt-24"
            >
              <div
                className={`grid gap-10 lg:items-center lg:grid-cols-[1.1fr_0.9fr] ${
                  index % 2 === 1 ? "lg:grid-cols-[0.9fr_1.1fr]" : ""
                }`}
              >
                {index % 2 === 1 ? (
                  <>
                    <div className="lg:order-first">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={800}
                        height={600}
                        priority={index === 0}
                        loading={index === 0 ? undefined : "lazy"}
                        sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 45vw"
                        className={`${index === scholarships.length - 1 ? "w-full sm:w-[30%]" : "w-full sm:w-3/5"} h-auto mx-auto`}
                      />
                    </div>
                    <div className="rounded-[2rem] border border-emerald-900/10 bg-[var(--bits-surface)] p-8 shadow-[0_20px_80px_rgba(16,24,40,0.06)] sm:p-10">
                      <h2 className="text-2xl font-semibold tracking-tight text-bits-heading sm:text-3xl">
                        {item.title}
                      </h2>
                      {item.body.split("\n\n").map((paragraph, i) => (
                        <p key={i} className="mt-5 text-base leading-8 text-bits-text">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="rounded-[2rem] border border-emerald-900/10 bg-[var(--bits-surface)] p-8 shadow-[0_20px_80px_rgba(16,24,40,0.06)] sm:p-10">
                      <h2 className="text-2xl font-semibold tracking-tight text-bits-heading sm:text-3xl">
                        {item.title}
                      </h2>
                      {item.body.split("\n\n").map((paragraph, i) => (
                        <p key={i} className="mt-5 text-base leading-8 text-bits-text">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                    <div>
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={800}
                        height={600}
                        priority={index === 0}
                        loading={index === 0 ? undefined : "lazy"}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 45vw"
                        className="w-full h-auto"
                      />
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}

          <div className="text-center">
            <button
              onClick={() => setShowPdf(true)}
              className="inline-flex items-center gap-3 rounded-xl bg-bits-green-dark px-12 py-6 text-xl font-bold text-white shadow-lg shadow-emerald-900/20 transition hover:-translate-y-0.5 hover:bg-bits-green"
            >
              For More Information
            </button>
          </div>
        </motion.div>
      </section>

      <AnimatePresence>
        {showPdf && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4"
            onClick={() => setShowPdf(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative flex h-full w-full max-w-5xl flex-col overflow-hidden rounded-2xl bg-white dark:bg-gray-900"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b px-4 py-3 dark:border-gray-700">
                <p className="text-sm font-semibold text-bits-heading">Scholarship Brochure</p>
                <button
                  onClick={() => setShowPdf(false)}
                  className="flex h-8 w-8 items-center justify-center rounded-full text-bits-muted transition hover:bg-gray-100 hover:text-bits-heading dark:hover:bg-gray-800"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <PDFViewer pdfUrl={PDF_URL} title="Scholarship Brochure" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

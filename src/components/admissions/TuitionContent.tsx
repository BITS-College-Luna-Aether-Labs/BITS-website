"use client";

import { motion } from "framer-motion";
import { DollarSign } from "lucide-react";
import { EASE_PREMIUM } from "@/lib/motion-presets";

const tuitionTable = [
  {
    level: "Undergraduate",
    rows: [
      { type: "Regular", price: "2400" },
      { type: "Extension", price: "2400" },
    ],
  },
  {
    level: "Graduate",
    rows: [
      { type: "Extension", price: "3500" },
      { type: "Regular", price: "3500" },
    ],
  },
];

export function TuitionContent() {
  return (
    <div className="min-h-screen bg-[var(--bits-page)]">
      <section className="relative overflow-hidden border-b border-emerald-950/10 bg-[linear-gradient(180deg,rgba(125,194,67,0.06),var(--bits-page))]">
        <div className="mx-auto max-w-site px-4 pt-28 pb-16 sm:px-6 lg:px-8 lg:pt-32 lg:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE_PREMIUM }}
            className="max-w-3xl"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-[var(--bits-surface)] px-4 py-2 text-sm font-medium text-bits-green-dark shadow-sm">
              <DollarSign className="h-4 w-4" />
              Tuition & Fee Structure
            </div>
            <h1 className="text-4xl font-semibold tracking-tight text-bits-heading sm:text-5xl lg:text-6xl">
              Tuition
            </h1>
            <p className="mt-6 text-lg leading-8 text-bits-text">
              BITS&apos;s estimated cost of attendance is based on tuition fees and modest contribution to
              technology and other facilities that exist in the college. For more information on cost of
              attendance, you may visit the online application and select the program you would like to join.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-site px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-12">
          {tuitionTable.map((group) => (
            <div key={group.level}>
              <h2 className="mb-4 text-2xl font-semibold tracking-tight text-bits-heading">
                {group.level}
              </h2>
              <div className="overflow-hidden rounded-2xl border border-emerald-950/10 dark:border-white/10">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="bg-emerald-50 dark:bg-emerald-900/40">
                      <th className="px-6 py-4 font-semibold text-bits-heading">Program Type</th>
                      <th className="px-6 py-4 font-semibold text-bits-heading">Price per credit hour</th>
                    </tr>
                  </thead>
                  <tbody>
                    {group.rows.map((row) => (
                      <tr key={row.type} className="border-t border-emerald-950/5 dark:border-white/10">
                        <td className="px-6 py-4 text-bits-text">{row.type}</td>
                        <td className="px-6 py-4 text-bits-text">{row.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

/** Professional Trainings — software development and IT management training cards */
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const IMG = "/images/Services-Professional-Training/";

const trainings = [
  {
    title: "Software Development Professional Trainings",
    bullets: [
      "Agile practices and underlying principles",
      "Software architecture and design",
      "Front end development",
      "Back end development",
      "Web security",
      "Cloud computing",
    ],
    image: `${IMG}Professional%20Training%201.webp`,
  },
  {
    title: "Information Technology Management Trainings",
    bullets: [
      "Boards and technology governance",
      "Governance of enterprise IT",
      "IT service management - ITIL",
      "Cyber security and resilience",
      "Systems approach to business management",
      "Change management",
      "Software project management",
    ],
    image: `${IMG}Professional%20Training%202.webp`,
  },
];

export function ShortTrainingsContent() {
  return (
    <div className="min-h-screen bg-[var(--bits-page)] text-bits-heading">
      <section className="mx-auto max-w-site px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <motion.div
          initial={{ opacity: 1, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-16"
        >
          <div className="text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-900/10 bg-[var(--bits-surface)] px-4 py-2 text-sm font-medium text-bits-green-dark shadow-sm">
              <GraduationCap className="h-4 w-4" />
              Professional Trainings
            </div>
            <h1 className="text-4xl font-semibold tracking-tight text-bits-heading sm:text-5xl lg:text-6xl">
              Professional Trainings
            </h1>
          </div>

          <div className="grid gap-10 lg:grid-cols-2">
            {trainings.map((item, index) => (
              <div
                key={item.title}
                className="overflow-hidden rounded-[2rem] border border-emerald-900/10 bg-[var(--bits-surface)] shadow-[0_20px_80px_rgba(16,24,40,0.06)]"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6 sm:p-8">
                  <h2 className="text-xl font-semibold tracking-tight text-bits-heading sm:text-2xl">
                    {item.title}
                  </h2>
                  <ul className="mt-5 space-y-3">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3 text-base text-bits-text">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-bits-green-dark" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}

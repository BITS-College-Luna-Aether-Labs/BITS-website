"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  BrainCircuit,
  Database,
  FlaskConical,
  Globe2,
  Laptop,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
};

const coreAreas = [
  { title: "Context-based Software Engineering", icon: Laptop, description: "Research on adaptive development methods, quality assurance, and applied software delivery in real institutional environments." },
  { title: "IT Service Innovations", icon: Sparkles, description: "Exploring new models for service improvement, process digitization, and operational efficiency in technology-driven organizations." },
  { title: "Security, Mobility, and Usability", icon: ShieldCheck, description: "Work focused on secure systems, mobile-first experiences, and usable interfaces for modern digital products." },
  { title: "Internet of Things", icon: Globe2, description: "Connected device systems that support monitoring, automation, and smart services across sectors." },
  { title: "Big Data Analytics", icon: Database, description: "Data-centric research covering extraction, interpretation, and decision support from large-scale datasets." },
  { title: "Cyber Security", icon: BrainCircuit, description: "Protection strategies for infrastructure, applications, users, and information assets in distributed systems." },
  { title: "E-Health, E-Learning, E-Commerce", icon: FlaskConical, description: "Applied digital solutions for public services, education, and commerce with measurable development impact." },
];

const researchImages = [
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
];

export function ResearchContent() {
  return (
    <div className="min-h-screen bg-[#f7faf8] text-bits-heading">
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-950 via-emerald-900 to-emerald-800 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_40%)]" />
        <div className="mx-auto max-w-site px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.26em] text-white/80 backdrop-blur">
              <Sparkles className="h-4 w-4" />
              Research
            </div>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Research at BITS College
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-emerald-50/80 sm:text-lg">
              BITS College focuses on business and development-oriented, technology-transfer-focused
              research that supports the alignment of IT with business and advances the ICT for
              development agenda. The goal is integrated, community-based research and high-quality
              graduate studies that maximize societal benefit.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-site px-4 py-14 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div className="rounded-3xl border border-emerald-900/10 bg-[var(--bits-surface)] p-8 shadow-sm shadow-slate-200/70">
            <div className="mb-3 flex items-center gap-2 text-bits-green-dark">
              <BookOpen className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-[0.24em]">Focus</span>
            </div>
            <h2 className="text-2xl font-semibold tracking-tight text-bits-heading sm:text-3xl">
              A research model aligned with practical development outcomes
            </h2>
            <p className="mt-5 text-base leading-8 text-bits-text">
              The research direction is intentionally applied: it connects academic inquiry with
              institutional, community, and industry challenges. The structure emphasizes measurable
              impact, responsible innovation, and reproducible knowledge creation.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Integrated, community-based research",
                "High-quality graduate study support",
                "ICT for development alignment",
                "Business and technology transfer orientation",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-emerald-900/10 bg-emerald-50/70 px-4 py-4 text-sm font-medium text-bits-text">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {researchImages.map((src, index) => (
              <motion.figure
                key={src}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={index + 1}
                className="group overflow-hidden rounded-3xl border border-emerald-900/10 bg-[var(--bits-surface)] shadow-sm shadow-slate-200/70"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={src}
                    alt={`Research visual ${index + 1}`}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/55 via-transparent to-transparent" />
                </div>
                <figcaption className="p-5 text-sm text-bits-text">
                  Research-driven digital systems, collaboration, and knowledge production.
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="mx-auto max-w-site px-4 pb-16 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mb-8 flex items-center gap-3"
        >
          <div className="h-12 w-2 rounded-full bg-bits-green-dark" />
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-bits-green-dark">
              Core Areas
            </p>
            <h2 className="mt-1 text-2xl font-semibold tracking-tight text-bits-heading sm:text-3xl">
              Core research areas and themes identified at BITS
            </h2>
          </div>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {coreAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <motion.article
                key={area.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                custom={index + 1}
                whileHover={{ y: -6 }}
                className="group rounded-3xl border border-emerald-900/10 bg-[var(--bits-surface)] p-6 shadow-sm shadow-slate-200/70 transition"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-bits-green-dark transition group-hover:bg-bits-green-dark group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold tracking-tight text-bits-heading">{area.title}</h3>
                <p className="mt-3 text-sm leading-7 text-bits-text">{area.description}</p>
              </motion.article>
            );
          })}
        </div>
      </section>
    </div>
  );
}

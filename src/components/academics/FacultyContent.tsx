"use client";

import { motion } from "framer-motion";
import {
  Users,
  Award,
  GraduationCap,
  BrainCircuit,
  BookOpen,
  BriefcaseBusiness,
} from "lucide-react";

type FacultyCard = {
  name: string;
  role: string;
  courses?: string[];
  tagline?: string;
  initials: string;
};

const faculty: FacultyCard[] = [
  { name: "Dr. Rahel Bekele", role: "IS Professional", courses: ["Fundamentals of Database Systems", "Statistical", "Research Methods", "Business Intelligence"], initials: "RB" },
  { name: "Dr. Tesfaye Biru", role: "Software Developer", courses: ["Introduction to Computer Systems", "Service Innovation and Design", "IT Service Management"], initials: "TB" },
  { name: "Dr. Nigussie Tadesse", role: "Assistant Professor of Information Systems", courses: ["IT and Business Alignment", "IT Governance and Audit"], initials: "NT" },
  { name: "Prof. Abebe Rorissa", role: "Professor of IS", courses: [], initials: "AR" },
  { name: "Betsegaw", role: "Lecturer", courses: ["Fundamentals of Programming", "Object Oriented Programming"], initials: "B" },
  { name: "Henock Leulseged", role: "IS Professional", courses: ["Advanced Programming", "Object Oriented Programming"], initials: "HL" },
  { name: "Kidus Menfese", role: "Lecturer", courses: ["Software Requirements Engineering", "Operating Systems"], initials: "KM" },
  { name: "Elshaday Samuel", role: "Lecturer", courses: ["Calculus", "Data Communication and Networks I", "Introduction to Computer Systems", "Foundations of Data Analytics"], initials: "ES" },
  { name: "Michael Bekele", role: "Lecturer", courses: ["Fundamentals of Database Systems", "Data Structures and Algorithms", "Web Systems and Services", "Fundamentals of Data Analytics"], initials: "MB" },
  { name: "Elshaday Tesfaye", role: "Lecturer", courses: ["Introduction to Computer Systems", "Fundamentals of Programming"], initials: "ET" },
  { name: "Fasika Tegegn", role: "Lecturer", courses: ["Data Communications and Networks I", "Information Assurance and Security", "Ethical Computing", "Operating Systems"], initials: "FT" },
  { name: "Hana Gebeyehu", role: "Lecturer", courses: ["Enterprise Systems"], initials: "HG" },
  { name: "Tibebu Tesfaye", role: "Lecturer", courses: ["Introduction to Computer Systems", "Fundamentals of Programming"], initials: "TT" },
  { name: "Birara Gebru", role: "Lecturer", courses: ["College English I", "College English II"], initials: "BG" },
  { name: "Anteneh Kassaye", role: "Lecturer", courses: ["Data Communications and Networks I", "Information Assurance and Security", "Electronics"], initials: "AK" },
  { name: "Tehut Tesfaye", role: "Lecturer", courses: ["Fundamentals of Data Analytics"], initials: "TE" },
];

const guestLecturers: FacultyCard[] = [
  { name: "Prof. Christiane Floyd", role: "Guest Lecturer", tagline: "BSc. Degree in Information Systems, from School of Information Science, AAU • Software Developer at Mentor Knowledge Solutions PLC • Experienced in full stack web development frameworks • Skilled in software usability testing", initials: "CF" },
  { name: "Jun-Patrick Raab", role: "Guest Lecturer", tagline: "BSc. Degree in Information Systems, from School of Information Science, AAU • Software Developer at Mentor Knowledge Solutions PLC • Experienced in full stack web development frameworks • Skilled in software usability testing", initials: "JR" },
  { name: "Larissa Gebken", role: "Guest Lecturer", tagline: "BSc. Degree in Information Systems, from School of Information Science, AAU • Software Developer at Mentor Knowledge Solutions PLC • Experienced in full stack web development frameworks • Skilled in software usability testing", initials: "LG" },
  { name: "Prof. Ulrike Spree", role: "Guest Lecturer", tagline: "BSc. Degree in Information Systems, from School of Information Science, AAU • Software Developer at Mentor Knowledge Solutions PLC • Experienced in full stack web development frameworks • Skilled in software usability testing", initials: "US" },
];

const EASE_PREMIUM = [0.22, 1, 0.36, 1] as const;

function SectionTitle({ title, icon: Icon }: { title: string; icon: React.ComponentType<{ className?: string }> }) {
  return (
    <div className="mb-8 flex items-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-bits-green-dark text-white shadow-lg shadow-emerald-900/15">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <h2 className="text-2xl font-semibold tracking-tight text-bits-heading">{title}</h2>
        <div className="mt-2 h-1 w-16 rounded-full bg-bits-green-dark" />
      </div>
    </div>
  );
}

function Card({ item, index }: { item: FacultyCard; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: index * 0.03, ease: EASE_PREMIUM }}
      whileHover={{ y: -6 }}
      className="group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-[var(--bits-surface)] shadow-[0_12px_40px_rgba(15,23,42,0.06)] transition"
    >
      <div className="p-5">
        <div className="flex items-start gap-4">
          <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl bg-gradient-to-br from-bits-green-dark to-emerald-500 text-lg font-bold text-white shadow-lg shadow-emerald-900/20">
            {item.initials}
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="truncate text-lg font-semibold text-bits-heading">{item.name}</h3>
                <p className="mt-1 text-sm font-medium text-bits-green-dark">{item.role}</p>
              </div>
              <div className="rounded-full border border-emerald-900/10 bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-bits-green-dark">
                BITS
              </div>
            </div>

            {item.courses && item.courses.length > 0 ? (
              <ul className="mt-4 space-y-2">
                {item.courses.map((course) => (
                  <li key={course} className="flex items-start gap-2 text-sm text-bits-text">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-bits-green-dark" />
                    <span>{course}</span>
                  </li>
                ))}
              </ul>
            ) : null}

            {item.tagline ? (
              <p className="mt-4 text-sm leading-7 text-bits-text">{item.tagline}</p>
            ) : null}
          </div>
        </div>
      </div>

      <div className="h-1 w-full bg-gradient-to-r from-bits-green-dark via-emerald-400 to-emerald-200 opacity-80 transition group-hover:opacity-100" />
    </motion.article>
  );
}

export function FacultyContent() {
  return (
    <div className="min-h-screen bg-[#f8faf9] text-bits-heading">
      <section className="relative overflow-hidden border-b border-emerald-950/10 bg-[linear-gradient(135deg,rgba(6,95,70,0.08),rgba(255,255,255,1)_38%,rgba(6,95,70,0.04))]">
        <div className="absolute inset-0 opacity-50 [background:radial-gradient(circle_at_top_left,rgba(6,95,70,0.2),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.16),transparent_28%)]" />
        <div className="relative mx-auto max-w-site px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: EASE_PREMIUM }}
            className="max-w-3xl"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-900/10 bg-[var(--bits-surface)]/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-bits-green-dark shadow-sm">
              <GraduationCap className="h-4 w-4" />
              Academic Staff
            </div>
            <h1 className="text-4xl font-semibold tracking-tight text-bits-heading sm:text-5xl lg:text-6xl">
              Faculty
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-bits-text sm:text-lg">
              A structured presentation of teaching staff and guest lecturers, organized in the same institutional rhythm as the live BITS College page, with cleaner motion and modern typography.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-site px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <SectionTitle title="Faculty" icon={Users} />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {faculty.map((item, index) => (
            <Card key={item.name} item={item} index={index} />
          ))}
        </div>
      </section>

      <section className="bg-[var(--bits-surface)]/70 py-12">
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8 lg:py-4">
          <SectionTitle title="Guest Lecturers" icon={Award} />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-2">
            {guestLecturers.map((item, index) => (
              <motion.article
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.06, ease: EASE_PREMIUM }}
                whileHover={{ y: -5 }}
                className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-[var(--bits-surface)] shadow-[0_12px_40px_rgba(15,23,42,0.06)]"
              >
                <div className="p-5 sm:p-6">
                  <div className="flex gap-4">
                    <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl bg-gradient-to-br from-emerald-600 to-bits-green-dark text-lg font-bold text-white shadow-lg shadow-emerald-900/20">
                      {item.initials}
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-lg font-semibold text-bits-heading">{item.name}</h3>
                      <p className="mt-1 text-sm font-medium text-bits-green-dark">{item.role}</p>
                      <p className="mt-4 text-sm leading-7 text-bits-text">{item.tagline}</p>
                    </div>
                  </div>
                </div>
                <div className="h-1 w-full bg-gradient-to-r from-bits-green-dark via-emerald-400 to-emerald-200" />
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-site px-4 pb-16 pt-8 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { icon: BrainCircuit, title: "Academic Depth", text: "Staff profiles and teaching loads are presented as a structured academic directory." },
            { icon: BookOpen, title: "Course Coverage", text: "Course lists are preserved as stacked content blocks inside each faculty card." },
            { icon: BriefcaseBusiness, title: "Institutional Tone", text: "The design keeps the same green-driven BITS identity while modernizing layout and animation." },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-[1.75rem] border border-slate-200 bg-[var(--bits-surface)] p-6 shadow-[0_12px_40px_rgba(15,23,42,0.05)]"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-bits-green-dark text-white">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-bits-heading">{item.title}</h3>
              <p className="mt-2 text-sm leading-7 text-bits-text">{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

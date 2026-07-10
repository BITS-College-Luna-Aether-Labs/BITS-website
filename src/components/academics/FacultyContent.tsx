/** Instructors — image cards with hover/touch overlay showing name and tagline */
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Users, GraduationCap } from "lucide-react";
import { useState } from "react";
import { EASE_PREMIUM } from "@/lib/motion-presets";

type FacultyCard = {
  name: string;
  tagline?: string;
  initials: string;
  image?: string;
};

const IMG = "/images/Faculty-Members/";

const faculty: FacultyCard[] = [
  { name: "Dr. Tesfaye Biru", initials: "TB", image: `${IMG}Dr%20Tesfaye%20Biru.png` },
  { name: "Henock Leulseged", initials: "HL", image: `${IMG}Mr%20Henock%20Leulseged.jpg` },
  { name: "Dr. Nigussie Tadesse", initials: "NT", image: `${IMG}Dr%20Nigussie%20Tadesse.jpeg` },
  { name: "Hana Gebeyehu", initials: "HG", image: `${IMG}Ms%20Hana%20Gebeyehu.jpeg` },
  { name: "Dr. Rahel Bekele", initials: "RB", image: `${IMG}Dr%20Rahel%20Bekele.webp` },
  { name: "Elshaday Tesfaye", initials: "ET", image: `${IMG}Ms%20Elshaday%20Tesfaye.png` },
  { name: "Betsegaw", initials: "B", image: `${IMG}Mr%20Betsegaw.png` },
  { name: "Prof. Abebe Rorissa", initials: "AR", image: `${IMG}Professor%20Abebe%20Rorissa.jpeg` },
  { name: "Tibebu Tesfaye", initials: "TT", image: `${IMG}Mr%20Tibebu%20Tesfaye.jpeg` },
  { name: "Birara Gebru", initials: "BG", image: `${IMG}Dr%20Birara%20Gebru.jpg` },
  { name: "Anteneh Kassaye", initials: "AK", image: `${IMG}Mr%20Anteneh%20Kassaye.jpeg` },
  { name: "Kidus Menfese", initials: "KM", image: `${IMG}Mr%20Kidus%20Menfese.jpg` },
];

function Card({ item, index }: { item: FacultyCard; index: number }) {
  const [showOverlay, setShowOverlay] = useState(false);
  const [touched, setTouched] = useState(false);

  const handleTouch = () => {
    setTouched((v) => !v);
    if (!showOverlay) setShowOverlay(true);
  };

  const show = showOverlay || touched;

  return (
    <motion.article
      initial={{ y: 32, scale: 0.97 }}
      animate={{ y: 0, scale: 1 }}
      transition={{ duration: 0.55, delay: index * 0.03, ease: EASE_PREMIUM }}
      className="group relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-emerald-900/10 bg-[var(--bits-surface)] shadow-[0_12px_40px_rgba(15,23,42,0.06)] transition"
    >
      {item.image ? (
        <Image
          src={item.image}
          alt={item.name}
          fill
          loading={index < 4 ? "eager" : "lazy"}
          priority={index < 4}
          className="object-cover scale-[1.2] transition duration-700 group-hover:scale-[1.35]"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-bits-green-dark to-emerald-500 text-2xl font-bold text-white">
          {item.initials}
        </div>
      )}

      {/* Overlay – centered name with enlarged text */}
      <motion.div
        initial={false}
        animate={{ opacity: show ? 1 : 0, y: show ? 0 : 12 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        onMouseEnter={() => setShowOverlay(true)}
        onMouseLeave={() => { setShowOverlay(false); setTouched(false); }}
        onTouchStart={handleTouch}
        className="absolute inset-0 flex cursor-default flex-col items-center justify-center bg-gradient-to-t from-bits-green-dark/95 via-bits-green-dark/60 to-transparent p-5 sm:p-6"
      >
        {/* BITS badge – top right */}
        <div className="absolute right-4 top-4 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/90 backdrop-blur-sm">
          BITS
        </div>

        {/* Centered content */}
        <div className="flex flex-col items-center text-center">
          <h3 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            {item.name}
          </h3>
          {item.tagline && (
            <p className="mt-2 text-sm font-medium text-emerald-200/90 sm:text-base">
              {item.tagline}
            </p>
          )}
        </div>
      </motion.div>
    </motion.article>
  );
}

export function FacultyContent() {
  return (
    <div className="min-h-screen bg-[var(--bits-page)] text-bits-heading">
      <section className="relative overflow-hidden border-b border-emerald-950/10 bg-[var(--bits-surface)]">
        <div className="absolute inset-0 opacity-30 [background:radial-gradient(circle_at_top_left,rgba(6,95,70,0.3),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.2),transparent_35%)]" />
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
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-bits-green-dark text-white shadow-lg shadow-emerald-900/15">
                <Users className="h-6 w-6" />
              </div>
              <h1 className="text-4xl font-semibold tracking-tight text-bits-heading sm:text-5xl lg:text-6xl">
                Instructors
              </h1>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-site px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {faculty.map((item, index) => (
            <Card key={item.name} item={item} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
}
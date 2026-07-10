/** Software Engineering — overview, courses, graduation requirements, and career paths */
"use client";

import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const IMG = "/images/Academics-Undergraduate-Details/Software%20Engineering";

export function SoftwareEngineeringContent() {
  return (
    <div className="min-h-screen bg-[var(--bits-page)] text-bits-heading">
      {/* Hero */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative overflow-hidden pt-[72px] pb-16 sm:pb-24 lg:pt-[80px]"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-blue-50 opacity-50 dark:from-gray-900 dark:to-gray-800" />
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-bits-green/20 mix-blend-multiply blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-bits-gold-light/10 mix-blend-multiply blur-3xl" />

        <div className="relative mx-auto max-w-site px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="text-center pt-12"
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="bg-gradient-to-r from-bits-green-dark to-blue-600 bg-clip-text text-transparent dark:from-bits-green dark:to-bits-gold-light">
                Software Engineering
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-7 text-bits-text">
              Produce software engineers with knowledge and understanding of theories, practices and principles of software engineering.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Main Content */}
      <main className="mx-auto max-w-site px-4 py-16 sm:px-6 lg:px-8">
        {/* Overview */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-bits-heading sm:text-4xl">Overview</h2>
          <p className="mt-4 text-lg leading-relaxed text-bits-text">
            The undergraduate program in Software Engineering is designed to produce software engineers with knowledge and understanding of theories, practices and principles of software engineering.
          </p>
          <motion.img
            src={`${IMG}%201.png`}
            alt="Software Engineering Overview"
            className="mt-8 w-2/3 mx-auto rounded-[2rem] shadow-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          />
        </motion.section>

        {/* What will I study? */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 grid gap-12 md:grid-cols-2"
        >
          <div>
            <h2 className="text-3xl font-bold text-bits-heading sm:text-4xl">What will I study?</h2>
            <p className="mt-4 text-lg leading-relaxed text-bits-text">
              Throughout the software engineering program, there will be a focus on software design, requirements study, programming, and database-related courses. Major course areas are:
            </p>
            <ul className="mt-6 list-inside list-disc space-y-2 text-lg text-bits-text">
              {[
                "Software Design and Architecture",
                "Software Requirements Engineering",
                "Mobile Application Development",
                "Web Application Development",
                "Software Project Management",
                "Database System",
                "Programming / Coding",
                "Data Structures and Algorithms",
              ].map((item) => (
                <motion.li key={item} variants={itemVariants}>
                  <strong>{item}</strong>
                </motion.li>
              ))}
            </ul>
          </div>
          <motion.img
            src={`${IMG}%202.webp`}
            alt="Students learning Software Engineering"
            className="w-full rounded-[2rem] shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          />
        </motion.section>

        {/* Graduation Requirements */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-bits-heading sm:text-4xl">Graduation Requirements</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Grade",
                text: "To graduate from this program, students must pass every compulsory course and support course, as well as 9 credit hours of elective courses. The cumulative grade point average should be at least 2.0.",
              },
              {
                title: "Internships",
                text: "An internship is compulsory non-credit work for a student to graduate from the program. It is also an opportunity for students to achieve personal learning goals.",
              },
              {
                title: "Community Service",
                text: "A student is recommended to complete 24 hours of community service before graduating from BITS. It is also an opportunity for students to give back to the community.",
              },
            ].map((req) => (
              <motion.div
                key={req.title}
                variants={itemVariants}
                className="rounded-2xl border border-emerald-900/10 bg-[var(--bits-surface)] p-6 shadow-card dark:border-gray-800 dark:shadow-none dark:ring-1 dark:ring-gray-800"
              >
                <h3 className="text-xl font-semibold text-bits-green-dark">{req.title}</h3>
                <p className="mt-3 leading-relaxed text-bits-text">{req.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Graduation Image + Career Paths */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 grid gap-12 md:grid-cols-2 md:items-center"
        >
          <motion.img
            src={`${IMG}%203.webp`}
            alt="Graduation Requirements"
            className="w-full rounded-[2rem] shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          />
          <div>
            <h2 className="text-3xl font-bold text-bits-heading sm:text-4xl">Career Paths</h2>
            <p className="mt-4 text-lg leading-relaxed text-bits-text">
              Many career opportunities exist for graduates of the Software Engineering undergraduate program. They will have the potential to work as:
            </p>
            <ul className="mt-6 list-inside list-disc space-y-2 text-lg text-bits-text">
              {[
                "Software Designers",
                "Software Developers",
                "Requirement Analysts",
                "Software Project Managers",
                "Usability Experts",
              ].map((career) => (
                <motion.li
                  key={career}
                  variants={itemVariants}
                  className="text-lg text-bits-text"
                >
                  <strong>{career}</strong>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.section>
      </main>
    </div>
  );
}

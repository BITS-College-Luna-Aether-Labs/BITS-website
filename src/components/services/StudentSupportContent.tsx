"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { useState } from "react";

const IMG = "/images/Services-student%20support/";

const activities = [
  {
    id: "hackathons",
    label: "Hackathons",
    content: (
      <>
        <p className="text-lg font-semibold text-bits-heading">What is a Hackathon?</p>
        <p className="mt-2 text-base leading-7 text-bits-text">
          It&apos;s a design sprint-like event; often those involved in software development collaborate
          intensively on software projects. There is no restriction on the type of software being created.
        </p>
        <p className="mt-5 text-lg font-semibold text-bits-heading">What is the goal of a Hackathon?</p>
        <p className="mt-2 text-base leading-7 text-bits-text">
          The goal of a hackathon is to create functioning software or hardware by the end of the event.
        </p>
        <p className="mt-5 text-lg font-semibold text-bits-heading">What could your role be in Hackathons?</p>
        <p className="mt-2 text-base leading-7 text-bits-text">
          You can participate on the event or organize the event in teams.
        </p>
        <p className="mt-5 text-lg font-semibold text-bits-heading">What could you get out of it?</p>
        <ul className="mt-2 space-y-2">
          {["Prizes", "Develop your problem solving skills by participating on the event", "Develop your interpersonal skills by being part of the organizing team"].map((item) => (
            <li key={item} className="flex items-start gap-3 text-base text-bits-text">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-bits-green-dark" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    id: "women-in-tech",
    label: "Women in Tech",
    content: (
      <>
        <p className="text-lg font-semibold text-bits-heading">What does the women in tech student club do?</p>
        <p className="mt-2 text-base leading-7 text-bits-text">
          The Women in Technology student club seeks to enhance students&apos; technological experiences by
          organizing co-curricular and extracurricular activities such as career workshops, and technical
          sessions led by academic and industry professionals.
        </p>
        <p className="mt-5 text-lg font-semibold text-bits-heading">What is the goal of the women in tech club?</p>
        <p className="mt-2 text-base leading-7 text-bits-text">
          This club works to close the gender gap in tech majors and to create a healthier and more efficient
          ecosystem for tech disciplines.
        </p>
        <p className="mt-5 text-lg font-semibold text-bits-heading">What could your role be in women in tech club?</p>
        <p className="mt-2 text-base leading-7 text-bits-text">
          Organizing different workshops, organizing inspiring events with inspiring women in tech, brainstorming
          sessions on how to close the gender gap in tech then implementing your creative solutions and more.
        </p>
        <p className="mt-5 text-lg font-semibold text-bits-heading">What could you get out of it?</p>
        <p className="mt-2 text-base leading-7 text-bits-text">
          Organizing different workshops, organizing inspiring events with the opportunity to do impactful work
          while developing your interpersonal skills through the process.
        </p>
      </>
    ),
  },
  {
    id: "leadership",
    label: "Leadership",
    content: (
      <p className="text-base leading-7 text-bits-text">
        This includes getting involved in student body and other forms of activities to help you build your
        leadership skills. The activities should be raised by students in a brainstorming session.
      </p>
    ),
  },
  {
    id: "charity",
    label: "Charity Club",
    content: (
      <p className="text-base leading-7 text-bits-text">
        As community service is highly valued in our college we would like our students to take part in charity
        activities. The activities are to be planed and executed by a team of students.
      </p>
    ),
  },
  {
    id: "toastmasters",
    label: "Toastmasters",
    content: (
      <p className="text-base leading-7 text-bits-text">
        Toastmasters is an international club where you practice public speaking, improve your communication and
        build leadership skills. We plan to have BITS Toastmasters club where students can engage as leaders
        and speakers.
      </p>
    ),
  },
  {
    id: "media",
    label: "Media",
    content: (
      <p className="text-base leading-7 text-bits-text">
        The activities in this club can include digital magazine and newsletter preparation, and other media
        related programs.
      </p>
    ),
  },
  {
    id: "creative",
    label: "Creative Communication",
    content: (
      <p className="text-base leading-7 text-bits-text">
        Here at BITS College we want to build a community that nurtures talent hence we encourage our students
        to express themselves through different forms of art. This club can engage in preparing artistic events,
        and platforms where talents are showcased.
      </p>
    ),
  },
  {
    id: "aiesec",
    label: "AIESEC",
    content: (
      <p className="text-base leading-7 text-bits-text">
        AIESEC is a global platform for young people to develop their leadership potential through international
        internships and volunteer opportunities. We encourage our students to take part in bringing this
        organization to BITS as it can play a major roll in getting exposure to opportunities as well as
        like minded students externally.
      </p>
    ),
  },
  {
    id: "book-clubs",
    label: "Book Clubs",
    content: (
      <p className="text-base leading-7 text-bits-text">
        The purpose of the Book Club is to give our College community access to structured readings and
        discussions. This club offers an opportunity for anyone and everyone to read books from a variety of
        genres, and discuss them in regular intervals to whatever depth is desired. We believe this will bring
        our community closer and broaden the perspectives of students.
      </p>
    ),
  },
];

export function StudentSupportContent() {
  const [activeActivity, setActiveActivity] = useState(activities[0].id);

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
              Services &middot; Student Support
            </div>
            <h1 className="text-4xl font-semibold tracking-tight text-bits-heading sm:text-5xl lg:text-6xl">
              Student Support
            </h1>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="rounded-[2rem] border border-emerald-900/10 bg-[var(--bits-surface)] p-8 shadow-[0_20px_80px_rgba(16,24,40,0.06)] sm:p-10">
              <h2 className="text-2xl font-semibold tracking-tight text-bits-heading sm:text-3xl">
                Academic Support
              </h2>
              <p className="mt-5 text-base leading-8 text-bits-text">
                Students have both peer-to-peer mentoring as well as adequate guidance from their advisors to
                build confidence in their academic activities and related extra-curricular activities.
              </p>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-emerald-900/10 bg-[var(--bits-surface)] shadow-[0_20px_80px_rgba(16,24,40,0.08)]">
              <Image
                src={`${IMG}Student%20support%201.png`}
                alt="Academic Support"
                width={0}
                height={0}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="overflow-hidden rounded-[2rem] border border-emerald-900/10 bg-[var(--bits-surface)] shadow-[0_20px_80px_rgba(16,24,40,0.08)] lg:order-first">
              <Image
                src={`${IMG}Student%20support%202.webp`}
                alt="Disability Support"
                width={0}
                height={0}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="w-full h-auto"
              />
            </div>

            <div className="rounded-[2rem] border border-emerald-900/10 bg-[var(--bits-surface)] p-8 shadow-[0_20px_80px_rgba(16,24,40,0.06)] sm:p-10">
              <h2 className="text-2xl font-semibold tracking-tight text-bits-heading sm:text-3xl">
                Disability Support
              </h2>
              <p className="mt-5 text-base leading-8 text-bits-text">
                BITS is committed to the education of all qualified students, regardless of disability status.
                We provide advice, guidance and, support for students with physical disabilities. We also work
                closely with students and staff to put in place any necessary backing and adjustments to remove
                or reduce barriers to learning.
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-emerald-900/10 bg-[var(--bits-surface)] p-8 shadow-[0_20px_80px_rgba(16,24,40,0.06)] sm:p-10">
            <h2 className="text-2xl font-semibold tracking-tight text-bits-heading sm:text-3xl">
              Extra Curricular Activities
            </h2>
            <div className="mt-8 grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-8">
              <div className="flex flex-col gap-2">
                {activities.map((activity) => (
                  <button
                    key={activity.id}
                    onClick={() => setActiveActivity(activity.id)}
                    className={`flex w-full items-center justify-between rounded-2xl border px-4 py-3 text-left text-sm font-medium transition ${
                      activeActivity === activity.id
                        ? "border-emerald-900/10 bg-emerald-50 text-bits-green-dark"
                        : "border-transparent text-bits-text hover:border-emerald-900/10 hover:bg-emerald-50/50 hover:text-bits-green-dark"
                    }`}
                  >
                    <span>{activity.label}</span>
                    <span className={`h-2 w-2 rounded-full transition ${activeActivity === activity.id ? "bg-bits-green-dark" : "bg-transparent"}`} />
                  </button>
                ))}
              </div>

              <div className="min-h-[200px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeActivity}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="rounded-2xl border border-emerald-900/10 bg-[var(--bits-surface-muted)] p-6 sm:p-8"
                  >
                    {activities.find((a) => a.id === activeActivity)?.content}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

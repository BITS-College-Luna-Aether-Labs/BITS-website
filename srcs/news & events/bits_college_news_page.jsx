import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  ChevronDown,
  Clock3,
  Facebook,
  Instagram,
  Linkedin,
  Menu,
  Search,
  Twitter,
  Youtube,
} from "lucide-react";

const newsItems = [
  {
    title: "Data Analytics Workshop by the ITS Department",
    date: "March 22, 2025",
    excerpt:
      "Showcasing the life cycle of data analytics, starting from data processing, cleaning, visualizing and gaining insight on data and making informed decisions.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    accent: "from-emerald-500 to-lime-400",
  },
  {
    title: "Virtual Tour of BITS College",
    date: "November 02, 2024",
    excerpt:
      "Explore the campus, state-of-the-art labs, student facilities, and learning spaces through a guided virtual experience.",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80",
    accent: "from-sky-500 to-emerald-400",
  },
  {
    title: "Hackathon Stories",
    date: "October 16, 2024",
    excerpt:
      "A focused recap of collaboration, innovation, and the competitive energy that shaped the BITS College Hackathon.",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
    accent: "from-violet-500 to-fuchsia-400",
  },
  {
    title: "Day 3 of the BITS College Hackathon",
    date: "October 14, 2024",
    excerpt:
      "A grand finale featuring coding breakthroughs, teamwork, and the announcement of the winning project.",
    image:
      "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=1200&q=80",
    accent: "from-amber-500 to-orange-400",
  },
  {
    title: "Day 2 of the BITS College Hackathon",
    date: "October 13, 2024",
    excerpt:
      "Projects advanced rapidly as teams pushed ideas from concept to execution with momentum and creativity.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    accent: "from-emerald-500 to-cyan-400",
  },
  {
    title: "Day 1 of the BITS College Hackathon",
    date: "October 12, 2024",
    excerpt:
      "Creativity, problem solving, and serious technical skill defined the opening day of the event.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    accent: "from-indigo-500 to-sky-400",
  },
  {
    title: "BITS Workshop Highlights",
    date: "September 29, 2024",
    excerpt:
      "A day of inspiration, career guidance, and energy captured through the most memorable workshop moments.",
    image:
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1200&q=80",
    accent: "from-rose-500 to-pink-400",
  },
  {
    title: "Highlights from the Digital Platform Ecosystem Workshop",
    date: "November 16, 2023",
    excerpt:
      "Jointly organized with industry partners, the workshop covered cybersecurity, digital transformation, ChatGPT, banking trends, logistics ecosystems, and digital marketing.",
    image:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80",
    accent: "from-teal-500 to-cyan-400",
  },
  {
    title: "Workshop on Digital Platform Ecosystems",
    date: "November 7, 2023",
    excerpt:
      "Experts from multiple industries gathered to discuss trends, share perspectives, and benefit from digital platforms.",
    image:
      "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=1200&q=80",
    accent: "from-lime-500 to-emerald-400",
  },
  {
    title: "Scholarship Recipients",
    date: "September 15, 2023",
    excerpt:
      "Celebrating outstanding students and their achievements with scholarship recognition and support for future endeavors.",
    image:
      "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=1200&q=80",
    accent: "from-yellow-500 to-amber-400",
  },
  {
    title: "Summer Bootcamp",
    date: "August 21, 2023",
    excerpt:
      "A practical training environment built around industry standards, best practices, tools, and technologies.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    accent: "from-cyan-500 to-sky-400",
  },
  {
    title: "BITS College Day",
    date: "June 14, 2023",
    excerpt:
      "Students' work, panels, discussions, and games came together in a college-wide celebration.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
    accent: "from-emerald-500 to-green-400",
  },
  {
    title: "Workshop",
    date: "March 26, 2022",
    excerpt:
      "Preparing for the tech industry through higher education, practical discussion, and applied insight.",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
    accent: "from-slate-600 to-slate-400",
  },
  {
    title: "Student Appreciation Night",
    date: "December 12, 2021",
    excerpt:
      "A formal evening honoring the accomplishments and contributions of postgraduate students.",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80",
    accent: "from-fuchsia-500 to-pink-400",
  },
  {
    title: "BITS College Inauguration - Speech by Dr. Rahel Bekele",
    date: "January 02, 2021",
    excerpt:
      "A record of the BITS College School of Systems and Technology inauguration ceremony.",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    accent: "from-blue-500 to-indigo-400",
  },
  {
    title: "Inauguration",
    date: "January 02, 2021",
    excerpt:
      "A celebration of the institution's inauguration and early milestone in its academic journey.",
    image:
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=1200&q=80",
    accent: "from-emerald-600 to-teal-400",
  },
  {
    title: "BITS College Introduction",
    date: "October 04, 2020",
    excerpt:
      "The founding overview: a private higher learning institution focused on advanced scientific knowledge through teaching and research.",
    image:
      "https://images.unsplash.com/photo-1529496414171-1f71f79e3d6f?auto=format&fit=crop&w=1200&q=80",
    accent: "from-neutral-600 to-emerald-400",
  },
];

const menuGroups = [
  {
    label: "About",
    items: ["Who We Are", "Facilities", "Partners and Clients"],
  },
  {
    label: "Academics",
    items: ["Faculty", "Undergraduate Programs", "Graduate Programs", "Research"],
  },
  {
    label: "Admissions",
    items: ["Undergraduate Admission", "Graduate Admission", "Scholarship & Aid"],
  },
  {
    label: "Services",
    items: ["Student Support", "Online Learning", "Library", "Professional Trainings"],
  },
];

function TopBar() {
  return (
    <div className="border-b border-emerald-950/10 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-xs text-slate-600 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <span className="inline-flex items-center gap-2 font-medium text-emerald-800">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            from collecting . . . to connecting . . .
          </span>
        </div>
        <div className="hidden items-center gap-5 md:flex">
          <span>info@bitscollege.edu.et</span>
          <span>+251-982-363636</span>
          <span>Yeka Sub-city, Woreda 05</span>
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-emerald-950/10 bg-white/85 backdrop-blur-2xl">
      <TopBar />
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-700 text-white shadow-lg shadow-emerald-700/20">
            <span className="text-lg font-semibold">B</span>
          </div>
          <div>
            <p className="text-sm font-semibold tracking-[0.2em] text-emerald-800 uppercase">
              BITS College
            </p>
            <p className="text-xs text-slate-500">News and Events</p>
          </div>
        </div>

        <nav className="hidden items-center gap-1 lg:flex">
          {menuGroups.map((group) => (
            <div key={group.label} className="group relative px-3 py-2 text-sm font-medium text-slate-700">
              <button className="inline-flex items-center gap-1 rounded-full px-3 py-2 transition hover:bg-emerald-50 hover:text-emerald-800">
                {group.label}
                <ChevronDown className="h-4 w-4 opacity-60" />
              </button>
              <div className="invisible absolute left-1/2 top-full z-50 mt-2 w-64 -translate-x-1/2 rounded-3xl border border-slate-200 bg-white p-3 opacity-0 shadow-2xl shadow-slate-900/10 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                <div className="grid gap-1">
                  {group.items.map((item) => (
                    <a key={item} href="#" className="rounded-2xl px-3 py-2 text-sm text-slate-600 transition hover:bg-emerald-50 hover:text-emerald-800">
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
          <a
            href="#"
            className="ml-2 inline-flex items-center gap-2 rounded-full bg-emerald-700 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-emerald-700/20 transition hover:-translate-y-0.5 hover:bg-emerald-800"
          >
            Apply Now
            <ArrowRight className="h-4 w-4" />
          </a>
        </nav>

        <button className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 text-slate-700 lg:hidden">
          <Menu className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f7faf8]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.12),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(20,184,166,0.08),_transparent_40%)]" />
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-medium text-emerald-800 shadow-sm">
            <CalendarDays className="h-4 w-4" />
            Archive of institutional announcements
          </div>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            News and Events
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            A visually modernized version of the original archive layout, preserving the structure, spacing logic, and green institutional palette while adding motion, depth, and improved readability.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function FeaturedCard() {
  const item = newsItems[0];
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55 }}
      className="overflow-hidden rounded-[2rem] border border-emerald-950/10 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.08)]"
    >
      <div className="grid gap-0 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="relative min-h-[320px] overflow-hidden">
          <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
          <div className={`absolute inset-0 bg-gradient-to-tr ${item.accent} opacity-20`} />
        </div>
        <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-800">
            Featured update
          </div>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">{item.title}</h2>
          <div className="mt-4 flex items-center gap-2 text-sm text-slate-500">
            <Clock3 className="h-4 w-4" />
            {item.date}
          </div>
          <p className="mt-5 text-base leading-7 text-slate-600">{item.excerpt}</p>
          <div className="mt-8 flex items-center gap-3">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-700 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-emerald-800"
            >
              Read More
              <ArrowRight className="h-4 w-4" />
            </a>
            <span className="text-sm text-slate-500">Updated archive entry</span>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function NewsCard({ item, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.45, delay: (index % 4) * 0.03 }}
      whileHover={{ y: -6 }}
      className="group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-[0_18px_45px_rgba(15,23,42,0.10)]"
    >
      <div className="relative h-52 overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
        <div className={`absolute inset-0 bg-gradient-to-tr ${item.accent} opacity-15`} />
        <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700 backdrop-blur">
          News item
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 text-sm text-slate-500">
          <CalendarDays className="h-4 w-4" />
          {item.date}
        </div>
        <h3 className="mt-3 text-xl font-semibold tracking-tight text-slate-900">{item.title}</h3>
        <p className="mt-3 line-clamp-4 text-sm leading-6 text-slate-600">{item.excerpt}</p>
        <div className="mt-5 flex items-center justify-between">
          <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 transition group-hover:text-emerald-800">
            Read More
            <ArrowRight className="h-4 w-4" />
          </a>
          <div className="h-2 w-2 rounded-full bg-emerald-500" />
        </div>
      </div>
    </motion.article>
  );
}

function Footer() {
  return (
    <footer className="border-t border-emerald-950/10 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-700 text-white">
                <span className="text-lg font-semibold">B</span>
              </div>
              <div>
                <p className="text-sm font-semibold tracking-[0.2em] text-emerald-800 uppercase">
                  BITS College
                </p>
                <p className="text-sm text-slate-500">from collecting . . . to connecting . . .</p>
              </div>
            </div>
            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600">
              This recreation keeps the archive's institutional structure intact while refining hierarchy, spacing, and interaction design.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-900">Contact Info</h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li>info@bitscollege.edu.et</li>
              <li>+251-982-363636</li>
              <li>Yeka Sub-city, Woreda 05, next to Yeka Park</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-900">Quick Link</h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li>Tuition</li>
              <li>Undergraduate Program Admission</li>
              <li>Graduate Program Admission</li>
              <li>Undergraduate Accreditation</li>
              <li>Graduate Accreditation</li>
            </ul>
            <div className="mt-6 flex items-center gap-3 text-slate-500">
              <Facebook className="h-5 w-5" />
              <Twitter className="h-5 w-5" />
              <Instagram className="h-5 w-5" />
              <Youtube className="h-5 w-5" />
              <Linkedin className="h-5 w-5" />
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-slate-200 pt-6 text-sm text-slate-500">
          Copyright © 2026 BITS College
        </div>
      </div>
    </footer>
  );
}

export default function BitsCollegeNewsPage() {
  return (
    <div className="min-h-screen bg-[#f7faf8] text-slate-900">
      <Header />
      <Hero />

      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-800">Archive</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">Recent campus stories</h2>
          </div>
          <div className="hidden items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-500 shadow-sm md:flex">
            <Search className="h-4 w-4" />
            Search stories
          </div>
        </div>

        <div className="grid gap-8">
          <FeaturedCard />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {newsItems.slice(1).map((item, index) => (
              <NewsCard key={`${item.title}-${item.date}`} item={item} index={index} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

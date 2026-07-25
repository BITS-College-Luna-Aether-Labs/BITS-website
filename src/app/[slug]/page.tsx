/** Dynamic page router — maps slugs to content components via PAGE_TITLES and category arrays */
import { notFound } from "next/navigation";
import { PageShell } from "@/components/layout/PageShell";
import { GraduateProgramContent } from "@/components/academics/GraduateProgramContent";
import { ResearchContent } from "@/components/academics/ResearchContent";
import { SoftwareEngineeringContent } from "@/components/academics/SoftwareEngineeringContent";
import { UndergradAdmissionContent } from "@/components/admissions/UndergradAdmissionContent";
import { GraduateAdmissionContent } from "@/components/admissions/GraduateAdmissionContent";
import { ScholarshipAidContent } from "@/components/admissions/ScholarshipAidContent";
import { TuitionContent } from "@/components/admissions/TuitionContent";
import { ShortTrainingsContent } from "@/components/services/ShortTrainingsContent";
import { LibraryContent } from "@/components/services/LibraryContent";
import { InaugurationContent } from "@/components/news/InaugurationContent";
import { StudentAppreciationNightContent } from "@/components/news/StudentAppreciationNightContent";
import { WorkshopContent } from "@/components/news/WorkshopContent";
import { CollegeDayContent } from "@/components/news/CollegeDayContent";
import { BootcampContent } from "@/components/news/BootcampContent";
import { ScholarshipRecipientsContent } from "@/components/news/ScholarshipRecipientsContent";

const PAGE_TITLES: Record<string, { title: string; description: string }> = {
  library: {
    title: "Library Services",
    description: "BITS College library system offering physical and digital resources to enhance teaching, learning, and research.",
  },
  "graduate-program": {
    title: "Graduate Programs",
    description: "Graduate programs including Information Technology Management.",
  },
  research: {
    title: "Research",
    description: "Research initiatives at BITS College.",
  },
  "undergrad-admission": {
    title: "Undergraduate Admission",
    description: "Admission requirements and process for undergraduate applicants.",
  },
  "graduate-admission": {
    title: "Graduate Admission",
    description: "Admission requirements and process for graduate applicants.",
  },
  "scholarship-aid": {
    title: "Scholarship & Aid",
    description: "Scholarship opportunities and financial aid information.",
  },
  tuition: {
    title: "Tuition",
    description: "Tuition and fee information.",
  },
  "short-trainings": {
    title: "Professional Trainings",
    description: "Short-term professional training programs.",
  },
  "software-engineering": {
    title: "Software Engineering",
    description: "Undergraduate program in Software Engineering.",
  },
  inauguration: {
    title: "BITS College Inauguration",
    description: "BITS College celebrated its inauguration on January 02, 2021.",
  },
  "student-appreciation-night": {
    title: "Student Appreciation Night",
    description:
      "BITS College hosted a Student Appreciation Night on Friday, December 12, 2021, to honor the accomplishments and contributions of its postgraduate students.",
  },
  workshop: {
    title: "Workshop",
    description:
      "BITS College hosted a workshop on preparing for the tech industry through higher education.",
  },
  "college-day": {
    title: "BITS College Day",
    description: "BITS College celebrated its College Day with demonstrations, discussions, and games.",
  },
  bootcamp: {
    title: "Summer Bootcamp",
    description: "Bootcamp program designed to help trainees gain practical knowledge on industry standards, best practices, tools and technologies.",
  },
  "scholarship-recipients": {
    title: "Merit Based Scholarship Recipients 2023/24",
    description: "BITS College awarded Merit-based Scholarships to three outstanding students.",
  },
};

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return Object.keys(PAGE_TITLES).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const page = PAGE_TITLES[slug];
  if (!page) return {};
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: `/${slug}` },
  };
}

/** Page-group slugs used for content routing below */
const ACADEMICS_PAGES = ["graduate-program", "research"];
const ADMISSIONS_PAGES = ["undergrad-admission", "graduate-admission", "scholarship-aid", "tuition"];
const SERVICES_PAGES = ["short-trainings"];

export default async function DynamicPage({ params }: Props) {
  const { slug } = await params;
  const page = PAGE_TITLES[slug];
  if (!page) notFound();

  if (ACADEMICS_PAGES.includes(slug)) {
    return (
      <>
        {slug === "graduate-program" && <GraduateProgramContent />}
        {slug === "research" && <ResearchContent />}
      </>
    );
  }

  if (ADMISSIONS_PAGES.includes(slug)) {
    return (
      <>
        {slug === "undergrad-admission" && <UndergradAdmissionContent />}
        {slug === "graduate-admission" && <GraduateAdmissionContent />}
        {slug === "scholarship-aid" && <ScholarshipAidContent />}
        {slug === "tuition" && <TuitionContent />}
      </>
    );
  }

  if (SERVICES_PAGES.includes(slug)) {
    return <ShortTrainingsContent />;
  }

  if (slug === "library") {
    return <LibraryContent />;
  }

  if (slug === "software-engineering") {
    return <SoftwareEngineeringContent />;
  }

  if (slug === "inauguration") {
    return <InaugurationContent />;
  }

  if (slug === "student-appreciation-night") {
    return <StudentAppreciationNightContent />;
  }

  if (slug === "workshop") {
    return <WorkshopContent />;
  }

  if (slug === "college-day") {
    return <CollegeDayContent />;
  }

  if (slug === "bootcamp") {
    return <BootcampContent />;
  }

  if (slug === "scholarship-recipients") {
    return <ScholarshipRecipientsContent />;
  }

  return (
    <PageShell title={page.title} description={page.description}>
      <p className="text-bits-muted dark:text-gray-400">
        This page route is scaffolded for navigation fidelity.
      </p>
    </PageShell>
  );
}

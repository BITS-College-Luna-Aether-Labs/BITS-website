import { notFound } from "next/navigation";
import { PageShell } from "@/components/layout/PageShell";
import { WhoWeAreContent } from "@/components/about/WhoWeAreContent";
import { FacilitiesContent } from "@/components/about/FacilitiesContent";
import { PartnersAndClientsContent } from "@/components/about/PartnersAndClientsContent";
import { FacultyContent } from "@/components/academics/FacultyContent";
import { UndergraduateProgramContent } from "@/components/academics/UndergraduateProgramContent";
import { GraduateProgramContent } from "@/components/academics/GraduateProgramContent";
import { ResearchContent } from "@/components/academics/ResearchContent";
import { UndergradAdmissionContent } from "@/components/admissions/UndergradAdmissionContent";
import { GraduateAdmissionContent } from "@/components/admissions/GraduateAdmissionContent";
import { ScholarshipAidContent } from "@/components/admissions/ScholarshipAidContent";
import { StudentSupportContent } from "@/components/services/StudentSupportContent";
import { ShortTrainingsContent } from "@/components/services/ShortTrainingsContent";

const PAGE_TITLES: Record<string, { title: string; description: string }> = {
  "who-we-are": {
    title: "Who We Are",
    description: "Learn about BITS College — our mission, vision, and community.",
  },
  facilities: {
    title: "Facilities",
    description: "Explore our state-of-the-art campus facilities and learning spaces.",
  },
  "partners-and-clients": {
    title: "Partners and Clients",
    description: "Our industry partners and organizational clients.",
  },
  faculty: {
    title: "Faculty",
    description: "Meet our talented and committed academic faculty.",
  },
  "undergraduate-program": {
    title: "Undergraduate Programs",
    description: "Undergraduate programs in software engineering and IT systems.",
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
  "student-support": {
    title: "Student Support",
    description: "Support services available to BITS students.",
  },
  "short-trainings": {
    title: "Professional Trainings",
    description: "Short-term professional training programs.",
  },
  "college-news": {
    title: "News & Events",
    description: "Latest news and upcoming events at BITS College.",
  },
  "software-engineering": {
    title: "Software Engineering",
    description: "Undergraduate program in Software Engineering.",
  },
  "information-technology-and-systems": {
    title: "Information Technology and Systems",
    description: "Undergraduate program in Information Technology and Systems.",
  },
  tuition: {
    title: "Tuition",
    description: "Tuition and fee information.",
  },
  "undergraduate-accreditation": {
    title: "Undergraduate Accreditation",
    description: "Undergraduate program accreditation details.",
  },
  "graduate-accreditation": {
    title: "Graduate Accreditation",
    description: "Graduate program accreditation details.",
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
  return { title: page.title, description: page.description };
}

const ABOUT_PAGES = ["who-we-are", "facilities", "partners-and-clients"];
const ACADEMICS_PAGES = ["faculty", "undergraduate-program", "graduate-program", "research"];
const ADMISSIONS_PAGES = ["undergrad-admission", "graduate-admission", "scholarship-aid"];
const SERVICES_PAGES = ["student-support", "short-trainings"];

export default async function DynamicPage({ params }: Props) {
  const { slug } = await params;
  const page = PAGE_TITLES[slug];
  if (!page) notFound();

  if (ABOUT_PAGES.includes(slug)) {
    return (
      <>
        {slug === "who-we-are" && <WhoWeAreContent />}
        {slug === "facilities" && <FacilitiesContent />}
        {slug === "partners-and-clients" && <PartnersAndClientsContent />}
      </>
    );
  }

  if (ACADEMICS_PAGES.includes(slug)) {
    return (
      <>
        {slug === "faculty" && <FacultyContent />}
        {slug === "undergraduate-program" && <UndergraduateProgramContent />}
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
      </>
    );
  }

  if (SERVICES_PAGES.includes(slug)) {
    return (
      <>
        {slug === "student-support" && <StudentSupportContent />}
        {slug === "short-trainings" && <ShortTrainingsContent />}
      </>
    );
  }

  return (
    <PageShell title={page.title} description={page.description}>
      <p className="text-bits-muted dark:text-gray-400">
        This page route is scaffolded for navigation fidelity. Full page content
        replication from the live site can be added using the reference screenshots
        in <code className="text-sm">public/sample image</code>.
      </p>
    </PageShell>
  );
}

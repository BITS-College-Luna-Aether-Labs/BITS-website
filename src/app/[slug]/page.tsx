import { notFound } from "next/navigation";
import { PageShell } from "@/components/layout/PageShell";

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

export default async function DynamicPage({ params }: Props) {
  const { slug } = await params;
  const page = PAGE_TITLES[slug];
  if (!page) notFound();

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

/** Nav tree, footer quick-links, and external social media URLs */
type NavItem = {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
};

export const APPLY_URL = "https://applications.bitscollege.edu.et";

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    children: [
      { label: "Who We Are", href: "/who-we-are" },
      { label: "Facilities", href: "/facilities" },
      { label: "Partners and Clients", href: "/partners-and-clients" },
    ],
  },
  {
    label: "Academics",
    children: [
      { label: "Faculty", href: "/faculty" },
      { label: "Undergraduate Programs", href: "/undergraduate-program" },
      { label: "Graduate Programs", href: "/graduate-program" },
      { label: "Research", href: "/research" },
    ],
  },
  {
    label: "Admissions",
    children: [
      { label: "Undergraduate Admission", href: "/undergrad-admission" },
      { label: "Graduate Admission", href: "/graduate-admission" },
      { label: "Scholarship & Aid", href: "/scholarship-aid" },
    ],
  },
  {
    label: "Services",
    children: [
      { label: "Student Support", href: "/student-support" },
      { label: "Online Learning", href: "https://online.bitscollege.edu.et/" },
      {
        label: "Library",
        href: "https://intranet.bitscollege.edu.et/library/",
      },
      { label: "Professional Trainings", href: "/short-trainings" },
    ],
  },
  { label: "News & Events", href: "/college-news" },
];

export const FOOTER_QUICK_LINKS = [
  { label: "Tuition", href: "/tuition" },
  {
    label: "Undergraduate Program Admission",
    href: "/undergrad-admission",
  },
  { label: "Graduate Program Admission", href: "/graduate-admission" },
  {
    label: "Undergraduate Accreditation",
    href: "/who-we-are?section=accreditation",
  },
  { label: "Graduate Accreditation", href: "/who-we-are?section=accreditation" },
];

export const SOCIAL_LINKS = [
  { label: "Facebook", href: "https://web.facebook.com/bitsethiopia", icon: "facebook" },
  { label: "Twitter", href: "https://x.com/bitsethiopia", icon: "twitter" },
  { label: "Instagram", href: "https://www.instagram.com/bitscollege/", icon: "instagram" },
  { label: "YouTube", href: "https://www.youtube.com/@bitscollege2230", icon: "youtube" },
];

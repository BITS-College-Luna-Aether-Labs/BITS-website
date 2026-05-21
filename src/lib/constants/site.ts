export const SITE = {
  name: "BITS College",
  tagline: "School of Systems and Technology",
  description:
    "BITS College offers well-designed academic programs in software engineering and IT Management with world-class facilities.",
  url: "https://www.bitscollege.edu.et",
  phone: "+251-982-363636",
  email: "info@bitscollege.edu.et",
  address: "Yeka Sub-City, Woreda 05, Next To Yeka Park",
  copyright: `Copyright © ${new Date().getFullYear()} BITS College`,
} as const;

export const WHY_BITS_CARDS = [
  {
    title: "High Quality Academic Programs",
    icon: "book",
  },
  {
    title: "Qualified & Committed Staff",
    icon: "graduation",
  },
  {
    title: "State-of-the-Art Infrastructure",
    icon: "building",
  },
  {
    title: "Student-centered Teaching and Learning",
    icon: "community",
  },
] as const;

export const PROGRAM_CARDS = [
  {
    title: "INFORMATION TECHNOLOGY MANAGEMENT",
    subtitle: "Graduate Program",
    href: "/graduate-program",
    fullWidth: true,
  },
  {
    title: "SOFTWARE ENGINEERING",
    subtitle: "Undergraduate Program",
    href: "/software-engineering",
    fullWidth: false,
  },
  {
    title: "INFORMATION TECHNOLOGY AND SYSTEMS",
    subtitle: "Undergraduate Program",
    href: "/information-technology-and-systems",
    fullWidth: false,
  },
] as const;

export const CONTACT_CARDS = [
  {
    type: "phone" as const,
    value: SITE.phone,
    label: "Get Support",
    href: `tel:${SITE.phone.replace(/[^+\d]/g, "")}`,
  },
  {
    type: "location" as const,
    value: SITE.address,
    label: "Visit Us",
    href: undefined,
    featured: true,
  },
  {
    type: "email" as const,
    value: SITE.email,
    label: "Get Support",
    href: `mailto:${SITE.email}`,
  },
];

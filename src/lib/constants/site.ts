/** Site-wide metadata, contact info, and structured content data (cards, programs, contact) */
export const SITE = {
  name: "BITS COLLEGE",
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
    href: "/undergraduate-program",
  },
  {
    title: "Qualified & Committed Staff",
    icon: "graduation",
    href: "/faculty",
  },
  {
    title: "State-of-the-Art Infrastructure",
    icon: "building",
    href: "/facilities",
  },
  {
    title: "Student-centered Teaching and Learning",
    icon: "community",
    href: "/student-support",
  },
] as const;

export const PROGRAM_CARDS = [
  {
    title: "INFORMATION TECHNOLOGY MANAGEMENT",
    subtitle: "Graduate Program",
    href: "/graduate-program",
    fullWidth: true,
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
    href: "https://maps.app.goo.gl/qrWmP4XnyXEYtK6g6",
    featured: true,
  },
  {
    type: "email" as const,
    value: SITE.email,
    label: "Get Support",
    href: `mailto:${SITE.email}`,
  },
];

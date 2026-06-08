import type { Metadata } from "next";
import { Open_Sans, Roboto_Slab, Playfair_Display } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MotionProvider } from "@/components/providers/MotionProvider";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { THEME_SCRIPT } from "@/lib/theme";
import { SITE } from "@/lib/constants/site";
import { SOCIAL_LINKS } from "@/lib/constants/navigation";
import "./globals.css";

/** Google Fonts loaded as CSS variables for Tailwind font-family tokens */
const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-open-sans",
  display: "swap",
});

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-roboto-slab",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name}: ${SITE.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.url,
    siteName: SITE.name,
    title: SITE.name,
    description: SITE.description,
    images: [
      {
        url: "/images/About-Facilities/College%201.webp",
        width: 1200,
        height: 630,
        alt: "BITS College campus",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.name,
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: SITE.name,
              alternateName: "BITS College",
              description: SITE.description,
              url: SITE.url,
              logo: `${SITE.url}/images/logo.png`,
              telephone: SITE.phone,
              email: SITE.email,
              address: {
                "@type": "PostalAddress",
                streetAddress: "Yeka Sub-City, Woreda 05",
                addressLocality: "Addis Ababa",
                addressCountry: "ET",
              },
              sameAs: SOCIAL_LINKS.map((l) => l.href),
              knowsAbout: [
                {
                  "@type": "Course",
                  name: "Master of Science in Information Technology Management",
                  description: "Graduate program focusing on IT management, strategy, and leadership.",
                  provider: { "@type": "EducationalOrganization", name: SITE.name },
                  url: `${SITE.url}/graduate-program`,
                },
                {
                  "@type": "Course",
                  name: "Bachelor of Science in Software Engineering",
                  description: "Undergraduate program covering software development, design, and engineering principles.",
                  provider: { "@type": "EducationalOrganization", name: SITE.name },
                  url: `${SITE.url}/software-engineering`,
                },
                {
                  "@type": "Course",
                  name: "Bachelor of Science in Information Technology and Systems",
                  description: "Undergraduate program focused on IT infrastructure, systems analysis, and network management.",
                  provider: { "@type": "EducationalOrganization", name: SITE.name },
                  url: `${SITE.url}/information-technology-and-systems`,
                },
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${openSans.variable} ${robotoSlab.variable} ${playfairDisplay.variable} flex min-h-screen flex-col font-sans`}
      >
        <ThemeProvider>
          <MotionProvider>
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-bits-green focus:px-4 focus:py-2 focus:text-white"
            >
              Skip to main content
            </a>
            <Header />
            <main id="main-content" className="flex-1">{children}</main>
            <Footer />
          </MotionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

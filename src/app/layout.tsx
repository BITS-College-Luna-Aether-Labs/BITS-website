import type { Metadata } from "next";
import { Open_Sans, Roboto_Slab } from "next/font/google";
import { cookies } from "next/headers";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MotionProvider } from "@/components/providers/MotionProvider";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { THEME_COOKIE, parseTheme } from "@/lib/theme";
import { SITE } from "@/lib/constants/site";
import "./globals.css";

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

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} - ${SITE.tagline}`,
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
        url: "/images/hero-student.webp",
        width: 550,
        height: 1088,
        alt: "BITS College campus life",
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
  alternates: {
    canonical: "/",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const themeCookie = cookieStore.get(THEME_COOKIE)?.value;
  const initialTheme = parseTheme(themeCookie);

  return (
    <html lang="en" className="light" suppressHydrationWarning>
      <body
        className={`${openSans.variable} ${robotoSlab.variable} font-sans`}
      >
        <ThemeProvider initialTheme={initialTheme}>
          <MotionProvider>
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-bits-green focus:px-4 focus:py-2 focus:text-white"
            >
              Skip to main content
            </a>
            <Header />
            <main id="main-content">{children}</main>
            <Footer />
          </MotionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

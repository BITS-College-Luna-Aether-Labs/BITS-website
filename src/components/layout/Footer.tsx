import Image from "next/image";
import Link from "next/link";
import {
  FOOTER_QUICK_LINKS,
  SOCIAL_LINKS,
} from "@/lib/constants/navigation";
import { SITE } from "@/lib/constants/site";
import { LocationIcon, MailIcon, PhoneIcon } from "@/components/icons/FeatureIcons";

function SocialIcon({ icon }: { icon: string }) {
  const paths: Record<string, React.ReactNode> = {
    facebook: (
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    ),
    twitter: (
      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
    ),
    instagram: (
      <>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01" />
      </>
    ),
    youtube: (
      <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19.13C5.12 19.56 12 19.56 12 19.56s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.43zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
    ),
  };

  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      {paths[icon]}
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-bits-footer text-bits-footer-text transition-colors duration-300 dark:bg-black dark:ring-1 dark:ring-green-950" role="contentinfo">
      <div className="site-container py-10 md:py-12">
        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          <div>
            <Image
              src="/images/logo.png"
              alt=""
              width={240}
              height={78}
              className="mb-4 h-auto w-[220px] brightness-0 invert transition-opacity duration-300 hover:opacity-80"
            />
            <p className="text-sm italic text-bits-footer-text/90">
              from collecting . . . to connecting . . .
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-lg font-semibold text-white">Contact Info</h2>
            <div className="mb-3 h-0.5 w-8 bg-bits-green" aria-hidden="true" />
            <ul className="space-y-3 text-[15px]">
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="footer-link inline-flex items-start gap-2 text-bits-green hover:opacity-80"
                >
                  <MailIcon className="mt-0.5 h-4 w-4 shrink-0" />
                  {SITE.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${SITE.phone.replace(/[^+\d]/g, "")}`}
                  className="footer-link inline-flex items-start gap-2 hover:opacity-80"
                >
                  <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0" />
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a
                  href="https://maps.app.goo.gl/qrWmP4XnyXEYtK6g6"
                  className="footer-link inline-flex items-start gap-2 hover:opacity-80"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LocationIcon className="mt-0.5 h-4 w-4 shrink-0" />
                  {SITE.address}
                </a>
              </li>
            </ul>
            <div className="mt-5 flex gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="footer-social flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 ease-out hover:bg-white hover:text-bits-green hover:shadow-lg hover:-translate-y-1 active:translate-y-0"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SocialIcon icon={social.icon} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h2 className="mb-3 text-lg font-semibold text-white">Quick Link</h2>
            <div className="mb-3 h-0.5 w-8 bg-bits-green" aria-hidden="true" />
            <ul className="space-y-2 text-[15px]">
              {FOOTER_QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="footer-link inline-block transition-all duration-200 ease-out hover:text-bits-green hover:translate-x-1"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center">
        <p className="text-xs text-bits-footer-text/80">{SITE.copyright}</p>
      </div>
    </footer>
  );
}

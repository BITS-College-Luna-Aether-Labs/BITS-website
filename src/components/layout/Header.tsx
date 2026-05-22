"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useInteractionMotion } from "@/hooks/useInteractionMotion";
import { useCallback, useEffect, useState } from "react";
import { APPLY_URL, NAV_ITEMS } from "@/lib/constants/navigation";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { SPRING_GENTLE, SPRING_STIFF, EASE_PREMIUM } from "@/lib/motion-presets";

function ChevronDown({ open }: { open?: boolean }) {
  return (
    <svg
      className={`ml-0.5 h-2.5 w-2.5 shrink-0 opacity-70 transition-transform duration-200 ease-out ${open ? "rotate-180" : ""}`}
      viewBox="0 0 10 6"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

function NavLink({
  href,
  children,
  isActive,
}: {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
}) {
  const shouldReduce = useReducedMotion();

  return (
    <div className="relative">
      <Link
        href={href}
        className={`nav-link whitespace-nowrap ${isActive ? "nav-link-active" : ""}`}
        aria-current={isActive ? "page" : undefined}
      >
        {children}
      </Link>
      <motion.div
        className="absolute bottom-[-6px] left-0 h-0.5 bg-bits-green"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={isActive && !shouldReduce ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
        whileHover={!shouldReduce ? { scaleX: 1, opacity: 1 } : {}}
        transition={{ duration: 0.25, ease: "easeOut" }}
        style={{ originX: 0 }}
      />
    </div>
  );
}

function NavDropdown({
  label,
  items,
}: {
  label: string;
  items: { label: string; href: string }[];
}) {
  const [open, setOpen] = useState(false);
  const shouldReduce = useReducedMotion();
  const { hoverScaleSm } = useInteractionMotion();

  return (
    <li
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <motion.button
        type="button"
        className="nav-link inline-flex items-center gap-0.5 whitespace-nowrap"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((v) => !v)}
        whileHover={hoverScaleSm}
        transition={{ duration: 0.2 }}
      >
        {label}
        <ChevronDown open={open} />
      </motion.button>
      <AnimatePresence>
        {open && (
          <motion.ul
            className="dropdown-panel"
            {...(shouldReduce
              ? {}
              : {
                  initial: { opacity: 0, y: 8, scale: 0.97 },
                  animate: { opacity: 1, y: 0, scale: 1 },
                  exit: { opacity: 0, y: 8, scale: 0.97 },
                })}
            transition={{ ...SPRING_GENTLE, ease: EASE_PREMIUM }}
            role="menu"
          >
            {items.map((child, i) => (
              <motion.li
                key={child.href}
                role="none"
                {...(shouldReduce
                  ? {}
                  : {
                      initial: { opacity: 0, x: -8 },
                      animate: { opacity: 1, x: 0 },
                      transition: { delay: i * 0.035, duration: 0.2 },
                    })}
              >
                <Link
                  href={child.href}
                  className="block px-5 py-2.5 text-sm text-bits-muted transition-[color,transform] duration-200 ease-out hover:translate-x-0.5 hover:text-bits-green dark:text-gray-200 dark:hover:text-bits-green"
                  role="menuitem"
                  onClick={() => setOpen(false)}
                >
                  {child.label}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </li>
  );
}

const MotionLink = motion.create(Link);

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const shouldReduce = useReducedMotion();
  const { hoverScaleSm, tapSm } = useInteractionMotion();

  const onScroll = useCallback(() => {
    setScrolled(window.scrollY > 8);
  }, []);

  useEffect(() => {
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 z-50 w-full border-b transition-all duration-500 ease-out ${
        scrolled
          ? "border-gray-100/80 bg-[var(--bits-page)] shadow-sm backdrop-blur-sm dark:border-gray-800"
          : "border-transparent bg-[var(--bits-page)]"
      }`}
    >
      <div className="site-container">
        <div className="hidden h-[72px] items-center gap-4 md:flex lg:h-[76px]">
          <MotionLink
            href="/"
            className="shrink-0"
            aria-label="BITS College home"
            whileHover={hoverScaleSm}
            transition={{ duration: 0.2 }}
          >
            <Image
              src="/images/logo.png"
              alt="BITS College logo"
              width={160}
              height={52}
              priority
              className="h-auto w-[130px] transition-opacity duration-200 hover:opacity-85 lg:w-[150px]"
            />
          </MotionLink>

          <nav
            className="flex flex-1 items-center justify-center"
            aria-label="Primary navigation"
          >
            <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 lg:gap-x-6">
              {NAV_ITEMS.map((item, index) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : Boolean(item.href && pathname.startsWith(item.href));

                if (item.children) {
                  return (
                    <NavDropdown
                      key={item.label}
                      label={item.label}
                      items={item.children}
                    />
                  );
                }

                return (
                  <motion.li
                    key={item.label}
                    {...(shouldReduce
                      ? {}
                      : {
                          initial: { opacity: 0, y: -8 },
                          animate: { opacity: 1, y: 0 },
                          transition: { delay: index * 0.05, ...SPRING_GENTLE },
                        })}
                  >
                    <NavLink href={item.href ?? "/"} isActive={isActive}>
                      {item.label}
                    </NavLink>
                  </motion.li>
                );
              })}
            </ul>
          </nav>

          <div className="flex shrink-0 items-center gap-3">
            <ThemeToggle />
            <motion.a
              href={APPLY_URL}
              className="btn-outline-green whitespace-nowrap text-sm"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={shouldReduce ? undefined : { scale: 1.03 }}
              whileTap={shouldReduce ? undefined : { scale: 0.97 }}
            >
              Apply Now
            </motion.a>
          </div>
        </div>

        <div className="flex h-[64px] items-center justify-between gap-3 md:hidden">
          <Link href="/" className="shrink-0" aria-label="BITS College home">
            <Image
              src="/images/logo.png"
              alt="BITS College logo"
              width={140}
              height={46}
              priority
              className="h-auto w-[110px]"
            />
          </Link>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a
              href={APPLY_URL}
              className="btn-outline-green text-xs px-3 py-1.5"
              target="_blank"
              rel="noopener noreferrer"
            >
              Apply Now
            </a>
            <motion.button
              type="button"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-gray-200 transition-colors duration-200 hover:border-bits-green dark:border-gray-700 dark:hover:border-bits-green"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen((v) => !v)}
              whileTap={tapSm}
              whileHover={shouldReduce ? undefined : { scale: 1.05 }}
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {mobileOpen ? (
                  <path d="M6 6l12 12M18 6L6 18" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </motion.button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            className="border-t border-gray-100 bg-[var(--bits-page)] md:hidden dark:border-gray-800"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ ...SPRING_GENTLE, ease: EASE_PREMIUM }}
          >
            <nav className="site-container max-h-[70vh] overflow-y-auto py-4" aria-label="Mobile navigation">
              <ul className="space-y-1">
                {NAV_ITEMS.map((item) => (
                  <motion.li
                    key={item.label}
                    initial={shouldReduce ? {} : { opacity: 0, x: -12 }}
                    animate={shouldReduce ? {} : { opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.href ? (
                      <Link
                        href={item.href}
                        className={`block rounded-lg px-3 py-2.5 text-base ${
                          pathname === item.href ? "nav-link-active font-medium" : "nav-link"
                        }`}
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <span className="block px-3 py-2 text-sm font-semibold text-bits-heading">
                        {item.label}
                      </span>
                    )}
                    {item.children && (
                      <ul className="mb-2 ml-4 space-y-1">
                        {item.children.map((child, ci) => (
                          <motion.li
                            key={child.href}
                            initial={shouldReduce ? {} : { opacity: 0, x: -8 }}
                            animate={shouldReduce ? {} : { opacity: 1, x: 0 }}
                            transition={{ delay: 0.05 + ci * 0.03, duration: 0.2 }}
                          >
                            <Link
                              href={child.href}
                              className="block rounded-lg px-3 py-2 text-sm text-bits-muted hover:text-bits-green dark:text-gray-200"
                              onClick={() => setMobileOpen(false)}
                            >
                              {child.label}
                            </Link>
                          </motion.li>
                        ))}
                      </ul>
                    )}
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

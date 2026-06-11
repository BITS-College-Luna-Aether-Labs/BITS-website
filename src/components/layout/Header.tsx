/** Site header — fixed top nav with dropdowns, mobile menu, theme toggle, and scroll-aware styling */
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useInteractionMotion } from "@/hooks/useInteractionMotion";
import { useCallback, useEffect, useRef, useState } from "react";
import { APPLY_URL, NAV_ITEMS } from "@/lib/constants/navigation";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { SPRING_GENTLE, EASE_PREMIUM } from "@/lib/motion-presets";

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
        className="absolute bottom-[-6px] left-0 h-0.5 bg-black/80 dark:bg-white/70"
        initial={shouldReduce ? { opacity: isActive ? 1 : 0 } : { scaleX: 0, opacity: 0 }}
        animate={isActive
          ? { scaleX: 1, opacity: 1 }
          : shouldReduce ? { opacity: 0 } : { scaleX: 0, opacity: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        style={{ originX: 0 }}
      />
      {!shouldReduce && (
        <motion.div
          className="absolute bottom-[-6px] left-0 h-0.5 bg-bits-green/40"
          initial={{ scaleX: 0, opacity: 0 }}
          whileHover={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          style={{ originX: 0 }}
        />
      )}
    </div>
  );
}

function NavDropdown({
  label,
  items,
  isActive,
  currentPath,
}: {
  label: string;
  items: { label: string; href: string }[];
  isActive?: boolean;
  currentPath: string;
}) {
  const [open, setOpen] = useState(false);
  const shouldReduce = useReducedMotion();
  const { hoverScaleSm } = useInteractionMotion();
  const hoverTimer = useRef<number | undefined>(undefined);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLUListElement>(null);

  const close = useCallback(() => {
    setOpen(false);
    buttonRef.current?.focus();
  }, []);

  const handleMouseEnter = useCallback(() => {
    window.clearTimeout(hoverTimer.current);
    hoverTimer.current = window.setTimeout(() => setOpen(true), 80);
  }, []);

  const handleMouseLeave = useCallback(() => {
    window.clearTimeout(hoverTimer.current);
    setOpen(false);
  }, []);

  const handleButtonKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          if (!open) setOpen(true);
          requestAnimationFrame(() => {
            const links = menuRef.current?.querySelectorAll<HTMLAnchorElement>("a[role=menuitem]");
            links?.[0]?.focus();
          });
          break;
        case "ArrowUp":
          e.preventDefault();
          if (!open) setOpen(true);
          requestAnimationFrame(() => {
            const links = menuRef.current?.querySelectorAll<HTMLAnchorElement>("a[role=menuitem]");
            links?.[links.length - 1]?.focus();
          });
          break;
        case "Escape":
          e.preventDefault();
          close();
          break;
      }
    },
    [open, close]
  );

  const handleMenuKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      const links = menuRef.current?.querySelectorAll<HTMLAnchorElement>("a[role=menuitem]");
      if (!links || links.length === 0) return;

      const currentIndex = Array.from(links).findIndex((el) => el === document.activeElement);

      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          links[(currentIndex + 1) % links.length]?.focus();
          break;
        case "ArrowUp":
          e.preventDefault();
          links[(currentIndex - 1 + links.length) % links.length]?.focus();
          break;
        case "Home":
          e.preventDefault();
          links[0]?.focus();
          break;
        case "End":
          e.preventDefault();
          links[links.length - 1]?.focus();
          break;
        case "Escape":
          e.preventDefault();
          close();
          break;
      }
    },
    [close]
  );

  return (
    <li
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.button
        ref={buttonRef}
        type="button"
        className={`nav-link inline-flex items-center gap-0.5 whitespace-nowrap ${isActive ? "nav-link-active" : ""}`}
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((v) => !v)}
        onKeyDown={handleButtonKeyDown}
        whileHover={hoverScaleSm}
        transition={{ duration: 0.2 }}
      >
        {label}
        <ChevronDown open={open} />
      </motion.button>
      <motion.div
        className="absolute bottom-[-6px] left-0 h-0.5 bg-black/80 dark:bg-white/70"
        initial={shouldReduce ? { opacity: isActive ? 1 : 0 } : { scaleX: 0, opacity: 0 }}
        animate={isActive
          ? { scaleX: 1, opacity: 1 }
          : shouldReduce ? { opacity: 0 } : { scaleX: 0, opacity: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        style={{ originX: 0 }}
      />
      {!shouldReduce && (
        <motion.div
          className="absolute bottom-[-6px] left-0 h-0.5 bg-bits-green/40"
          initial={{ scaleX: 0, opacity: 0 }}
          whileHover={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          style={{ originX: 0 }}
        />
      )}
      <AnimatePresence>
        {open && (
          <motion.ul
            ref={menuRef}
            className="dropdown-panel"
            onKeyDown={handleMenuKeyDown}
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
                  className={`block px-5 py-2.5 text-sm transition-[color,transform] duration-200 ease-out hover:translate-x-0.5 hover:text-bits-green dark:hover:text-bits-green ${
                    currentPath.startsWith(child.href)
                      ? "font-medium text-bits-green"
                      : "text-bits-muted dark:text-gray-200"
                  }`}
                  role="menuitem"
                  onClick={() => setOpen(false)}
                  {...(child.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
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
  const mobileMenuRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    if (!mobileOpen) return;

    const menu = mobileMenuRef.current;
    if (!menu) return;

    const focusable = menu.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    first?.focus();

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setMobileOpen(false);
        return;
      }
      if (e.key !== "Tab") return;
      if (focusable.length === 0) return;

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 z-50 w-full border-b transition-all duration-500 ease-out ${
        scrolled
          ? "border-gray-100/80 bg-[var(--bits-page)] shadow-sm backdrop-blur-sm dark:border-green-950 dark:bg-[#010a05]"
          : "border-transparent bg-[var(--bits-page)] dark:bg-[#010a05]"
      }`}
    >
      <div className="site-container">
        <div className="hidden h-[72px] items-center gap-4 md:flex lg:h-[76px]">
          <MotionLink
            href="/"
            className="shrink-0 dark:rounded-md dark:bg-white/90 dark:p-1 dark:backdrop-blur-sm"
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
                  const childActive = item.children.some(
                    (child) => child.href && pathname.startsWith(child.href)
                  );

                  return (
                    <NavDropdown
                      key={item.label}
                      label={item.label}
                      items={item.children}
                      isActive={isActive || childActive}
                      currentPath={pathname}
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
          <Link href="/" className="shrink-0 dark:rounded-md dark:bg-white/90 dark:p-1 dark:backdrop-blur-sm" aria-label="BITS College home">
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
            ref={mobileMenuRef}
            id="mobile-menu"
            className="border-t border-gray-100 bg-[var(--bits-page)] md:hidden dark:border-green-950 dark:bg-[#010a05]"
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
                              className={`block rounded-lg px-3 py-2 text-sm ${
                                pathname.startsWith(child.href)
                                  ? "font-medium text-bits-green"
                                  : "text-bits-muted hover:text-bits-green dark:text-gray-200"
                              }`}
                              onClick={() => setMobileOpen(false)}
                              {...(child.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
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

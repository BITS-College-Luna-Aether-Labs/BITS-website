// @ts-nocheck
import React from "react";

type Partner = {
  name: string;
  label: string;
  blurb: string;
  href: string;
};

const partners: Partner[] = [
  {
    name: "MKS Addis",
    label: "mksaddis.com",
    blurb: "Industry-facing collaboration and community engagement.",
    href: "#",
  },
  {
    name: "Bunna Bank",
    label: "bunnabanksc.com",
    blurb: "Financial-sector relationship and institutional support.",
    href: "#",
  },
  {
    name: "Serianu",
    label: "serianu.com",
    blurb: "Digital security, consulting, and technology alignment.",
    href: "#",
  },
  {
    name: "British Council",
    label: "ethiopia.britishcouncil.org",
    blurb: "Academic and cultural partnership ecosystem.",
    href: "#",
  },
];

const navGroups = [
  {
    title: "About",
    items: ["Who We Are", "Facilities", "Partners and Clients"],
  },
  {
    title: "Academics",
    items: ["Faculty", "Undergraduate Programs", "Graduate Programs", "Research"],
  },
  {
    title: "Admissions",
    items: ["Undergraduate Admission", "Graduate Admission", "Scholarship & Aid"],
  },
  {
    title: "Services",
    items: ["Student Support", "Online Learning", "Library", "Professional Trainings"],
  },
];

function NavMenu() {
  return (
    <nav aria-label="Primary" className="bits-nav">
      <div className="bits-nav__brand">
        <div className="bits-mark" aria-hidden="true">
          B
        </div>
        <div>
          <p className="bits-kicker">BITS College</p>
          <p className="bits-subkicker">Partners & Clients</p>
        </div>
      </div>

      <div className="bits-nav__links">
        <a href="#">Home</a>
        {navGroups.map((group) => (
          <div className="bits-menu" key={group.title}>
            <button type="button" className="bits-menu__button">
              {group.title} <span>▾</span>
            </button>
            <div className="bits-menu__panel">
              {group.items.map((item) => (
                <a href="#" key={item}>
                  {item}
                </a>
              ))}
            </div>
          </div>
        ))}
        <a href="#">News & Events</a>
      </div>

      <a href="#" className="bits-apply">
        Apply Now
      </a>
    </nav>
  );
}

function MiniStat({ title, value }: { title: string; value: string }) {
  return (
    <div className="mini-stat">
      <div className="mini-stat__value">{value}</div>
      <div className="mini-stat__title">{title}</div>
    </div>
  );
}

export default function PartnersAndClientsPage() {
  return (
    <main className="bits-page">
      <style jsx global>{`
        :root {
          --bits-green: #1f6b3a;
          --bits-green-deep: #114c29;
          --bits-green-soft: #eaf5ee;
          --bits-text: #17301f;
          --bits-muted: #5f6f63;
          --bits-border: rgba(31, 107, 58, 0.14);
          --bits-shadow: 0 18px 50px rgba(15, 47, 24, 0.12);
        }

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          font-family:
            Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
            "Segoe UI", sans-serif;
          color: var(--bits-text);
          background:
            radial-gradient(circle at top, rgba(31, 107, 58, 0.08), transparent 36%),
            linear-gradient(180deg, #fcfdfc 0%, #f4f8f5 100%);
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .bits-page {
          min-height: 100vh;
          overflow: hidden;
        }

        .bits-shell {
          width: min(1180px, calc(100% - 32px));
          margin: 0 auto;
        }

        .bits-topbar {
          position: sticky;
          top: 0;
          z-index: 40;
          backdrop-filter: blur(18px);
          background: rgba(252, 253, 252, 0.84);
          border-bottom: 1px solid rgba(17, 76, 41, 0.08);
        }

        .bits-nav {
          width: min(1280px, calc(100% - 24px));
          margin: 0 auto;
          display: grid;
          grid-template-columns: auto 1fr auto;
          align-items: center;
          gap: 18px;
          padding: 14px 0;
        }

        .bits-nav__brand {
          display: flex;
          align-items: center;
          gap: 12px;
          min-width: max-content;
        }

        .bits-mark {
          width: 48px;
          height: 48px;
          border-radius: 16px;
          display: grid;
          place-items: center;
          color: white;
          font-weight: 800;
          letter-spacing: 0.04em;
          background: linear-gradient(135deg, var(--bits-green) 0%, #2f8b4d 100%);
          box-shadow: 0 12px 26px rgba(31, 107, 58, 0.24);
        }

        .bits-kicker {
          margin: 0;
          font-size: 0.95rem;
          font-weight: 800;
          letter-spacing: 0.06em;
          color: var(--bits-green-deep);
          text-transform: uppercase;
        }

        .bits-subkicker {
          margin: 2px 0 0;
          font-size: 0.8rem;
          color: var(--bits-muted);
        }

        .bits-nav__links {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 18px;
          flex-wrap: wrap;
          font-size: 0.95rem;
          color: #274031;
        }

        .bits-nav__links > a,
        .bits-menu__button {
          position: relative;
          padding: 10px 2px;
          font-weight: 600;
          color: inherit;
        }

        .bits-nav__links > a::after,
        .bits-menu__button::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 2px;
          width: 100%;
          height: 2px;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 220ms ease;
          background: linear-gradient(90deg, var(--bits-green), #3aa561);
        }

        .bits-nav__links > a:hover::after,
        .bits-menu:hover .bits-menu__button::after,
        .bits-menu:focus-within .bits-menu__button::after {
          transform: scaleX(1);
        }

        .bits-menu {
          position: relative;
        }

        .bits-menu__button {
          border: 0;
          background: transparent;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          cursor: pointer;
          font: inherit;
        }

        .bits-menu__panel {
          position: absolute;
          top: calc(100% + 10px);
          left: 0;
          min-width: 220px;
          padding: 10px;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.92);
          border: 1px solid var(--bits-border);
          box-shadow: var(--bits-shadow);
          opacity: 0;
          transform: translateY(10px);
          pointer-events: none;
          transition: 180ms ease;
        }

        .bits-menu:hover .bits-menu__panel,
        .bits-menu:focus-within .bits-menu__panel {
          opacity: 1;
          transform: translateY(0);
          pointer-events: auto;
        }

        .bits-menu__panel a {
          display: block;
          padding: 10px 12px;
          border-radius: 12px;
          font-size: 0.92rem;
          color: #244031;
          transition:
            background 180ms ease,
            transform 180ms ease;
        }

        .bits-menu__panel a:hover {
          background: rgba(31, 107, 58, 0.08);
          transform: translateX(4px);
        }

        .bits-apply {
          justify-self: end;
          padding: 11px 18px;
          border-radius: 999px;
          color: white;
          font-weight: 700;
          background: linear-gradient(135deg, var(--bits-green), #2f8b4d);
          box-shadow: 0 12px 24px rgba(31, 107, 58, 0.22);
          transition:
            transform 180ms ease,
            box-shadow 180ms ease;
        }

        .bits-apply:hover {
          transform: translateY(-2px);
          box-shadow: 0 18px 28px rgba(31, 107, 58, 0.28);
        }

        .hero {
          padding: 78px 0 42px;
          position: relative;
        }

        .hero::before,
        .hero::after {
          content: "";
          position: absolute;
          inset: auto;
          border-radius: 999px;
          filter: blur(10px);
          pointer-events: none;
        }

        .hero::before {
          width: 220px;
          height: 220px;
          background: rgba(31, 107, 58, 0.1);
          top: 20px;
          right: -30px;
          animation: float 10s ease-in-out infinite;
        }

        .hero::after {
          width: 160px;
          height: 160px;
          background: rgba(31, 107, 58, 0.08);
          bottom: 10px;
          left: -20px;
          animation: float 12s ease-in-out infinite reverse;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-14px);
          }
        }

        .page-title {
          margin: 0;
          font-size: clamp(2.2rem, 4vw, 4.2rem);
          line-height: 1.02;
          letter-spacing: -0.04em;
          color: var(--bits-green-deep);
        }

        .page-copy {
          max-width: 780px;
          margin: 18px 0 0;
          font-size: 1.02rem;
          line-height: 1.85;
          color: #4f6557;
        }

        .hero-grid {
          margin-top: 28px;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
        }

        .mini-stat {
          padding: 18px 18px 20px;
          border-radius: 22px;
          background: rgba(255, 255, 255, 0.82);
          border: 1px solid var(--bits-border);
          box-shadow: 0 12px 30px rgba(15, 47, 24, 0.06);
        }

        .mini-stat__value {
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--bits-green-deep);
        }

        .mini-stat__title {
          margin-top: 4px;
          color: var(--bits-muted);
          font-size: 0.95rem;
        }

        .section {
          padding: 18px 0 64px;
        }

        .section-heading {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 20px;
        }

        .section-heading h2 {
          margin: 0;
          font-size: 1.15rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--bits-green-deep);
        }

        .section-heading .line {
          flex: 1;
          height: 1px;
          background: linear-gradient(90deg, rgba(31, 107, 58, 0.34), transparent);
        }

        .partner-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
        }

        .partner-card {
          position: relative;
          overflow: hidden;
          padding: 22px;
          border-radius: 26px;
          background:
            linear-gradient(180deg, rgba(255, 255, 255, 0.98), rgba(246, 250, 247, 0.96));
          border: 1px solid rgba(31, 107, 58, 0.12);
          box-shadow: 0 16px 38px rgba(10, 41, 18, 0.08);
          transition:
            transform 200ms ease,
            box-shadow 200ms ease,
            border-color 200ms ease;
          min-height: 190px;
        }

        .partner-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 22px 52px rgba(10, 41, 18, 0.13);
          border-color: rgba(31, 107, 58, 0.24);
        }

        .partner-card::after {
          content: "";
          position: absolute;
          inset: auto -18px -28px auto;
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(31, 107, 58, 0.12), transparent 68%);
          pointer-events: none;
        }

        .partner-badge {
          width: 54px;
          height: 54px;
          border-radius: 18px;
          display: grid;
          place-items: center;
          font-weight: 800;
          color: white;
          background: linear-gradient(135deg, var(--bits-green), #45995f);
          box-shadow: 0 14px 24px rgba(31, 107, 58, 0.2);
        }

        .partner-name {
          margin: 16px 0 4px;
          font-size: 1.2rem;
          font-weight: 800;
          color: var(--bits-green-deep);
        }

        .partner-label {
          margin: 0;
          color: var(--bits-muted);
          font-weight: 600;
          font-size: 0.95rem;
        }

        .partner-blurb {
          margin: 14px 0 0;
          color: #476052;
          line-height: 1.7;
          max-width: 36ch;
        }

        .cta-strip {
          margin: 28px 0 0;
          padding: 28px;
          border-radius: 28px;
          background:
            linear-gradient(135deg, rgba(31, 107, 58, 0.95), rgba(18, 84, 44, 0.96));
          color: white;
          display: grid;
          gap: 10px;
          box-shadow: var(--bits-shadow);
        }

        .cta-strip p,
        .cta-strip h3 {
          margin: 0;
        }

        .cta-strip h3 {
          font-size: 1.35rem;
          letter-spacing: -0.02em;
        }

        .cta-strip p {
          color: rgba(255, 255, 255, 0.86);
          line-height: 1.7;
        }

        .footer {
          margin-top: 56px;
          padding: 34px 0 26px;
          border-top: 1px solid rgba(31, 107, 58, 0.12);
          background:
            linear-gradient(180deg, rgba(255, 255, 255, 0), rgba(237, 244, 239, 0.9));
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr 0.8fr;
          gap: 28px;
        }

        .footer h4 {
          margin: 0 0 14px;
          color: var(--bits-green-deep);
          font-size: 1rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .footer p,
        .footer li,
        .footer a {
          color: #516457;
          line-height: 1.8;
          font-size: 0.96rem;
        }

        .footer ul {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .footer a:hover {
          color: var(--bits-green-deep);
          text-decoration: underline;
          text-underline-offset: 3px;
        }

        .socials {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .socials a {
          padding: 9px 12px;
          border-radius: 999px;
          background: white;
          border: 1px solid rgba(31, 107, 58, 0.12);
        }

        .copyright {
          margin-top: 22px;
          padding-top: 16px;
          border-top: 1px solid rgba(31, 107, 58, 0.1);
          color: #6a7a6f;
          font-size: 0.94rem;
        }

        .fade-up {
          animation: rise 750ms cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        @keyframes rise {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 1024px) {
          .bits-nav {
            grid-template-columns: 1fr;
            justify-items: start;
          }

          .bits-apply {
            justify-self: start;
          }

          .hero-grid,
          .footer-grid {
            grid-template-columns: 1fr;
          }

          .partner-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 720px) {
          .bits-nav__links {
            justify-content: flex-start;
            gap: 12px;
            font-size: 0.9rem;
          }

          .hero {
            padding-top: 56px;
          }

          .section {
            padding-bottom: 46px;
          }

          .bits-shell {
            width: min(1180px, calc(100% - 24px));
          }
        }
      `}</style>

      <div className="bits-topbar">
        <NavMenu />
      </div>

      <div className="bits-shell">
        <section className="hero fade-up" aria-labelledby="partners-title">
          <h1 id="partners-title" className="page-title">
            Partners & Clients
          </h1>
          <p className="page-copy">
            BITS College presents its collaboration ecosystem through a compact
            institutional layout: a single heading, a partner showcase area, and
            the same green-forward brand identity used across the rest of the
            site.
          </p>

          <div className="hero-grid" aria-label="Highlights">
            <MiniStat title="Partnerships" value="4+" />
            <MiniStat title="Institutional tone" value="Formal" />
            <MiniStat title="Visual identity" value="Green / Gray" />
          </div>
        </section>

        <section className="section fade-up" aria-labelledby="partners-section">
          <div className="section-heading">
            <h2 id="partners-section">Featured Partners</h2>
            <div className="line" aria-hidden="true" />
          </div>

          <div className="partner-grid">
            {partners.map((partner, index) => {
              const initial = partner.name
                .split(" ")
                .map((chunk) => chunk[0])
                .join("")
                .slice(0, 2)
                .toUpperCase();

              return (
                <a
                  className="partner-card"
                  href={partner.href}
                  key={partner.name}
                  style={{ animationDelay: `${index * 90}ms` }}
                >
                  <div className="partner-badge">{initial}</div>
                  <div className="partner-name">{partner.name}</div>
                  <p className="partner-label">{partner.label}</p>
                  <p className="partner-blurb">{partner.blurb}</p>
                </a>
              );
            })}
          </div>

          <div className="cta-strip">
            <h3>from collecting . . . to connecting . . .</h3>
            <p>
              The original page uses this line as a concise institutional bridge
              between outreach and partnership. The recreated layout keeps it as
              the closing message in the same position.
            </p>
          </div>
        </section>

        <footer className="footer">
          <div className="footer-grid">
            <div>
              <h4>Contact Info</h4>
              <p>info@bitscollege.edu.et</p>
              <p>+251-982-363636</p>
              <p>Yeka Sub-city, Woreda 05, next to Yeka Park</p>
            </div>

            <div>
              <h4>Quick Link</h4>
              <ul>
                <li>
                  <a href="#">Tuition</a>
                </li>
                <li>
                  <a href="#">Undergraduate Program Admission</a>
                </li>
                <li>
                  <a href="#">Graduate Program Admission</a>
                </li>
                <li>
                  <a href="#">Undergraduate Accreditation</a>
                </li>
                <li>
                  <a href="#">Graduate Accreditation</a>
                </li>
              </ul>
            </div>

            <div>
              <h4>Social</h4>
              <div className="socials">
                <a href="#">Facebook</a>
                <a href="#">Twitter</a>
                <a href="#">Instagram</a>
                <a href="#">Youtube</a>
              </div>
            </div>
          </div>

          <div className="copyright">Copyright © 2026 BITS College</div>
        </footer>
      </div>
    </main>
  );
}

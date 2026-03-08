import { Instagram, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Navigation styles injected via Tailwind + CSS tokens */}
      <style>{`
        .nav-link {
          color: oklch(0.60 0.008 78);
          font-size: 10px;
          letter-spacing: 0.28em;
          font-weight: 500;
          text-transform: uppercase;
          transition: color 0.22s ease;
          position: relative;
        }
        .nav-link::after {
          content: "";
          position: absolute;
          bottom: -3px;
          left: 0;
          width: 0;
          height: 1px;
          background: oklch(0.70 0.155 68);
          transition: width 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .nav-link:hover {
          color: oklch(0.93 0.012 78);
        }
        .nav-link:hover::after {
          width: 100%;
        }
      `}</style>

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "nav-scrolled" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <button
              type="button"
              onClick={() => handleNavClick("#home")}
              className="flex items-center gap-3"
              aria-label="Go to top"
            >
              <img
                src="/assets/generated/logo-transparent.dim_400x120.png"
                alt="YourClickerStudios"
                className="h-9 w-auto object-contain"
              />
              <span
                className="hidden sm:block font-display font-bold tracking-wide"
                style={{ color: "var(--cream)", fontSize: "0.95rem" }}
              >
                YourClicker
                <span style={{ color: "var(--gold)" }}>Studios</span>
              </span>
            </button>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  data-ocid="nav.link"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="nav-link"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://www.instagram.com/yourclickerstudios"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-200"
                style={{ color: "var(--silver)" }}
                aria-label="Instagram"
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    "var(--gold)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    "var(--silver)";
                }}
              >
                <Instagram size={18} strokeWidth={1.5} />
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              type="button"
              className="md:hidden p-2 transition-colors duration-200"
              style={{ color: "var(--silver)" }}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.color =
                  "var(--gold)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.color =
                  "var(--silver)";
              }}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 flex flex-col justify-center items-center transition-all duration-500 ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{
          backgroundColor: "oklch(0.05 0.005 48 / 0.98)",
          backdropFilter: "blur(12px)",
        }}
      >
        <div className="flex flex-col items-center gap-10">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              data-ocid="nav.link"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="font-display font-black uppercase tracking-tight transition-colors duration-200 hover:text-gold"
              style={{
                color: "var(--cream)",
                fontSize: "clamp(1.8rem, 6vw, 3rem)",
                letterSpacing: "-0.02em",
                transitionDelay: mobileOpen ? `${i * 0.07}s` : "0s",
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://www.instagram.com/yourclickerstudios"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 mt-2"
            style={{
              color: "var(--silver)",
              fontSize: "0.75rem",
              letterSpacing: "0.25em",
            }}
          >
            <Instagram size={14} />
            @yourclickerstudios
          </a>
        </div>
      </div>
    </>
  );
}

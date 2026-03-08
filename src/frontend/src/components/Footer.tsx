import { Instagram } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const handleNavClick = (
  e: React.MouseEvent<HTMLAnchorElement>,
  href: string,
) => {
  e.preventDefault();
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const hostname = encodeURIComponent(window.location.hostname);

  return (
    <footer
      className="pt-16 pb-8 px-6 lg:px-12"
      style={{
        backgroundColor: "oklch(0.055 0.005 48)",
        borderTop: "1px solid oklch(0.16 0.009 52)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Top row */}
        <div
          className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 pb-12 mb-10"
          style={{ borderBottom: "1px solid oklch(0.14 0.008 50)" }}
        >
          {/* Logo + tagline */}
          <div className="flex flex-col gap-3">
            <img
              src="/assets/generated/logo-transparent.dim_400x120.png"
              alt="YourClickerStudios"
              className="h-10 w-auto object-contain"
            />
            <p
              className="text-sm leading-relaxed"
              style={{
                color: "var(--silver)",
                maxWidth: "260px",
                lineHeight: "1.65",
              }}
            >
              Crafting visual stories —{" "}
              <span
                className="italic"
                style={{ fontFamily: "Playfair Display, Georgia, serif" }}
              >
                one frame at a time.
              </span>
            </p>
            <a
              href="https://www.instagram.com/yourclickerstudiosp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-1 transition-colors duration-200"
              style={{ color: "var(--silver)", fontSize: "0.8rem" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color =
                  "var(--gold)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color =
                  "var(--silver)";
              }}
            >
              <Instagram size={14} />
              @yourclickerstudiosp
            </a>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-[10px] tracking-[0.28em] uppercase font-medium transition-colors duration-200"
                style={{ color: "var(--silver)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    "var(--cream)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    "var(--silver)";
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom row */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{
            color: "oklch(0.32 0.007 78)",
            fontSize: "0.7rem",
            letterSpacing: "0.04em",
          }}
        >
          <p>© {currentYear} YourClickerStudios. All rights reserved.</p>
          <p>
            Built with <span style={{ color: "var(--gold-dim)" }}>♥</span> using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200"
              style={{ color: "oklch(0.32 0.007 78)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color =
                  "var(--silver)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color =
                  "oklch(0.32 0.007 78)";
              }}
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

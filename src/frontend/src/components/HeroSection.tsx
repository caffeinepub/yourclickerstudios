import { ChevronDown } from "lucide-react";
import { useEffect, useRef } from "react";

export default function HeroSection() {
  const bgRef = useRef<HTMLDivElement>(null);

  // Parallax on hero background
  useEffect(() => {
    const handleScroll = () => {
      if (!bgRef.current) return;
      const scrollY = window.scrollY;
      // Move BG upward at half scroll speed for parallax depth
      bgRef.current.style.transform = `translateY(${scrollY * 0.38}px) scale(1.08)`;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollDown = () => {
    document
      .querySelector("#portfolio")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden film-grain"
      style={{ height: "100svh", minHeight: "620px" }}
    >
      {/* Parallax background image */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
        style={{
          backgroundImage: "url('/assets/generated/hero-bg.dim_1920x1080.jpg')",
          transform: "scale(1.08)",
        }}
      />

      {/* Multi-layer depth overlay — creates true cinematic gradient */}
      <div className="absolute inset-0 z-[1]">
        {/* Base dark tint */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "oklch(0.04 0 0 / 0.62)" }}
        />
        {/* Radial vignette — darkens edges like a cinema lens */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 30%, oklch(0 0 0 / 0.65) 100%)",
          }}
        />
        {/* Bottom atmospheric fade into next section */}
        <div
          className="absolute bottom-0 left-0 right-0"
          style={{
            height: "35%",
            background:
              "linear-gradient(to bottom, transparent 0%, oklch(0.07 0.006 48 / 0.9) 100%)",
          }}
        />
        {/* Top atmospheric fade */}
        <div
          className="absolute top-0 left-0 right-0"
          style={{
            height: "20%",
            background:
              "linear-gradient(to top, transparent 0%, oklch(0 0 0 / 0.55) 100%)",
          }}
        />
      </div>

      {/* Cinematic widescreen letterbox bars */}
      <div
        className="cinema-bar absolute top-0 left-0 right-0 z-10"
        style={{ height: "44px" }}
      />
      <div
        className="cinema-bar absolute bottom-0 left-0 right-0 z-10"
        style={{ height: "44px" }}
      />

      {/* Center content */}
      <div className="relative z-[5] flex flex-col items-center justify-center h-full text-center px-6">
        {/* Eyebrow label */}
        <p
          className="hero-label text-[10px] tracking-[0.45em] uppercase font-medium mb-5"
          style={{ color: "var(--silver)" }}
        >
          Photography &amp; Videography Studio
        </p>

        {/* Animated gold line */}
        <div
          className="hero-line mb-8"
          style={{
            height: "1px",
            width: "64px",
            background:
              "linear-gradient(90deg, transparent, var(--gold), transparent)",
            opacity: 0.8,
          }}
        />

        {/* Main display title */}
        <h1
          className="font-display leading-[0.88] tracking-[-0.02em]"
          style={{ fontStyle: "normal" }}
        >
          <span
            className="hero-title-1 block font-bold"
            style={{
              color: "var(--cream)",
              fontSize: "clamp(3rem, 10vw, 8.5rem)",
              letterSpacing: "-0.025em",
            }}
          >
            YOUR CLICKER
          </span>
          <span
            className="hero-title-2 block font-black italic"
            style={{
              color: "var(--gold)",
              fontSize: "clamp(3rem, 10vw, 8.5rem)",
              letterSpacing: "-0.015em",
              textShadow: "0 0 80px oklch(0.70 0.155 68 / 0.35)",
            }}
          >
            STUDIOS
          </span>
        </h1>

        {/* Horizontal divider */}
        <div
          className="hero-subtitle flex items-center gap-4 my-8"
          style={{ color: "var(--silver-dim, oklch(0.42 0.007 78))" }}
        >
          <div
            style={{
              width: "32px",
              height: "1px",
              background: "currentColor",
              opacity: 0.5,
            }}
          />
          <span className="text-[10px] tracking-[0.3em] uppercase font-medium">
            Est. 2020
          </span>
          <div
            style={{
              width: "32px",
              height: "1px",
              background: "currentColor",
              opacity: 0.5,
            }}
          />
        </div>

        {/* Subtitle */}
        <p
          className="hero-subtitle max-w-lg font-light leading-relaxed"
          style={{
            color: "oklch(0.75 0.010 78)",
            fontSize: "clamp(0.9rem, 2vw, 1.125rem)",
            letterSpacing: "0.01em",
          }}
        >
          We don&apos;t just capture moments —{" "}
          <em
            style={{
              color: "var(--gold)",
              fontStyle: "italic",
              fontFamily: "Playfair Display, Georgia, serif",
            }}
          >
            we craft visual stories
          </em>
        </p>

        {/* CTA Buttons */}
        <div className="hero-ctas flex flex-col sm:flex-row gap-3 mt-10">
          <button
            type="button"
            data-ocid="hero.primary_button"
            onClick={() =>
              document
                .querySelector("#portfolio")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="btn-gold px-9 py-3.5 text-[11px] font-semibold tracking-[0.22em] uppercase"
          >
            View Our Work
          </button>
          <button
            type="button"
            data-ocid="hero.secondary_button"
            onClick={() =>
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="btn-outline px-9 py-3.5 text-[11px] font-semibold tracking-[0.22em] uppercase"
          >
            Book a Session
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        type="button"
        onClick={handleScrollDown}
        className="hero-scroll absolute bottom-14 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 group"
        aria-label="Scroll down"
      >
        <span
          className="text-[9px] tracking-[0.35em] uppercase font-medium"
          style={{ color: "oklch(0.45 0.008 78)" }}
        >
          Scroll
        </span>
        <ChevronDown
          size={16}
          style={{ color: "var(--gold)" }}
          className="group-hover:translate-y-1 transition-transform duration-300"
        />
      </button>
    </section>
  );
}

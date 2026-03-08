import { Instagram } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function AboutSection() {
  useScrollReveal();

  return (
    <section
      id="about"
      className="py-28 lg:py-36 px-6 lg:px-12 overflow-hidden"
      style={{ backgroundColor: "var(--ink)" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-center">
          {/* Left: Tilted portrait with depth layers */}
          <div className="reveal-left">
            <div className="relative" style={{ paddingBottom: "2rem" }}>
              {/* Back shadow layer — creates depth */}
              <div
                className="absolute inset-0"
                style={{
                  transform: "rotate(3deg) translate(16px, 16px)",
                  backgroundColor: "oklch(0.14 0.008 50)",
                  zIndex: 0,
                }}
              />
              {/* Gold frame ghost */}
              <div
                className="absolute inset-0"
                style={{
                  transform: "rotate(-1.5deg) translate(-10px, 8px)",
                  border: "1px solid oklch(0.70 0.155 68 / 0.30)",
                  zIndex: 1,
                }}
              />
              {/* Main image — slight counter-tilt for editorial feel */}
              <div
                style={{
                  transform: "rotate(-2.2deg)",
                  position: "relative",
                  zIndex: 2,
                  overflow: "hidden",
                }}
              >
                <img
                  src="/assets/generated/portfolio-portrait.dim_800x1000.jpg"
                  alt="YourClickerStudios photographer"
                  className="w-full object-cover block"
                  style={{
                    maxHeight: "640px",
                    filter: "contrast(1.05) saturate(0.9)",
                  }}
                />
                {/* Lens-style vignette */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(ellipse 90% 90% at 50% 40%, transparent 45%, oklch(0.04 0 0 / 0.55) 100%)",
                  }}
                />
              </div>

              {/* Floating stat badge */}
              <div
                className="absolute z-[3]"
                style={{
                  bottom: "0",
                  left: "-8px",
                  transform: "rotate(-2deg)",
                  backgroundColor: "var(--gold)",
                  padding: "1rem 1.5rem",
                }}
              >
                <p
                  className="font-display font-black text-3xl leading-none"
                  style={{ color: "var(--ink)", letterSpacing: "-0.04em" }}
                >
                  500+
                </p>
                <p
                  className="text-[9px] tracking-[0.25em] uppercase font-medium mt-1"
                  style={{ color: "oklch(0.25 0.01 55)" }}
                >
                  Sessions Captured
                </p>
              </div>
            </div>
          </div>

          {/* Right: Text content */}
          <div className="reveal-right">
            {/* Thin gold top rule */}
            <div
              className="mb-8"
              style={{
                width: "40px",
                height: "2px",
                background:
                  "linear-gradient(90deg, var(--gold), var(--gold-dim))",
              }}
            />

            {/* Overline — silver, not gold */}
            <p
              className="text-[10px] tracking-[0.38em] uppercase font-medium mb-5"
              style={{ color: "var(--silver)" }}
            >
              About the Studio
            </p>

            <h2
              className="font-display font-black leading-[0.92] tracking-tight mb-9"
              style={{
                color: "var(--cream)",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
              }}
            >
              THE STUDIO
              <br />
              <span
                className="italic"
                style={{
                  color: "var(--gold)",
                  textShadow: "0 0 60px oklch(0.70 0.155 68 / 0.25)",
                }}
              >
                BEHIND THE LENS
              </span>
            </h2>

            <p
              className="mb-6 leading-relaxed"
              style={{
                color: "var(--silver)",
                fontSize: "0.9375rem",
                lineHeight: "1.78",
              }}
            >
              YourClickerStudios is a full-service creative studio dedicated to
              photography and videography. We blend technical mastery with
              artistic vision to deliver visuals that tell your story — whether
              it&apos;s your brand, your wedding, or your world.
            </p>

            <p
              className="mb-12 leading-relaxed"
              style={{
                color: "var(--silver)",
                fontSize: "0.9375rem",
                lineHeight: "1.78",
              }}
            >
              Every shoot is a collaboration. We listen, we explore, and we
              create imagery that feels authentic — not staged. Because the best
              photographs don&apos;t just look good; they make you{" "}
              <em
                style={{
                  color: "var(--cream)",
                  fontStyle: "italic",
                  fontFamily: "Playfair Display, Georgia, serif",
                }}
              >
                feel something
              </em>
              .
            </p>

            {/* Instagram CTA — minimal, precise */}
            <a
              href="https://www.instagram.com/yourclickerstudiosp"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="about.link"
              className="inline-flex items-center gap-4 group"
              style={{ color: "var(--cream)" }}
            >
              <div
                className="flex items-center justify-center w-10 h-10 border transition-all duration-300 group-hover:border-gold"
                style={{
                  borderColor: "oklch(0.28 0.010 52)",
                  color: "var(--silver)",
                }}
              >
                <Instagram
                  size={16}
                  className="transition-colors duration-300 group-hover:text-gold"
                />
              </div>
              <div>
                <p
                  className="text-[9px] tracking-[0.3em] uppercase font-medium mb-0.5"
                  style={{ color: "var(--silver)" }}
                >
                  Follow our journey
                </p>
                <p
                  className="text-sm font-medium transition-colors duration-300 group-hover:text-gold"
                  style={{ color: "var(--cream)" }}
                >
                  @yourclickerstudiosp
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

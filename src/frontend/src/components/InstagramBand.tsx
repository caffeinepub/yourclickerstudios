import { Instagram } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function InstagramBand() {
  useScrollReveal();

  return (
    <section
      className="py-28 lg:py-32 px-6 lg:px-12 relative overflow-hidden"
      style={{ backgroundColor: "oklch(0.055 0.005 48)" }}
    >
      {/* Ambient atmospheric glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, oklch(0.70 0.155 68 / 0.05) 0%, transparent 70%)",
        }}
      />

      {/* Large ghost headline — editorial atmosphere */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden
      >
        <span
          className="font-display font-black leading-none tracking-tighter whitespace-nowrap"
          style={{
            fontSize: "clamp(8rem, 22vw, 22rem)",
            color: "oklch(0.14 0.008 50)",
          }}
        >
          FOLLOW
        </span>
      </div>

      <div className="max-w-3xl mx-auto relative z-10 text-center reveal">
        {/* Instagram icon — minimal circle */}
        <div
          className="inline-flex items-center justify-center w-14 h-14 border mb-8"
          style={{
            borderColor: "oklch(0.28 0.010 52)",
            color: "var(--silver)",
          }}
        >
          <Instagram size={22} strokeWidth={1.5} />
        </div>

        {/* Overline — silver */}
        <p
          className="text-[10px] tracking-[0.42em] uppercase font-medium mb-5"
          style={{ color: "var(--silver)" }}
        >
          Stay Connected
        </p>

        {/* Main headline — cream with gold accent on handle */}
        <h2
          className="font-display font-black leading-[0.92] tracking-tight mb-3"
          style={{
            color: "var(--cream)",
            fontSize: "clamp(2.5rem, 8vw, 6rem)",
            letterSpacing: "-0.025em",
          }}
        >
          FOLLOW OUR STORY
        </h2>

        {/* Handle — this is the gold moment, not overloaded */}
        <p
          className="font-display font-bold italic mb-8"
          style={{
            fontSize: "clamp(1.2rem, 4vw, 2.2rem)",
            color: "var(--gold)",
            textShadow: "0 0 60px oklch(0.70 0.155 68 / 0.30)",
            letterSpacing: "-0.01em",
          }}
        >
          @yourclickerstudios
        </p>

        <p
          className="text-sm leading-relaxed max-w-md mx-auto mb-12"
          style={{ color: "var(--silver)", lineHeight: "1.78" }}
        >
          Behind the scenes, work in progress, and finished stories. Join our
          community and be part of the visual journey.
        </p>

        <a
          href="https://www.instagram.com/yourclickerstudios"
          target="_blank"
          rel="noopener noreferrer"
          data-ocid="instagram.primary_button"
          className="btn-gold inline-flex items-center gap-2.5 px-10 py-4 text-[11px] font-semibold tracking-[0.22em] uppercase"
        >
          <Instagram size={14} />
          Visit Our Instagram
        </a>
      </div>
    </section>
  );
}

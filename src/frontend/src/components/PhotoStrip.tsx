import { useScrollReveal } from "../hooks/useScrollReveal";

const photos = [
  {
    src: "/assets/generated/portfolio-portrait.dim_800x1000.jpg",
    label: "Portrait",
  },
  {
    src: "/assets/generated/portfolio-street-1.dim_800x1000.jpg",
    label: "Street",
  },
  {
    src: "/assets/generated/portfolio-portrait-2.dim_800x1000.jpg",
    label: "Editorial",
  },
  {
    src: "/assets/generated/portfolio-street-2.dim_800x600.jpg",
    label: "Urban",
  },
  {
    src: "/assets/generated/portfolio-landscape.dim_800x600.jpg",
    label: "Landscape",
  },
];

export default function PhotoStrip() {
  useScrollReveal();

  return (
    <section
      className="relative overflow-hidden py-0"
      style={{ backgroundColor: "oklch(0.055 0.005 48)" }}
    >
      {/* Film-strip label */}
      <div className="flex items-center gap-4 px-6 lg:px-12 pt-8 pb-4 reveal">
        <div
          style={{
            width: "24px",
            height: "1px",
            background: "var(--gold)",
            opacity: 0.7,
          }}
        />
        <p
          className="text-[9px] tracking-[0.42em] uppercase font-medium"
          style={{ color: "var(--silver)" }}
        >
          Portrait &amp; Street — Featured Works
        </p>
        <div
          style={{
            flex: 1,
            height: "1px",
            background:
              "linear-gradient(90deg, oklch(0.28 0.010 52), transparent)",
          }}
        />
      </div>

      {/* Horizontal scroll strip */}
      <div
        className="flex gap-3 px-6 lg:px-12 pb-8 overflow-x-auto scrollbar-hide"
        style={{
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {photos.map((photo, i) => (
          <div
            key={photo.src}
            data-ocid={`photostrip.item.${i + 1}`}
            className="reveal flex-shrink-0 relative overflow-hidden group"
            style={{
              width: "clamp(180px, 28vw, 320px)",
              height: "clamp(240px, 36vw, 420px)",
              scrollSnapAlign: "start",
              transitionDelay: `${i * 0.08}s`,
            }}
          >
            <img
              src={photo.src}
              alt={photo.label}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* overlay */}
            <div
              className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background:
                  "linear-gradient(to top, oklch(0.05 0.005 48 / 0.88) 0%, transparent 60%)",
              }}
            >
              <span
                className="text-[9px] tracking-[0.28em] uppercase font-semibold"
                style={{ color: "var(--gold)" }}
              >
                {photo.label}
              </span>
            </div>
            {/* subtle gold border on hover */}
            <div
              className="absolute inset-0 border border-transparent transition-all duration-300 group-hover:border-gold"
              style={{ pointerEvents: "none" }}
            />
          </div>
        ))}
      </div>

      {/* Scroll hint for mobile */}
      <p
        className="text-center pb-5 text-[9px] tracking-[0.28em] uppercase sm:hidden"
        style={{ color: "oklch(0.30 0.007 78)" }}
      >
        Swipe to explore →
      </p>
    </section>
  );
}

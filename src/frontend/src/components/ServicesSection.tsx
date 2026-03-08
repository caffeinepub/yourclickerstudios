import { Aperture, Camera, Video } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const services = [
  {
    icon: Camera,
    title: "Portrait Photography",
    description:
      "Professional portraits that reveal character and emotion. Every frame is meticulously crafted to tell the story of who you are — from headshots to lifestyle editorial.",
    tag: "Photography",
    num: "01",
  },
  {
    icon: Video,
    title: "Videography",
    description:
      "Cinematic video productions for weddings, events, and brands. We bring a filmmaker's eye to every project — breathtaking visuals, compelling narrative.",
    tag: "Film",
    num: "02",
  },
  {
    icon: Aperture,
    title: "Commercial",
    description:
      "Brand photography and commercial campaigns that convert. Sharp, intentional imagery that elevates your product and stops the scroll.",
    tag: "Brand",
    num: "03",
  },
];

export default function ServicesSection() {
  useScrollReveal();

  return (
    <section
      id="services"
      className="py-28 lg:py-36 px-6 lg:px-12 relative overflow-hidden"
      style={{ backgroundColor: "oklch(0.06 0.005 48)" }}
    >
      {/* Subtle diagonal hatching texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, transparent, transparent 80px, oklch(0.15 0.008 52 / 0.08) 80px, oklch(0.15 0.008 52 / 0.08) 81px)",
          opacity: 0.6,
        }}
      />

      {/* Large decorative number — ambient atmosphere */}
      <div
        className="absolute -right-8 top-1/2 -translate-y-1/2 select-none pointer-events-none"
        aria-hidden
        style={{
          fontFamily: "Playfair Display, Georgia, serif",
          fontWeight: 900,
          fontSize: "clamp(12rem, 22vw, 24rem)",
          color: "oklch(0.14 0.008 50)",
          lineHeight: 1,
          letterSpacing: "-0.05em",
        }}
      >
        WE
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="mb-20 reveal">
          <p
            className="text-[10px] tracking-[0.38em] uppercase font-medium mb-3"
            style={{ color: "var(--silver)" }}
          >
            Our Expertise
          </p>
          <h2
            className="section-title font-display font-black text-4xl sm:text-5xl lg:text-6xl leading-none"
            style={{ color: "var(--cream)", letterSpacing: "-0.02em" }}
          >
            WHAT WE DO
          </h2>
        </div>

        {/* Services grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-px"
          style={{ background: "oklch(0.18 0.010 52 / 0.4)" }}
        >
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                data-ocid={`services.card.${i + 1}`}
                className="service-card reveal p-10 lg:p-12 border relative overflow-hidden"
                style={{
                  backgroundColor: "oklch(0.09 0.007 50)",
                  borderColor: "oklch(0.17 0.009 52)",
                  transitionDelay: `${i * 0.14}s`,
                }}
              >
                {/* Large background number */}
                <div
                  className="absolute top-4 right-6 select-none pointer-events-none"
                  aria-hidden
                  style={{
                    fontFamily: "Playfair Display, Georgia, serif",
                    fontWeight: 900,
                    fontSize: "6rem",
                    color: "oklch(0.14 0.008 50)",
                    lineHeight: 1,
                    transition: "color 0.35s ease",
                  }}
                >
                  {service.num}
                </div>

                {/* Icon */}
                <div
                  className="service-icon-wrap inline-flex items-center justify-center w-12 h-12 mb-8 border"
                  style={{
                    borderColor: "oklch(0.25 0.012 60)",
                    color: "var(--gold)",
                  }}
                >
                  <Icon size={20} strokeWidth={1.5} />
                </div>

                {/* Gold rule */}
                <div
                  className="w-8 mb-7"
                  style={{
                    height: "1px",
                    background:
                      "linear-gradient(90deg, var(--gold-dim), transparent)",
                  }}
                />

                {/* Tag — muted, not gold */}
                <span
                  className="text-[9px] tracking-[0.30em] uppercase font-medium block mb-3"
                  style={{ color: "var(--silver)" }}
                >
                  {service.tag}
                </span>

                {/* Title */}
                <h3
                  className="font-display font-bold text-xl lg:text-2xl mb-5 leading-snug"
                  style={{ color: "var(--cream)", letterSpacing: "-0.01em" }}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--silver)", lineHeight: "1.75" }}
                >
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

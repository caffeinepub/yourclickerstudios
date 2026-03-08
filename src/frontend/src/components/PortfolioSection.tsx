import { useEffect, useRef, useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const portfolioItems = [
  {
    id: 1,
    image: "/assets/generated/portfolio-portrait.dim_800x1000.jpg",
    title: "Portraits",
    category: "Photography",
    tall: true,
  },
  {
    id: 2,
    image: "/assets/generated/portfolio-landscape.dim_800x600.jpg",
    title: "Landscapes",
    category: "Photography",
    tall: false,
  },
  {
    id: 3,
    image: "/assets/generated/portfolio-wedding.dim_800x600.jpg",
    title: "Weddings",
    category: "Videography",
    tall: false,
  },
  {
    id: 4,
    image: "/assets/generated/portfolio-videography.dim_800x600.jpg",
    title: "Film Production",
    category: "Videography",
    tall: false,
  },
  {
    id: 5,
    image: "/assets/generated/portfolio-commercial.dim_800x600.jpg",
    title: "Commercial",
    category: "Photography",
    tall: false,
  },
];

type FilterType = "All" | "Photography" | "Videography";

export default function PortfolioSection() {
  useScrollReveal();
  const [activeFilter, setActiveFilter] = useState<FilterType>("All");
  const sectionRef = useRef<HTMLElement>(null);

  const filtered =
    activeFilter === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  // Re-run reveal after filter change
  // biome-ignore lint/correctness/useExhaustiveDependencies: activeFilter drives the reveal reset intentionally
  useEffect(() => {
    const timer = setTimeout(() => {
      const els = sectionRef.current?.querySelectorAll(
        ".reveal, .reveal-left, .reveal-right",
      );
      if (!els) return;
      for (const el of els) {
        el.classList.remove("visible");
        // Force reflow
        void (el as HTMLElement).offsetHeight;
      }

      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              observer.unobserve(entry.target);
            }
          }
        },
        { threshold: 0.05, rootMargin: "0px 0px -40px 0px" },
      );
      for (const el of els) {
        observer.observe(el);
      }
    }, 50);
    return () => clearTimeout(timer);
  }, [activeFilter]);

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="py-24 lg:py-32 px-6 lg:px-12"
      style={{ backgroundColor: "var(--ink)" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-16 reveal">
          <p
            className="text-[10px] tracking-[0.38em] uppercase font-medium mb-3"
            style={{ color: "var(--silver)" }}
          >
            Selected Works
          </p>
          <h2
            className="section-title font-display font-black text-4xl sm:text-5xl lg:text-6xl leading-none"
            style={{ color: "var(--cream)", letterSpacing: "-0.02em" }}
          >
            OUR WORK
          </h2>
        </div>

        {/* Filter tabs */}
        <div className="flex gap-2 mb-12 reveal">
          {(["All", "Photography", "Videography"] as FilterType[]).map(
            (filter) => (
              <button
                type="button"
                key={filter}
                data-ocid="portfolio.tab"
                onClick={() => setActiveFilter(filter)}
                className="px-5 py-2 text-[10px] font-semibold tracking-[0.20em] uppercase transition-all duration-250"
                style={{
                  backgroundColor:
                    activeFilter === filter ? "var(--gold)" : "transparent",
                  color:
                    activeFilter === filter ? "var(--ink)" : "var(--silver)",
                  border: `1px solid ${
                    activeFilter === filter
                      ? "var(--gold)"
                      : "oklch(0.20 0.010 52)"
                  }`,
                }}
              >
                {filter}
              </button>
            ),
          )}
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 auto-rows-[280px]">
          {filtered.map((item, i) => (
            <div
              key={`${item.id}-${activeFilter}`}
              data-ocid={`portfolio.item.${i + 1}`}
              className={`portfolio-card relative overflow-hidden cursor-pointer reveal group ${
                item.tall && filtered.length >= 3 && i === 0
                  ? "sm:row-span-2"
                  : ""
              }`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover"
              />

              {/* Hover overlay */}
              <div
                className="card-overlay absolute inset-0 flex flex-col justify-end p-6"
                style={{
                  background:
                    "linear-gradient(to top, oklch(0.06 0.005 60 / 0.95) 0%, oklch(0.06 0.005 60 / 0.7) 50%, transparent 100%)",
                }}
              >
                <span
                  className="text-xs tracking-[0.25em] uppercase font-medium mb-1"
                  style={{ color: "var(--gold)" }}
                >
                  {item.category}
                </span>
                <div className="flex items-center justify-between">
                  <h3
                    className="font-display font-bold text-xl tracking-wide"
                    style={{ color: "var(--cream)" }}
                  >
                    {item.title}
                  </h3>
                  <span
                    className="text-sm font-medium tracking-widest uppercase"
                    style={{ color: "var(--gold)" }}
                  >
                    View →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

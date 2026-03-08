import { useEffect } from "react";

export function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            // Staggered children support
            const staggerChildren =
              el.querySelectorAll<HTMLElement>("[data-stagger]");
            if (staggerChildren.length > 0) {
              let idx = 0;
              for (const child of staggerChildren) {
                child.style.transitionDelay = `${idx * 0.12}s`;
                child.classList.add("visible");
                idx++;
              }
            }
            el.classList.add("visible");
            observer.unobserve(el);
          }
        }
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -60px 0px",
      },
    );

    const elements = document.querySelectorAll(
      ".reveal, .reveal-left, .reveal-right",
    );
    for (const el of elements) {
      observer.observe(el);
    }

    return () => observer.disconnect();
  });
}

"use client";

import { useEffect, useState } from "react";

export function useActiveSection(sectionIds: string[], defaultActive = "arrival") {
  const [activeSection, setActiveSection] = useState(defaultActive);
  const serializedIds = sectionIds.join(",");

  useEffect(() => {
    const visibilityMap = new Map<string, number>();

    const checkBottom = () => {
      if (typeof window === "undefined" || sectionIds.length === 0) return false;
      
      const threshold = 100; // px from the bottom
      return (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - threshold
      );
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      // If we are at the bottom of the page, force the last section to be active
      if (checkBottom()) {
        setActiveSection(sectionIds[sectionIds.length - 1]);
        return;
      }

      entries.forEach((entry) => {
        visibilityMap.set(entry.target.id, entry.intersectionRatio);
      });

      // Find the section with the highest intersection ratio
      let maxRatio = 0;
      let mostVisibleSection = "";

      visibilityMap.forEach((ratio, id) => {
        if (ratio > maxRatio) {
          maxRatio = ratio;
          mostVisibleSection = id;
        }
      });

      if (maxRatio > 0) {
        setActiveSection(mostVisibleSection);
      }
    };

    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -45% 0px", // focus on the middle-upper part
      threshold: Array.from({ length: 11 }, (_, i) => i * 0.1),
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    // Initial setup: observe all sections
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    const handleScroll = () => {
      if (checkBottom() && sectionIds.length > 0) {
        setActiveSection(sectionIds[sectionIds.length - 1]);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Initial check in case page loads scrolled to bottom
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [serializedIds]); // Depends on serialized string to prevent infinite recreation loop

  return activeSection;
}

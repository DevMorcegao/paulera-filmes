"use client";

import React, { useState } from "react";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";
import { Compass, Leaf, TreePine, GitFork, Cherry, Sprout } from "lucide-react";

interface Chapter {
  id: string;
  label: string;
  icon: React.ComponentType<any>;
}

const chapters: Chapter[] = [
  { id: "arrival", label: "Chegada", icon: Compass },
  { id: "roots", label: "Raízes", icon: Leaf },
  { id: "trunk", label: "Tronco", icon: TreePine },
  { id: "branches", label: "Galhos", icon: GitFork },
  { id: "fruits", label: "Frutos", icon: Cherry },
  { id: "seeds", label: "Sementes", icon: Sprout },
];

export function ChapterRail() {
  const sectionIds = chapters.map((c) => c.id);
  const activeId = useActiveSection(sectionIds, "arrival");
  const [isOpenMobile, setIsOpenMobile] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [windowHeight, setWindowHeight] = useState(800);
  const [isMounted, setIsMounted] = useState(false);

  React.useEffect(() => {
    setIsMounted(true);
    setScrollY(window.scrollY);
    setWindowHeight(window.innerHeight);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const activeChapter = chapters.find((c) => c.id === activeId) || chapters[0];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const targetY = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: targetY,
        behavior: "smooth",
      });
      setIsOpenMobile(false);
    }
  };

  return (
    <>
      {/* Desktop Vertical Icon Rail (Clean Floating Presentation) */}
      <nav
        className="fixed left-branch top-1/2 -translate-y-1/2 z-navigation hidden md:flex flex-col items-center gap-twig"
        aria-label="Navegação por capítulos"
      >
        {chapters.map((chapter, index) => {
          const isActive = chapter.id === activeId;
          const Icon = chapter.icon;

          // Estimate the physical Y position of this tick on the page
          // Nav is centered vertically. Each item has a height and gap of approx 80px.
          const tickViewportY = (windowHeight / 2) - 200 + (index * 80);
          const tickPageY = scrollY + tickViewportY;
          
          // Hero section (arrival) occupies exactly the first viewport height (windowHeight)
          const isTickOverDark = isMounted ? (tickPageY < windowHeight) : (activeId === "arrival");

          return (
            <a
              key={chapter.id}
              href={`#${chapter.id}`}
              onClick={(e) => handleLinkClick(e, chapter.id)}
              className={cn(
                "group flex flex-col items-center justify-center w-20 py-twig rounded-pebble focus-visible:outline focus-visible:outline-2 focus-visible:outline-moss-500 transition-all duration-normal",
                isActive ? "scale-105" : "hover:scale-102"
              )}
              aria-current={isActive ? "step" : undefined}
            >
              {/* Icon */}
              <Icon
                className={cn(
                  "w-6 h-6 stroke-[1.25] transition-all duration-normal ease-soft group-hover:scale-110",
                  isActive
                    ? (isTickOverDark ? "text-moon-100 stroke-[1.75]" : "text-bark-900 stroke-[1.75]")
                    : (isTickOverDark ? "text-stone-300/40 group-hover:text-moon-100" : "text-stone-300/80 group-hover:text-bark-700")
                )}
              />

              {/* Label */}
              <span
                className={cn(
                  "mt-seed font-body text-[9px] font-bold uppercase tracking-widest transition-colors duration-normal text-center",
                  isActive
                    ? (isTickOverDark ? "text-moon-100" : "text-bark-900")
                    : (isTickOverDark ? "text-stone-300/40 group-hover:text-moon-100" : "text-stone-300/80 group-hover:text-bark-700")
                )}
              >
                {chapter.label}
              </span>

              {/* Active Indicator Dot under label */}
              <div
                className={cn(
                  "w-1 h-1 rounded-full mt-seed transition-all duration-normal ease-soft",
                  isActive 
                    ? "bg-amber-500 opacity-100 scale-100" 
                    : "bg-transparent opacity-0 scale-50"
                )}
              />
            </a>
          );
        })}
      </nav>

      {/* Mobile Bottom Fixed Chapter Label + Expanding Drawer */}
      <div className="fixed bottom-0 left-0 w-full z-navigation md:hidden">
        <details
          open={isOpenMobile}
          onToggle={(e) => setIsOpenMobile((e.target as HTMLDetailsElement).open)}
          className="w-full bg-mist-100/95 backdrop-blur-md border-t border-fog-200 shadow-canopy"
        >
          <summary
            className="list-none flex justify-between items-center px-branch py-twig cursor-pointer select-none font-body text-caption uppercase tracking-wider text-bark-900 font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-moss-500"
            onClick={(e) => {
              if (window) {
                e.preventDefault();
                setIsOpenMobile(!isOpenMobile);
              }
            }}
          >
            <span className="flex items-center gap-root">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
              Capítulo: {activeChapter.label}
            </span>
            <span
              className={cn(
                "text-[10px] text-stone-300 transition-transform duration-normal",
                isOpenMobile ? "rotate-180" : ""
              )}
            >
              ▲
            </span>
          </summary>

          {/* Expanded Drawer Links with Icons */}
          <nav className="flex flex-col border-t border-fog-200 bg-mist-50/95 max-h-80 overflow-y-auto">
            {chapters.map((chapter) => {
              const isActive = chapter.id === activeId;
              const Icon = chapter.icon;

              return (
                <a
                  key={chapter.id}
                  href={`#${chapter.id}`}
                  onClick={(e) => handleLinkClick(e, chapter.id)}
                  className={cn(
                    "flex items-center gap-twig px-branch py-branch text-caption font-body uppercase tracking-wider text-left transition-colors duration-fast border-b border-fog-100/30",
                    isActive
                      ? "bg-fog-100 font-semibold text-amber-500"
                      : "text-bark-700 hover:bg-fog-100/50"
                  )}
                >
                  <Icon className="w-5 h-5 text-bark-700" />
                  <span>{chapter.label}</span>
                </a>
              );
            })}
          </nav>
        </details>
      </div>
    </>
  );
}

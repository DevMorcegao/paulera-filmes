"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  className?: string;
  as?: React.ElementType;
}

export function FadeIn({ 
  children, 
  delay = 0, 
  duration = 0.65, // matches --duration-slow 
  y = 40, // matches revealUp
  className = "",
  as = "div" 
}: FadeInProps) {
  const elementRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!elementRef.current) return;

    gsap.fromTo(
      elementRef.current,
      { opacity: 0, y },
      {
        opacity: 1,
        y: 0,
        duration,
        delay,
        ease: "power2.out", // approximation of soft easing
        scrollTrigger: {
          trigger: elementRef.current,
          start: "top 85%", // trigger when 85% of viewport
          toggleActions: "play none none none"
        }
      }
    );
  }, { scope: elementRef });

  const Component = (as || "div") as any;

  return (
    <Component ref={elementRef} className={className} style={{ opacity: 0 }}>
      {children}
    </Component>
  );
}

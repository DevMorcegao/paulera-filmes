import React from "react";
import { cn } from "@/lib/utils";

type SpacingSize = "twig" | "branch" | "trunk" | "forest" | "canopy" | "horizon" | "none";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  spacing?: SpacingSize;
  as?: React.ElementType;
}

const spacingClasses: Record<SpacingSize, string> = {
  twig: "py-twig",
  branch: "py-branch",
  trunk: "py-trunk",
  forest: "py-forest",
  canopy: "py-canopy",
  horizon: "py-horizon",
  none: "py-0",
};

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, spacing = "forest", as: Component = "section", children, ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(
          "w-full relative overflow-hidden",
          spacingClasses[spacing],
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Section.displayName = "Section";

import React from "react";
import { cn } from "@/lib/utils";

type GapSize = "seed" | "root" | "twig" | "branch" | "trunk" | "forest" | "none";

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  cols?: number | { sm?: number; md?: number; lg?: number; xl?: number };
  gap?: GapSize;
}

const gapClasses: Record<GapSize, string> = {
  seed: "gap-seed",
  root: "gap-root",
  twig: "gap-twig",
  branch: "gap-branch",
  trunk: "gap-trunk",
  forest: "gap-forest",
  none: "gap-0",
};

export const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  ({ className, cols, gap = "branch", children, ...props }, ref) => {
    // If specific cols mapping is provided, construct the classes
    const getColsClass = () => {
      if (!cols) {
        // Default mapping: Desktop 12, Tablet 8, Mobile 4
        return "grid-cols-4 md:grid-cols-8 lg:grid-cols-12";
      }

      if (typeof cols === "number") {
        return `grid-cols-${cols}`;
      }

      const classes: string[] = [];
      if (cols.sm) classes.push(`grid-cols-${cols.sm}`);
      if (cols.md) classes.push(`md:grid-cols-${cols.md}`);
      if (cols.lg) classes.push(`lg:grid-cols-${cols.lg}`);
      if (cols.xl) classes.push(`xl:grid-cols-${cols.xl}`);
      return classes.join(" ");
    };

    return (
      <div
        ref={ref}
        className={cn("grid", getColsClass(), gapClasses[gap], className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Grid.displayName = "Grid";

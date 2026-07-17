import React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  clean?: boolean; // if true, removes default max-width and padding, acting as a clean wrapper
}

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, clean = false, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          !clean && "mx-auto w-full max-w-7xl px-twig md:px-branch lg:px-trunk",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Container.displayName = "Container";

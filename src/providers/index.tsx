"use client";

import { ThemeProvider } from "next-themes";
import { MotionConfig } from "motion/react";
import { easing } from "@/design/motion";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <MotionConfig transition={{ ease: easing.standard }}>
        {children}
      </MotionConfig>
    </ThemeProvider>
  );
}

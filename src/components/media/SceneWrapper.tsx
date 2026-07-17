"use client";

import React from "react";
import dynamic from "next/dynamic";

const SceneContainerNoSSR = dynamic(
  () => import("./SceneContainer").then((mod) => mod.SceneContainer),
  { ssr: false }
);

export function SceneWrapper() {
  return <SceneContainerNoSSR />;
}

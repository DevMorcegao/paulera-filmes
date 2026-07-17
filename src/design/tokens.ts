export const color = {
  mist: {
    50: "#FCFCFB",
    100: "#F7F6F3",
    200: "#EFEDE8",
  },
  fog: {
    100: "#E8E5DF",
    200: "#D9D5CC",
    300: "#C8C2B8",
  },
  stone: {
    100: "#BDB7AE",
    200: "#9B948A",
    300: "#7B746C",
  },
  bark: {
    500: "#51483F",
    700: "#3E362F",
    900: "#2A241F",
  },
  forest: {
    300: "#6E8C62",
    500: "#48693D",
    700: "#2F4728",
  },
  moss: {
    300: "#879E6F",
    500: "#60754B",
  },
  amber: {
    300: "#D7A14A",
    500: "#B97824",
  },
  moon: {
    100: "#FFFFFF",
    200: "#FDFDFD",
  },
  ember: {
    500: "#A85D3E",
  },
  error: "#A85D3E",
  warning: "#B97824",
  success: "#60754B",
  info: "#9B948A",
} as const;

export const spacing = {
  seed: 4,
  root: 8,
  twig: 16,
  branch: 24,
  trunk: 40,
  forest: 64,
  canopy: 96,
  horizon: 160,
} as const;

export const radius = {
  pebble: 6,
  leaf: 12,
  river: 20,
  horizon: 32,
  circle: 9999,
} as const;

export const border = {
  hairline: 1,
  thin: 2,
  regular: 3,
} as const;

export const opacity = {
  disabled: 0.38,
  muted: 0.56,
  overlay: 0.72,
  backdrop: 0.88,
} as const;

export const shadow = {
  ground: "0 2px 4px rgba(0,0,0,.04)",
  leaf: "0 8px 20px rgba(0,0,0,.08)",
  branch: "0 20px 48px rgba(0,0,0,.12)",
  canopy: "0 40px 96px rgba(0,0,0,.18)",
} as const;

export const blur = {
  mist: 8,
  fog: 16,
  dream: 24,
} as const;

export const zIndex = {
  ground: 0,
  content: 10,
  navigation: 50,
  overlay: 100,
  modal: 500,
  toast: 1000,
} as const;

export const typography = {
  display: {
    size: 84,
    lineHeight: 1.095,
    weight: 400,
    fontFamily: "EB Garamond",
  },
  headingLg: {
    size: 48,
    lineHeight: 1.167,
    weight: 500,
    fontFamily: "EB Garamond",
  },
  headingMd: {
    size: 32,
    lineHeight: 1.25,
    weight: 500,
    fontFamily: "EB Garamond",
  },
  headingSm: {
    size: 24,
    lineHeight: 1.333,
    weight: 500,
    fontFamily: "EB Garamond",
  },
  bodyLg: {
    size: 19,
    lineHeight: 1.68,
    weight: 400,
    fontFamily: "Hanken Grotesk",
  },
  body: {
    size: 16,
    lineHeight: 1.75,
    weight: 400,
    fontFamily: "Hanken Grotesk",
  },
  caption: {
    size: 13,
    lineHeight: 1.54,
    weight: 500,
    fontFamily: "Hanken Grotesk",
  },
} as const;

export const container = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1440,
} as const;

export const designTokens = {
  color,
  spacing,
  radius,
  border,
  opacity,
  shadow,
  blur,
  zIndex,
  typography,
  container,
} as const;

export default designTokens;

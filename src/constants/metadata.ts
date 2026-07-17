import type { Metadata, Viewport } from "next";

export const siteMetadata: Metadata = {
  title: {
    default: "Paulera Filmes",
    template: "%s | Paulera Filmes",
  },
  description:
    "Audiovisual studio exploring filmmaking, Generative AI, Motion Design, 3D Animations, and Post-Production.",
  applicationName: "Paulera Filmes",
  authors: [{ name: "Morcegao" }],
  generator: "Next.js",
  keywords: [
    "Paulera Filmes",
    "Filmmaking",
    "Generative AI",
    "Motion Design",
    "3D Animations",
    "Post-Production",
    "Audiovisual Studio",
  ],
  creator: "Morcegao",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Paulera Filmes",
    description:
      "Audiovisual studio exploring filmmaking, Generative AI, Motion Design, 3D Animations, and Post-Production.",
    url: "https://paulerafilmes.com",
    siteName: "Paulera Filmes",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paulera Filmes",
    description:
      "Audiovisual studio exploring filmmaking, Generative AI, Motion Design, 3D Animations, and Post-Production.",
    creator: "@paulerafilmes",
  },
};

export const siteViewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F7F6F3" },
    { media: "(prefers-color-scheme: dark)", color: "#2A241F" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

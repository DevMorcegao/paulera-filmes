import React from "react";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/motion/FadeIn";

export function Hero() {
  return (
    <Section id="arrival" spacing="horizon" className="min-h-screen flex items-center relative z-content bg-transparent">
      <Container>
        <div className="max-w-[75ch] flex flex-col gap-branch">
          <FadeIn delay={0.2} duration={0.8} y={30}>
            <span className="font-body text-caption uppercase tracking-wider text-amber-500 font-semibold">
              Paulera Filmes
            </span>
          </FadeIn>
          
          <FadeIn delay={0.4} duration={1.2} y={50}>
            <h1 className="font-display text-display text-moon-100 leading-tight">
              Cada história começa com a escuta.
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.6} duration={1} y={30}>
            <p className="font-body text-body-lg text-fog-100">
              Estúdio audiovisual explorando cinema, Inteligência Artificial Generativa, Motion Design, Animações 3D e Pós-Produção.
            </p>
          </FadeIn>
        </div>
      </Container>
    </Section>
  );
}

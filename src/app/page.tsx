import React from "react";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Grid } from "@/components/layout/Grid";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col bg-mist-100">
      {/* 1. Arrival Section */}
      <Section id="arrival" spacing="horizon" className="min-h-screen flex items-center bg-mist-50">
        <Container>
          <div className="max-w-[75ch] flex flex-col gap-branch">
            <span className="font-body text-caption uppercase tracking-wider text-amber-500 font-semibold">
              Paulera Filmes
            </span>
            <h1 className="font-display text-display text-bark-900 leading-tight">
              Cada história começa com a escuta.
            </h1>
            <p className="font-body text-body-lg text-stone-300">
              Estúdio audiovisual explorando cinema, Inteligência Artificial Generativa, Motion Design, Animações 3D e Pós-Produção.
            </p>
          </div>
        </Container>
      </Section>

      {/* 2. Roots Section */}
      <Section id="roots" spacing="horizon" className="border-t border-fog-200">
        <Container>
          <Grid>
            <div className="col-span-4 md:col-span-3 lg:col-span-4 flex flex-col gap-twig">
              <span className="font-body text-caption uppercase tracking-wider text-stone-200 font-semibold">
                01 / Raízes
              </span>
              <h2 className="font-display text-heading-lg text-bark-900">
                Nosso Manifesto
              </h2>
            </div>
            <div className="col-span-4 md:col-span-5 lg:col-span-8 flex flex-col gap-branch">
              <p className="font-body text-body-lg text-bark-700">
                Acreditamos na sinergia entre a sensibilidade orgânica do cinema tradicional e as possibilidades infinitas das tecnologias emergentes. Nossas raízes estão na narrativa profunda e humana.
              </p>
            </div>
          </Grid>
        </Container>
      </Section>

      {/* 3. Trunk Section */}
      <Section id="trunk" spacing="horizon" className="bg-mist-50 border-t border-fog-200">
        <Container>
          <Grid>
            <div className="col-span-4 md:col-span-3 lg:col-span-4 flex flex-col gap-twig">
              <span className="font-body text-caption uppercase tracking-wider text-stone-200 font-semibold">
                02 / Tronco
              </span>
              <h2 className="font-display text-heading-lg text-bark-900">
                Nossa Jornada
              </h2>
            </div>
            <div className="col-span-4 md:col-span-5 lg:col-span-8">
              <p className="font-body text-body text-stone-300">
                A estrutura sólida que sustenta nossas criações. Milestones e evolução profissional representados na linha do tempo principal.
              </p>
            </div>
          </Grid>
        </Container>
      </Section>

      {/* 4. Branches Section */}
      <Section id="branches" spacing="horizon" className="border-t border-fog-200">
        <Container>
          <Grid>
            <div className="col-span-4 md:col-span-3 lg:col-span-4 flex flex-col gap-twig">
              <span className="font-body text-caption uppercase tracking-wider text-stone-200 font-semibold">
                03 / Galhos
              </span>
              <h2 className="font-display text-heading-lg text-bark-900">
                Especialidades
              </h2>
            </div>
            <div className="col-span-4 md:col-span-5 lg:col-span-8">
              <p className="font-body text-body text-stone-300">
                Nossas frentes de atuação se ramificam em Cinema, Motion Design, Direção de Arte 3D e Pós-produção avançada com IA.
              </p>
            </div>
          </Grid>
        </Container>
      </Section>

      {/* 5. Fruits Section */}
      <Section id="fruits" spacing="horizon" className="bg-mist-50 border-t border-fog-200">
        <Container>
          <Grid>
            <div className="col-span-4 md:col-span-3 lg:col-span-4 flex flex-col gap-twig">
              <span className="font-body text-caption uppercase tracking-wider text-stone-200 font-semibold">
                04 / Frutos
              </span>
              <h2 className="font-display text-heading-lg text-bark-900">
                Histórias Realizadas
              </h2>
            </div>
            <div className="col-span-4 md:col-span-5 lg:col-span-8">
              <p className="font-body text-body text-stone-300">
                Projetos em destaque, filmes criados e colaborações memoráveis prontas para exibição.
              </p>
            </div>
          </Grid>
        </Container>
      </Section>

      {/* 6. Seeds Section */}
      <Section id="seeds" spacing="horizon" className="border-t border-fog-200 pb-horizon">
        <Container>
          <Grid>
            <div className="col-span-4 md:col-span-3 lg:col-span-4 flex flex-col gap-twig">
              <span className="font-body text-caption uppercase tracking-wider text-amber-500 font-semibold">
                05 / Sementes
              </span>
              <h2 className="font-display text-heading-lg text-bark-900">
                Próximas Histórias
              </h2>
            </div>
            <div className="col-span-4 md:col-span-5 lg:col-span-8 flex flex-col gap-branch">
              <p className="font-body text-body-lg text-bark-700">
                Toda grande criação começa com um contato.
              </p>
              <h3 className="font-display text-heading-md text-amber-500">
                Vamos criar a próxima história?
              </h3>
            </div>
          </Grid>
        </Container>
      </Section>
    </main>
  );
}

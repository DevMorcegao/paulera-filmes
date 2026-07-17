import React from "react";
import Link from "next/link";
import { Container } from "../layout/Container";
import { cn } from "@/lib/utils";

interface FooterProps extends React.HTMLAttributes<HTMLElement> {
  type?: "global" | "case";
  prevStory?: { href: string; label: string };
  nextStory?: { href: string; label: string };
}

export function Footer({ 
  className, 
  type = "global", 
  prevStory, 
  nextStory, 
  ...props 
}: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={cn(
        "w-full bg-mist-100/50 border-t border-fog-200 py-trunk mt-auto",
        className
      )}
      {...props}
    >
      <Container>
        {type === "case" ? (
          /* Contextual Case Navigation Footer */
          <nav className="flex flex-col sm:flex-row items-center justify-between gap-branch font-body text-caption uppercase tracking-wider text-bark-700">
            {prevStory ? (
              <Link
                href={prevStory.href}
                className="hover:text-amber-500 transition-colors duration-fast focus-visible:outline focus-visible:outline-2 focus-visible:outline-moss-500 rounded-pebble px-seed py-root"
              >
                ← {prevStory.label}
              </Link>
            ) : (
              <span className="opacity-0 pointer-events-none hidden sm:inline" aria-hidden="true" />
            )}

            <Link
              href="/"
              className="hover:text-amber-500 transition-colors duration-fast focus-visible:outline focus-visible:outline-2 focus-visible:outline-moss-500 rounded-pebble px-twig py-root border border-stone-100 hover:border-amber-300"
            >
              Voltar ao Início
            </Link>

            {nextStory ? (
              <Link
                href={nextStory.href}
                className="hover:text-amber-500 transition-colors duration-fast focus-visible:outline focus-visible:outline-2 focus-visible:outline-moss-500 rounded-pebble px-seed py-root"
              >
                {nextStory.label} →
              </Link>
            ) : (
              <span className="opacity-0 pointer-events-none hidden sm:inline" aria-hidden="true" />
            )}
          </nav>
        ) : (
          /* Global Footer */
          <div className="flex flex-col md:flex-row items-center justify-between gap-branch text-center md:text-left">
            {/* Left Brand Details */}
            <div className="flex flex-col gap-seed">
              <span className="font-display text-heading-sm text-bark-900">
                Paulera Filmes
              </span>
              <p className="font-body text-caption text-stone-200 italic">
                Cada história começa com a escuta.
              </p>
            </div>

            {/* Right Copyright & Social Links */}
            <div className="flex flex-col md:items-end gap-twig font-body text-caption text-stone-200">
              <div className="flex items-center justify-center md:justify-end gap-branch">
                <a
                  href="https://vimeo.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-500 transition-colors duration-fast focus-visible:outline focus-visible:outline-2 focus-visible:outline-moss-500 rounded-pebble px-seed py-root"
                >
                  Vimeo
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-500 transition-colors duration-fast focus-visible:outline focus-visible:outline-2 focus-visible:outline-moss-500 rounded-pebble px-seed py-root"
                >
                  Instagram
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-500 transition-colors duration-fast focus-visible:outline focus-visible:outline-2 focus-visible:outline-moss-500 rounded-pebble px-seed py-root"
                >
                  LinkedIn
                </a>
              </div>
              <p>
                © {currentYear} Paulera Filmes. Todos os direitos reservados.
              </p>
            </div>
          </div>
        )}
      </Container>
    </footer>
  );
}

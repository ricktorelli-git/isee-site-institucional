"use client"

import { useInView } from "react-intersection-observer"
import {
  Quote,
  Award,
  Building2,
  TrendingUp,
  GraduationCap,
  Users,
  BookOpen,
  PiggyBank,
  ArrowRight
} from "lucide-react"
import { cn } from "@/lib/utils"
import {Button} from "@/components/ui/button";

export function FounderSection() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section id="sobre" aria-labelledby="sobre-titulo" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">

        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Sobre o Fundador
          </span>
          <h2 id="sobre-titulo" className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Gestão corporativa antes do código
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A Iseecodes nasceu da minha vivência real no campo de batalha corporativo de alta performance.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Esse é o fundamento por trás de cada solução tecnológica que entregamos.
          </p>
          <a href="#contato" className="mt-6 inline-block">
            <Button
                size="lg"
                className="relative overflow-hidden bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg group"
                aria-label="Solicitar orçamento para evoluir sua gestão"
            >
               				 <span className="relative z-10 flex items-center">
                  				Entrar em Contato
                  				<ArrowRight
                                    className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1"
                                    aria-hidden="true"
                                />
							</span>
              <span
                  className="absolute inset-0 bg-linear-to-r from-accent via-white/20 to-accent bg-size-[200%_100%] animate-[shimmer_2s_linear_infinite]"
                  aria-hidden="true"
              />
            </Button>
          </a>
        </div>

        {/* Main Content Grid */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Image Section */}
            <div className={cn("relative", inView && "animate-in fade-in slide-in-from-left-10 duration-700")}>
              <div className="relative">
                <figure className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/socio-fundador.jpeg"
                    alt="Ricardo Tortorelli, Contador e Sócio-fundador da Iseecodes"
                    className="w-full aspect-4/5 object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <div
                    className="absolute inset-0 bg-linear-to-t from-secondary/90 via-secondary/20 to-transparent"
                    aria-hidden="true"
                  />
                  <figcaption className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="text-2xl font-bold text-white block">Ricardo Tortorelli</span>
                    <span className="text-white/80">Sócio-fundador</span>
                  </figcaption>
                </figure>

                <div
                  className="absolute -right-4 top-8 bg-accent text-accent-foreground rounded-xl px-4 py-3 shadow-xl hover:scale-105 transition-transform"
                  aria-hidden="true"
                >
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    <span className="font-bold">35+ Anos</span>
                  </div>
                </div>

                <div
                  className="absolute -z-10 -bottom-4 -right-4 w-full h-full bg-primary/20 rounded-2xl"
                  aria-hidden="true"
                />
              </div>
            </div>

            {/* Content Section */}
            <div className={cn(inView && "animate-in fade-in slide-in-from-right-10 duration-700 delay-200")}>

              {/* Formação Acadêmica */}
              <div className="flex items-start gap-3 mb-8 p-4 rounded-xl bg-muted/50 border-l-4 border-primary">
                <GraduationCap className="w-6 h-6 text-primary mt-0.5 shrink-0" aria-hidden="true" />
                <div>
                  <div className="font-semibold text-foreground">Formação Acadêmica</div>
                  <div className="text-sm text-muted-foreground">
                    Contador <span className="font-medium text-foreground">PUC-RS (1997)</span> •
                    Pós-Graduado <span className="font-medium text-foreground">FGV (2005)</span>
                  </div>
                </div>
              </div>

              {/* Blockquote */}
              <blockquote className="relative mb-6">
                <Quote className="absolute -left-2 -top-2 w-10 h-10 text-primary/20" aria-hidden="true" />
                <p className="pl-8 text-lg text-muted-foreground leading-relaxed italic">
                  &ldquo;Depois de décadas atuando na gestão de um dos grandes fundos de previdência
                  complementar no Brasil, compreendi de perto os desafios reais da gestão corporativa
                  de alta performance. A Iseecodes nasceu dessa experiência: uma software house dedicada
                  a transformar esse conhecimento em soluções tecnológicas robustas, desenvolvidas
                  para aprimorar processos, apoiar decisões e gerar valor para nossos clientes.&rdquo;
                </p>
              </blockquote>

              {/* Key insight */}
              <div className="bg-accent/10 rounded-lg p-5 mb-8 border border-accent/20">
                <p className="text-foreground font-semibold">
                  ✓ Gestão antes do código. Eis nossa vantagem competitiva.
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Não construímos tecnologia genérica. Traduzo a realidade da gestão corporativa em
                  soluções de software especializadas, criadas para resolver problemas reais de
                  gestão e apoiar decisões com mais eficiência e inteligência e solidez.
                </p>
              </div>

              {/* Representatividade */}
              <div className="flex items-start gap-3 mb-6 p-4 rounded-xl bg-accent/10 border border-accent/20">
                <Users className="w-6 h-6 text-accent mt-0.5 shrink-0" aria-hidden="true" />
                <div>
                  <div className="font-semibold text-foreground">Representatividade Nacional</div>
                  <div className="text-sm text-muted-foreground">
                    Por quase <span className="font-medium text-foreground">10 anos</span>, paralelamente
                    à atividade profissional, atuei como membro da
                    <span className="font-medium text-foreground">
                      {" "}
                      Comissão Técnica Nacional de Contabilidade da ABRAPP
                    </span>{" "}
                    (Associação Brasileira das Entidades Fechadas de Previdência Complementar)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width Expertise Section */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4" role="list" aria-label="Áreas de expertise">
            <div
              className={cn(
                "flex items-start gap-3 p-5 rounded-xl bg-muted/50 hover:bg-muted transition-colors",
                inView && "animate-in fade-in slide-in-from-bottom-4"
              )}
              style={{ animationDelay: "0ms" }}
              role="listitem"
            >
              <PiggyBank className="w-6 h-6 text-primary mt-0.5 shrink-0" aria-hidden="true" />
              <div>
                <div className="font-semibold text-foreground text-sm">Gestão Financeira</div>
                <div className="text-xs text-muted-foreground mt-1">Experiência prática em gestão de recursos e sustentabilidade financeira</div>
              </div>
            </div>

            <div
              className={cn(
                "flex items-start gap-3 p-5 rounded-xl bg-muted/50 hover:bg-muted transition-colors",
                inView && "animate-in fade-in slide-in-from-bottom-4"
              )}
              style={{ animationDelay: "100ms" }}
              role="listitem"
            >
              <Building2 className="w-6 h-6 text-primary mt-0.5 shrink-0" aria-hidden="true" />
              <div>
                <div className="font-semibold text-foreground text-sm">Controladoria</div>
                <div className="text-xs text-muted-foreground mt-1">Governança, controle e tomada de decisão baseada em dados</div>
              </div>
            </div>

            <div
              className={cn(
                "flex items-start gap-3 p-5 rounded-xl bg-muted/50 hover:bg-muted transition-colors",
                inView && "animate-in fade-in slide-in-from-bottom-4"
              )}
              style={{ animationDelay: "200ms" }}
              role="listitem"
            >
              <BookOpen className="w-6 h-6 text-accent mt-0.5 shrink-0" aria-hidden="true" />
              <div>
                <div className="font-semibold text-foreground text-sm">Contabilidade</div>
                <div className="text-xs text-muted-foreground mt-1">Rigor técnico aplicado à estrutura financeira das organizações</div>
              </div>
            </div>

            <div
              className={cn(
                "flex items-start gap-3 p-5 rounded-xl bg-muted/50 hover:bg-muted transition-colors",
                inView && "animate-in fade-in slide-in-from-bottom-4"
              )}
              style={{ animationDelay: "300ms" }}
              role="listitem"
            >
              <TrendingUp className="w-6 h-6 text-accent mt-0.5 shrink-0" aria-hidden="true" />
              <div>
                <div className="font-semibold text-foreground text-sm">Conselho Fiscal</div>
                <div className="text-xs text-muted-foreground mt-1">Visão estratégica para avaliação e fiscalização corporativa</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

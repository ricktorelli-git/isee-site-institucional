"use client"

import { useInView } from "react-intersection-observer"
import { Quote, Award, Building2, TrendingUp, GraduationCap, Users, BookOpen, PiggyBank } from "lucide-react"
import { cn } from "@/lib/utils"

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
            A Iseecodes surgiu da vivência real no campo de batalha corporativo de alta performance.</p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Esse é o fundamento que sustenta cada solução desenvolvida.
          </p>
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
                    alt="Ricardo Tortorelli, Contador e Sócio Proprietário da Iseecodes"
                    className="w-full aspect-4/5 object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <div
                    className="absolute inset-0 bg-linear-to-t from-secondary/90 via-secondary/20 to-transparent"
                    aria-hidden="true"
                  />
                  <figcaption className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="text-2xl font-bold text-white block">Ricardo Costa Tortorelli</span>
                    <span className="text-white/80">Sócio Proprietário</span>
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
                  &ldquo;Minha trajetória por décadas na gestão de um grande fundo de previdência
                  complementar no Brasil, proporcionou uma visão completa de processos em ambientes
                  corporativos de alta performance. Na Iseecodes, transformamos
                  essa experiência em soluções tecnológicas que realmente entendem os desafios de
                  gestão do cliente.&rdquo;
                </p>
              </blockquote>

              {/* Key insight */}
              <div className="bg-accent/10 rounded-lg p-5 mb-8 border border-accent/20">
                <p className="text-foreground font-semibold">
                  ✓ Gestão antes do código. Eis nossa vantagem competitiva.
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Não desenvolvemos tecnologia genérica, vivenciamos a realidade de gestão e criamos
                  soluções especializadas que resolvem problemas reais.
                </p>
              </div>

              {/* Representatividade */}
              <div className="flex items-start gap-3 mb-6 p-4 rounded-xl bg-accent/10 border border-accent/20">
                <Users className="w-6 h-6 text-accent mt-0.5 shrink-0" aria-hidden="true" />
                <div>
                  <div className="font-semibold text-foreground">Representatividade Nacional</div>
                  <div className="text-sm text-muted-foreground">
                    Por quase <span className="font-medium text-foreground">10 anos</span>, paralelamente
                    à atividade profissional, atuou como membro da
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
                <div className="text-xs text-muted-foreground mt-1">Especialidade principal</div>
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
                <div className="text-xs text-muted-foreground mt-1">Governança como fundamento</div>
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
                <div className="text-xs text-muted-foreground mt-1">Técnica apurada</div>
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
                <div className="text-xs text-muted-foreground mt-1">Visão estratégica</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

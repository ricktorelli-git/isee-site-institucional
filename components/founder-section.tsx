"use client"

import { useInView } from "react-intersection-observer"
import { Quote, Award, Building2, TrendingUp, GraduationCap, Users, BookOpen, PiggyBank } from "lucide-react"
import { cn } from "@/lib/utils"

export function FounderSection() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section id="sobre" aria-labelledby="sobre-titulo" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image side */}
            <div className={cn("relative", inView && "animate-in fade-in slide-in-from-left-10 duration-700")}>
              <div className="relative">
                <figure className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/professional-businessman-contador-executive-portra.jpg"
                    alt="Ricardo Tortorelli, Contador e Sócio Proprietário da Iseecodes, com mais de 35 anos de experiência em gestão corporativa"
                    className="w-full aspect-[4/5] object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent"
                    aria-hidden="true"
                  />
                  <figcaption className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="text-2xl font-bold text-white block">Ricardo Tortorelli</span>
                    <span className="text-white/80">Sócio Proprietário & Contador</span>
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

            {/* Content side */}
            <div className={cn(inView && "animate-in fade-in slide-in-from-right-10 duration-700 delay-200")}>
              <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
                Sobre o Fundador
              </span>

              <h2 id="sobre-titulo" className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Experiência que faz a diferença
              </h2>

              <div className="flex items-start gap-3 mb-6 p-4 rounded-xl bg-muted/50 border-l-4 border-primary">
                <GraduationCap className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                <div>
                  <div className="font-semibold text-foreground">Formação Acadêmica</div>
                  <div className="text-sm text-muted-foreground">
                    Contador formado pela <span className="font-medium text-foreground">PUC-RS (1997)</span> |
                    Pós-Graduado pela <span className="font-medium text-foreground">FGV (2005)</span>
                  </div>
                </div>
              </div>

              <blockquote className="relative mb-6">
                <Quote className="absolute -left-2 -top-2 w-10 h-10 text-primary/20" aria-hidden="true" />
                <p className="pl-8 text-lg text-muted-foreground leading-relaxed italic">
                  &ldquo;Minha trajetória de 35 anos na gestão de um dos maiores Fundos de Previdência do Brasil me
                  proporcionou uma visão completa de processos corporativos. Na Iseecodes, transformamos essa
                  experiência em soluções tecnológicas que realmente entendem o negócio do cliente.&rdquo;
                </p>
              </blockquote>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Com atuação nas áreas de{" "}
                <span className="font-medium text-foreground">
                  Controladoria, Financeira, Contábil e Conselho Fiscal
                </span>
                , desenvolvo soluções que integram a excelência técnica com a visão estratégica de quem viveu a
                complexidade da gestão corporativa. A Iseecodes está preparada para desenvolver qualquer solução web e
                mobile, mas nossa{" "}
                <span className="font-medium text-foreground">especialidade em gestão financeira</span> é nosso maior
                diferencial.
              </p>

              <div className="flex items-start gap-3 mb-6 p-4 rounded-xl bg-accent/10 border border-accent/20">
                <Users className="w-6 h-6 text-accent mt-0.5 flex-shrink-0" aria-hidden="true" />
                <div>
                  <div className="font-semibold text-foreground">Representatividade Nacional</div>
                  <div className="text-sm text-muted-foreground">
                    Por quase <span className="font-medium text-foreground">10 anos</span> membro da
                    <span className="font-medium text-foreground">
                      {" "}
                      Comissão Técnica Nacional de Contabilidade da ABRAPP
                    </span>{" "}
                    (Associação Brasileira das Entidades Fechadas de Previdência Complementar)
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4" role="list" aria-label="Áreas de expertise">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-muted/50" role="listitem">
                  <PiggyBank className="w-6 h-6 text-primary mt-0.5" aria-hidden="true" />
                  <div>
                    <div className="font-semibold text-foreground">Gestão Financeira</div>
                    <div className="text-sm text-muted-foreground">Especialidade e diferencial</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-muted/50" role="listitem">
                  <Building2 className="w-6 h-6 text-primary mt-0.5" aria-hidden="true" />
                  <div>
                    <div className="font-semibold text-foreground">Controladoria</div>
                    <div className="text-sm text-muted-foreground">Governança e controles</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-muted/50" role="listitem">
                  <BookOpen className="w-6 h-6 text-accent mt-0.5" aria-hidden="true" />
                  <div>
                    <div className="font-semibold text-foreground">Contabilidade</div>
                    <div className="text-sm text-muted-foreground">Expertise técnica</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-muted/50" role="listitem">
                  <TrendingUp className="w-6 h-6 text-accent mt-0.5" aria-hidden="true" />
                  <div>
                    <div className="font-semibold text-foreground">Conselho Fiscal</div>
                    <div className="text-sm text-muted-foreground">Visão estratégica</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

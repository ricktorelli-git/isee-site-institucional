"use client"

import { useInView } from "react-intersection-observer"
import { Quote, Award, Building2, TrendingUp, GraduationCap, Users, BookOpen, PiggyBank, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export function FounderSection() {
    const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

    return (
        <section id="sobre" aria-labelledby="sobre-titulo" className="bg-background py-24" ref={ref}>
            <div className="container mx-auto px-4 lg:px-8">
                <div className="mx-auto mb-16 max-w-4xl text-center">
          <span className="mb-4 inline-block text-primary font-semibold text-sm uppercase tracking-wider">
            A base que sustenta a Iseecodes
          </span>

                    <h2 id="sobre-titulo" className="mb-6 text-4xl font-bold text-foreground text-balance md:text-5xl">
                        Gestão corporativa antes do código
                    </h2>

                    <p className="text-lg leading-relaxed text-muted-foreground">
                        A Iseecodes nasce de uma trajetória sólida em gestão, controladoria, finanças e governança. Mais do que
                        migrar para a tecnologia, a proposta é levar essa vivência para a construção de soluções úteis,
                        consistentes e conectadas à realidade das empresas.
                    </p>

                    <a href="#contato" className="mt-6 inline-block">
                        <Button
                            size="lg"
                            className="group bg-accent px-8 py-6 text-lg font-semibold text-accent-foreground hover:bg-accent/90"
                            aria-label="Descrever minha demanda para a Iseecodes"
                        >
              <span className="relative z-10 flex items-center">
                Descreva sua demanda
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </span>
                        </Button>
                    </a>
                </div>

                <div className="mx-auto mb-18 max-w-6xl">
                    <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
                        <div className={cn("relative", inView && "animate-in fade-in slide-in-from-left-8 duration-700")}>
                            <div className="relative">
                                <figure className="relative overflow-hidden rounded-2xl shadow-2xl">
                                    <img
                                        src="/socio-fundador.jpeg"
                                        alt="Ricardo Tortorelli, sócio-fundador da Iseecodes"
                                        className="aspect-4/5 w-full object-cover"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-secondary/90 via-secondary/20 to-transparent" aria-hidden="true" />
                                    <figcaption className="absolute right-0 bottom-0 left-0 p-6">
                                        <span className="block text-2xl font-bold text-white">Ricardo Tortorelli</span>
                                        <span className="text-white/80">Sócio-fundador</span>
                                    </figcaption>
                                </figure>

                                <div
                                    className="absolute -top-3 -right-3 rounded-xl bg-accent px-4 py-3 text-accent-foreground shadow-lg transition-transform hover:scale-[1.02]"
                                    aria-hidden="true"
                                >
                                    <div className="flex items-center gap-2">
                                        <Award className="h-5 w-5" />
                                        <span className="font-bold">35+ anos em gestão</span>
                                    </div>
                                </div>

                                <div className="absolute -right-4 -bottom-4 -z-10 h-full w-full rounded-2xl bg-primary/15" aria-hidden="true" />
                            </div>
                        </div>

                        <div className={cn(inView && "animate-in fade-in slide-in-from-right-8 duration-700 delay-150")}>
                            <div className="mb-8 flex items-start gap-3 rounded-xl border-l-4 border-primary bg-muted/50 p-4">
                                <GraduationCap className="mt-0.5 h-6 w-6 shrink-0 text-primary" aria-hidden="true" />
                                <div>
                                    <div className="font-semibold text-foreground">Formação e base técnica</div>
                                    <div className="text-sm text-muted-foreground">
                                        <span className="font-medium text-foreground">Contador</span> pela <span className="font-medium text-foreground">PUC-RS</span> e pós-graduado em <span className="font-medium text-foreground">Finanças Empresariais</span> pela <span className="font-medium text-foreground">FGV</span>.
                                    </div>
                                </div>
                            </div>

                            <blockquote className="relative mb-8">
                                <Quote className="absolute -top-2 -left-2 h-10 w-10 text-primary/20" aria-hidden="true" />
                                <p className="pl-8 text-lg leading-relaxed text-muted-foreground italic">
                                    &ldquo;Depois de décadas atuando em gestão, controladoria e finanças, entendi que tecnologia só faz
                                    sentido quando responde a necessidades reais da operação, do controle e da decisão. A Iseecodes
                                    nasce dessa convicção.&rdquo;
                                </p>
                            </blockquote>

                            <div className="mb-8 rounded-lg border border-accent/20 bg-accent/10 p-5">
                                <p className="font-semibold text-foreground">✓ A Iseecodes nasce nova, mas não nasce do zero.</p>
                                <p className="mt-2 text-sm text-muted-foreground">
                                    A empresa inicia sua atuação com seriedade, clareza de propósito e compromisso com utilidade prática.
                                    O objetivo não é prometer mais do que pode entregar, mas construir soluções consistentes, úteis e
                                    alinhadas à realidade de cada cliente.
                                </p>
                            </div>

                            <div className="flex items-start gap-3 rounded-xl border border-accent/20 bg-accent/10 p-4">
                                <Users className="mt-0.5 h-6 w-6 shrink-0 text-accent" aria-hidden="true" />
                                <div>
                                    <div className="font-semibold text-foreground">Atuação técnica em âmbito nacional</div>
                                    <div className="text-sm text-muted-foreground">
                                        Atuação como membro da <span className="font-medium text-foreground">Comissão Técnica Nacional de Contabilidade da ABRAPP</span>, em paralelo a uma trajetória de mais de <span className="font-medium text-foreground">35 anos</span> em gestão financeira, controladoria, contabilidade gerencial e conselho fiscal, construída em um grande fundo brasileiro de previdência privada, em contextos que exigem precisão, critério e consistência de longo prazo.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mx-auto max-w-6xl">
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-4" role="list" aria-label="Bases de experiência que sustentam a Iseecodes">
                        <div
                            className={cn(
                                "flex items-start gap-3 rounded-xl bg-muted/50 p-5 transition-colors hover:bg-muted",
                                inView && "animate-in fade-in slide-in-from-bottom-4",
                            )}
                            style={{ animationDelay: "0ms" }}
                            role="listitem"
                        >
                            <PiggyBank className="mt-0.5 h-6 w-6 shrink-0 text-primary" aria-hidden="true" />
                            <div>
                                <div className="text-sm font-semibold text-foreground">Gestão financeira e sustentabilidade</div>
                                <div className="mt-1 text-xs text-muted-foreground">Vivência prática em gestão de recursos, equilíbrio financeiro e visão de continuidade.</div>
                            </div>
                        </div>

                        <div
                            className={cn(
                                "flex items-start gap-3 rounded-xl bg-muted/50 p-5 transition-colors hover:bg-muted",
                                inView && "animate-in fade-in slide-in-from-bottom-4",
                            )}
                            style={{ animationDelay: "80ms" }}
                            role="listitem"
                        >
                            <Building2 className="mt-0.5 h-6 w-6 shrink-0 text-primary" aria-hidden="true" />
                            <div>
                                <div className="text-sm font-semibold text-foreground">Controle e governança</div>
                                <div className="mt-1 text-xs text-muted-foreground">Repertório em mecanismos de controle, governança e apoio à tomada de decisão com base em informação confiável.</div>
                            </div>
                        </div>

                        <div
                            className={cn(
                                "flex items-start gap-3 rounded-xl bg-muted/50 p-5 transition-colors hover:bg-muted",
                                inView && "animate-in fade-in slide-in-from-bottom-4",
                            )}
                            style={{ animationDelay: "160ms" }}
                            role="listitem"
                        >
                            <BookOpen className="mt-0.5 h-6 w-6 shrink-0 text-accent" aria-hidden="true" />
                            <div>
                                <div className="text-sm font-semibold text-foreground">Contabilidade e gestão</div>
                                <div className="mt-1 text-xs text-muted-foreground">Uso da contabilidade como instrumento de leitura, direcionamento e suporte à tomada de decisão.</div>
                            </div>
                        </div>

                        <div
                            className={cn(
                                "flex items-start gap-3 rounded-xl bg-muted/50 p-5 transition-colors hover:bg-muted",
                                inView && "animate-in fade-in slide-in-from-bottom-4",
                            )}
                            style={{ animationDelay: "240ms" }}
                            role="listitem"
                        >
                            <TrendingUp className="mt-0.5 h-6 w-6 shrink-0 text-accent" aria-hidden="true" />
                            <div>
                                <div className="text-sm font-semibold text-foreground">Leitura estratégica e conformidade</div>
                                <div className="mt-1 text-xs text-muted-foreground">Experiência em conselho fiscal, com leitura crítica de estruturas corporativas e de processos decisórios de longo prazo.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

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
    ArrowRight,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export function FounderSection() {
    const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

    return (
        <section
            id="sobre"
            aria-labelledby="sobre-titulo"
            className="py-24 bg-background"
            ref={ref}
        >
            <div className="container mx-auto px-4 lg:px-8">
                <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            A base que sustenta a Iseecodes
          </span>

                    <h2
                        id="sobre-titulo"
                        className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance"
                    >
                        Gestão corporativa antes do código
                    </h2>

                    <p className="text-lg text-muted-foreground leading-relaxed">
                        A Iseecodes nasce de uma trajetória sólida em gestão, controladoria, finanças e
                        governança. Mais do que migrar para a tecnologia, a proposta é levar essa vivência para
                        a construção de soluções úteis, consistentes e conectadas à realidade das empresas.
                    </p>

                    <a href="#contato" className="mt-6 inline-block">
                        <Button
                            size="lg"
                            className="relative overflow-hidden bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg group"
                            aria-label="Entrar em contato com a Iseecodes"
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

                <div className="max-w-6xl mx-auto mb-16">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                        <div
                            className={cn(
                                "relative",
                                inView && "animate-in fade-in slide-in-from-left-10 duration-700"
                            )}
                        >
                            <div className="relative">
                                <figure className="relative rounded-2xl overflow-hidden shadow-2xl">
                                    <img
                                        src="/socio-fundador.jpeg"
                                        alt="Ricardo Tortorelli, sócio-fundador da Iseecodes"
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
                                        <span className="font-bold">35+ anos em gestão</span>
                                    </div>
                                </div>

                                <div
                                    className="absolute -z-10 -bottom-4 -right-4 w-full h-full bg-primary/20 rounded-2xl"
                                    aria-hidden="true"
                                />
                            </div>
                        </div>

                        <div
                            className={cn(
                                inView && "animate-in fade-in slide-in-from-right-10 duration-700 delay-200"
                            )}
                        >
                            <div className="flex items-start gap-3 mb-8 p-4 rounded-xl bg-muted/50 border-l-4 border-primary">
                                <GraduationCap className="w-6 h-6 text-primary mt-0.5 shrink-0" aria-hidden="true" />
                                <div>
                                    <div className="font-semibold text-foreground">Formação e base técnica</div>
                                    <div className="text-sm text-muted-foreground">
                                        <span className="font-medium text-foreground">Contador</span> pela{" "}
                                        <span className="font-medium text-foreground">PUC-RS</span> e pós-graduado em{" "}
                                        <span className="font-medium text-foreground">Finanças Empresariais</span> pela{" "}
                                        <span className="font-medium text-foreground">FGV</span>.
                                    </div>
                                </div>
                            </div>

                            <blockquote className="relative mb-6">
                                <Quote className="absolute -left-2 -top-2 w-10 h-10 text-primary/20" aria-hidden="true" />
                                <p className="pl-8 text-lg text-muted-foreground leading-relaxed italic">
                                    &ldquo;Depois de décadas atuando em gestão, controladoria e finanças, entendi que
                                    tecnologia só faz sentido quando responde a necessidades reais da operação, do
                                    controle e da decisão. A Iseecodes nasce dessa convicção.&rdquo;
                                </p>
                            </blockquote>

                            <div className="bg-accent/10 rounded-lg p-5 mb-8 border border-accent/20">
                                <p className="text-foreground font-semibold">
                                    ✓ A Iseecodes nasce nova, mas não nasce do zero.
                                </p>
                                <p className="text-sm text-muted-foreground mt-2">
                                    A empresa inicia sua atuação com seriedade, clareza de propósito e compromisso com
                                    utilidade prática. O objetivo não é prometer mais do que pode entregar, mas
                                    construir soluções consistentes, úteis e alinhadas à realidade de cada cliente.
                                </p>
                            </div>

                            <div className="flex items-start gap-3 mb-6 p-4 rounded-xl bg-accent/10 border border-accent/20">
                                <Users className="w-6 h-6 text-accent mt-0.5 shrink-0" aria-hidden="true" />
                                <div>
                                    <div className="font-semibold text-foreground">Atuação técnica em âmbito nacional</div>
                                    <div className="text-sm text-muted-foreground">
                                        Atuação como membro da{" "}
                                        <span className="font-medium text-foreground">
    Comissão Técnica Nacional de Contabilidade da ABRAPP
  </span>
                                        , em paralelo a uma trajetória de mais de{" "}
                                        <span className="font-medium text-foreground">35 anos</span> em gestão financeira,
                                        controladoria, contabilidade gerencial e conselho fiscal, construída em um grande fundo
                                        brasileiro de previdência privada, em contextos que exigem precisão, critério e consistência
                                        de longo prazo.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-6xl mx-auto">
                    <div
                        className="grid grid-cols-2 md:grid-cols-4 gap-4"
                        role="list"
                        aria-label="Bases de experiência que sustentam a Iseecodes"
                    >
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
                                <div className="font-semibold text-foreground text-sm">
                                    Gestão financeira e sustentabilidade
                                </div>
                                <div className="text-xs text-muted-foreground mt-1">
                                    Vivência prática em gestão de recursos, equilíbrio financeiro e visão de
                                    continuidade.
                                </div>
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
                                <div className="font-semibold text-foreground text-sm">
                                    Controle e governança
                                </div>
                                <div className="text-xs text-muted-foreground mt-1">
                                    Repertório em mecanismos de controle, governança e apoio à tomada de decisão com base em
                                    informação confiável.
                                </div>
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
                                <div className="font-semibold text-foreground text-sm">
                                    Contabilidade e gestão
                                </div>
                                <div className="text-xs text-muted-foreground mt-1">
                                    Uso da contabilidade como instrumento de leitura, direcionamento e suporte à
                                    tomada de decisão.
                                </div>
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
                                <div className="font-semibold text-foreground text-sm">
                                    Leitura estratégica e conformidade
                                </div>
                                <div className="text-xs text-muted-foreground mt-1">
                                    Experiência em conselho fiscal, com leitura crítica de estruturas
                                    corporativas e de processos decisórios de longo prazo.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
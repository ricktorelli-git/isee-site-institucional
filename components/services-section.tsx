"use client"

import { useInView } from "react-intersection-observer"
import {
    GitGraph,
    ArrowRightLeft,
    Lock,
    Target,
    ArrowRight,
    Check,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import type { ReactNode } from "react"

type ServiceItem = {
    icon: typeof GitGraph
    title: string
    description: ReactNode
}

const services: ServiceItem[] = [
    {
        icon: GitGraph,
        title: "Processos e operação",
        description: (
            <>
                <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                    Organizamos fluxos, rotinas e etapas para dar mais clareza e consistência à operação.
                </p>

                <div className="mt-4 rounded-2xl border border-primary/15 bg-primary/5 p-4 shadow-sm">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary/90">
                        Sinais comuns neste tipo de demanda
                    </p>

                    <ul className="mt-3 space-y-2 text-sm leading-relaxed md:text-[15px]">
                        <li className="flex items-start gap-2">
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                            <span className="font-semibold text-foreground/95">
                Preciso organizar melhor o fluxo da operação.
              </span>
                        </li>
                        <li className="flex items-start gap-2">
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                            <span className="font-semibold text-foreground/95">
                Tenho que reduzir retrabalho e tarefas manuais.
              </span>
                        </li>
                        <li className="flex items-start gap-2">
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                            <span className="font-semibold text-foreground/95">
                Quero mais clareza nas etapas e responsáveis.
              </span>
                        </li>
                    </ul>
                </div>
            </>
        ),
    },
    {
        icon: ArrowRightLeft,
        title: "Integração e informação",
        description: (
            <>
                <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                    Integramos e organizamos informações para reduzir ruído e dar mais consistência ao processo.
                </p>

                <div className="mt-4 rounded-2xl border border-primary/15 bg-primary/5 p-4 shadow-sm">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary/90">
                        Sinais comuns neste tipo de demanda
                    </p>

                    <ul className="mt-3 space-y-2 text-sm leading-relaxed md:text-[15px]">
                        <li className="flex items-start gap-2">
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                            <span className="font-semibold text-foreground/95">
                Preciso integrar o WhatsApp ao processo.
              </span>
                        </li>
                        <li className="flex items-start gap-2">
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                            <span className="font-semibold text-foreground/95">
                Tenho que centralizar informações espalhadas.
              </span>
                        </li>
                        <li className="flex items-start gap-2">
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                            <span className="font-semibold text-foreground/95">
                Quero que sistemas e dados conversem melhor.
              </span>
                        </li>
                    </ul>
                </div>
            </>
        ),
    },
    {
        icon: Lock,
        title: "Controle e governança",
        description: (
            <>
                <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                    Estruturamos acessos, aprovações e rastreabilidade para reforçar controle e governança.
                </p>

                <div className="mt-4 rounded-2xl border border-primary/15 bg-primary/5 p-4 shadow-sm">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary/90">
                        Sinais comuns neste tipo de demanda
                    </p>

                    <ul className="mt-3 space-y-2 text-sm leading-relaxed md:text-[15px]">
                        <li className="flex items-start gap-2">
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                            <span className="font-semibold text-foreground/95">
                Preciso definir melhor aprovações e acessos.
              </span>
                        </li>
                        <li className="flex items-start gap-2">
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                            <span className="font-semibold text-foreground/95">
                Tenho que registrar o histórico das ações.
              </span>
                        </li>
                        <li className="flex items-start gap-2">
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                            <span className="font-semibold text-foreground/95">
                Quero mais controle sobre processos críticos.
              </span>
                        </li>
                    </ul>
                </div>
            </>
        ),
    },
    {
        icon: Target,
        title: "Indicadores e decisão",
        description: (
            <>
                <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                    Organizamos indicadores e informações gerenciais para apoiar decisões com mais clareza.
                </p>

                <div className="mt-4 rounded-2xl border border-primary/15 bg-primary/5 p-4 shadow-sm">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary/90">
                        Sinais comuns neste tipo de demanda
                    </p>

                    <ul className="mt-3 space-y-2 text-sm leading-relaxed md:text-[15px]">
                        <li className="flex items-start gap-2">
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                            <span className="font-semibold text-foreground/95">
                Preciso enxergar melhor os meus números.
              </span>
                        </li>
                        <li className="flex items-start gap-2">
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                            <span className="font-semibold text-foreground/95">
                Tenho que acompanhar indicadores com clareza.
              </span>
                        </li>
                        <li className="flex items-start gap-2">
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                            <span className="font-semibold text-foreground/95">
                Quero decidir com informação mais organizada.
              </span>
                        </li>
                    </ul>
                </div>
            </>
        ),
    },
]

export function ServicesSection() {
    const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

    return (
        <section
            id="servicos"
            aria-labelledby="servicos-titulo"
            className="bg-muted/30 py-24"
            ref={ref}
        >
            <div className="container mx-auto px-4 lg:px-8">
                <div className="mx-auto mb-16 max-w-5xl text-center md:mb-18">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            Pilares de atuação
          </span>

                    <h2
                        id="servicos-titulo"
                        className="mb-6 text-3xl font-bold text-balance text-foreground md:text-4xl lg:text-5xl"
                    >
                        Quatro pilares que orientam como estruturamos a solução da sua demanda.
                    </h2>

                    <p className="mx-auto max-w-4xl text-lg leading-relaxed text-muted-foreground">
                        Uma demanda pode começar em um ponto específico, mas soluções mais consistentes costumam integrar processo, informação, controle e decisão.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2" role="list">
                    {services.map((service, index) => (
                        <Card
                            key={service.title}
                            role="listitem"
                            className={cn(
                                "group relative overflow-hidden border border-border/50 bg-background transition-all duration-500",
                                "hover:-translate-y-1 hover:border-accent/60 hover:shadow-xl hover:shadow-accent/5",
                                inView && "animate-in fade-in slide-in-from-bottom-4",
                            )}
                            style={{ animationDelay: `${index * 100}ms`, animationFillMode: "both" }}
                        >
                            <div
                                className="pointer-events-none absolute inset-0 bg-linear-to-br from-accent/8 via-accent/4 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                                aria-hidden="true"
                            />
                            <CardContent className="p-6 md:p-8">
                                <div
                                    className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-all duration-300 group-hover:scale-105 group-hover:bg-primary"
                                    aria-hidden="true"
                                >
                                    <service.icon className="h-7 w-7 text-primary transition-colors group-hover:text-primary-foreground" />
                                </div>

                                <h3 className="mb-3 text-xl font-semibold text-foreground">
                                    {service.title}
                                </h3>

                                <div>{service.description}</div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div
                    className={cn(
                        "mt-16 flex justify-center transition-all duration-700 md:mt-18",
                        inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
                    )}
                >
                    <a href="#contato" className="inline-block">
                        <Button
                            size="lg"
                            className="rounded-xl bg-button-primary px-8 py-6 text-base font-semibold text-button-primary-foreground shadow-lg transition-all duration-300 hover:bg-button-primary-hover hover:shadow-xl md:text-lg"
                            aria-label="Descrever sua demanda para a Iseecodes"
                        >
              <span className="flex items-center">
                Descreva sua demanda
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </span>
                        </Button>
                    </a>
                </div>
            </div>
        </section>
    )
}

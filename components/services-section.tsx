"use client"

import { useInView } from "react-intersection-observer"
import { GitGraph, ArrowRightLeft, Lock, Target, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const services = [
    {
        icon: GitGraph,
        title: "Processos e operação",
        description:
            "Quando a rotina depende de improviso, há retrabalho constante ou as etapas não estão claras, a operação perde fluidez e previsibilidade. Atuamos na estrutura dos fluxos, rotinas e etapas críticas para reduzir falhas, organizar a execução e dar mais consistência ao dia a dia da empresa.",
    },
    {
        icon: ArrowRightLeft,
        title: "Integração e informação",
        description:
            "Quando dados ficam espalhados, duplicados ou desencontrados entre sistemas e equipes, a operação perde tempo e a gestão perde confiança na informação. Atuamos na integração e organização das informações para reduzir ruído, melhorar a consistência dos dados e sustentar decisões com mais segurança.",
    },
    {
        icon: Lock,
        title: "Controle e governança",
        description:
            "Quando faltam critérios claros, permissões, aprovações ou rastreabilidade, o negócio fica mais exposto a falhas operacionais, riscos e perda de controle. Atuamos em mecanismos de controle e governança para reforçar segurança, conformidade e domínio sobre processos críticos.",
    },
    {
        icon: Target,
        title: "Indicadores e decisão",
        description:
            "Quando a gestão depende de dados soltos, leitura tardia ou pouca visibilidade do que realmente importa, decidir bem se torna mais difícil. Atuamos na estruturação de indicadores e acompanhamento gerencial para dar mais clareza, prioridade e apoio à tomada de decisão.",
    },
]

export function ServicesSection() {
    const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

    return (
        <section id="servicos" aria-labelledby="servicos-titulo" className="py-24 bg-muted/30" ref={ref}>
            <div className="container mx-auto px-4 lg:px-8">
                <div className="mx-auto mb-16 max-w-5xl text-center md:mb-18">
          <span className="mb-4 inline-block text-primary font-semibold text-sm uppercase tracking-wider">
            Pilares de atuação
          </span>

                    <h2
                        id="servicos-titulo"
                        className="mb-6 text-3xl font-bold text-foreground text-balance md:text-4xl lg:text-5xl"
                    >
                        Quatro pilares que orientam como estruturamos a solução da sua demanda.
                    </h2>

                    <p className="mx-auto max-w-4xl text-muted-foreground text-lg leading-relaxed">
                        Pela nossa experiência, atender bem uma demanda empresarial geralmente exige atuar em um ou mais desses
                        pilares. Essa definição acontece a partir do entendimento da necessidade apresentada, do alinhamento de
                        expectativas e do levantamento de requisitos que orienta a execução da solução.
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

                                <h3 className="mb-3 text-xl font-semibold text-foreground">{service.title}</h3>

                                <p className="text-sm leading-relaxed text-muted-foreground md:text-base">{service.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div
                    className={cn(
                        "mt-16 transition-all duration-700 md:mt-18",
                        inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
                    )}
                >
                    <div className="mx-auto w-full max-w-5xl rounded-3xl border border-border/50 bg-background/80 px-6 py-8 text-center shadow-[0_20px_60px_rgba(0,0,0,0.08)] backdrop-blur-sm md:px-10 md:py-10 lg:px-14">
                        <p className="mb-4 text-sm font-semibold text-primary/80 uppercase tracking-[0.18em] md:text-base">
                            Demanda, expectativa e requisitos
                        </p>

                        <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-foreground md:text-lg">
                            <span className="font-semibold">Uma solução consistente começa com clareza sobre o que precisa ser desenvolvido.</span>
                        </p>
                        <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-foreground/90 md:text-lg">
                            É a partir da demanda apresentada, das expectativas alinhadas e do levantamento de requisitos que
                            definimos como um ou mais pilares entram na estrutura da solução.
                        </p>

                        <a href="#contato" className="mt-8 inline-block">
                            <Button
                                size="lg"
                                className="rounded-xl bg-button-primary px-8 py-6 text-base font-semibold text-button-primary-foreground shadow-lg transition-all duration-300 hover:bg-button-primary-hover hover:shadow-xl md:text-lg"
                                aria-label="Descrever minha demanda para a Iseecodes"
                            >
                <span className="flex items-center">
                  Descreva sua demanda
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </span>
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

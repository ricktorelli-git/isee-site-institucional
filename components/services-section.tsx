"use client"

import {useInView} from "react-intersection-observer"
import {
    GitGraph,
    ArrowRightLeft,
    Lock,
    Target,
    ArrowRight,
} from "lucide-react"
import {Card, CardContent} from "@/components/ui/card"
import {cn} from "@/lib/utils"
import {Button} from "@/components/ui/button"

const services = [
    {
        icon: GitGraph,
        title: "Processos e operação",
        description:
            "Estruturamos fluxos, rotinas e etapas operacionais para reduzir falhas, aumentar produtividade e dar mais controle à execução.",
    },
    {
        icon: ArrowRightLeft,
        title: "Integração e informação",
        description:
            "Conectamos sistemas e informações para reduzir redundâncias, melhorar a consistência dos dados e apoiar decisões com mais segurança.",
    },
    {
        icon: Lock,
        title: "Controle e governança",
        description:
            "Desenvolvemos mecanismos de controle, permissões, aprovações e rastreabilidade para reforçar governança, segurança e conformidade.",
    },
    {
        icon: Target,
        title: "Indicadores e decisão",
        description:
            "Transformamos dados da operação em acompanhamento gerencial para facilitar análise, priorização e tomada de decisão.",
    },
]

export function ServicesSection() {
    const {ref, inView} = useInView({
        threshold: 0.1,
        triggerOnce: true,
    })

    return (
        <section
            id="servicos"
            aria-labelledby="servicos-titulo"
            className="py-24 bg-muted/30"
            ref={ref}
        >
            <div className="container mx-auto px-4 lg:px-8">
                <div className="max-w-6xl mx-auto text-center mb-16">
          <span
              className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            O que podemos desenvolver
          </span>

                    <h2
                        id="servicos-titulo"
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance"
                    >
                        Soluções sob medida para fortalecer a gestão da sua empresa com clareza e
                        eficiência.
                    </h2>


                    <p className="text-muted-foreground text-lg leading-relaxed">
                        Com acesso pela web e hospedagem em nuvem alinhada à realidade da sua
                        empresa,
                        desenvolvemos sistemas para dar mais praticidade à operação, mais fluidez
                        para a equipe e mais controle para a gestão.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6" role="list">
                    {services.map((service, index) => (
                        <Card
                            key={service.title}
                            role="listitem"
                            className={cn(
                                "group border border-border/50 bg-background transition-all duration-500",
                                "hover:border-accent hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1",
                                inView && "animate-in fade-in slide-in-from-bottom-4",
                            )}
                            style={{
                                animationDelay: `${index * 120}ms`,
                                animationFillMode: "both",
                            }}
                        >
                            <CardContent className="p-8">
                                <div
                                    className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300"
                                    aria-hidden="true"
                                >
                                    <service.icon
                                        className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors"/>
                                </div>

                                <h3 className="text-xl font-semibold text-foreground mb-3">
                                    {service.title}
                                </h3>

                                <p className="text-muted-foreground leading-relaxed">
                                    {service.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div
                    className={cn(
                        "mt-20 transition-all duration-700",
                        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
                    )}
                >
                    <div className="w-full max-w-5xl mx-auto rounded-3xl border border-border/50 bg-background/80 backdrop-blur-sm shadow-[0_20px_60px_rgba(0,0,0,0.08)] px-6 md:px-10 lg:px-14 py-10 md:py-12 text-center">
                        <p className="text-sm md:text-base font-semibold uppercase tracking-[0.18em] text-primary/80 mb-4">
                            Soluções que evoluem com o seu negócio
                        </p>

                        <p className="text-2xl md:text-3xl font-bold text-foreground leading-tight max-w-3xl mx-auto">
                            Esses são alguns exemplos do que podemos desenvolver para a sua empresa.
                        </p>

                        <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-3xl mx-auto mt-5">
                            Criamos diferentes soluções para gestão empresarial, desde <span className="font-semibold text-primary">Sites Institucionais</span> até soluções complexas, sempre alinhadas às necessidades reais do seu negócio.
                        </p>

                        <p className="text-foreground text-base md:text-lg leading-relaxed max-w-3xl mx-auto mt-4">
      <span className="font-semibold">
        Compartilhe sua demanda com a Iseecodes.
      </span>{" "}
                            Vamos estruturar uma solução clara, viável e sob medida para a realidade da sua empresa.
                        </p>

                        <a href="#contato" className="mt-8 inline-block">
                            <Button
                                size="lg"
                                className="rounded-xl px-8 py-6 text-base md:text-lg font-semibold bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg hover:shadow-xl transition-all duration-300"
                                aria-label="Entrar em contato para falar sobre sua demanda"
                            >
        <span className="flex items-center">
          Entrar em Contato
          <ArrowRight
              className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1"
              aria-hidden="true"
          />
        </span>
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
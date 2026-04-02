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
            "Quando a rotina depende de improviso, há retrabalho constante ou as etapas não estão claras, a operação perde fluidez e previsibilidade. Atuamos na estrutura dos fluxos, rotinas e etapas críticas para reduzir falhas, organizar a execução e dar mais consistência ao dia a dia da empresa.",
    },
    {
        icon: ArrowRightLeft,
        title: "Integração e informação",
        description:
            "Quando dados ficam espalhados, duplicados ou desencontrados entre sistemas e equipes, a operação perde tempo e a gestão perde confiança na informação. Atuamos na integração e organização das informações para reduzir ruído, melhorar a consistência dos dados e sustentar decisões com mais segurança."
    },
    {
        icon: Lock,
        title: "Controle e governança",
        description:
            "Quando faltam critérios claros, permissões, aprovações ou rastreabilidade, o negócio fica mais exposto a falhas operacionais, riscos e perda de controle. Atuamos em mecanismos de controle e governança para reforçar segurança, conformidade e domínio sobre processos críticos."
    },
    {
        icon: Target,
        title: "Indicadores e decisão",
        description:
            "Quando a gestão depende de dados soltos, leitura tardia ou pouca visibilidade do que realmente importa, decidir bem se torna mais difícil. Atuamos na estruturação de indicadores e acompanhamento gerencial para dar mais clareza, prioridade e apoio à tomada de decisão."
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
            Pilares de atuação
          </span>

                    <h2
                        id="servicos-titulo"
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance"
                    >
                        Quatro pilares que orientam como estruturamos a solução da sua demanda.
                    </h2>


                    <p className="text-muted-foreground text-lg leading-relaxed">
                        Pela nossa experiência, atender bem uma demanda empresarial geralmente exige atuar em um ou mais
                        desses pilares. Essa definição acontece a partir do entendimento da necessidade apresentada,
                        do alinhamento de expectativas e do levantamento de requisitos que orienta a execução da solução.
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
                    <div
                        className="w-full max-w-5xl mx-auto rounded-3xl border border-border/50 bg-background/80 backdrop-blur-sm shadow-[0_20px_60px_rgba(0,0,0,0.08)] px-6 md:px-10 lg:px-14 py-10 md:py-12 text-center">
                        <p className="text-sm md:text-base font-semibold uppercase tracking-[0.18em] text-primary/80 mb-4">
                            Demanda, expectativa e requisitos
                        </p>

                        <p className="text-foreground text-base md:text-lg leading-relaxed max-w-3xl mx-auto mt-4">
      <span className="font-semibold">
        Uma solução consistente começa com clareza sobre o que precisa ser desenvolvido.
      </span>
                        </p>
                        <p className="text-foreground text-base md:text-lg leading-relaxed max-w-3xl mx-auto mt-4">
                            É a partir da demanda apresentada, das expectativas alinhadas e do levantamento de requisitos que definimos como um ou mais pilares entram na estrutura da solução.
                        </p>

                        <a href="#contato" className="mt-8 inline-block">
                            <Button
                                size="lg"
                                className="rounded-xl px-8 py-6 text-base md:text-lg font-semibold bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg hover:shadow-xl transition-all duration-300"
                                aria-label="Entrar em contato para falar sobre sua demanda"
                            >
        <span className="flex items-center">
         Descrever minha demanda
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
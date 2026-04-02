"use client"

import { useInView } from "react-intersection-observer"
import { FileSearch, ClipboardList, CheckCircle2, Code2, Rocket, Check } from "lucide-react"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

const processSteps = [
  {
    icon: FileSearch,
    number: "01",
    title: "Requisitos",
    description: "Entendemos a demanda, alinhamos expectativas e levantamos os requisitos da solução",
    details: [
      "Imersão no contexto do projeto",
      "Levantamento de requisitos e fluxos operacionais",
      "Mapeamento de necessidades e prioridades",
      "Definição dos objetivos concretos da solução",
    ],
    color: "bg-primary",
  },
  {
    icon: ClipboardList,
    number: "02",
    title: "Planejamento",
    description: "Estruturamos escopo, prioridades e etapas da execução",
    details: [
      "Estruturação do escopo inicial",
      "Definição de funcionalidades e prioridades",
      "Organização das etapas de entrega",
      "Planejamento técnico do projeto e orçamento transparente",
    ],
    color: "bg-accent",
  },
  {
    icon: CheckCircle2,
    number: "03",
    title: "Aprovação",
    description: "Validamos cada etapa antes de avançar",
    details: [
      "Apresentação de fluxos, definições funcionais e protótipos visuais quando necessário",
      "Revisão conjunta de funcionalidades previstas",
      "Alinhamento de expectativas finais",
      "Aprovação formal do planejamento e orçamento",
    ],
    color: "bg-primary",
  },
  {
    icon: Code2,
    number: "04",
    title: "Desenvolvimento",
    description: "Executamos em ciclos com entregas e validações contínuas",
    details: [
      "Entregas parciais ao longo do desenvolvimento",
      "Acompanhamento contínuo do projeto",
      "Ambiente de testes disponível para validação",
      "Aprovações regulares para garantir alinhamento",
    ],
    color: "bg-accent",
  },
  {
    icon: Rocket,
    number: "05",
    title: "Implantação",
    description: "Implantamos, estabilizamos e damos suporte inicial",
    details: [
      "Publicação em ambiente de produção",
      "Configurações finais e estabilização",
      "Treinamento de uso",
      "Suporte inicial e definição dos próximos passos de sustentação",
    ],
    color: "bg-primary",
  },
]

export function ProcessSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })
  const [activeCardIndex, setActiveCardIndex] = useState(-1)

  useEffect(() => {
    if (!inView) return

    const timers: NodeJS.Timeout[] = []
    processSteps.forEach((_, index) => {
      const timer = setTimeout(() => setActiveCardIndex(index), 300 + index * 250)
      timers.push(timer)
    })

    return () => timers.forEach((timer) => clearTimeout(timer))
  }, [inView])

  return (
      <section id="processo" className="overflow-hidden bg-secondary py-24" ref={ref}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto mb-16 max-w-4xl text-center md:mb-20">
          <span className="mb-4 inline-block text-accent font-semibold text-sm uppercase tracking-wider">
            Nosso processo
          </span>
            <h2 className="mb-6 text-3xl font-bold text-white text-balance md:text-4xl lg:text-5xl">
              Como transformamos demanda em solução com clareza e método
            </h2>
            <p className="text-lg leading-relaxed text-white/70">
              Cada etapa existe para transformar a demanda apresentada em uma solução viável, com requisitos claros,
              alinhamento de expectativas e previsibilidade na execução.
            </p>
          </div>

          <div className="relative mx-auto max-w-4xl">
            <div className="absolute top-0 bottom-0 left-8 w-0.5 bg-white/10 md:left-1/2 md:-translate-x-px">
              <div
                  className={cn(
                      "w-full bg-linear-to-b from-primary via-accent to-primary transition-all duration-1800 ease-out",
                      inView ? "h-full" : "h-0",
                  )}
              />
            </div>

            <div className="flex flex-col gap-10 md:gap-14">
              {processSteps.map((step, index) => (
                  <div
                      key={step.number}
                      className={cn("relative", inView && "animate-in fade-in slide-in-from-bottom-4")}
                      style={{ animationDelay: `${index * 120}ms`, animationFillMode: "both", animationDuration: "500ms" }}
                  >
                    <div className={cn("flex flex-col items-start gap-5 md:flex-row", index % 2 === 1 && "md:flex-row-reverse")}>
                      <div className="relative z-10 shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2">
                        <div
                            className={cn(
                                "flex h-16 w-16 items-center justify-center rounded-2xl shadow-lg transition-all duration-300 hover:scale-105",
                                step.color,
                            )}
                        >
                          <step.icon className="h-7 w-7 text-white" />
                        </div>
                      </div>

                      <div className={cn("flex-1 md:w-[calc(50%-4rem)]", index % 2 === 0 ? "md:pr-16" : "md:pl-16")}>
                        <div
                            className={cn(
                                "ml-8 rounded-2xl border-2 bg-white/5 p-6 backdrop-blur-sm transition-all duration-500 hover:bg-white/10 md:ml-0 lg:p-8",
                                activeCardIndex >= index ? "border-accent shadow-lg shadow-accent/20" : "border-white/10 hover:border-accent/60",
                            )}
                        >
                          <div className="mb-4 flex items-center gap-3">
                            <span className="text-accent font-bold text-sm">{step.number}</span>
                            <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                          </div>

                          <p className="mb-5 text-white/72">{step.description}</p>

                          <ul className="space-y-3">
                            {step.details.map((detail, detailIndex) => (
                                <li
                                    key={detailIndex}
                                    className={cn(
                                        "flex translate-x-0 items-start gap-3 text-white/80 transition-all duration-300",
                                        inView ? "opacity-100" : "-translate-x-4 opacity-0",
                                    )}
                                    style={{ transitionDelay: `${index * 120 + detailIndex * 60}ms` }}
                                >
                                  <Check className={cn("mt-0.5 h-4 w-4 shrink-0", step.color === "bg-primary" ? "text-primary" : "text-accent")} />
                                  <span className="text-sm leading-relaxed">{detail}</span>
                                </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="hidden flex-1 md:block md:w-[calc(50%-4rem)]" />
                    </div>
                  </div>
              ))}
            </div>
          </div>

          <div
              className={cn(
                  "mt-14 text-center transition-all duration-700 delay-700 md:mt-16",
                  inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
              )}
          >
            <div className="inline-flex items-center gap-3 rounded-full bg-accent/20 px-6 py-3">
              <CheckCircle2 className="h-5 w-5 text-accent" />
              <span className="font-medium text-white">Transparência e comunicação em todas as etapas</span>
            </div>
          </div>
        </div>
      </section>
  )
}

"use client"

import { useInView } from "react-intersection-observer"
import { FileSearch, ClipboardList, CheckCircle2, Code2, Rocket, Check, Expand } from "lucide-react"
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
  const [activeCardIndex, setActiveCardIndex] = useState(0)
  const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>(null)

  useEffect(() => {
    if (!inView) return

    const timers: NodeJS.Timeout[] = []
    processSteps.forEach((_, index) => {
      const timer = setTimeout(() => setActiveCardIndex(index), 260 + index * 220)
      timers.push(timer)
    })

    return () => timers.forEach((timer) => clearTimeout(timer))
  }, [inView])

  useEffect(() => {
    if (selectedCardIndex === null) return

    const previousOverflow = document.body.style.overflow

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedCardIndex(null)
      }
    }

    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [selectedCardIndex])

  const selectedStep = selectedCardIndex !== null ? processSteps[selectedCardIndex] : null

  return (
      <section id="processo" className="overflow-hidden bg-hero-surface py-24" ref={ref}>
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
            <div className="pointer-events-none absolute top-4 bottom-4 left-8 w-px bg-linear-to-b from-accent/40 via-accent/25 to-accent/10" aria-hidden="true" />

            <div className="flex flex-col gap-7 md:gap-8">
              {processSteps.map((step, index) => (
                  <div
                      key={step.number}
                      className={cn("relative pl-20", inView && "animate-in fade-in slide-in-from-bottom-4")}
                      style={{ animationDelay: `${index * 100}ms`, animationFillMode: "both", animationDuration: "420ms" }}
                  >
                    <div className={cn(
                      "absolute left-0 top-6 flex h-16 w-16 items-center justify-center rounded-2xl shadow-lg transition-all duration-300",
                      step.color,
                      activeCardIndex >= index ? "scale-100" : "scale-95 opacity-85",
                    )}>
                      <step.icon className="h-7 w-7 text-white" />
                    </div>

                    <article
                        className={cn(
                            "rounded-2xl border bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 md:p-7",
                            selectedCardIndex === index
                                ? "border-accent/70 bg-linear-to-br from-accent/14 via-white/8 to-white/5 shadow-xl shadow-accent/20"
                                : activeCardIndex >= index
                                    ? "border-accent/60 shadow-lg shadow-accent/10"
                                    : "border-white/10",
                        )}
                    >
                      <div className="mb-3 flex items-center gap-3">
                        <span className="text-sm font-bold text-accent">{step.number}</span>
                        <h3 className="text-xl font-bold text-white md:text-2xl">{step.title}</h3>
                      </div>

                      <p className="text-white/75">{step.description}</p>

                      <div className="mt-5 border-t border-white/10 pt-4">
                        <button
                            type="button"
                            onClick={() => setSelectedCardIndex(index)}
                            className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground shadow-[0_10px_28px_rgba(245,134,52,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-button-primary-hover focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-accent/50"
                            aria-haspopup="dialog"
                            aria-expanded={selectedCardIndex === index}
                            aria-controls={selectedCardIndex === index ? "process-step-spotlight" : undefined}
                        >
                          <Expand className="h-4 w-4" />
                          Exibir detalhe
                        </button>
                      </div>
                    </article>
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

        {selectedStep && (
            <div
                className="animate-in fade-in fixed inset-0 z-60 flex items-center justify-center bg-secondary/55 px-4 backdrop-blur-sm duration-300"
                onClick={() => setSelectedCardIndex(null)}
                role="presentation"
            >
              <div
                  id="process-step-spotlight"
                  role="dialog"
                  aria-modal="true"
                  aria-labelledby="process-step-title"
                  className="animate-in fade-in zoom-in-95 slide-in-from-bottom-4 relative w-full max-w-lg overflow-y-auto rounded-3xl border border-accent/20 bg-background/96 p-4 pt-12 text-foreground shadow-[0_28px_90px_rgba(245,134,52,0.2)] duration-300 max-h-[88vh] md:max-w-3xl md:rounded-4xl md:p-10"
                  onClick={(event) => event.stopPropagation()}
              >
                <div className="absolute inset-0 bg-linear-to-br from-accent/10 via-background/40 to-primary/5" aria-hidden="true" />
                <div className="absolute inset-x-0 top-0 h-24 bg-linear-to-b from-accent/12 to-transparent" aria-hidden="true" />

                <button
                    type="button"
                    onClick={() => setSelectedCardIndex(null)}
                    className="absolute top-3 right-3 z-20 inline-flex items-center rounded-md border border-accent/20 bg-background px-3 py-1.5 text-sm font-semibold text-accent transition-colors hover:bg-accent/10 md:top-5 md:right-5"
                    aria-label="Fechar destaque da etapa"
                >
                  Fechar
                </button>

                <div className="relative z-10">
                  <div className="mb-4 flex items-center gap-3 md:mb-7 md:gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-accent/20 bg-accent/12 text-accent shadow-[0_10px_30px_rgba(245,134,52,0.14)]">
                      <selectedStep.icon className="h-8 w-8" />
                    </div>
                    <div>
                      <span className="mb-2 inline-flex rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-semibold tracking-[0.18em] text-accent uppercase">
                        Etapa {selectedStep.number}
                      </span>
                      <h3 id="process-step-title" className="text-2xl font-bold text-secondary md:text-3xl">
                        {selectedStep.title}
                      </h3>
                    </div>
                  </div>

                  <p className="mb-4 max-w-2xl text-sm leading-6 text-foreground/80 md:mb-7 md:text-lg md:leading-8">
                    {selectedStep.description}
                  </p>

                  <div className="rounded-3xl border border-accent/15 bg-linear-to-br from-accent/8 via-background to-background p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.45)] md:p-7">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-accent/90 md:mb-4 md:text-sm md:tracking-[0.18em]">
                      O que acontece nesta etapa
                    </p>
                    <ul className="space-y-2 md:space-y-3">
                      {selectedStep.details.map((detail) => (
                          <li key={detail} className="flex items-start gap-2 rounded-2xl bg-background/70 px-3 py-2 text-sm text-foreground/85 md:gap-3 md:px-4 md:py-3 md:text-base">
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                            <span className="leading-relaxed">{detail}</span>
                          </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
        )}
      </section>
  )
}

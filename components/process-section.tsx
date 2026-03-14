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
    description: "Entendemos suas necessidades e objetivos do projeto",
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
    description: "Criamos um roteiro claro para execução",
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
      "Apresentação de fluxos e protótipos visuais",
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
    description: "Desenvolvimento em ciclos de entrega",
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
    description: "Preparação para lançamento e suporte inicial",
    details: [
      "Publicação em ambiente de produção",
      "Configurações finais e estabilização",
      "Treinamento de uso",
      "Suporte e manutenção continuada",
    ],
    color: "bg-primary",
  },
]

export function ProcessSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const [activeCardIndex, setActiveCardIndex] = useState(-1)

  useEffect(() => {
    if (!inView) return

    // Ativar cards sequencialmente após a seção entrar em view
    const timers: NodeJS.Timeout[] = []

    processSteps.forEach((_, index) => {
      const timer = setTimeout(
        () => {
          setActiveCardIndex(index)
        },
        600 + index * 400,
      ) // Delay inicial + 400ms entre cada card
      timers.push(timer)
    })

    return () => timers.forEach((timer) => clearTimeout(timer))
  }, [inView])

  return (
    <section id="processo" className="py-24 bg-secondary overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Nossa Metodologia
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
            Como tiramos seu projeto do papel
          </h2>
          <p className="text-white/70 text-lg leading-relaxed">
            Um fluxo de trabalho pensado para dar ritmo, alinhamento e previsibilidade à execução.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Linha central vertical */}
          <div className="absolute left-8 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-white/10">
            <div
              className={cn(
                "w-full bg-linear-to-b from-primary via-accent to-primary transition-all duration-2500 ease-out",
                inView ? "h-full" : "h-0",
              )}
            />
          </div>

          <div className="flex flex-col gap-16">
            {processSteps.map((step, index) => (
              <div
                key={step.number}
                className={cn("relative", inView && "animate-in fade-in slide-in-from-bottom-6")}
                style={{ animationDelay: `${index * 150}ms`, animationFillMode: "both", animationDuration: "600ms" }}
              >
                {/* Layout alternando lados */}
                <div
                  className={cn(
                    "flex flex-col md:flex-row items-start gap-6",
                    index % 2 === 1 && "md:flex-row-reverse",
                  )}
                >
                  {/* Ícone central */}
                  <div className="relative z-10 shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2">
                    <div
                      className={cn(
                        "w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-500 hover:scale-110",
                        step.color,
                      )}
                    >
                      <step.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>

                  {/* Card de conteúdo */}
                  <div className={cn("flex-1 md:w-[calc(50%-4rem)]", index % 2 === 0 ? "md:pr-16" : "md:pl-16")}>
                    <div
                      className={cn(
                        "bg-white/5 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border-2 transition-all duration-500 hover:bg-white/10 ml-8 md:ml-0",
                        activeCardIndex >= index
                          ? "border-accent shadow-lg shadow-accent/20"
                          : "border-white/10 hover:border-accent",
                      )}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-accent font-bold text-sm">{step.number}</span>
                        <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                      </div>

                      <p className="text-white/70 mb-6">{step.description}</p>
                      {/* Lista de 4 detalhamentos */}
                      <ul className="space-y-3">
                        {step.details.map((detail, detailIndex) => (
                          <li
                            key={detailIndex}
                            className={cn(
                              "flex items-start gap-3 text-white/80 transition-all duration-300",
                              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4",
                            )}
                            style={{ transitionDelay: `${index * 150 + detailIndex * 75}ms` }}
                          >
                            <Check
                              className={cn(
                                "w-4 h-4 mt-0.5 shrink-0",
                                step.color === "bg-primary" ? "text-primary" : "text-accent",
                              )}
                            />
                            <span className="text-sm leading-relaxed">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Espaço vazio para o outro lado no desktop */}
                  <div className="hidden md:block flex-1 md:w-[calc(50%-4rem)]" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className={cn(
            "mt-16 text-center transition-all duration-700 delay-1000",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          <div className="inline-flex items-center gap-3 bg-accent/20 rounded-full px-6 py-3">
            <CheckCircle2 className="w-5 h-5 text-accent" />
            <span className="text-white font-medium">Transparência e comunicação em todas as etapas</span>
          </div>
        </div>

      </div>
    </section>
  )
}

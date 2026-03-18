"use client"

import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"
import { memo } from "react"
import { Button } from "@/components/ui/button"
import {
  Shield,
  Server,
  RefreshCw,
  TrendingUp,
  Lock,
  Cloud,
  Zap,
  Database,
  CheckCircle2,
  ArrowRight,
} from "lucide-react"

const pillars = [
  {
    name: "Segurança",
    description: "Soluções pensadas para proteger dados, acessos e rotinas críticas da operação.",
    icon: Shield,
    color: "#0080C1",
  },
  {
    name: "Estabilidade",
    description: "Estrutura preparada para manter consistência, disponibilidade e confiança no uso diário.",
    icon: Server,
    color: "#005484",
  },
  {
    name: "Continuidade",
    description: "Backups e rotinas de recuperação para preservar a operação e reduzir riscos.",
    icon: RefreshCw,
    color: "#F58634",
  },
  {
    name: "Escalabilidade",
    description: "Arquitetura preparada para acompanhar o crescimento da demanda e da operação.",
    icon: TrendingUp,
    color: "#0080C1",
  },
]

const benefits = [
  {
    title: "Mais proteção para sua operação",
    description: "Camadas de segurança e boas práticas para reduzir riscos e aumentar a confiabilidade do sistema.",
    icon: Lock,
  },
  {
    title: "Ambiente pronto para crescer",
    description: "Infraestrutura em nuvem preparada para acompanhar o uso e a evolução da solução.",
    icon: Cloud,
  },
  {
    title: "Boa performance no dia a dia",
    description: "Otimizações para manter resposta consistente e melhor experiência de uso.",
    icon: Zap,
  },
  {
    title: "Continuidade com mais segurança",
    description: "Backups automáticos e procedimentos planejados para preservar dados e operação.",
    icon: Database,
  },
  {
    title: "Acompanhamento técnico",
    description: "Monitoramento e suporte para manter a solução saudável ao longo da operação.",
    icon: Server,
  },
]

const PillarCard = memo(function PillarCard({
                                              pillar,
                                              index,
                                              inView,
                                            }: {
  pillar: (typeof pillars)[0]
  index: number
  inView: boolean
}) {
  const Icon = pillar.icon

  return (
      <div
          className={cn(
              "group relative p-6 rounded-2xl transition-all duration-300 h-full flex flex-col",
              "bg-[#005484]/40 border border-white/10",
              "hover:border-accent/50 hover:shadow-xl hover:shadow-accent/10 hover:-translate-y-1",
              inView && "animate-in fade-in zoom-in-95",
          )}
          style={{ animationDelay: `${index * 100}ms`, animationFillMode: "both" }}
      >
        <div
            className="relative w-16 h-16 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
            style={{
              background: `linear-gradient(135deg, ${pillar.color}25 0%, ${pillar.color}50 100%)`,
              boxShadow: `0 4px 20px ${pillar.color}30`,
            }}
        >
          <Icon
              className="w-8 h-8 transition-transform duration-300 group-hover:scale-110"
              style={{ color: pillar.color === "#005484" ? "#0080C1" : pillar.color }}
          />
        </div>

        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-accent transition-colors">
          {pillar.name}
        </h3>
        <p className="text-sm text-white/70 leading-relaxed">{pillar.description}</p>
      </div>
  )
})

const BenefitItem = memo(function BenefitItem({
                                                benefit,
                                                index,
                                                inView,
                                              }: {
  benefit: (typeof benefits)[0]
  index: number
  inView: boolean
}) {
  const Icon = benefit.icon

  return (
      <li
          className={cn(
              "flex items-start gap-4 p-4 rounded-xl transition-all duration-300",
              "hover:bg-white/10",
              inView && "animate-in fade-in slide-in-from-right-8",
          )}
          style={{ animationDelay: `${index * 100 + 300}ms`, animationFillMode: "both" }}
      >
        <div className="shrink-0 w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center mt-0.5">
          <Icon className="w-5 h-5 text-accent" />
        </div>

        <div>
          <h4 className="font-semibold text-white mb-1 flex items-center gap-2">
            {benefit.title}
            <CheckCircle2 className="w-4 h-4 text-accent" />
          </h4>
          <p className="text-sm text-white/60 leading-relaxed">{benefit.description}</p>
        </div>
      </li>
  )
})

export function TechSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
      <section id="tecnologias" className="py-24 bg-secondary overflow-hidden relative" ref={ref}>
        <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-accent/5 pointer-events-none" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/15 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto text-center mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Segurança e Confiabilidade
          </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
              Sistemas pensados para operar com segurança, estabilidade e capacidade de crescimento.
            </h2>

            <p className="text-white/70 text-lg leading-relaxed">
              Desenvolvemos com uma base técnica preparada para proteger a operação,
              sustentar o uso no dia a dia e acompanhar a evolução do negócio.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            <div className="flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full">
                {pillars.map((pillar, index) => (
                    <PillarCard key={pillar.name} pillar={pillar} index={index} inView={inView} />
                ))}
              </div>
            </div>

            <div className="flex-1 max-w-xl flex flex-col">
              <h3 className="text-2xl font-bold text-white mb-8">
                O que isso significa para o seu projeto.
              </h3>

              <ul className="space-y-4 flex-1">
                {benefits.map((benefit, index) => (
                    <BenefitItem key={benefit.title} benefit={benefit} index={index} inView={inView} />
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-16 flex justify-center">
            <a href="#contato" className="w-full sm:w-auto flex justify-center">
              <Button
                  size="lg"
                  className={cn(
                      "relative overflow-hidden bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-5 md:py-6 text-base md:text-lg group",
                      inView && "animate-in fade-in slide-in-from-bottom-4",
                  )}
                  style={{ animationDelay: "800ms", animationFillMode: "both" }}
              >
              <span className="relative z-10 flex items-center justify-center">
                Entrar em Contato
                <ArrowRight
                    className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                />
              </span>
                <span
                    className="absolute inset-0 bg-linear-to-r from-accent via-white/20 to-accent bg-size-[200%_100%] animate-[shimmer_2s_linear_infinite] motion-reduce:animate-none"
                    aria-hidden="true"
                />
              </Button>
            </a>
          </div>
        </div>
      </section>
  )
}

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
  ArrowRight,
} from "lucide-react"

const pillars = [
  {
    name: "Segurança",
    description: "Proteção de dados, acessos e rotinas críticas para reduzir riscos e aumentar a confiabilidade da operação.",
    icon: Shield,
    color: "#0080C1",
  },
  {
    name: "Estabilidade",
    description: "Estrutura pensada para manter consistência no uso diário, com mecanismos para reduzir impacto e recuperar a operação diante de instabilidades em serviços de terceiros ou infraestrutura externa.",
    icon: Server,
    color: "#005484",
  },
  {
    name: "Continuidade",
    description: "Backups e recuperação para preservar dados, reduzir impacto operacional e manter a solução mais segura.",
    icon: RefreshCw,
    color: "#F58634",
  },
  {
    name: "Escalabilidade",
    description: "Arquitetura preparada para acompanhar a evolução da demanda e sustentar o crescimento da solução.",
    icon: TrendingUp,
    color: "#0080C1",
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
              "group relative flex h-full flex-col rounded-2xl border border-white/10 bg-[#005484]/35 p-6 transition-all duration-300",
              "hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/10",
              inView && "animate-in fade-in zoom-in-95",
          )}
          style={{ animationDelay: `${index * 90}ms`, animationFillMode: "both" }}
      >
        <div
            className="relative mb-4 flex h-16 w-16 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105"
            style={{
              background: `linear-gradient(135deg, ${pillar.color}20 0%, ${pillar.color}45 100%)`,
              boxShadow: `0 4px 16px ${pillar.color}22`,
            }}
        >
          <Icon
              className="h-8 w-8"
              style={{ color: pillar.color === "#005484" ? "#0080C1" : pillar.color }}
          />
        </div>

        <h3 className="mb-2 text-lg font-bold text-white transition-colors group-hover:text-accent">
          {pillar.name}
        </h3>
        <p className="text-sm leading-relaxed text-white/70">{pillar.description}</p>
      </div>
  )
})

export function TechSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
      <section
          id="tecnologias"
          className="relative overflow-hidden bg-secondary py-24"
          ref={ref}
          aria-labelledby="tecnologias-titulo"
      >
        <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-accent/5" />
        <div className="pointer-events-none absolute top-0 left-0 h-96 w-96 rounded-full bg-accent/8 blur-3xl" />
        <div className="pointer-events-none absolute right-0 bottom-0 h-80 w-80 rounded-full bg-primary/12 blur-3xl" />

        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <div className="mx-auto mb-16 max-w-5xl text-center">
          <span className="mb-4 inline-block text-accent font-semibold text-sm uppercase tracking-wider">
            Segurança e confiabilidade
          </span>

            <h2
                id="tecnologias-titulo"
                className="mb-6 text-3xl font-bold text-white text-balance md:text-4xl lg:text-5xl"
            >
              Sistemas pensados para operar com segurança, estabilidade e capacidade de crescimento.
            </h2>

            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-white/70">
              Desenvolvemos com uma base técnica pensada para proteger a operação e sustentar o crescimento da solução.
            </p>
          </div>

          <div className="mx-auto max-w-5xl">
            <div className="grid gap-4 sm:grid-cols-2">
              {pillars.map((pillar, index) => (
                  <PillarCard key={pillar.name} pillar={pillar} index={index} inView={inView} />
              ))}
            </div>
          </div>

          <div className="mt-14 flex justify-center md:mt-16">
            <a href="#contato" className="flex w-full justify-center sm:w-auto">
              <Button
                  size="lg"
                  className={cn(
                      "group bg-button-primary px-8 py-5 text-base font-semibold text-button-primary-foreground hover:bg-button-primary-hover md:py-6 md:text-lg",
                      inView && "animate-in fade-in slide-in-from-bottom-4",
                  )}
                  style={{ animationDelay: "600ms", animationFillMode: "both" }}
                  aria-label="Descrever minha demanda para a Iseecodes"
              >
              <span className="relative z-10 flex items-center justify-center">
                Descreva sua demanda
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </span>
              </Button>
            </a>
          </div>
        </div>
      </section>
  )
}

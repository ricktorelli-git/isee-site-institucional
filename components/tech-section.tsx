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

const PillarCard = memo(function PillarCard({ pillar, index, inView }: { pillar: (typeof pillars)[0]; index: number; inView: boolean }) {
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
          <Icon className="h-8 w-8" style={{ color: pillar.color === "#005484" ? "#0080C1" : pillar.color }} />
        </div>

        <h3 className="mb-2 text-lg font-bold text-white transition-colors group-hover:text-accent">{pillar.name}</h3>
        <p className="text-sm leading-relaxed text-white/70">{pillar.description}</p>
      </div>
  )
})

const BenefitItem = memo(function BenefitItem({ benefit, index, inView }: { benefit: (typeof benefits)[0]; index: number; inView: boolean }) {
  const Icon = benefit.icon

  return (
      <li
          className={cn(
              "flex items-start gap-4 rounded-xl p-4 transition-all duration-300 hover:bg-white/5",
              inView && "animate-in fade-in slide-in-from-right-6",
          )}
          style={{ animationDelay: `${index * 80 + 220}ms`, animationFillMode: "both" }}
      >
        <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/20">
          <Icon className="h-5 w-5 text-accent" />
        </div>

        <div>
          <h4 className="mb-1 flex items-center gap-2 font-semibold text-white">
            {benefit.title}
            <CheckCircle2 className="h-4 w-4 text-accent" />
          </h4>
          <p className="text-sm leading-relaxed text-white/60">{benefit.description}</p>
        </div>
      </li>
  )
})

export function TechSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
      <section id="tecnologias" className="relative overflow-hidden bg-secondary py-24" ref={ref} aria-labelledby="tecnologias-titulo">
        <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-accent/5" />
        <div className="pointer-events-none absolute top-0 left-0 h-96 w-96 rounded-full bg-accent/8 blur-3xl" />
        <div className="pointer-events-none absolute right-0 bottom-0 h-80 w-80 rounded-full bg-primary/12 blur-3xl" />

        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <div className="mx-auto mb-16 max-w-5xl text-center">
          <span className="mb-4 inline-block text-accent font-semibold text-sm uppercase tracking-wider">
            Segurança e confiabilidade
          </span>

            <h2 id="tecnologias-titulo" className="mb-6 text-3xl font-bold text-white text-balance md:text-4xl lg:text-5xl">
              Sistemas pensados para operar com segurança, estabilidade e capacidade de crescimento.
            </h2>

            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-white/70">
              Desenvolvemos com uma base técnica preparada para proteger a operação, sustentar o uso no dia a dia e
              acompanhar a evolução do negócio.
            </p>
          </div>

          <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
            <div className="flex-1">
              <div className="grid h-full grid-cols-1 gap-4 sm:grid-cols-2">
                {pillars.map((pillar, index) => (
                    <PillarCard key={pillar.name} pillar={pillar} index={index} inView={inView} />
                ))}
              </div>
            </div>

            <div className="flex max-w-xl flex-1 flex-col">
              <h3 className="mb-8 text-2xl font-bold text-white">O que isso significa para o seu projeto.</h3>

              <ul className="flex-1 space-y-3">
                {benefits.map((benefit, index) => (
                    <BenefitItem key={benefit.title} benefit={benefit} index={index} inView={inView} />
                ))}
              </ul>
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

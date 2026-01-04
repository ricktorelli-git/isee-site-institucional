"use client"
import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"
import { memo } from "react"
import {
  Shield,
  Server,
  Database,
  RefreshCw,
  Headphones,
  TrendingUp,
  Lock,
  Cloud,
  Zap,
  CheckCircle2,
} from "lucide-react"

const pillars = [
  {
    name: "Segurança",
    description: "Múltiplas camadas de proteção",
    icon: Shield,
    color: "#0080C1",
  },
  {
    name: "Estabilidade",
    description: "Disponibilidade 24/7",
    icon: Server,
    color: "#005484",
  },
  {
    name: "Backups",
    description: "Rotinas automáticas diárias",
    icon: Database,
    color: "#F58634",
  },
  {
    name: "Recuperação",
    description: "Disaster recovery garantido",
    icon: RefreshCw,
    color: "#0080C1",
  },
  {
    name: "Suporte",
    description: "Atendimento especializado",
    icon: Headphones,
    color: "#005484",
  },
  {
    name: "Escalabilidade",
    description: "Cresce com seu negócio",
    icon: TrendingUp,
    color: "#F58634",
  },
]

const benefits = [
  {
    title: "Proteção em Camadas",
    description:
      "Firewalls, criptografia SSL/TLS, autenticação multifator e monitoramento constante de vulnerabilidades.",
    icon: Lock,
  },
  {
    title: "Infraestrutura na Nuvem",
    description: "Servidores redundantes e distribuídos geograficamente para garantir máxima disponibilidade.",
    icon: Cloud,
  },
  {
    title: "Performance Otimizada",
    description: "Cache inteligente, CDN global e otimizações contínuas para tempos de resposta mínimos.",
    icon: Zap,
  },
  {
    title: "Backups Automatizados",
    description: "Cópias diárias incrementais e semanais completas, com retenção de 30 dias e restore testado.",
    icon: Database,
  },
  {
    title: "Monitoramento 24/7",
    description: "Alertas proativos, métricas em tempo real e resposta imediata a qualquer incidente.",
    icon: Server,
  },
  {
    title: "Crescimento Sob Demanda",
    description: "Arquitetura elástica que escala automaticamente conforme a demanda do seu negócio.",
    icon: TrendingUp,
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
        "group relative p-6 rounded-2xl transition-all duration-300",
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
      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-accent transition-colors">{pillar.name}</h3>
      <p className="text-sm text-white/70">{pillar.description}</p>
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
      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center mt-0.5">
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
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/5 pointer-events-none" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/15 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Infraestrutura Robusta
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
            Sua Tranquilidade é Nossa <span className="text-accent">Prioridade</span>
          </h2>
          <p className="text-white/70 text-lg leading-relaxed">
            Desenvolvemos soluções pensando em cada camada de proteção, garantindo que seu negócio opere com segurança,
            estabilidade e total suporte técnico.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="flex-1">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {pillars.map((pillar, index) => (
                <PillarCard key={pillar.name} pillar={pillar} index={index} inView={inView} />
              ))}
            </div>
          </div>

          <div className="flex-1 max-w-xl">
            <h3 className="text-2xl font-bold text-white mb-8">O que garantimos para você</h3>
            <ul className="space-y-5">
              {benefits.map((benefit, index) => (
                <BenefitItem key={benefit.title} benefit={benefit} index={index} inView={inView} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

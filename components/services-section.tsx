"use client"

import { useInView } from "react-intersection-observer"
import { Globe, Smartphone, Settings, Database, Shield, Zap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const services = [
  {
    icon: Globe,
    title: "Desenvolvimento Web",
    description:
      "Aplicações web modernas, responsivas e escaláveis utilizando as mais recentes tecnologias do mercado.",
  },
  {
    icon: Smartphone,
    title: "Apps Mobile",
    description: "Aplicativos nativos e híbridos para iOS e Android com experiência de usuário excepcional.",
  },
  {
    icon: Settings,
    title: "Software Sob Demanda",
    description: "Soluções personalizadas que atendem às necessidades específicas do seu negócio.",
  },
  {
    icon: Database,
    title: "Sistemas de Gestão",
    description: "ERPs, CRMs e sistemas administrativos integrados para otimizar seus processos.",
  },
  {
    icon: Shield,
    title: "Segurança & Compliance",
    description: "Desenvolvimento com foco em segurança, LGPD e melhores práticas do mercado.",
  },
  {
    icon: Zap,
    title: "APIs & Integrações",
    description: "Conecte sistemas e automatize processos com integrações robustas e confiáveis.",
  },
]

export function ServicesSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section id="servicos" aria-labelledby="servicos-titulo" className="py-24 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Nossos Serviços
          </span>
          <h2
            id="servicos-titulo"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance"
          >
            Soluções completas para sua transformação digital
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Desenvolvemos software de alta qualidade que impulsiona o crescimento do seu negócio e otimiza seus
            processos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
          {services.map((service, index) => (
            <Card
              key={service.title}
              role="listitem"
              className={cn(
                "group border border-border/50 bg-background hover:border-2 hover:border-accent transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1",
                inView && "animate-in fade-in slide-in-from-bottom-4",
              )}
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: "both" }}
            >
              <CardContent className="p-8">
                <div
                  className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300"
                  aria-hidden="true"
                >
                  <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

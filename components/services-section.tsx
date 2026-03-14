"use client"

import { useInView } from "react-intersection-observer"
import {
	GitGraph,
	ArrowRightLeft,
	Lock,
	Target,
	ArrowRight,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

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
	const { ref, inView } = useInView({
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
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            O que podemos desenvolver
          </span>

					<h2
						id="servicos-titulo"
						className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance"
					>
						Soluções sob medida para fortalecer a gestão da sua empresa com clareza e eficiência.
					</h2>


					<p className="text-muted-foreground text-lg leading-relaxed">
						Com acesso pela web e hospedagem em nuvem alinhada à realidade da sua empresa,
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
									<service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
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
						"mt-16 text-center transition-all duration-700",
						inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
					)}
				>
					<div className="inline-block bg-accent/20 rounded-xl px-8 py-6 border-2 border-accent/30 max-w-2xl">
						<p className="text-foreground font-semibold text-lg mb-2">
							Cada solução parte da realidade da sua empresa.
						</p>

						<p className="text-muted-foreground">
							Mais do que oferecer funcionalidades isoladas, buscamos estruturar sistemas que façam sentido para os seus processos, sua operação e sua gestão.
						</p>

						<p className="text-muted-foreground mt-2">
              <span className="font-semibold text-foreground">
                Entre em contato e descreva sua demanda. Vamos propor um caminho claro, viável e sob medida.
              </span>
						</p>

						<a href="#contato" className="mt-6 inline-block">
							<Button
								size="lg"
								className="relative overflow-hidden bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg group"
								aria-label="Entrar em contato para falar sobre sua demanda"
							>
                <span className="relative z-10 flex items-center">
                  Entrar em Contato
                  <ArrowRight
					  className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1"
					  aria-hidden="true"
				  />
                </span>
								<span
									className="absolute inset-0 bg-linear-to-r from-accent via-white/20 to-accent bg-size-[200%_100%] animate-[shimmer_2s_linear_infinite]"
									aria-hidden="true"
								/>
							</Button>
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}
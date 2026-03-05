"use client"

import { useInView } from "react-intersection-observer"
import {
	GitGraph,
	ArrowRightLeft,
	Target,
	DollarSign,
	Banknote,
	Lock,
	ArrowRight
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import {Button} from "@/components/ui/button";

const services = [
	{
		icon: GitGraph,
		title: "Controle de Processos",
		description:
			"Transforme fluxos manuais em processos automatizados e inteligentes. Aumente produtividade, reduza erros operacionais e ganhe visibilidade total em tempo real.",
	},
	{
		icon: ArrowRightLeft,
		title: "Integração de dados",
		description:
			"Conecte todos os seus sistemas em uma única fonte de verdade. Sincronize informações em tempo real, elimine redundâncias e acelere decisões estratégicas.",
	},
	{
		icon: Lock,
		title: "Controle de Acesso e Rastreabilidade",
		description:
			"Proteja dados sensíveis com permissões granulares e alçadas inteligentes. Mantenha conformidade regulatória e auditoria completa de todas as operações.",
	},

	{
		icon: DollarSign,
		title: "Orçamento e Gestão de Custos",
		description:
			"Planeje com precisão e controle cada centavo do seu orçamento. Identifique oportunidades de economia, otimize alocação de recursos e maximize rentabilidade.",
	},
	{
		icon: Banknote,
		title: "Controle Financeiro e Gestão de Estoque",
		description:
			"Gerencie fluxo de caixa, estoque e capital de giro integrados. Automatize pagamentos, recebimentos, controle de inventário e obtenha visibilidade completa do caixa.",
	},

	{
		icon: Target,
		title: "Dashboards & Indicadores",
		description:
			"Converta dados brutos em insights estratégicos e visuais impactantes. Acompanhe performance em tempo real e tome decisões baseadas em inteligência.",
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
						Desenvolvemos softwares web e mobile com foco em gestão empresarial,
						automação de processos e soluções personalizadas para atender às
						necessidades do seu negócio.
					</p>
				</div>

				<div
					className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
					role="list"
				>
					{services.map((service, index) => (
						<Card
							key={service.title}
							role="listitem"
							className={cn(
								"group border border-border/50 bg-background hover:border-2 hover:border-accent transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1",
								inView &&
									"animate-in fade-in slide-in-from-bottom-4",
							)}
							style={{
								animationDelay: `${index * 100}ms`,
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
							Acima destacamos possíveis abordagens.
						</p>
						<p className="text-muted-foreground">
							Temos expertise para desenhar e desenvolver sistemas customizados que
							resolvem seus desafios específicos de gestão, automação e integração.
						</p>
						<p className="text-muted-foreground">
							<span className="font-semibold text-foreground"> Entre em contato e descreva a sua demanda.</span>
						</p>
						<a href="#contato" className="mt-6 inline-block">
							<Button
								size="lg"
								className="relative overflow-hidden bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg group"
								aria-label="Solicitar orçamento para evoluir sua gestão"
							>
               				 <span className="relative z-10 flex items-center">
                  				Evoluir Minha Gestão
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

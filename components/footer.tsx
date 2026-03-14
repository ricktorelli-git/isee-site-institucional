"use client"

import { useState, useCallback } from "react"
import { Mail, MapPin } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa6"
import { Tooltip, TooltipTrigger } from "@/components/ui/tooltip"

const navLinks = [
  { href: "#servicos", label: "Serviços" },
  { href: "#processo", label: "Processo" },
  { href: "#sobre", label: "Sobre" },
  { href: "#tecnologias", label: "Tecnologias" },
  { href: "#contato", label: "Contato" },
]

const whatsappNumber = "5551999698812"
const whatsappMessage = "Olá, vim pelo site [ISEECODES] e gostaria de falar sobre um projeto."
const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

const contactItems = [
  {
    icon: Mail,
    text: "contato@iseecodes.com.br",
    animation: "wiggle",
    href: null,
    ariaLabel: "Email: contato@iseecodes.com.br",
  },
  {
    icon: FaWhatsapp,
    text: "+55 (51) 99969-8812",
    animation: "ring",
    href: whatsappHref,
    ariaLabel: "Conversar no WhatsApp com o sócio-fundador da Iseecodes (abre em nova aba)",
    subtitle: "Contato direto com o sócio-fundador",
  },
  {
    icon: MapPin,
    text: "Porto Alegre, RS - Brasil",
    animation: "bounce-subtle",
    href: null,
    ariaLabel: "Sede Fiscal: Porto Alegre, RS - Brasil. Atendimento Remoto em todo o Brasil.",
    subtitle: "Atendimento Remoto em todo o Brasil",
    isLocation: true,
  },
]

export function Footer() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)
  const [hoveredContact, setHoveredContact] = useState<number | null>(null)

  const handleLinkEnter = useCallback((href: string) => setHoveredLink(href), [])
  const handleLinkLeave = useCallback(() => setHoveredLink(null), [])
  const handleContactEnter = useCallback((index: number) => setHoveredContact(index), [])
  const handleContactLeave = useCallback(() => setHoveredContact(null), [])

  return (
    <footer className="bg-secondary py-12 md:py-14 lg:py-16" role="contentinfo">
      <style jsx>{`
        @keyframes wiggle {
          0%, 100% { transform: rotate(0deg); }
          15% { transform: rotate(-12deg); }
          30% { transform: rotate(10deg); }
          45% { transform: rotate(-8deg); }
          60% { transform: rotate(6deg); }
          75% { transform: rotate(-4deg); }
          90% { transform: rotate(2deg); }
        }
        @keyframes ring {
          0%, 100% { transform: rotate(0deg) scale(1); }
          10% { transform: rotate(-15deg) scale(1.1); }
          20% { transform: rotate(15deg) scale(1.1); }
          30% { transform: rotate(-15deg) scale(1.1); }
          40% { transform: rotate(15deg) scale(1.1); }
          50% { transform: rotate(0deg) scale(1); }
        }
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          25% { transform: translateY(-4px); }
          50% { transform: translateY(0); }
          75% { transform: translateY(-2px); }
        }
        @keyframes fadeSlideDown {
          from {
            opacity: 0;
            transform: translateY(-4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12 mb-4 md:mb-5">
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center mb-6" aria-label="Iseecodes - Voltar ao início">
              <span className="text-2xl font-bold text-white">
                <span className="text-accent">Isee</span>codes
              </span>
            </a>

            <div className="mb-5 space-y-1 text-sm">
              <p className="text-white/70">
                <span className="font-semibold text-white/90">Razão Social:</span> Iseecodes Desenvolvimento Web Ltda.
              </p>
              <p className="text-white/60">
                <span className="font-semibold text-white/80">CNPJ:</span> 34.577.059/0001-69
              </p>
            </div>
            
            <p className="text-white/60 max-w-md leading-relaxed mb-6">
              Iseecodes Desenvolvimento Web Ltda. Software house especializada em soluções web e mobile sob
              demanda, com foco em gestão empresarial.
            </p>
            {/*<div className="flex gap-4" role="list" aria-label="Redes sociais">*/}
            {/*  <a*/}
            {/*    href="https://linkedin.com/company/iseecodes"*/}
            {/*    target="_blank"*/}
            {/*    rel="noopener noreferrer"*/}
            {/*    className="group w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center transition-all duration-300 hover:bg-[#0A66C2] hover:scale-110"*/}
            {/*    aria-label="LinkedIn da Iseecodes (abre em nova aba)"*/}
            {/*    role="listitem"*/}
            {/*  >*/}
            {/*    <Linkedin className="w-5 h-5 text-white" aria-hidden="true" />*/}
            {/*  </a>*/}
            {/*  <a*/}
            {/*    href="https://instagram.com/iseecodes"*/}
            {/*    target="_blank"*/}
            {/*    rel="noopener noreferrer"*/}
            {/*    className="group w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center transition-all duration-300 hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#F77737] hover:scale-110"*/}
            {/*    aria-label="Instagram da Iseecodes (abre em nova aba)"*/}
            {/*    role="listitem"*/}
            {/*  >*/}
            {/*    <Instagram className="w-5 h-5 text-white" aria-hidden="true" />*/}
            {/*  </a>*/}
            {/*  <a*/}
            {/*    href="https://github.com/iseecodes"*/}
            {/*    target="_blank"*/}
            {/*    rel="noopener noreferrer"*/}
            {/*    className="group w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center transition-all duration-300 hover:bg-[#333] hover:scale-110"*/}
            {/*    aria-label="GitHub da Iseecodes (abre em nova aba)"*/}
            {/*    role="listitem"*/}
            {/*  >*/}
            {/*    <Github className="w-5 h-5 text-white" aria-hidden="true" />*/}
            {/*  </a>*/}
            {/*</div>*/}
          </div>

          <nav aria-label="Navegação do rodapé">
            <h4 className="font-semibold text-white mb-6">Navegação</h4>
            <ul className="grid grid-cols-2 gap-y-3 gap-x-6 sm:gap-x-8">
              {navLinks.map((link) => (
                <li key={link.href} className="relative">
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors inline-block relative py-1"
                    onMouseEnter={() => handleLinkEnter(link.href)}
                    onMouseLeave={handleLinkLeave}
                  >
                    {link.label}
                    <span
                      className={`absolute -bottom-0.5 left-0 h-0.5 bg-accent transition-all duration-300 ease-out ${
                        hoveredLink === link.href ? "w-full" : "w-0"
                      }`}
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <address className="not-italic">
            <h4 className="font-semibold text-white mb-6">Contato</h4>
            <ul className="space-y-4 text-white/60">
              {contactItems.map((item, index) => {
                const Icon = item.icon
                const isHovered = hoveredContact === index
                const content = (
                  <>
                    <div
                      className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-accent/20 group-hover:scale-110"
                      style={isHovered ? { animation: `${item.animation} 0.6s ease-in-out infinite` } : undefined}
                      aria-hidden="true"
                    >
                      <Icon className="w-4 h-4 text-accent" />
                    </div>
                    <div className="flex flex-col gap-1">
                      {item.isLocation ? (
                        <>
                          <span className="group-hover:text-white transition-colors text-sm whitespace-nowrap">
                            <span className="font-semibold text-accent">Sede Fiscal:</span> Porto Alegre, RS
                          </span>
                          <span
                            className="text-xs text-accent font-medium transition-all duration-300"
                            aria-hidden="true"
                          >
                            Atendimento Remoto em todo o Brasil
                          </span>
                        </>
                      ) : (
                        <span className="group-hover:text-white transition-colors">{item.text}</span>
                      )}
                      {item.subtitle && !item.isLocation && isHovered && (
                        <span
                          className="text-xs text-accent/80 font-medium mt-1 transition-all duration-300"
                          style={{
                            animation: "fadeSlideDown 0.3s ease-out forwards",
                          }}
                          aria-hidden="true"
                        >
                          {item.subtitle}
                        </span>
                      )}
                    </div>
                  </>
                )

                return (
                  <li
                    key={index}
                    className="flex items-center gap-3 group"
                    onMouseEnter={() => handleContactEnter(index)}
                    onMouseLeave={handleContactLeave}
                  >
                    {item.href ? (
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <a
                            href={item.href}
                            className="flex items-center gap-3"
                            aria-label={item.ariaLabel}
                            target={item.href.startsWith("http") ? "_blank" : undefined}
                            rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          >
                            {content}
                          </a>
                        </TooltipTrigger>
                      </Tooltip>
                    ) : (
                      <span className="flex items-center gap-3 cursor-default" aria-label={item.ariaLabel}>
                        {content}
                      </span>
                    )}
                  </li>
                )
              })}
            </ul>
          </address>
        </div>

        <div className="border-t border-white/10 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Iseecodes Desenvolvimento Web Ltda. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6 text-sm text-white/40">
            <a href="/privacidade" className="hover:text-white/60 transition-colors">
              Política de Privacidade
            </a>
            <a href="/termos" className="hover:text-white/60 transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

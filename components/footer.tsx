"use client"

import { Mail, MapPin } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa6"

const navLinks = [
  { href: "#servicos", label: "Serviços" },
  { href: "#processo", label: "Processo" },
  { href: "#sobre", label: "Sobre" },
  { href: "#tecnologias", label: "Segurança" },
  { href: "#contato", label: "Contato" },
]

const whatsappNumber = "5551999698812"
const whatsappMessage = "Olá, vim pelo site ISEECODES e gostaria de falar sobre um projeto."
const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

const contactItems = [
  {
    icon: Mail,
    text: "contato@iseecodes.com.br",
    href: null,
    ariaLabel: "Email: contato@iseecodes.com.br",
  },
  {
    icon: FaWhatsapp,
    text: "+55 (51) 99969-8812",
    href: whatsappHref,
    ariaLabel: "Conversar no WhatsApp com a Iseecodes em nova aba",
    subtitle: "Contato direto com o sócio-fundador",
  },
  {
    icon: MapPin,
    text: "Porto Alegre, RS - Brasil",
    href: null,
    ariaLabel: "Sede fiscal em Porto Alegre, RS, com atendimento remoto em todo o Brasil",
    subtitle: "Atendimento remoto em todo o Brasil",
    isLocation: true,
  },
]

export function Footer() {
  return (
      <footer className="bg-hero-surface py-12 md:py-14 lg:py-16" role="contentinfo">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-5 grid gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-4 lg:gap-12">
            <div className="lg:col-span-2">
              <a href="#inicio" className="mb-6 flex items-center" aria-label="Iseecodes - voltar ao início">
              <span className="text-2xl font-bold text-white">
                <span className="text-brand-highlight">Isee</span>codes
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

              <p className="mb-6 max-w-md leading-relaxed text-white/60">
                Iseecodes Desenvolvimento Web Ltda. Software house especializada em soluções web e mobile sob demanda,
                com foco em gestão empresarial.
              </p>
            </div>

            <nav aria-label="Navegação do rodapé">
              <h4 className="mb-6 font-semibold text-white">Navegação</h4>
              <ul className="grid grid-cols-2 gap-x-6 gap-y-3 sm:gap-x-8">
                {navLinks.map((link) => (
                    <li key={link.href}>
                      <a href={link.href} className="inline-block py-1 text-white/60 transition-colors hover:text-white">
                        {link.label}
                      </a>
                    </li>
                ))}
              </ul>
            </nav>

            <address className="not-italic">
              <h4 className="mb-6 font-semibold text-white">Contato</h4>
              <ul className="space-y-4 text-white/60">
                {contactItems.map((item, index) => {
                  const Icon = item.icon
                  const content = (
                      <>
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/10" aria-hidden="true">
                          <Icon className="h-4 w-4 text-accent" />
                        </div>
                        <div className="flex flex-col gap-1">
                          {item.isLocation ? (
                              <>
                          <span className="text-sm text-white/70">
                            <span className="font-semibold text-accent">Sede Fiscal:</span> Porto Alegre, RS
                          </span>
                                <span className="text-xs font-medium text-accent/90">Atendimento remoto em todo o Brasil</span>
                              </>
                          ) : (
                              <>
                                <span className="transition-colors group-hover:text-white">{item.text}</span>
                                {item.subtitle && <span className="text-xs font-medium text-accent/80">{item.subtitle}</span>}
                              </>
                          )}
                        </div>
                      </>
                  )

                  return (
                      <li key={index} className="group flex items-center gap-3">
                        {item.href ? (
                            <a
                                href={item.href}
                                className="flex items-center gap-3"
                                aria-label={item.ariaLabel}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                              {content}
                            </a>
                        ) : (
                            <span className="flex items-center gap-3" aria-label={item.ariaLabel}>
                        {content}
                      </span>
                        )}
                      </li>
                  )
                })}
              </ul>
            </address>
          </div>

          <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-center md:flex-row md:gap-4 md:pt-8 md:text-left">
            <p className="text-sm text-white/40">© 2026 Iseecodes Desenvolvimento Web Ltda. Todos os direitos reservados.</p>
            <div className="flex items-center gap-6 text-sm text-white/40">
              <a href="/privacidade" className="transition-colors hover:text-white/60">
                Política de Privacidade
              </a>
              <a href="/termos" className="transition-colors hover:text-white/60">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </footer>
  )
}

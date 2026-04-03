"use client"

import { useState, useEffect, useRef } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string>("")
  const [hoveredSection, setHoveredSection] = useState<string | null>(null)
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 })
  const navRef = useRef<HTMLDivElement>(null)
  const linkRefs = useRef<{ [key: string]: HTMLAnchorElement | null }>({})

  const navLinks = [
    { href: "#servicos", label: "Serviços", id: "servicos" },
    { href: "#processo", label: "Processo", id: "processo" },
    { href: "#sobre", label: "Sobre", id: "sobre" },
    { href: "#tecnologias", label: "Segurança", id: "tecnologias" },
    { href: "#contato", label: "Contato", id: "contato" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight
      setIsScrolled(window.scrollY > heroHeight - 80)

      const sections = navLinks.map((link) => document.getElementById(link.id))
      const scrollPosition = window.scrollY + 150

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          if (activeSection !== navLinks[i].id) {
            setActiveSection(navLinks[i].id)
          }
          break
        }
      }

      if (window.scrollY < heroHeight - 80) {
        setActiveSection("")
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [activeSection])

  useEffect(() => {
    const targetSection = hoveredSection || activeSection

    if (targetSection && linkRefs.current[targetSection] && navRef.current) {
      const linkElement = linkRefs.current[targetSection]
      const navElement = navRef.current

      if (linkElement) {
        const linkRect = linkElement.getBoundingClientRect()
        const navRect = navElement.getBoundingClientRect()

        setIndicatorStyle({
          left: linkRect.left - navRect.left,
          width: linkRect.width,
        })
      }
    } else if (!hoveredSection && !activeSection) {
      setIndicatorStyle({ left: 0, width: 0 })
    }
  }, [activeSection, hoveredSection])

  return (
      <header
          className={cn(
              "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
              isScrolled
                  ? "bg-header-scrolled backdrop-blur-xl shadow-lg border-b border-white/20"
                  : "bg-secondary",
          )}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <a href="#" className="flex items-center group">
            <span className="text-2xl font-bold text-white transition-all duration-500">
              <span
                  className={cn(
                      "transition-all duration-500",
                      isScrolled ? "text-secondary" : "text-brand-highlight",
                  )}
              >
                Isee
              </span>
              codes
            </span>
            </a>

            <nav
                ref={navRef}
                className="hidden lg:flex items-center gap-1 relative"
                onMouseLeave={() => setHoveredSection(null)}
            >
              <div
                  className={cn(
                      "absolute bottom-0 h-0.5 rounded-full transition-all duration-500 ease-out",
                      isScrolled ? "bg-primary" : "bg-accent",
                      indicatorStyle.width > 0 ? "opacity-100" : "opacity-0",
                  )}
                  style={{
                    left: `${indicatorStyle.left}px`,
                    width: `${indicatorStyle.width}px`,
                  }}
              />

              {navLinks.map((link) => (
                  <a
                      key={link.href}
                      ref={(el) => {
                        linkRefs.current[link.id] = el
                      }}
                      href={link.href}
                      onMouseEnter={() => setHoveredSection(link.id)}
                      className={cn(
                          "relative px-4 xl:px-5 py-2 text-base xl:text-[17px] font-medium transition-all duration-300",
                          isScrolled
                              ? hoveredSection === link.id || (!hoveredSection && activeSection === link.id)
                                  ? "text-white"
                                  : "text-secondary hover:text-white"
                              : hoveredSection === link.id || (!hoveredSection && activeSection === link.id)
                                  ? "text-white"
                                  : "text-white/75 hover:text-white",
                      )}
                  >
                    {link.label}
                  </a>
              ))}
            </nav>

            <div className="hidden lg:block">
              <a href="#contato">
                <Button
                    className={cn(
                        "font-semibold text-sm xl:text-base px-5 xl:px-6 transition-all duration-500",
                        isScrolled
                            ? "bg-secondary hover:bg-secondary/90 text-white hover:shadow-[0_0_20px_rgba(0,84,132,0.5)]"
                            : "bg-button-primary hover:bg-button-primary-hover text-button-primary-foreground hover:shadow-[0_0_20px_rgba(245,134,52,0.4)]",
                    )}
                >
                  Entrar em Contato
                </Button>
              </a>
            </div>

            <button
                className={cn(
                    "lg:hidden p-2 rounded transition-all duration-500",
                    isScrolled ? "bg-white/20 hover:bg-white/30" : "bg-white/5 hover:bg-white/10",
                )}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
                aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-white" />
              ) : (
                  <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>

          {isMobileMenuOpen && (
              <div
                  className={cn(
                      "lg:hidden backdrop-blur-xl border-t py-4 animate-in slide-in-from-top-2 transition-all duration-500",
                      isScrolled ? "bg-header-scrolled/98 border-white/20" : "bg-secondary/98 border-primary/10",
                  )}
              >
                <nav className="flex flex-col gap-1">
                  {navLinks.map((link) => (
                      <a
                          key={link.href}
                          href={link.href}
                          className={cn(
                              "px-4 py-3 text-base sm:text-lg font-medium transition-all duration-300 border-l-2",
                              activeSection === link.id
                                  ? isScrolled
                                      ? "bg-white/20 border-l-white text-white"
                                      : "bg-primary/10 border-l-accent text-white"
                                  : "border-l-transparent text-white/75 hover:text-white",
                              isScrolled ? "hover:bg-white/10" : "hover:bg-primary/5",
                          )}
                          onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.label}
                      </a>
                  ))}

                  <div
                      className={cn(
                          "px-4 pt-4 mt-2 border-t",
                          isScrolled ? "border-white/20" : "border-primary/10",
                      )}
                  >
                    <a href="#contato" onClick={() => setIsMobileMenuOpen(false)}>
                      <Button
                          className={cn(
                              "w-full font-semibold text-base py-6 transition-all duration-500",
                              isScrolled
                                  ? "bg-secondary hover:bg-secondary/90 text-white"
                                  : "bg-button-primary hover:bg-button-primary-hover text-button-primary-foreground",
                          )}
                      >
                        Entrar em Contato
                      </Button>
                    </a>
                  </div>
                </nav>
              </div>
          )}
        </div>
      </header>
  )
}
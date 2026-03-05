"use client"

import { useState, useEffect, useMemo } from "react"
import { ArrowRight, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {cn} from "@/lib/utils";

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const fullText = "Dê o próximo passo na gestão de sua empresa."
  const [displayText, setDisplayText] = useState("")
  const [showCursor, setShowCursor] = useState(true)
  const [typingComplete, setTypingComplete] = useState(false)

  useEffect(() => {
    setIsLoaded(true)

    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 100)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })

    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typingInterval)
        setTypingComplete(true)
        setTimeout(() => {
          setShowCursor(false)
        }, 1000)
      }
    }, 80)

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 530)

    return () => {
      clearInterval(typingInterval)
      clearInterval(cursorInterval)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const renderedText = useMemo(() => {
    const proximoPassoIndex = displayText.indexOf("próximo passo")
    if (proximoPassoIndex === -1) {
      return <span>{displayText}</span>
    }

    const beforeProximoPasso = displayText.slice(0, proximoPassoIndex)
    const proximoPassoText = displayText.slice(proximoPassoIndex, proximoPassoIndex + 13)
    const afterProximoPasso = displayText.slice(proximoPassoIndex + 13)

    return (
      <>
        {beforeProximoPasso}
        <span className="relative inline-block">
          <span className="text-transparent bg-clip-text bg-linear-to-r from-accent via-accent/80 to-primary">
            {proximoPassoText}
          </span>
          {typingComplete && proximoPassoText === "próximo passo" && (
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-linear-to-r from-accent to-primary rounded-full animate-[expandLine_0.6s_ease-out_forwards]" />
          )}
        </span>
        {afterProximoPasso}
      </>
    )
  }, [displayText, typingComplete])

  return (
    <section
      id="inicio"
      aria-label="Seção principal - Iseecodes Software House"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-secondary"
    >
      <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        <div
          className="absolute top-0 left-0 w-125 h-125 bg-primary/20 rounded-full blur-[120px] animate-[blob1_20s_ease-in-out_infinite]"
          style={{ willChange: "transform" }}
        />
        <div
          className="absolute bottom-0 right-0 w-100 h-100 bg-accent/15 rounded-full blur-[100px] animate-[blob2_25s_ease-in-out_infinite]"
          style={{ willChange: "transform" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-primary-dark/10 rounded-full blur-[150px] animate-[blob3_18s_ease-in-out_infinite]"
          style={{ willChange: "transform" }}
        />

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />

        <div className="absolute inset-0">
          <div className="absolute w-[200%] h-0.5 bg-linear-to-r from-transparent via-primary/20 to-transparent top-[30%] -left-1/2 rotate-15 animate-[slideRight_12s_linear_infinite]" />
          <div className="absolute w-[200%] h-0.5 bg-linear-to-r from-transparent via-accent/15 to-transparent top-[60%] -left-1/2 rotate-[-10deg] animate-[slideLeft_15s_linear_infinite]" />
          <div className="absolute w-[200%] h-0.5 bg-linear-to-r from-transparent via-primary/15 to-transparent top-[80%] -left-1/2 rotate-[8deg] animate-[slideRight_18s_linear_infinite]" />
        </div>
      </div>

      <div
        className="absolute inset-0 bg-linear-to-b from-secondary/80 via-transparent to-secondary z-1"
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10 flex flex-col justify-center">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className={`inline-flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-full px-6 py-2.5 mt-24 mb-14 border border-white/10 transition-all duration-500 overflow-hidden ${
              isScrolled ? "opacity-0 -translate-y-5 pointer-events-none" : "opacity-100 translate-y-0"
            }`}
            style={{
              animation: isLoaded && !isScrolled ? "fadeSlideUp 0.8s ease-out forwards" : "none",
            }}
          >
            <span className="relative flex h-2 w-2 shrink-0" aria-hidden="true">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <div className="relative overflow-hidden w-60 sm:w-65">
              <span className="inline-block text-white/90 text-sm font-medium tracking-wide whitespace-nowrap animate-[marquee_8s_linear_infinite]">
                Software de gestão sob demanda.
              </span>
            </div>
            <span className="relative flex h-2 w-2 shrink-0" aria-hidden="true">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
          </div>

          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 min-h-[1.2em] md:min-h-[1.5em]"
            style={{
              animation: isLoaded ? "fadeSlideUp 0.8s ease-out 0.2s forwards" : "none",
              opacity: 0,
            }}
          >
            <span aria-hidden="true">
              {renderedText}
              <span
                className={`inline-block w-1 h-[0.9em] bg-accent ml-1 align-middle transition-opacity duration-500 ${
                  showCursor && !typingComplete ? "opacity-100" : typingComplete ? "opacity-0" : "opacity-0"
                }`}
              />
            </span>
          </h1>
          <p
              className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-12 leading-relaxed"
              style={{
                animation: isLoaded ? "fadeSlideUp 0.8s ease-out 0.4s forwards" : "none",
                opacity: 0,
              }}
          >
            Fuja das soluções genéricas. Na{" "}
            <span className={cn("font-semibold", isScrolled ? "text-white" : "text-white")}>
              <span className={cn("transition-all duration-500", "text-accent")}>
                Isee
              </span>
              codes
            </span>, a gestão vem antes da tecnologia. Desenvolvemos sistemas sob medida que
            automatizam processos, integram dados e resolvem desafios reais de gestão.</p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-15"
            style={{
              animation: isLoaded ? "fadeSlideUp 0.8s ease-out 0.6s forwards" : "none",
              opacity: 0,
            }}
          >
            <a href="#contato">
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
            <a href="#servicos">
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg bg-transparent backdrop-blur-sm group"
                aria-label="Ver nossos serviços de desenvolvimento"
              >
                <span className="group-hover:tracking-wider transition-all duration-300">Conhecer Serviços</span>
              </Button>
            </a>
          </div>
        </div>

        <div
          className="w-full max-w-4xl mx-auto mt-auto pb-16"
          style={{
            animation: isLoaded ? "fadeSlideUp 0.8s ease-out 0.8s forwards" : "none",
            opacity: 0,
          }}
        >
          <div className="grid grid-cols-3 gap-8 pt-10 border-t border-white/10">
            <div className="text-center group cursor-default">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-accent transition-colors duration-300">
                Processos
              </div>
              <div className="text-white/60 text-sm">Controles Internos</div>
            </div>
            <div className="text-center group cursor-default">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-accent transition-colors duration-300">
                Indicadores
              </div>
              <div className="text-white/60 text-sm">Medidas de Desempenho</div>
            </div>
            <div className="text-center group cursor-default">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-accent transition-colors duration-300">
                Gestão
              </div>
              <div className="text-white/60 text-sm">Foco Estratégico</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10" aria-hidden="true">
        <div className="relative">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center pt-1">
            <ChevronDown className="w-4 h-4 text-accent animate-[scrollBounce_1.5s_ease-in-out_infinite]" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -40px) scale(1.05); }
          66% { transform: translate(-20px, 20px) scale(0.95); }
        }
        @keyframes blob2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-30px, 30px) scale(0.95); }
          66% { transform: translate(20px, -30px) scale(1.05); }
        }
        @keyframes blob3 {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-50%, -50%) scale(1.1); }
        }
        @keyframes slideRight {
          0% { transform: translateX(-50%) rotate(15deg); }
          100% { transform: translateX(50%) rotate(15deg); }
        }
        @keyframes slideLeft {
          0% { transform: translateX(50%) rotate(-10deg); }
          100% { transform: translateX(-50%) rotate(-10deg); }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes expandLine {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes scrollBounce {
          0%, 100% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(8px); opacity: 0.5; }
        }
        @keyframes marquee {
          0% { 
            transform: translateX(100%);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% { 
            transform: translateX(-100%);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  )
}

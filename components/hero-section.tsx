"use client"

import { useEffect, useMemo, useState } from "react"
import { ArrowRight, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const fullText = "Na Iseecodes, a gestão vem antes da tecnologia."
  const targetText = "Iseecodes"

  const [isLoaded, setIsLoaded] = useState(false)
  const [displayText, setDisplayText] = useState("")
  const [showCursor, setShowCursor] = useState(true)
  const [typingComplete, setTypingComplete] = useState(false)

  useEffect(() => {
    setIsLoaded(true)

    let currentIndex = 0

    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typingInterval)
        setTypingComplete(true)
        setTimeout(() => setShowCursor(false), 700)
      }
    }, 55)

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)

    return () => {
      clearInterval(typingInterval)
      clearInterval(cursorInterval)
    }
  }, [])

  const renderedText = useMemo(() => {
    const targetIndex = displayText.indexOf(targetText)

    if (targetIndex === -1) {
      return <span>{displayText}</span>
    }

    const beforeText = displayText.slice(0, targetIndex)
    const afterText = displayText.slice(targetIndex + targetText.length)

    return (
        <>
          {beforeText}
          <span className="inline-block">
            <span className="text-brand-highlight">Isee</span>
            codes
          </span>
          {afterText}
        </>
    )
  }, [displayText])

  return (
      <section
          id="inicio"
          aria-label="Seção principal da Iseecodes"
          className="relative flex min-h-[calc(100svh-5rem)] items-center justify-center overflow-hidden bg-hero-surface pt-24 pb-10 md:min-h-screen md:pt-20 md:pb-4"
      >
        <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
          <div
              className="absolute top-0 left-0 h-125 w-125 rounded-full bg-primary/20 blur-[110px] animate-[blob1_20s_ease-in-out_infinite]"
              style={{ willChange: "transform" }}
          />
          <div
              className="absolute right-0 bottom-0 h-100 w-100 rounded-full bg-accent/15 blur-[90px] animate-[blob2_24s_ease-in-out_infinite]"
              style={{ willChange: "transform" }}
          />
          <div
              className="absolute top-1/2 left-1/2 h-150 w-150 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-dark/10 blur-[140px] animate-[blob3_18s_ease-in-out_infinite]"
              style={{ willChange: "transform" }}
          />

          <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                    "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
                backgroundSize: "50px 50px",
              }}
          />

          <div className="absolute inset-0 opacity-80">
            <div className="absolute top-[30%] -left-1/2 h-0.5 w-[200%] rotate-15 bg-linear-to-r from-transparent via-primary/20 to-transparent animate-[slideRight_14s_linear_infinite]" />
            <div className="absolute top-[60%] -left-1/2 h-0.5 w-[200%] rotate-[-10deg] bg-linear-to-r from-transparent via-accent/15 to-transparent animate-[slideLeft_18s_linear_infinite]" />
          </div>
        </div>

        <div
            className="absolute inset-0 z-[1] bg-linear-to-b from-secondary/85 via-secondary/15 to-secondary"
            aria-hidden="true"
        />

        <div className="container relative z-10 mx-auto flex flex-col justify-start px-4 lg:px-8 md:justify-center">
          <div className="mx-auto max-w-5xl text-center">
            <h1
                className="mb-6 min-h-[1.2em] text-3xl leading-tight font-bold text-white sm:text-4xl md:mb-8 md:min-h-[1.5em] md:text-6xl lg:text-7xl"
                style={{
                  animation: isLoaded ? "fadeSlideUp 0.75s ease-out 0.15s forwards" : "none",
                  opacity: 0,
                }}
            >
            <span aria-hidden="true">
              {renderedText}
              <span
                  className={`ml-1 inline-block h-[0.9em] w-1 align-middle bg-accent transition-opacity duration-300 ${
                      showCursor && !typingComplete ? "opacity-100" : "opacity-0"
                  }`}
              />
            </span>
            </h1>

            <h2
                className="mx-auto mb-8 max-w-3xl px-2 text-base leading-relaxed text-white/85 text-balance sm:text-lg md:mb-10 md:px-0 md:text-xl lg:text-2xl"
                style={{
                  animation: isLoaded ? "fadeSlideUp 0.75s ease-out 0.3s forwards" : "none",
                  opacity: 0,
                }}
            >
              Cada demanda empresarial exige clareza sobre o que precisa ser resolvido. Atuamos em processos,
              informação, controle e decisão para estruturar soluções sob medida, alinhadas à realidade do seu negócio.
            </h2>

            <div
                className="mb-8 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4 md:mb-10"
                style={{
                  animation: isLoaded ? "fadeSlideUp 0.75s ease-out 0.45s forwards" : "none",
                  opacity: 0,
                }}
            >
              <a href="#contato" className="w-full sm:w-auto">
                <Button
                    size="lg"
                    className="group w-full bg-button-primary px-8 py-5 text-base font-semibold text-button-primary-foreground hover:bg-button-primary-hover sm:w-auto md:py-6 md:text-lg"
                    aria-label="Descrever minha demanda para a Iseecodes"
                >
                <span className="relative z-10 flex items-center justify-center">
                  Descreva sua demanda
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </span>
                </Button>
              </a>

              <a href="#servicos" className="w-full sm:w-auto">
                <Button
                    size="lg"
                    variant="outline"
                    className="group w-full border-white/30 bg-transparent px-8 py-5 text-base text-white backdrop-blur-sm hover:bg-white/10 sm:w-auto md:py-6 md:text-lg"
                    aria-label="Entender como a Iseecodes estrutura a solução da demanda"
                >
                  <span className="transition-all duration-300 group-hover:tracking-wide">Conheça nossa abordagem</span>
                </Button>
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-5 left-1/2 z-10 hidden -translate-x-1/2 md:block" aria-hidden="true">
          <div className="relative flex flex-col items-center gap-2 text-white/55">
            <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/30 pt-1">
              <ChevronDown className="h-4 w-4 text-accent animate-[scrollBounce_1.5s_ease-in-out_infinite]" />
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
          50% { transform: translate(-50%, -50%) scale(1.08); }
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
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scrollBounce {
          0%, 100% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(8px); opacity: 0.5; }
        }
      `}</style>
      </section>
  )
}

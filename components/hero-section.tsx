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
    }
  }, [])

  const renderedText = useMemo(() => {
    const targetIndex = displayText.indexOf(targetText)

    if (targetIndex === -1) {
      return <span>{displayText}</span>
    }

    const beforeText = displayText.slice(0, targetIndex)
    const highlightedText = displayText.slice(
        targetIndex,
        targetIndex + targetText.length
    )
    const afterText = displayText.slice(targetIndex + targetText.length)

    return (
        <>
          {beforeText}
          <span className="relative inline-block">
          <span className="text-transparent bg-clip-text bg-linear-to-r from-accent via-accent/80 to-primary">
            {highlightedText}
          </span>

            {typingComplete && (
                <span className="absolute -bottom-2 left-0 right-0 h-1 rounded-full bg-linear-to-r from-accent to-primary animate-[expandLine_0.6s_ease-out_forwards]" />
            )}
        </span>
          {afterText}
        </>
    )
  }, [displayText, typingComplete])

  return (
      <section
          id="inicio"
          aria-label="Seção principal - Iseecodes Software House"
          className="relative flex min-h-[calc(100svh-5rem)] items-center justify-center overflow-hidden bg-secondary pt-24 pb-6 md:min-h-screen md:pt-20 md:pb-0"
      >
        <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
          <div
              className="absolute top-0 left-0 h-125 w-125 rounded-full bg-primary/20 blur-[120px] animate-[blob1_20s_ease-in-out_infinite]"
              style={{ willChange: "transform" }}
          />
          <div
              className="absolute right-0 bottom-0 h-100 w-100 rounded-full bg-accent/15 blur-[100px] animate-[blob2_25s_ease-in-out_infinite]"
              style={{ willChange: "transform" }}
          />
          <div
              className="absolute top-1/2 left-1/2 h-150 w-150 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-dark/10 blur-[150px] animate-[blob3_18s_ease-in-out_infinite]"
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

          <div className="absolute inset-0">
            <div className="absolute top-[30%] -left-1/2 h-0.5 w-[200%] rotate-15 bg-linear-to-r from-transparent via-primary/20 to-transparent animate-[slideRight_12s_linear_infinite]" />
            <div className="absolute top-[60%] -left-1/2 h-0.5 w-[200%] rotate-[-10deg] bg-linear-to-r from-transparent via-accent/15 to-transparent animate-[slideLeft_15s_linear_infinite]" />
            <div className="absolute top-[80%] -left-1/2 h-0.5 w-[200%] rotate-[8deg] bg-linear-to-r from-transparent via-primary/15 to-transparent animate-[slideRight_18s_linear_infinite]" />
          </div>
        </div>

        <div
            className="absolute inset-0 z-[1] bg-linear-to-b from-secondary/80 via-transparent to-secondary"
            aria-hidden="true"
        />

        <div className="container relative z-10 mx-auto flex flex-col justify-start px-4 lg:px-8 md:justify-center">
          <div className="mx-auto max-w-4xl text-center">
            <h1
                className="mb-6 min-h-[1.2em] text-3xl leading-tight font-bold text-white sm:text-4xl md:mb-10 md:min-h-[1.5em] md:text-6xl lg:text-7xl"
                style={{
                  animation: isLoaded ? "fadeSlideUp 0.8s ease-out 0.2s forwards" : "none",
                  opacity: 0,
                }}
            >
            <span aria-hidden="true">
              {renderedText}
              <span
                  className={`ml-1 inline-block h-[0.9em] w-1 align-middle bg-accent transition-opacity duration-500 ${
                      showCursor && !typingComplete ? "opacity-100" : "opacity-0"
                  }`}
              />
            </span>
            </h1>

            <h2
                className="mx-auto mb-8 max-w-4xl px-4 text-base leading-relaxed text-white/85 text-balance sm:px-6 sm:text-lg md:mb-12 md:px-0 md:text-xl lg:text-2xl"
                style={{
                  animation: isLoaded ? "fadeSlideUp 0.8s ease-out 0.4s forwards" : "none",
                  opacity: 0,
                }}
            >
              Cada demanda empresarial exige clareza sobre o que precisa ser resolvido. Atuamos em processos, informação,
              controle e decisão para estruturar soluções sob medida, alinhadas à realidade do seu negócio.
              </h2>

            <div
                className="mb-8 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4 md:mb-12"
                style={{
                  animation: isLoaded ? "fadeSlideUp 0.8s ease-out 0.6s forwards" : "none",
                  opacity: 0,
                }}
            >
              <a href="#contato" className="w-full sm:w-auto">
                <Button
                    size="lg"
                    className="group relative w-full overflow-hidden bg-accent px-8 py-5 text-base font-semibold text-accent-foreground hover:bg-accent/90 sm:w-auto md:py-6 md:text-lg"
                    aria-label="Solicitar orçamento para evoluir sua gestão"
                >
                <span className="relative z-10 flex items-center justify-center">
                  Descreva sua demanda
                  <ArrowRight
                      className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                  />
                </span>

                  <span
                      className="absolute inset-0 bg-linear-to-r from-accent via-white/20 to-accent bg-size-[200%_100%] animate-[shimmer_2s_linear_infinite] motion-reduce:animate-none"
                      aria-hidden="true"
                  />
                </Button>
              </a>

              <a href="#servicos" className="w-full sm:w-auto">
                <Button
                    size="lg"
                    variant="outline"
                    className="group w-full border-white/30 bg-transparent px-8 py-5 text-base text-white backdrop-blur-sm hover:bg-white/10 sm:w-auto md:py-6 md:text-lg"
                    aria-label="Conhecer a abordagem da Iseecodes"
                >
                <span className="transition-all duration-300 group-hover:tracking-wider">
                  Conheça nossa abordagem
                </span>
                </Button>
              </a>
            </div>
          </div>
        </div>

        <div
            className="absolute bottom-4 left-1/2 z-10 hidden -translate-x-1/2 md:block"
            aria-hidden="true"
        >
          <div className="relative">
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
      `}</style>
      </section>
  )
}
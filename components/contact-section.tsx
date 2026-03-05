"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { Send, CheckCircle2, Loader2, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import emailjs from "@emailjs/browser"

// Initialize EmailJS on component mount
if (typeof window !== 'undefined') {
  emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_USER || "")
}

function SuccessMessage({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<"entering" | "visible" | "fragmenting" | "done">("entering")
  const [fragments, setFragments] = useState<{ id: number; x: number; y: number; rotation: number; delay: number }[]>(
    [],
  )

  useEffect(() => {
    const enterTimer = setTimeout(() => setPhase("visible"), 50)

    const visibleTimer = setTimeout(() => {
      const newFragments = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: (Math.random() - 0.5) * 300,
        y: (Math.random() - 0.5) * 200,
        rotation: (Math.random() - 0.5) * 180,
        delay: Math.random() * 0.3,
      }))
      setFragments(newFragments)
      setPhase("fragmenting")
    }, 3000)

    const doneTimer = setTimeout(() => {
      setPhase("done")
      onComplete()
    }, 4000)

    return () => {
      clearTimeout(enterTimer)
      clearTimeout(visibleTimer)
      clearTimeout(doneTimer)
    }
  }, [onComplete])

  if (phase === "done") return null

  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden z-20 bg-background/80 backdrop-blur-sm rounded-2xl">
      <div
        className={cn(
          "relative bg-linear-to-r from-primary to-primary-dark rounded-2xl p-8 shadow-2xl",
          "transition-all duration-700 ease-out",
          phase === "entering" && "opacity-0 -translate-x-full scale-95",
          phase === "visible" && "opacity-100 translate-x-0 scale-100",
          phase === "fragmenting" && "opacity-0 scale-110",
        )}
      >
        {phase === "fragmenting" &&
          fragments.map((fragment) => (
            <div
              key={fragment.id}
              className="absolute w-4 h-4 rounded-sm bg-primary/80"
              style={{
                left: "50%",
                top: "50%",
                animation: `fragment 0.8s ease-out ${fragment.delay}s forwards`,
                ["--fragment-x" as string]: `${fragment.x}px`,
                ["--fragment-y" as string]: `${fragment.y}px`,
                ["--fragment-rotation" as string]: `${fragment.rotation}deg`,
              }}
            />
          ))}

        <div className="flex flex-col items-center text-center relative z-10">
          <div
            className={cn(
              "w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-4",
              "transition-all duration-500 delay-200",
              phase === "visible" && "animate-bounce",
            )}
          >
            <CheckCircle2 className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Mensagem enviada!</h3>
          <p className="text-white/80">Entraremos em contato em breve.</p>
        </div>

        <div
          className={cn("absolute inset-0 rounded-2xl opacity-0", phase === "visible" && "animate-pulse opacity-30")}
          style={{
            background: "linear-gradient(45deg, transparent, rgba(255,255,255,0.3), transparent)",
          }}
        />
      </div>

      <style jsx>{`
        @keyframes fragment {
          0% {
            transform: translate(-50%, -50%) rotate(0deg) scale(1);
            opacity: 1;
          }
          100% {
            transform: translate(
              calc(-50% + var(--fragment-x)),
              calc(-50% + var(--fragment-y))
            ) rotate(var(--fragment-rotation)) scale(0);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  )
}

function formatPhone(value: string): string {
  const numbers = value.replace(/\D/g, "")

  if (numbers.length <= 2) {
    return numbers.length ? `(${numbers}` : ""
  }
  if (numbers.length <= 7) {
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`
  }
  if (numbers.length <= 11) {
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7)}`
  }
  return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`
}

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID

      if (!serviceId || !templateId) {
        throw new Error("Configuração de email incompleta. Verifique as variáveis de ambiente NEXT_PUBLIC_EMAILJS_SERVICE_ID e NEXT_PUBLIC_EMAILJS_TEMPLATE_ID")
      }

      // Send email using EmailJS
      await emailjs.send(serviceId, templateId, {
        from_name: formData.fullName,
        from_email: formData.email,
        from_phone: formData.phone,
        company: formData.company || "Não informado",
        message: formData.message,
        to_email: "contato@iseecodes.com.br", // Substitua pelo seu email
      })

      setShowSuccess(true)
      setFormData({ fullName: "", email: "", phone: "", company: "", message: "" })
    } catch (error) {
      console.error("Erro ao enviar email:", error)
      alert("Erro ao enviar mensagem. Tente novamente. Verifique o console para mais detalhes.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target

    if (name === "phone") {
      setFormData((prev) => ({ ...prev, [name]: formatPhone(value) }))
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
    }
  }

  return (
    <section id="contato" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className={cn("text-center mb-12", inView && "animate-in fade-in slide-in-from-bottom-6 duration-700")}>
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              Fale Conosco
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Vamos conversar sobre seu projeto?</h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
              Preencha o formulário abaixo e nossa equipe entrará em contato para entender suas necessidades e
              transformar suas ideias em realidade.
            </p>
          </div>

          {/* Formulário reformulado */}
          <div className={cn(inView && "animate-in fade-in slide-in-from-bottom-10 duration-700 delay-200")}>
            <div className="bg-muted/30 rounded-2xl p-8 md:p-10 border border-border relative">
              {showSuccess && <SuccessMessage onComplete={() => setShowSuccess(false)} />}

              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Envie sua mensagem</h3>
                  <p className="text-sm text-muted-foreground">Todos os campos com * são obrigatórios</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className={cn("space-y-6", showSuccess && "opacity-0")}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Nome Completo <span className="text-accent">*</span>
                    </label>
                    <Input
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Digite seu nome completo"
                      required
                      className="bg-background"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email <span className="text-accent">*</span>
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="seu@email.com"
                      required
                      className="bg-background"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Telefone <span className="text-accent">*</span>
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(00) 00000-0000"
                      required
                      maxLength={15}
                      className="bg-background"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Empresa</label>
                    <Input
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Nome da sua empresa"
                      className="bg-background"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Mensagem <span className="text-accent">*</span>
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Conte-nos sobre seu projeto, suas necessidades e como podemos ajudar..."
                    rows={5}
                    required
                    className="bg-background resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-6 text-base"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      Enviar Mensagem
                      <Send className="ml-2 w-5 h-5" />
                    </>
                  )}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Ao enviar, você concorda com nossa política de privacidade. Seus dados estão seguros conosco.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

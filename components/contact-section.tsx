"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { Send, CheckCircle2, Loader2, MessageSquare, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import emailjs from "@emailjs/browser"

if (typeof window !== "undefined") {
  emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_USER || "")
}

function SuccessMessage({ onComplete }: { onComplete: () => void }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const enterTimer = setTimeout(() => setVisible(true), 40)
    const doneTimer = setTimeout(() => onComplete(), 2600)

    return () => {
      clearTimeout(enterTimer)
      clearTimeout(doneTimer)
    }
  }, [onComplete])

  return (
      <div className="absolute inset-0 z-20 flex items-center justify-center rounded-2xl bg-background/80 backdrop-blur-sm">
        <div
            className={cn(
                "rounded-2xl bg-linear-to-r from-primary to-primary-dark p-8 text-center shadow-2xl transition-all duration-500",
                visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
            )}
        >
          <div className="mb-4 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/15">
              <CheckCircle2 className="h-8 w-8 text-white" />
            </div>
          </div>
          <h3 className="mb-2 text-xl font-semibold text-white">Mensagem enviada</h3>
          <p className="text-white/85">Entraremos em contato em breve.</p>
        </div>
      </div>
  )
}

function formatPhone(value: string): string {
  const numbers = value.replace(/\D/g, "")

  if (numbers.length <= 2) return numbers.length ? `(${numbers}` : ""
  if (numbers.length <= 7) return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`
  if (numbers.length <= 11) return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7)}`
  return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`
}

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [submitError, setSubmitError] = useState("")
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })

  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError("")

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID

      if (!serviceId || !templateId) {
        throw new Error("Configuração de email incompleta.")
      }

      await emailjs.send(serviceId, templateId, {
        name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        company: formData.company || "Não informado",
        message: formData.message,
        to_email: "contato@iseecodes.com.br",
      })

      setShowSuccess(true)
      setFormData({ fullName: "", email: "", phone: "", company: "", message: "" })
    } catch (error) {
      console.error("Erro ao enviar email:", error)
      setSubmitError("Não foi possível enviar sua mensagem agora. Tente novamente em instantes ou fale conosco pelo WhatsApp.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target

    if (name === "phone") {
      setFormData((prev) => ({ ...prev, [name]: formatPhone(value) }))
      return
    }

    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
      <section id="contato" className="bg-background py-24" ref={ref}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className={cn("mb-12 text-center", inView && "animate-in fade-in slide-in-from-bottom-6 duration-700")}>
              <span className="mb-4 inline-block text-primary font-semibold text-sm uppercase tracking-wider">Fale conosco</span>
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">Vamos conversar sobre sua demanda?</h2>
              <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Conte brevemente sua necessidade e entraremos em contato para entender o contexto, alinhar expectativas
                e avaliar como estruturar a solução mais adequada.
              </p>
              <p className="mx-auto mt-6 max-w-2xl px-4 text-sm font-semibold text-primary/90 md:px-0 md:text-base">
                Respondemos normalmente em até 1 dia útil.
              </p>
            </div>

            <div className={cn(inView && "animate-in fade-in slide-in-from-bottom-10 duration-700 delay-150")}>
              <div className="relative rounded-2xl border border-border bg-muted/30 p-8 md:p-10">
                {showSuccess && <SuccessMessage onComplete={() => setShowSuccess(false)} />}

                <div className="mb-8 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Envie sua mensagem</h3>
                    <p className="text-sm text-muted-foreground">Todos os campos com * são obrigatórios</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className={cn("space-y-6", showSuccess && "opacity-0")}>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-foreground">
                        Nome completo <span className="text-accent">*</span>
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
                      <label className="mb-2 block text-sm font-medium text-foreground">
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

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-foreground">
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
                      <label className="mb-2 block text-sm font-medium text-foreground">Empresa</label>
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
                    <label className="mb-2 block text-sm font-medium text-foreground">
                      Mensagem <span className="text-accent">*</span>
                    </label>
                    <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Descreva sua demanda, o contexto e o principal objetivo que você deseja resolver."
                        rows={5}
                        required
                        className="resize-none bg-background"
                    />
                  </div>

                  {submitError && (
                      <div className="flex items-start gap-3 rounded-lg border border-destructive/20 bg-destructive/5 p-4 text-sm text-foreground">
                        <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
                        <span>{submitError}</span>
                      </div>
                  )}

                  <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full bg-button-primary py-6 text-base font-semibold text-button-primary-foreground hover:bg-button-primary-hover"
                  >
                    {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Enviando...
                        </>
                    ) : (
                        <>
                          Enviar mensagem
                          <Send className="ml-2 h-5 w-5" />
                        </>
                    )}
                  </Button>

                  <p className="text-center text-xs text-muted-foreground">
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

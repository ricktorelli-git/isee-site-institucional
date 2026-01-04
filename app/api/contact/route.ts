import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { fullName, email, phone, company, message } = body

    if (!fullName || !email || !phone || !message) {
      return NextResponse.json({ error: "Preencha todos os campos obrigatórios" }, { status: 400 })
    }

    const serviceId = process.env.EMAILJS_SERVICE_ID
    const templateId = process.env.EMAILJS_TEMPLATE_ID
    const publicKey = process.env.EMAILJS_PUBLIC_KEY
    const privateKey = process.env.EMAILJS_PRIVATE_KEY

    if (!serviceId || !templateId || !publicKey) {
      console.error("Variáveis de ambiente do EmailJS não configuradas")
      return NextResponse.json({ error: "Configuração de email incompleta" }, { status: 500 })
    }

    const emailjsResponse = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        accessToken: privateKey,
        template_params: {
          from_name: fullName,
          from_email: email,
          from_phone: phone,
          company: company || "Não informado",
          message: message,
          to_name: "Iseecodes",
        },
      }),
    })

    if (!emailjsResponse.ok) {
      const errorText = await emailjsResponse.text()
      console.error("Erro EmailJS:", errorText)
      throw new Error("Falha ao enviar email")
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Erro ao enviar email:", error)
    return NextResponse.json({ error: "Erro ao enviar mensagem. Tente novamente." }, { status: 500 })
  }
}

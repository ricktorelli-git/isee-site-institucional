import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://iseecodes.com.br"),
  title: {
    default: "Iseecodes - Desenvolvimento Web e Mobile | Software House Brasileira",
    template: "%s | Iseecodes",
  },
  description:
    "Software house brasileira especializada em desenvolvimento web, mobile e sistemas de gestao financeira sob demanda. Solucoes personalizadas para empresas.",
  keywords: [
    "desenvolvimento web",
    "desenvolvimento mobile",
    "software sob demanda",
    "software house",
    "sistemas de gestao",
    "gestao financeira",
    "aplicativos mobile",
    "Brasil",
    "Iseecodes",
  ],
  authors: [{ name: "Iseecodes Desenvolvimento Web Ltda" }],
  creator: "Iseecodes",
  publisher: "Iseecodes Desenvolvimento Web Ltda",
  alternates: {
    canonical: "https://iseecodes.com.br",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://iseecodes.com.br",
    siteName: "Iseecodes",
    title: "Iseecodes - Desenvolvimento Web e Mobile",
    description:
      "Software house brasileira especializada em desenvolvimento web, mobile e sistemas de gestao financeira sob demanda.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Iseecodes - Desenvolvimento Web e Mobile",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Iseecodes - Desenvolvimento Web e Mobile",
    description:
      "Software house brasileira especializada em desenvolvimento web, mobile e sistemas de gestao financeira sob demanda.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#0080C1",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}

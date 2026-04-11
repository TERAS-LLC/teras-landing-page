import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "LLC TERAS - BtoB SaaS開発支援",
  description:
    "BtoB SaaS開発における設計・組織づくりを支援します。ドメイン駆動設計やチームトポロジーを活用し、保守性と拡張性の高いシステム構築をお手伝いします。",
  generator: "v0.app",
  icons: {
    icon: "/favicon-32x32.png",
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

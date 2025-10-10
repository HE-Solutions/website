import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"
import { LanguageProvider } from "@/lib/language-context"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

export const metadata: Metadata = {
  title: "HE Solutions | Elektrotechnik-Lösungen",
  description:
    "Professionelle Elektronik-Entwicklungsdienstleistung.",
  keywords:
    "Leistungselektronik, PCB-Design, Entwicklungsdienstleistung, Elektrotechnik, Elektrotechniker, Elektroservice",
  authors: [{ name: "HE Solutions" }],
  openGraph: {
    title: "HE Solutions | Elektrotechnik-Lösungen",
    description: "Professionelle Elektronik-Entwicklungsdienstleistung.",
    type: "website",
    locale: "de_DE",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" className={poppins.variable}>
      <body className="font-sans antialiased">
        <LanguageProvider>
          <Suspense fallback={null}>{children}</Suspense>
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}

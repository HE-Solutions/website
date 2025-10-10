"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useLanguage } from "@/lib/language-context"

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setShowBanner(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setShowBanner(false)
  }

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined")
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
      <Card className="max-w-4xl mx-auto p-6 shadow-lg">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1 space-y-2">
            <h3 className="font-sans font-semibold text-foreground">{t.cookie.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t.cookie.description}{" "}
              <a href="/datenschutz" className="underline hover:text-foreground">
                {t.cookie.privacyPolicy}
              </a>
              .
            </p>
          </div>
          <div className="flex items-center gap-3 w-full md:w-auto">
            <Button variant="outline" onClick={declineCookies} className="flex-1 md:flex-none bg-transparent">
              {t.cookie.decline}
            </Button>
            <Button onClick={acceptCookies} className="flex-1 md:flex-none">
              {t.cookie.accept}
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}

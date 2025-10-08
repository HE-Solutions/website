"use client"

import { Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setLanguage(language === "de" ? "en" : "de")}
      className="gap-2 text-muted-foreground hover:text-brand-primary"
    >
      <Globe className="w-4 h-4" />
      <span className="font-medium">{language === "de" ? "EN" : "DE"}</span>
    </Button>
  )
}

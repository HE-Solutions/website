"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Cpu, Zap, CircuitBoard, Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"
import CookieBanner from "@/components/cookie-banner"
import Image from "next/image"
import LanguageSwitcher from "@/components/language-switcher"
import { useLanguage } from "@/lib/language-context"

export default function HomePage() {
  const { t } = useLanguage()

  return (
    <>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="border-b border-border/40 bg-white">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image src="/logo.png" alt="HE Solutions Logo" width={120} height={40} className="h-10 w-auto" />
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <Link
                href="#leistungen"
                className="text-sm font-medium text-muted-foreground hover:text-brand-primary transition-colors"
              >
                {t.nav.services}
              </Link>
              <Link
                href="#ueber-uns"
                className="text-sm font-medium text-muted-foreground hover:text-brand-primary transition-colors"
              >
                {t.nav.about}
              </Link>
              <Link
                href="#kontakt"
                className="text-sm font-medium text-muted-foreground hover:text-brand-primary transition-colors"
              >
                {t.nav.contact}
              </Link>
              <LanguageSwitcher />
            </nav>
            <Button asChild className="hidden md:inline-flex bg-brand-primary hover:bg-brand-primary-light text-white">
              <Link href="#kontakt">{t.nav.request}</Link>
            </Button>
          </div>
        </header>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="font-sans font-bold text-4xl md:text-6xl lg:text-7xl text-balance text-foreground">
              {t.hero.title}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto text-balance">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-brand-primary hover:bg-brand-primary-light text-white"
              >
                <Link href="#kontakt">{t.hero.consultation}</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-brand-primary text-brand-primary hover:bg-brand-primary/10 bg-transparent"
              >
                <Link href="#leistungen">{t.hero.ourServices}</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="leistungen" className="bg-brand-primary/5 py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="font-sans font-bold text-3xl md:text-5xl text-foreground mb-4">{t.services.title}</h2>
              <p className="text-muted-foreground leading-relaxed">{t.services.subtitle}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <Card className="p-8 space-y-4 hover:shadow-lg transition-shadow border-brand-primary/20">
                <div className="w-12 h-12 bg-brand-primary rounded-lg flex items-center justify-center">
                  <CircuitBoard className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-sans font-semibold text-xl text-foreground">{t.services.pcb.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{t.services.pcb.description}</p>
              </Card>

              <Card className="p-8 space-y-4 hover:shadow-lg transition-shadow border-brand-primary/20">
                <div className="w-12 h-12 bg-brand-primary rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-sans font-semibold text-xl text-foreground">{t.services.power.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{t.services.power.description}</p>
              </Card>

              <Card className="p-8 space-y-4 hover:shadow-lg transition-shadow border-brand-primary/20">
                <div className="w-12 h-12 bg-brand-primary rounded-lg flex items-center justify-center">
                  <Cpu className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-sans font-semibold text-xl text-foreground">{t.services.prototyping.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{t.services.prototyping.description}</p>
              </Card>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="ueber-uns" className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h2 className="font-sans font-bold text-3xl md:text-5xl text-foreground">{t.about.title}</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>{t.about.paragraph1}</p>
                    <p>{t.about.paragraph2}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <Card className="p-6 text-center space-y-2 border-brand-primary/20">
                    <div className="text-3xl font-bold text-brand-primary">10+</div>
                    <div className="text-sm text-muted-foreground">{t.about.stats.experience}</div>
                  </Card>
                  <Card className="p-6 text-center space-y-2 border-brand-primary/20">
                    <div className="text-3xl font-bold text-brand-primary">300+</div>
                    <div className="text-sm text-muted-foreground">{t.about.stats.designs}</div>
                  </Card>
                  <Card className="p-6 text-center space-y-2 border-brand-primary/20">
                    <div className="text-3xl font-bold text-brand-primary">100%</div>
                    <div className="text-sm text-muted-foreground">{t.about.stats.quality}</div>
                  </Card>
                  <Card className="p-6 text-center space-y-2 border-brand-primary/20">
                    <div className="text-3xl font-bold text-brand-primary">24/7</div>
                    <div className="text-sm text-muted-foreground">{t.about.stats.support}</div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="kontakt" className="bg-brand-primary/5 py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-sans font-bold text-3xl md:text-5xl text-foreground mb-4">{t.contact.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{t.contact.subtitle}</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <Card className="p-6 space-y-3 text-center border-brand-primary/20">
                  <div className="w-12 h-12 bg-brand-primary rounded-lg flex items-center justify-center mx-auto">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-sans font-semibold text-foreground">{t.contact.phone}</h3>
                  <p className="text-muted-foreground">+49 151 24192050</p>
                </Card>

                <Card className="p-6 space-y-3 text-center border-brand-primary/20">
                  <div className="w-12 h-12 bg-brand-primary rounded-lg flex items-center justify-center mx-auto">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-sans font-semibold text-foreground">{t.contact.email}</h3>
                  <p className="text-muted-foreground">peter@h-e.solutions</p>
                </Card>

                <Card className="p-6 space-y-3 text-center border-brand-primary/20">
                  <div className="w-12 h-12 bg-brand-primary rounded-lg flex items-center justify-center mx-auto">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-sans font-semibold text-foreground">{t.contact.location}</h3>
                  <p className="text-muted-foreground whitespace-pre-line">{t.contact.address}</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border/40 py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-4 gap-8 mb-8">
                <div className="space-y-4">
                  <Image src="/logo.png" alt="HE Solutions Logo" width={360} height={120} className="h-24 w-auto" />
                  <p className="text-sm text-muted-foreground leading-relaxed">{t.footer.tagline}</p>
                </div>

                <div>
                  <h4 className="font-sans font-semibold text-foreground mb-4">{t.footer.services}</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>{t.footer.servicesList.pcb}</li>
                    <li>{t.footer.servicesList.power}</li>
                    <li>{t.footer.servicesList.prototyping}</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-sans font-semibold text-foreground mb-4">{t.footer.company}</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>
                      <Link href="#ueber-uns" className="hover:text-brand-primary transition-colors">
                        {t.nav.about}
                      </Link>
                    </li>
                    <li>
                      <Link href="#kontakt" className="hover:text-brand-primary transition-colors">
                        {t.nav.contact}
                      </Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-sans font-semibold text-foreground mb-4">{t.footer.legal}</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>
                      <Link href="/impressum" className="hover:text-brand-primary transition-colors">
                        {t.footer.imprint}
                      </Link>
                    </li>
                    <li>
                      <Link href="/datenschutz" className="hover:text-brand-primary transition-colors">
                        {t.footer.privacy}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
                <p>
                  © {new Date().getFullYear()} HE Solutions. {t.footer.rights}
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>

      <CookieBanner />
    </>
  )
}

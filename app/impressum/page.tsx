"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export default function ImpressumPage() {
  const { language } = useLanguage()

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <Button asChild variant="ghost" className="mb-8">
          <Link href="/">
            <ArrowLeft className="w-4 h-4 mr-2" />
            {language === "de" ? "Zurück zur Startseite" : "Back to Home"}
          </Link>
        </Button>

        <article className="prose prose-neutral dark:prose-invert max-w-none">
          {language === "de" ? (
            <>
              <h1 className="font-sans font-bold text-4xl mb-8">Impressum</h1>

              <section className="space-y-4 mb-8">
                <h2 className="font-sans font-semibold text-2xl">Angaben gemäß § 5 TMG</h2>
                <div className="text-muted-foreground leading-relaxed">
                  <p>HE Solutions UG (haftungsbeschränkt)</p>
                  <p>Roermonder Straße 286</p>
                  <p>52072 Aachen</p>
                </div>
              </section>

              <section className="space-y-4 mb-8">
                <h2 className="font-sans font-semibold text-2xl">Vertreten durch</h2>
                <div className="text-muted-foreground leading-relaxed">
                  <p>Peter Heynmöller</p>
                  <p>Telefon: +49 151 24192050</p>
                  <p>E-Mail: peter@h-e.solutions</p>
                </div>
              </section>

              <section className="space-y-4 mb-8">
                <h2 className="font-sans font-semibold text-2xl">Umsatzsteuer-ID</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
                  <br />DE456281570
                </p>
              </section>

              <section className="space-y-4 mb-8">
                <h2 className="font-sans font-semibold text-2xl">EU-Streitschlichtung</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
                  <a
                    href="https://ec.europa.eu/consumers/odr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    https://ec.europa.eu/consumers/odr/
                  </a>
                  <br />
                  Unsere E-Mail-Adresse finden Sie oben im Impressum.
                </p>
              </section>

              <section className="space-y-4 mb-8">
                <h2 className="font-sans font-semibold text-2xl">
                  Verbraucher­streit­beilegung/Universal­schlichtungs­stelle
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                  Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </section>
            </>
          ) : (
            <>
              <h1 className="font-sans font-bold text-4xl mb-8">Imprint</h1>

              <section className="space-y-4 mb-8">
                <h2 className="font-sans font-semibold text-2xl">Information according to § 5 TMG</h2>
                <div className="text-muted-foreground leading-relaxed">
                    <p>HE Solutions UG (haftungsbeschränkt)</p>
                    <p>Roermonder Straße 286</p>
                    <p>52072 Aachen</p>
                </div>
              </section>

              <section className="space-y-4 mb-8">
                <h2 className="font-sans font-semibold text-2xl">Represented By:</h2>
                <div className="text-muted-foreground leading-relaxed">
                  <p>Peter Heynmöller</p>
                  <p>Telefon: +49 151 24192050</p>
                  <p>E-Mail: peter@h-e.solutions</p>
                </div>
              </section>

              <section className="space-y-4 mb-8">
                <h2 className="font-sans font-semibold text-2xl">VAT ID</h2>
                <p className="text-muted-foreground leading-relaxed">
                  VAT identification number according to § 27 a VAT Act:
                  <br />DE456281570
                </p>
              </section>

              <section className="space-y-4 mb-8">
                <h2 className="font-sans font-semibold text-2xl">EU Dispute Resolution</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The European Commission provides a platform for online dispute resolution (ODR):{" "}
                  <a
                    href="https://ec.europa.eu/consumers/odr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    https://ec.europa.eu/consumers/odr/
                  </a>
                  <br />
                  You can find our email address in the imprint above.
                </p>
              </section>

              <section className="space-y-4 mb-8">
                <h2 className="font-sans font-semibold text-2xl">Consumer Dispute Resolution</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We are not willing or obliged to participate in dispute resolution proceedings before a consumer
                  arbitration board.
                </p>
              </section>
            </>
          )}
        </article>
      </div>
    </div>
  )
}

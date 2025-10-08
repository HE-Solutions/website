"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export default function DatenschutzPage() {
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
              <h1 className="font-sans font-bold text-4xl mb-8">Datenschutzerklärung</h1>

              <section className="space-y-4 mb-8">
                <h2 className="font-sans font-semibold text-2xl">1. Datenschutz auf einen Blick</h2>
                <h3 className="font-sans font-semibold text-xl">Allgemeine Hinweise</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten
                  passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
                  persönlich identifiziert werden können.
                </p>
              </section>

              <section className="space-y-4 mb-8">
                <h2 className="font-sans font-semibold text-2xl">2. Datenerfassung auf dieser Website</h2>
                <h3 className="font-sans font-semibold text-xl">
                  Wer ist verantwortlich für die Datenerfassung auf dieser Website?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten
                  können Sie dem Impressum dieser Website entnehmen.
                </p>

                <h3 className="font-sans font-semibold text-xl">Wie erfassen wir Ihre Daten?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B.
                  um Daten handeln, die Sie in ein Kontaktformular eingeben.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere
                  IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder
                  Uhrzeit des Seitenaufrufs).
                </p>
              </section>

              <section className="space-y-4 mb-8">
                <h2 className="font-sans font-semibold text-2xl">3. Hosting und Content Delivery Networks (CDN)</h2>
                <h3 className="font-sans font-semibold text-xl">Externes Hosting</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Die personenbezogenen Daten,
                  die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert.
                </p>
              </section>

              <section className="space-y-4 mb-8">
                <h2 className="font-sans font-semibold text-2xl">4. Allgemeine Hinweise und Pflichtinformationen</h2>
                <h3 className="font-sans font-semibold text-xl">Datenschutz</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre
                  personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie
                  dieser Datenschutzerklärung.
                </p>
              </section>

              <section className="space-y-4 mb-8">
                <h2 className="font-sans font-semibold text-2xl">5. Cookies</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Unsere Internetseiten verwenden so genannte „Cookies". Cookies sind kleine Textdateien und richten auf
                  Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung
                  (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert.
                </p>
              </section>

              <section className="space-y-4 mb-8">
                <h2 className="font-sans font-semibold text-2xl">6. Ihre Rechte</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Herkunft, Empfänger und Zweck Ihrer
                  gespeicherten personenbezogenen Daten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung
                  dieser Daten zu verlangen.
                </p>
              </section>

              <div className="mt-12 pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground">Stand: {new Date().toLocaleDateString("de-DE")}</p>
              </div>
            </>
          ) : (
            <>
              <h1 className="font-sans font-bold text-4xl mb-8">Privacy Policy</h1>

              <section className="space-y-4 mb-8">
                <h2 className="font-sans font-semibold text-2xl">1. Privacy at a Glance</h2>
                <h3 className="font-sans font-semibold text-xl">General Information</h3>
                <p className="text-muted-foreground leading-relaxed">
                  The following notes provide a simple overview of what happens to your personal data when you visit
                  this website. Personal data is any data that can be used to identify you personally.
                </p>
              </section>

              <section className="space-y-4 mb-8">
                <h2 className="font-sans font-semibold text-2xl">2. Data Collection on This Website</h2>
                <h3 className="font-sans font-semibold text-xl">
                  Who is responsible for data collection on this website?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Data processing on this website is carried out by the website operator. You can find their contact
                  details in the imprint of this website.
                </p>

                <h3 className="font-sans font-semibold text-xl">How do we collect your data?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Your data is collected when you provide it to us. This could be data that you enter into a contact
                  form, for example.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Other data is collected automatically or with your consent when you visit the website through our IT
                  systems. This is primarily technical data (e.g., internet browser, operating system, or time of page
                  access).
                </p>
              </section>

              <section className="space-y-4 mb-8">
                <h2 className="font-sans font-semibold text-2xl">3. Hosting and Content Delivery Networks (CDN)</h2>
                <h3 className="font-sans font-semibold text-xl">External Hosting</h3>
                <p className="text-muted-foreground leading-relaxed">
                  This website is hosted by an external service provider (host). The personal data collected on this
                  website is stored on the host's servers.
                </p>
              </section>

              <section className="space-y-4 mb-8">
                <h2 className="font-sans font-semibold text-2xl">4. General Information and Mandatory Information</h2>
                <h3 className="font-sans font-semibold text-xl">Data Protection</h3>
                <p className="text-muted-foreground leading-relaxed">
                  The operators of these pages take the protection of your personal data very seriously. We treat your
                  personal data confidentially and in accordance with statutory data protection regulations and this
                  privacy policy.
                </p>
              </section>

              <section className="space-y-4 mb-8">
                <h2 className="font-sans font-semibold text-2xl">5. Cookies</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our website uses so-called "cookies". Cookies are small text files and do not cause any damage to your
                  device. They are stored either temporarily for the duration of a session (session cookies) or
                  permanently (permanent cookies) on your device.
                </p>
              </section>

              <section className="space-y-4 mb-8">
                <h2 className="font-sans font-semibold text-2xl">6. Your Rights</h2>
                <p className="text-muted-foreground leading-relaxed">
                  You have the right to free information about the origin, recipient, and purpose of your stored
                  personal data at any time. You also have the right to request the correction or deletion of this data.
                </p>
              </section>

              <div className="mt-12 pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground">Last updated: {new Date().toLocaleDateString("en-US")}</p>
              </div>
            </>
          )}
        </article>
      </div>
    </div>
  )
}

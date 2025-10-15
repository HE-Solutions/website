export const translations = {
  de: {
    nav: {
      services: "Leistungen",
      about: "Über uns",
      contact: "Kontakt",
      request: "Anfrage stellen",
    },
    hero: {
      title: "Professionelles Platinendesign & Leistungselektronik",
      subtitle:
        "Maßgeschneiderte PCB-Entwicklung und innovative Lösungen in der Leistungselektronik für Industrie und Technologie. Präzise, zuverlässig und zukunftsorientiert.",
      consultation: "Kostenlose Beratung",
      ourServices: "Unsere Leistungen",
    },
    services: {
      title: "Unsere Leistungen",
      subtitle: "Umfassende Entwicklungsdienstleistungen",
      pcb: {
        title: "PCB-Design",
        description:
          "Professionelles Layout und Design von Leiterplatten für alle Anwendungsbereiche. Von einfachen Schaltungen bis zu komplexen mehrlagigen Designs.",
      },
      power: {
        title: "Leistungselektronik",
        description:
          "Entwicklung effizienter Leistungselektronik-Systeme, Stromversorgungen und Motorsteuerungen für industrielle Anwendungen.",
      },
      prototyping: {
        title: "Prototyping & Testing",
        description:
          "Schnelle Prototypen-Entwicklung und umfassende Tests Ihrer elektronischen Designs für optimale Funktionalität und Zuverlässigkeit.",
      },
    },
    about: {
      title: "Über HE Solutions",
      paragraph1:
        "Mit umfassender Expertise in der Entwicklung elektronischer Systeme bieten wir innovative Lösungen für anspruchsvolle Projekte in der Industrie und Technologie.",
      paragraph2:
        "Unser Team aus erfahrenen Ingenieuren entwickelt maßgeschneiderte PCB-Designs und Leistungselektronik-Lösungen, die höchsten Qualitätsansprüchen genügen und modernste Technologien nutzen.",
      stats: {
        experience: "Jahre Erfahrung",
        designs: "PCB-Designs",
        quality: "Qualität",
        support: "Support",
      },
    },
    contact: {
      title: "Kontaktieren Sie uns",
      subtitle: "Wir freuen uns auf Ihre Anfrage und beraten Sie gerne",
      phone: "Telefon",
      email: "E-Mail",
      location: "Standort",
      address: "Roermonder Str. 286,\n52072 Aachen",
    },
    footer: {
      tagline: "Ihr Partner für professionelles PCB-Design und Leistungselektronik",
      services: "Leistungen",
      servicesList: {
        pcb: "PCB-Design",
        power: "Leistungselektronik",
        prototyping: "Prototyping",
      },
      company: "Unternehmen",
      legal: "Rechtliches",
      imprint: "Impressum",
      privacy: "Datenschutz",
      rights: "Alle Rechte vorbehalten.",
    },
    cookie: {
      title: "Cookie-Einstellungen",
      description:
        "Wir verwenden Cookies, um Ihnen die bestmögliche Nutzung unserer Website zu ermöglichen. Durch die weitere Nutzung der Website stimmen Sie der Verwendung von Cookies zu. Weitere Informationen finden Sie in unserer",
      privacyPolicy: "Datenschutzerklärung",
      decline: "Ablehnen",
      accept: "Akzeptieren",
    },
  },
  en: {
    nav: {
      services: "Services",
      about: "About",
      contact: "Contact",
      request: "Request Quote",
    },
    hero: {
      title: "Professional PCB Design & Power Electronics",
      subtitle:
        "Custom PCB development and innovative power electronics solutions. Precise, reliable, and future-oriented.",
      consultation: "Free Consultation",
      ourServices: "Our Services",
    },
    services: {
      title: "Our Services",
      subtitle: "Comprehensive development services for electronic systems",
      pcb: {
        title: "PCB Design",
        description:
          "Professional layout and design of printed circuit boards for all applications. From simple circuits to complex multi-layer designs.",
      },
      power: {
        title: "Power Electronics",
        description:
          "Development of efficient power electronics systems, power supplies, and motor controls for industrial applications.",
      },
      prototyping: {
        title: "Prototyping & Testing",
        description:
          "Rapid prototype development and comprehensive testing of your electronic designs for optimal functionality and reliability.",
      },
    },
    about: {
      title: "About HE Solutions",
      paragraph1:
        "With comprehensive expertise in electronic systems development, we offer innovative solutions for demanding projects.",
      paragraph2:
        "Our team of experienced engineers develops custom PCB designs and power electronics solutions that meet the highest quality standards and utilize cutting-edge technologies.",
      stats: {
        experience: "Years Experience",
        designs: "PCB Designs",
        quality: "Quality",
        support: "Support",
      },
    },
    contact: {
      title: "Contact Us",
      subtitle: "We look forward to your inquiry and are happy to advise you",
      phone: "Phone",
      email: "Email",
      location: "Location",
      address: "Roermonder Str. 286,\n52072 Aachen\nGermany",
    },
    footer: {
      tagline: "Your partner for professional PCB design and power electronics",
      services: "Services",
      servicesList: {
        pcb: "PCB Design",
        power: "Power Electronics",
        prototyping: "Prototyping",
      },
      company: "Company",
      legal: "Legal",
      imprint: "Imprint",
      privacy: "Privacy",
      rights: "All rights reserved.",
    },
    cookie: {
      title: "Cookie Settings",
      description:
        "We use cookies to provide you with the best possible use of our website. By continuing to use the website, you agree to the use of cookies. For more information, please see our",
      privacyPolicy: "Privacy Policy",
      decline: "Decline",
      accept: "Accept",
    },
  },
}

export type Language = keyof typeof translations

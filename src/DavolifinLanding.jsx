import React, { useState } from "react";

const i18n = {
  fr: {
    brand: "Davolifin",
    nav: { services: "Services", pricing: "Tarifs", faq: "FAQ", contact: "Contact" },
    heroTitle: "Cabinet comptable & fiscal pour indépendants et PME en Belgique",
    heroText:
      "Tenue comptable, déclarations fiscales, conseil et accompagnement de la création à la croissance. Basé à Nivelles, actif partout en Belgique.",
    metaLine: "Membre ITAA • SRL fondée en 2018 • Dirigé par David Pluquet",
    ctaTalk: "Parler à un expert",
    ctaSee: "Voir les services",
    servicesTitle: "Nos services",
    services: [
      ["Comptabilité générale", "Encodage, réconciliations, bilans et comptes annuels (dépôt NBB/CBSO)."],
      ["Fiscalité", "TVA, IPP/ISOC, précomptes, optimisation conforme et sans risque."],
      ["Conseil & gestion", "Tableaux de bord, accompagnement cash‑flow, plan financier."],
      ["Création d'entreprise", "Choix de forme (SRL), guichet d'entreprises, affiliations sociales."],
      ["Digital & dématérialisation", "E‑facturation (Peppol), intégrations possibles ClearFacts/BilltoBox/CodaBox."],
      ["Accompagnement indépendants & PME", "Suivi adapté à votre stade de croissance et à votre secteur."],
    ],
    whyTitle: "Pourquoi Davolifin",
    why: [
      ["Proximité & réactivité", "Cabinet à taille humaine, un interlocuteur expert qui vous suit."],
      ["Transparence", "Forfait clair, devis précis, sans surprise."],
      ["Orienté résultat", "Conseil pratico‑pratique pour piloter votre activité et vos impôts."],
    ],
    pricingTitle: "Tarifs",
    pricingLead:
      "Forfait dès 350 € — ajustable selon la demande. Devis unique ou service en régie pour les dossiers complexes (avocat, notaire, etc.).",
    pricingPlans: [
      ["Indépendant", "à partir de 350 €/mois", [
        "Comptabilité simplifiée",
        "TVA trimestrielle",
        "Déclarations IPP",
        "Support email",
      ]],
      ["PME", "sur devis", [
        "Comptabilité complète",
        "TVA mensuelle",
        "Tableau de bord trimestriel",
        "RDV conseil inclus",
      ]],
      ["Régie", "taux horaire", [
        "Cas multi‑corps de métier",
        "Coordination (avocat, notaire, etc.)",
        "Pilotage fiscal",
        "Livrables au fur et à mesure",
      ]],
    ],
    choose: (name) => `Choisir ${name}`,
    faqTitle: "FAQ (rapide)",
    faq: [
      [
        "Qui sommes‑nous ?",
        "Davolifin (BE0690.882.401) est une SRL établie à Nivelles depuis 2018, dirigée par David Pluquet. Adresse: Faubourg de Bruxelles 11C/304, 1400 Nivelles.",
      ],
      ["Pour qui ?", "Indépendants, starters et PME en croissance (FR/NL/EN)."],
      ["Quels outils ?", "E‑facturation Peppol, intégrations possibles (ClearFacts, BilltoBox, CodaBox)."],
    ],
    contactTitle: "Contact",
    form: {
      name: "Votre nom",
      email: "Email",
      company: "Société (optionnel)",
      message: "Votre besoin (comptabilité, fiscalité, création, etc.)",
      submit: "Envoyer",
    },
    addressLine: "Adresse: Faubourg de Bruxelles 11C/304, 1400 Nivelles • TVA: BE0690.882.401",
    footer: "Tous droits réservés.",
    langLabel: "Langue",
  },
  nl: {
    brand: "Davolifin",
    nav: { services: "Diensten", pricing: "Tarieven", faq: "FAQ", contact: "Contact" },
    heroTitle: "Boekhoud‑ en fiscaal kantoor voor zelfstandigen en kmo’s in België",
    heroText:
      "Boekhouding, fiscale aangiften, advies en begeleiding van opstart tot groei. Gevestigd in Nijvel, actief in heel België.",
    metaLine: "Lid van ITAA • BV opgericht in 2018 • Geleid door David Pluquet",
    ctaTalk: "Spreek met een expert",
    ctaSee: "Bekijk de diensten",
    servicesTitle: "Onze diensten",
    services: [
      ["Algemene boekhouding", "Boekingen, reconciliaties, jaarrekeningen (neerlegging NBB/CBSO)."],
      ["Fiscaliteit", "Btw, personen‑/vennootschapsbelasting, voorafbetalingen, conforme optimalisatie."],
      ["Advies & beheer", "Dashboards, cash‑flowbegeleiding, financieel plan."],
      ["Bedrijfsoprichting", "Rechtsvorm (BV), ondernemingsloket, sociale aansluitingen."],
      ["Digitaal & dematerialisatie", "E‑facturatie (Peppol), mogelijke integraties ClearFacts/BilltoBox/CodaBox."],
      ["Begeleiding zelfstandigen & kmo’s", "Op maat van uw groeifase en sector."],
    ],
    whyTitle: "Waarom Davolifin",
    why: [
      ["Nabijheid & snelheid", "Menselijke aanpak, één expert‑aanspreekpunt."],
      ["Transparantie", "Duidelijk forfait, correcte offerte, geen verrassingen."],
      ["Resultaatgericht", "Praktisch advies om uw activiteit en belastingen te sturen."],
    ],
    pricingTitle: "Tarieven",
    pricingLead:
      "Vaste prijs vanaf €350 — aanpasbaar volgens de vraag. Unieke offerte of werken in regie voor complexe dossiers (advocaat, notaris, enz.).",
    pricingPlans: [
      ["Zelfstandige", "vanaf €350/maand", [
        "Vereenvoudigde boekhouding",
        "BTW per kwartaal",
        "PB‑aangiften",
        "Email‑support",
      ]],
      ["KMO", "op offerte", [
        "Volledige boekhouding",
        "BTW maandelijks",
        "Trimestrieel dashboard",
        "Adviesgesprek inbegrepen",
      ]],
      ["Regie", "uurtarief", [
        "Multi‑disciplinaire dossiers",
        "Coördinatie (advocaat, notaris, …)",
        "Fiscale sturing",
        "Oplevering stapsgewijs",
      ]],
    ],
    choose: (name) => `Kies ${name}`,
    faqTitle: "FAQ (kort)",
    faq: [
      [
        "Wie zijn we?",
        "Davolifin (BE0690.882.401) is een BV in Nijvel sinds 2018, geleid door David Pluquet. Adres: Faubourg de Bruxelles 11C/304, 1400 Nijvel.",
      ],
      ["Voor wie?", "Zelfstandigen, starters en groeikmo’s (FR/NL/EN)."],
      ["Welke tools?", "E‑facturatie via Peppol, mogelijke integraties (ClearFacts, BilltoBox, CodaBox)."],
    ],
    contactTitle: "Contact",
    form: {
      name: "Uw naam",
      email: "E‑mail",
      company: "Bedrijf (optioneel)",
      message: "Uw behoefte (boekhouding, fiscaliteit, opstart, …)",
      submit: "Verzenden",
    },
    addressLine: "Adres: Faubourg de Bruxelles 11C/304, 1400 Nijvel • BTW: BE0690.882.401",
    footer: "Alle rechten voorbehouden.",
    langLabel: "Taal",
  },
  en: {
    brand: "Davolifin",
    nav: { services: "Services", pricing: "Pricing", faq: "FAQ", contact: "Contact" },
    heroTitle: "Accounting & tax firm for freelancers and SMEs in Belgium",
    heroText:
      "Bookkeeping, tax filings, advice and hands‑on support from launch to growth. Based in Nivelles, serving clients across Belgium.",
    metaLine: "ITAA member • Private Limited (SRL) founded in 2018 • Led by David Pluquet",
    ctaTalk: "Talk to an expert",
    ctaSee: "See services",
    servicesTitle: "Our services",
    services: [
      ["General bookkeeping", "Posting, reconciliations, annual accounts (filing with NBB/CBSO)."],
      ["Tax", "VAT, PIT/CIT, prepayments, compliant tax optimisation."],
      ["Advisory & management", "Dashboards, cash‑flow, financial planning."],
      ["Company formation", "Form choice (SRL), business desk, social affiliations."],
      ["Digital & e‑invoicing", "Peppol e‑invoicing, optional ClearFacts/BilltoBox/CodaBox integrations."],
      ["Support for freelancers & SMEs", "Tailored to your growth stage and sector."],
    ],
    whyTitle: "Why Davolifin",
    why: [
      ["Proximity & speed", "Human‑scale firm, one expert contact who knows your file."],
      ["Transparency", "Clear forfait, accurate quotes, no surprises."],
      ["Results‑oriented", "Practical advice to steer your business and taxes."],
    ],
    pricingTitle: "Pricing",
    pricingLead:
      "Forfait from €350 — adjustable to scope. One‑off quote or time‑and‑materials for complex multi‑party cases (lawyer, notary, etc.).",
    pricingPlans: [
      ["Freelancer", "from €350/month", [
        "Simplified bookkeeping",
        "Quarterly VAT",
        "PIT returns",
        "Email support",
      ]],
      ["SME", "on quotation", [
        "Full bookkeeping",
        "Monthly VAT",
        "Quarterly dashboard",
        "Advisory session included",
      ]],
      ["T&M", "hourly", [
        "Multi‑disciplinary cases",
        "Coordination (lawyer, notary, etc.)",
        "Tax steering",
        "Deliverables along the way",
      ]],
    ],
    choose: (name) => `Choose ${name}`,
    faqTitle: "Quick FAQ",
    faq: [
      [
        "Who are we?",
        "Davolifin (BE0690.882.401) is a private limited company in Nivelles since 2018, led by David Pluquet. Address: Faubourg de Bruxelles 11C/304, 1400 Nivelles.",
      ],
      ["Who is it for?", "Freelancers, starters and growing SMEs (FR/NL/EN)."],
      ["Which tools?", "Peppol e‑invoicing, optional integrations (ClearFacts, BilltoBox, CodaBox)."],
    ],
    contactTitle: "Contact",
    form: {
      name: "Your name",
      email: "Email",
      company: "Company (optional)",
      message: "Your need (accounting, tax, formation, etc.)",
      submit: "Send",
    },
    addressLine: "Address: Faubourg de Bruxelles 11C/304, 1400 Nivelles • VAT: BE0690.882.401",
    footer: "All rights reserved.",
    langLabel: "Language",
  },
};

function Logo() {
  return (
    <svg width="32" height="32" viewBox="0 0 48 48" className="shrink-0">
      <rect x="4" y="6" width="40" height="36" rx="10" className="fill-gray-900" />
      <path d="M14 14h10a8 8 0 0 1 0 16H14z" className="fill-white/95" />
      <path d="M28 28l4 4 8-8" className="stroke-white" strokeWidth="3" fill="none" strokeLinecap="round" />
      <g className="fill-white/90">
        <rect x="16" y="18" width="2" height="4" rx="1" />
        <rect x="20" y="16" width="2" height="6" rx="1" />
        <rect x="24" y="15" width="2" height="7" rx="1" />
      </g>
    </svg>
  );
}

export default function DavolifinLanding() {
  const [lang, setLang] = useState("fr");
  const t = i18n[lang];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between gap-4">
          <a href="#" className="flex items-center gap-2 font-semibold">
            <Logo />
            <span>{t.brand}</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:text-gray-600">{t.nav.services}</a>
            <a href="#pricing" className="hover:text-gray-600">{t.nav.pricing}</a>
            <a href="#faq" className="hover:text-gray-600">{t.nav.faq}</a>
            <a href="#contact" className="hover:text-gray-600">{t.nav.contact}</a>
          </nav>
          <div className="flex items-center gap-2">
            <label className="text-xs text-gray-500" htmlFor="langSel">{t.langLabel}</label>
            <select
              id="langSel"
              className="rounded-xl border px-3 py-2 text-sm"
              value={lang}
              onChange={(e) => setLang(e.target.value)}
            >
              <option value="fr">FR</option>
              <option value="nl">NL</option>
              <option value="en">EN</option>
            </select>
            <a href="#contact" className="hidden sm:inline ml-2 rounded-2xl border px-4 py-2 text-sm hover:bg-gray-50">{t.ctaTalk}</a>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-gray-50 to-white" />
        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl/tight sm:text-5xl/tight font-extrabold">{t.heroTitle}</h1>
            <p className="mt-4 text-lg text-gray-600">{t.heroText}</p>
            <div className="mt-6 flex gap-3">
              <a href="#contact" className="rounded-2xl bg-gray-900 text-white px-5 py-3 text-sm font-medium hover:opacity-90">
                {t.ctaTalk}
              </a>
              <a href="#services" className="rounded-2xl border px-5 py-3 text-sm font-medium hover:bg-gray-50">
                {t.ctaSee}
              </a>
            </div>
            <div className="mt-6 text-xs text-gray-500">{t.metaLine}</div>
          </div>
          <div className="relative rounded-3xl border p-2 shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop"
              alt="Cabinet comptable"
              className="rounded-2xl"
            />
          </div>
        </div>
      </section>

      <section id="services" className="py-16 border-t">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold">{t.servicesTitle}</h2>
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.services.map(([title, desc]) => (
              <div key={title} className="rounded-2xl border p-5">
                <div className="h-10 w-10 rounded-xl bg-gray-900 mb-4" />
                <h3 className="font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 border-t bg-gray-50/50">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold">{t.whyTitle}</h2>
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.why.map(([title, desc]) => (
              <div key={title} className="rounded-2xl border p-5">
                <div className="h-10 w-10 rounded-xl bg-gray-900 mb-4" />
                <h3 className="font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-16 border-t">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold">{t.pricingTitle}</h2>
          <p className="mt-3 text-sm text-gray-600 max-w-3xl">{t.pricingLead}</p>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {t.pricingPlans.map(([name, price, items]) => (
              <div key={name} className="rounded-2xl border bg-white p-6">
                <h3 className="text-lg font-semibold">{name}</h3>
                <div className="mt-2 text-3xl font-extrabold">{price}</div>
                <ul className="mt-4 text-sm text-gray-700 space-y-2 list-disc pl-5">
                  {items.map((it) => <li key={it}>{it}</li>)}
                </ul>
                <a href="#contact" className="mt-6 inline-block rounded-2xl bg-gray-900 text-white px-5 py-3 text-sm font-medium hover:opacity-90">
                  {i18n.fr.choose === t.choose ? t.choose(name) : t.choose(name)}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-16 border-t">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-2xl font-bold">{t.faqTitle}</h2>
          <div className="mt-8 space-y-6">
            {t.faq.map(([q, a]) => (
              <div key={q} className="rounded-2xl border p-5">
                <div className="font-semibold">{q}</div>
                <div className="mt-2 text-sm text-gray-600">{a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 border-t">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold">{t.contactTitle}</h2>
          <form
            className="mt-6 grid gap-4"
            action="https://formspree.io/f/your-id"
            method="POST"
          >
            <input className="rounded-xl border px-4 py-3" name="name" placeholder={t.form.name} required />
            <input className="rounded-xl border px-4 py-3" name="email" placeholder={t.form.email} type="email" required />
            <input className="rounded-xl border px-4 py-3" name="company" placeholder={t.form.company} />
            <textarea className="rounded-xl border px-4 py-3 min-h-[120px]" name="message" placeholder={t.form.message} required />
            <button className="rounded-2xl bg-gray-900 text-white px-5 py-3 text-sm font-medium hover:opacity-90" type="submit">
              {t.form.submit}
            </button>
          </form>
          <p className="mt-3 text-xs text-gray-500">{t.addressLine}</p>
        </div>
      </section>

      <footer className="border-t py-10">
        <div className="mx-auto max-w-7xl px-6 text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span>© {new Date().getFullYear()} Davolifin. {t.footer}</span>
          <div className="flex items-center gap-4">
            <a href="#contact" className="hover:text-gray-900">{t.nav.contact}</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

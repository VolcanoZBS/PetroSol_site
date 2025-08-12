// src/pages/solutions/Payment.tsx
import React from "react";
import {
  CreditCard,
  Wallet,
  Lock,
  Shield,
  Receipt,
  Building2,
  Globe,
  ArrowRight,
  CheckCircle2,
  RefreshCcw,
  Terminal,
} from "lucide-react";
import paymentImg from "/images/payment.webp";

const Feature: React.FC<{ icon: React.ReactNode; title: string; desc: string }> = ({
  icon,
  title,
  desc,
}) => (
  <div className="bg-white rounded-xl ring-1 ring-gray-200 p-4 flex items-start gap-3">
    <div className="mt-0.5 text-purple-600">{icon}</div>
    <div>
      <h4 className="font-semibold text-gray-900">{title}</h4>
      <p className="text-sm text-gray-600 mt-1">{desc}</p>
    </div>
  </div>
);

const SectionTitle: React.FC<{ eyebrow?: string; title: string; subtitle?: string }> = ({
  eyebrow,
  title,
  subtitle,
}) => (
  <div className="mb-6">
    {eyebrow && (
      <div className="inline-flex items-center gap-2 rounded-full bg-purple-50 text-purple-700 px-3 py-1 text-xs font-medium ring-1 ring-purple-100">
        {eyebrow}
      </div>
    )}
    <h2 className="mt-2 text-2xl font-semibold text-gray-900">{title}</h2>
    {subtitle && <p className="mt-2 text-gray-600">{subtitle}</p>}
  </div>
);

const Payment: React.FC = () => (
  <div className="max-w-6xl mx-auto px-4 py-12">
    {/* Hero */}
    <div className="bg-gradient-to-br from-purple-50 to-white ring-1 ring-purple-100 rounded-2xl p-6 md:p-8 mb-12">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-medium ring-1 ring-purple-100 text-purple-700">
            Soluție PetroSol
          </div>
          <h1 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">
            Plăți & Soluții de Checkout
          </h1>
          <p className="mt-3 text-gray-700 leading-relaxed">
            Acceptare card bancar (EMV, contactless), portofele digitale, card flotă și plăți recurente - cu reconciliere automată, raportare unificată și conformitate PCI. Optimizăm timpul la POS și transparența financiară.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-purple-600 text-white px-5 py-3 font-medium text-sm hover:bg-purple-700 transition"
            >
              Cere o discuție
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="tel:+40738100070"
              className="inline-flex items-center gap-2 rounded-xl bg-white text-purple-700 px-5 py-3 font-medium text-sm ring-1 ring-purple-200 hover:bg-purple-50 transition"
            >
              Sună acum
            </a>
          </div>
        </div>
        <div className="mx-auto w-full max-w-xl rounded-xl overflow-hidden ring-1 ring-purple-100 shadow-sm">
          <div className="aspect-video">
            <img
              src={paymentImg}
              alt="Terminal și soluții de plată integrate"
              className="w-full h-full object-cover object-center"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </div>

    {/* Capabilities */}
    <section className="mb-12">
      <SectionTitle
        eyebrow="Capabilități"
        title="Ce oferă platforma de plăți"
        subtitle="Unificare metode, flux sigur, vizibilitate financiară end-to-end."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Feature
          icon={<CreditCard className="w-5 h-5" />}
          title="Acceptare multi-metodă"
          desc="EMV chip, contactless, NFC, card flotă, card cadou, split tender."
        />
        <Feature
          icon={<Wallet className="w-5 h-5" />}
          title="Portofele digitale"
          desc="Apple Pay, Google Pay și tokenizare sigură pentru plăți rapide."
        />
        <Feature
          icon={<RefreshCcw className="w-5 h-5" />}
          title="Recurente & pre-autorizări"
          desc="Reținere sumă, confirmare livrare, captură finală și abonamente."
        />
        <Feature
          icon={<Receipt className="w-5 h-5" />}
          title="Reconciliere automată"
          desc="Aliniază tranzacțiile terminal, procesator și contabilitate."
        />
        <Feature
          icon={<Building2 className="w-5 h-5" />}
          title="Multi-locație"
          desc="Politici centralizate, rapoarte consolidate și excepții marcate."
        />
        <Feature
          icon={<Globe className="w-5 h-5" />}
          title="Scalare rapidă"
          desc="Onboarding rapid pentru noi locații și evoluție metode viitoare."
        />
      </div>
    </section>

    {/* Flow */}
    <section className="mb-12">
      <SectionTitle eyebrow="Flux" title="Cum decurge o tranzacție" />
      <ol className="relative ml-4 pl-4 border-l border-gray-200 space-y-4 text-gray-700">
        {[
          "Inițiere plată la POS / terminal (valoare + tip).",
          "Autentificare card / token + verificări risc.",
          "Autorizare procesator / bancă emitentă.",
          "Emitere bon fiscal & jurnalizare eveniment.",
          "Transmitere date în backoffice și reconciliere.",
          "Rapoarte și alerte asupra anomaliilor.",
        ].map((s, i) => (
          <li key={s} className="relative">
            <span className="absolute -left-7 top-0 inline-flex h-6 w-6 items-center justify-center rounded-full bg-purple-600 text-white text-xs font-semibold">
              {i + 1}
            </span>
            {s}
          </li>
        ))}
      </ol>
    </section>

    {/* Components */}
    <section className="mb-12">
      <SectionTitle eyebrow="Componente" title="Hardware & integrare" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white rounded-xl ring-1 ring-gray-200 p-5">
          <h3 className="font-semibold text-gray-900">Hardware suportat</h3>
            <ul className="mt-3 space-y-2 text-gray-700 text-sm">
              {[
                "Terminale POS EMV/contactless",
                "PIN pad securizat",
                "Imprimantă fiscală / bon",
                "Dispozitiv mobil pentru plată în teren",
                "Cititor card flotă / fidelitate",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
        </div>
        <div className="bg-white rounded-xl ring-1 ring-gray-200 p-5">
          <h3 className="font-semibold text-gray-900">Software & API</h3>
          <ul className="mt-3 space-y-2 text-gray-700 text-sm">
            {[
              "Tokenizare & vault card",
              "Reconciliere și export contabil",
              "Integrare ERP / e-Factura",
              "Portal dispute și chargeback",
              "Webhook-uri & raportare JSON",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    {/* Security / Compliance */}
    <section className="mb-12">
      <SectionTitle eyebrow="Conformitate" title="Securitate & protecție" />
      <div className="grid gap-4 md:grid-cols-3">
        <div className="bg-white rounded-xl ring-1 ring-gray-200 p-5 flex gap-3">
          <Lock className="w-5 h-5 text-purple-600 mt-0.5" />
          <div>
            <h4 className="font-semibold text-gray-900">PCI & criptare</h4>
            <p className="text-sm text-gray-600 mt-1">
              Criptare end-to-end și proceduri PCI DSS aliniate.
            </p>
          </div>
        </div>
        <div className="bg-white rounded-xl ring-1 ring-gray-200 p-5 flex gap-3">
          <Shield className="w-5 h-5 text-purple-600 mt-0.5" />
          <div>
            <h4 className="font-semibold text-gray-900">Fraud & risc</h4>
            <p className="text-sm text-gray-600 mt-1">
              Reguli velocity, liste albe/negre și scoring tranzacții.
            </p>
          </div>
        </div>
        <div className="bg-white rounded-xl ring-1 ring-gray-200 p-5 flex gap-3">
          <Terminal className="w-5 h-5 text-purple-600 mt-0.5" />
          <div>
            <h4 className="font-semibold text-gray-900">Uptime & monitorizare</h4>
            <p className="text-sm text-gray-600 mt-1">
              Health checks, alerte proactive și fallback la offline.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section>
      <div className="bg-gradient-to-br from-purple-50 to-white ring-1 ring-purple-100 rounded-2xl p-6 md:p-7 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            Vrei plăți mai rapide și reconciliere fără erori?
          </h3>
          <p className="text-gray-700">
            Îți arătăm cum stabilizăm fluxul și reducem timpii de închidere.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-purple-600 text-white px-5 py-3 font-medium text-sm hover:bg-purple-700 transition"
          >
            Programează un demo
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="tel:+40738100070"
            className="inline-flex items-center gap-2 rounded-xl bg-white text-purple-700 px-5 py-3 font-medium text-sm ring-1 ring-purple-200 hover:bg-purple-50 transition"
          >
            Sună acum
          </a>
        </div>
      </div>
    </section>
  </div>
);

export default Payment;

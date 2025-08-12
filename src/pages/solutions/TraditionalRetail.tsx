// src/pages/solutions/TraditionalRetail.tsx
import React from "react";
import {
  ShoppingBag,
  Layers,
  Users,
  Percent,
  Receipt,
  Smartphone,
  Shield,
  ArrowRight,
  CheckCircle2,
  Truck,
  BarChart3,
} from "lucide-react";
import traditionalRetailImg from "/images/traditional-retail.webp";

const Feature: React.FC<{ icon: React.ReactNode; title: string; desc: string }> = ({
  icon,
  title,
  desc,
}) => (
  <div className="bg-white rounded-xl ring-1 ring-gray-200 p-4 flex items-start gap-3">
    <div className="mt-0.5 text-amber-600">{icon}</div>
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
      <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 text-amber-700 px-3 py-1 text-xs font-medium ring-1 ring-amber-100">
        {eyebrow}
      </div>
    )}
    <h2 className="mt-2 text-2xl font-semibold text-gray-900">{title}</h2>
    {subtitle && <p className="mt-2 text-gray-600">{subtitle}</p>}
  </div>
);

const TraditionalRetail: React.FC = () => (
  <div className="max-w-6xl mx-auto px-4 py-12">
    {/* Hero */}
    <div className="bg-gradient-to-br from-amber-50 to-white ring-1 ring-amber-100 rounded-2xl p-6 md:p-8 mb-12">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-medium ring-1 ring-amber-100 text-amber-700">
            Soluție PetroSol
          </div>
            <h1 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">
              Retail Tradițional & HoReCa
            </h1>
            <p className="mt-3 text-gray-700 leading-relaxed">
              Platformă unificată pentru POS, stocuri, fidelizare și analiză vânzări.
              Optimizăm rotația produselor, marjele și experiența clienților prin
              integrare sigură cu plăți, gestiune centralizată și rapoarte în timp real.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-amber-600 text-white px-5 py-3 font-medium text-sm hover:bg-amber-700 transition"
              >
                Cere o prezentare
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="tel:+40738100070"
                className="inline-flex items-center gap-2 rounded-xl bg-white text-amber-700 px-5 py-3 font-medium text-sm ring-1 ring-amber-200 hover:bg-amber-50 transition"
              >
                Sună acum
              </a>
            </div>
        </div>
        <div className="mx-auto w-full max-w-xl rounded-xl overflow-hidden ring-1 ring-amber-100 shadow-sm">
          <div className="aspect-video">
            <img
              src={traditionalRetailImg}
              alt="Soluție POS și gestiune pentru retail & HoReCa"
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
        title="Ce include soluția"
        subtitle="Fluxuri operaționale integrate pentru magazine, restaurante și rețele multi‑site."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Feature
          icon={<ShoppingBag className="w-5 h-5" />}
          title="POS stabil & rapid"
          desc="Vânzare asistată, mod touch, produse compuse, anulări controlate și sincronizare offline."
        />
        <Feature
          icon={<Layers className="w-5 h-5" />}
          title="Gestiune stocuri"
          desc="Rețete, transferuri, inventare, loturi, ajustări și trasabilitate pe locații."
        />
        <Feature
          icon={<Users className="w-5 h-5" />}
          title="Profil clienți"
          desc="Istoric tranzacții, preferințe și segmentare pentru campanii relevante."
        />
        <Feature
          icon={<Percent className="w-5 h-5" />}
          title="Promo & fidelizare"
          desc="Discounturi condiționate, puncte, cupoane, card fidelitate și campanii multi-site."
        />
        <Feature
          icon={<Receipt className="w-5 h-5" />}
          title="Fiscal & conform"
          desc="Integrare cu case fiscale, e‑Factura, raportare zilnică și jurnal audit."
        />
        <Feature
          icon={<Smartphone className="w-5 h-5" />}
          title="Acces mobil"
          desc="Dashboard KPI, stoc critic, vânzări realtime și notificări manageriale."
        />
      </div>
    </section>

    {/* How it works */}
    <section className="mb-12">
      <SectionTitle eyebrow="Flux" title="Cum funcționează la nivel de zi" />
      <ol className="relative ml-4 pl-4 border-l border-gray-200 space-y-4 text-gray-700">
        {[
          "Aprovizionare și recepție mărfuri cu verificări și etichetare.",
          "Configurare produse, rețete, categorii și liste promo.",
          "Vânzare la POS / tabletă; promoțiile se aplică automat.",
          "Actualizare stocuri și marje; alerte la stoc minim / rupere stoc.",
          "Sincronizare date centrală, rapoarte și KPIs în dashboard.",
          "Analiză vânzări + ajustare promo/rețete pentru optimizare marjă.",
        ].map((step, i) => (
          <li key={step} className="relative">
            <span className="absolute -left-7 top-0 inline-flex h-6 w-6 items-center justify-center rounded-full bg-amber-600 text-white text-xs font-semibold">
              {i + 1}
            </span>
            {step}
          </li>
        ))}
      </ol>
    </section>

    {/* Components */}
    <section className="mb-12">
      <SectionTitle eyebrow="Componente" title="Ce suportăm & integrăm" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white rounded-xl ring-1 ring-gray-200 p-5">
          <h3 className="font-semibold text-gray-900">Hardware</h3>
          <ul className="mt-3 space-y-2 text-gray-700 text-sm">
            {[
              "POS touchscreen & imprimantă fiscală",
              "Cititor coduri de bare 1D/2D",
              "Sertar de bani și afișaj client",
              "Terminal plăți EMV/contactless",
              "Tabletă mobilă pentru comenzile din sală",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white rounded-xl ring-1 ring-gray-200 p-5">
          <h3 className="font-semibold text-gray-900">Software & integrare</h3>
          <ul className="mt-3 space-y-2 text-gray-700 text-sm">
            {[
              "Backoffice multi‑unitate & roluri",
              "Rețete, cost rețetă și marjă dinamică",
              "Promo engine + card fidelitate",
              "Integrare ERP / contabilitate",
              "Dashboard KPI & export BI",
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

    {/* Analytics & ROI */}
    <section className="mb-12">
      <SectionTitle eyebrow="Analiză" title="Decizii bazate pe date" />
      <div className="grid gap-4 md:grid-cols-3">
        <div className="bg-white rounded-xl ring-1 ring-gray-200 p-5 flex gap-3">
          <BarChart3 className="w-5 h-5 text-amber-600 mt-0.5" />
          <div>
            <h4 className="font-semibold text-gray-900">KPI în timp real</h4>
            <p className="text-sm text-gray-600 mt-1">
              Vânzări, tichete medii, rotație produse și shrinkage.
            </p>
          </div>
        </div>
        <div className="bg-white rounded-xl ring-1 ring-gray-200 p-5 flex gap-3">
          <Truck className="w-5 h-5 text-amber-600 mt-0.5" />
          <div>
            <h4 className="font-semibold text-gray-900">Aprovizionare asistată</h4>
            <p className="text-sm text-gray-600 mt-1">
              Propuneri automate bazate pe consum și sezonalitate.
            </p>
          </div>
        </div>
        <div className="bg-white rounded-xl ring-1 ring-gray-200 p-5 flex gap-3">
          <Shield className="w-5 h-5 text-amber-600 mt-0.5" />
          <div>
            <h4 className="font-semibold text-gray-900">Control & audit</h4>
            <p className="text-sm text-gray-600 mt-1">
              Drepturi pe rol, log acțiuni critice și alerte excepții.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section>
      <div className="bg-gradient-to-br from-amber-50 to-white ring-1 ring-amber-100 rounded-2xl p-6 md:p-7 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            Hai să optimizăm operațiunile tale de retail & HoReCa
          </h3>
          <p className="text-gray-700">
            Îți arătăm fluxurile POS, gestiunea stocurilor și promovările dinamice.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-amber-600 text-white px-5 py-3 font-medium text-sm hover:bg-amber-700 transition"
          >
            Programează un demo
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="tel:+40738100070"
            className="inline-flex items-center gap-2 rounded-xl bg-white text-amber-700 px-5 py-3 font-medium text-sm ring-1 ring-amber-200 hover:bg-amber-50 transition"
          >
            Sună acum
          </a>
        </div>
      </div>
    </section>
  </div>
);

export default TraditionalRetail;

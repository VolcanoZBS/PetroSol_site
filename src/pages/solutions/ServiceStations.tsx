import React from "react";
import {
  Fuel,
  BarChart3,
  Shield,
  Settings,
  Users,
  Gauge,
  Layers,
  Workflow,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Cloud,
  Zap,
  Wrench
} from "lucide-react";
import serviceStationImg from "/images/service-station.webp";

const Feature: React.FC<{ icon: React.ReactNode; title: string; desc: string }> = ({
  icon,
  title,
  desc
}) => (
  <div className="bg-white rounded-xl ring-1 ring-gray-200 p-5 flex items-start gap-3 hover:shadow-sm transition">
    <div className="mt-0.5 text-blue-600">{icon}</div>
    <div>
      <h4 className="font-semibold text-gray-900">{title}</h4>
      <p className="text-sm text-gray-600 mt-1 leading-relaxed">{desc}</p>
    </div>
  </div>
);

const SectionTitle: React.FC<{ eyebrow?: string; title: string; subtitle?: string }> = ({
  eyebrow,
  title,
  subtitle
}) => (
  <header className="mb-8">
    {eyebrow && (
      <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 text-blue-700 px-3 py-1 text-xs font-medium ring-1 ring-blue-100">
        {eyebrow}
      </div>
    )}
    <h2 className="mt-3 text-2xl font-semibold text-gray-900">{title}</h2>
    {subtitle && <p className="mt-2 text-gray-600 max-w-2xl">{subtitle}</p>}
  </header>
);

const ServiceStations: React.FC = () => (
  <div className="max-w-6xl mx-auto px-4 py-12">
    {/* Hero */}
    <section className="bg-gradient-to-br from-blue-50 via-white to-white ring-1 ring-blue-100 rounded-2xl p-6 md:p-10 mb-14">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-medium ring-1 ring-blue-100 text-blue-700">
            Soluție PetroSol
          </div>
          <h1 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Soluții pentru Stații de Carburanți
          </h1>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Platformă unificată care conectează pompe, ATG, POS, plăți, stocuri și raportare
            în timp real. Operare stabilă, control centralizat, decizii bazate pe date.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 text-white px-5 py-3 font-medium text-sm hover:bg-blue-700 transition"
            >
              Solicită un demo
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="tel:+40738100070"
              className="inline-flex items-center gap-2 rounded-xl bg-white text-blue-700 px-5 py-3 font-medium text-sm ring-1 ring-blue-200 hover:bg-blue-50 transition"
            >
              Sună acum
            </a>
          </div>
        </div>
        <div className="mx-auto w-full max-w-xl rounded-xl overflow-hidden ring-1 ring-blue-100 shadow-sm">
          <div className="aspect-video">
            <img
              src={serviceStationImg}
              alt="Platformă PetroSol pentru operarea unei stații de carburant"
              className="w-full h-full object-cover object-center"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>

    {/* Capabilities */}
    <section className="mb-14">
      <SectionTitle
        eyebrow="Capabilități"
        title="Ce acoperă soluția"
        subtitle="Flux operațional complet: pompă → tranzacție → stoc → raport → analiză performanță."
      />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Feature
          icon={<Fuel className="w-5 h-5" />}
          title="Gestionare stoc & ATG"
          desc="Sincronizare niveluri, temperatură, densitate; reconcilieri și alerte pierderi."
        />
        <Feature
          icon={<Gauge className="w-5 h-5" />}
          title="Monitorizare pompe"
          desc="Status duze, debit, tranzacții live, blocare/ deblocare și jurnal evenimente."
        />
        <Feature
          icon={<Settings className="w-5 h-5" />}
          title="Integrare POS & plăți"
          desc="Card flotă, EMV/contactless, bon fiscal, e‑Factura și split tender."
        />
        <Feature
          icon={<BarChart3 className="w-5 h-5" />}
          title="Raportare & KPI"
          desc="Marjă, liter vs. vânzare, shrinkage, viteză tranzacție, comparativ pe locații."
        />
        <Feature
          icon={<Users className="w-5 h-5" />}
          title="Management personal"
          desc="Ture, permisiuni rol, audit acțiuni critice, productivitate / oră."
        />
        <Feature
          icon={<Shield className="w-5 h-5" />}
          title="Conformitate & securitate"
          desc="Controale acces, log, backup, criptare date și politici automate."
        />
      </div>
    </section>

    {/* Operational Flow */}
    <section className="mb-14">
      <SectionTitle eyebrow="Flux" title="Cum se desfășoară o zi standard" />
      <ol className="relative ml-4 pl-4 border-l border-gray-200 space-y-5 text-gray-700">
        {[
          "Deschidere stație: verificări pompă, ATG, niveluri inițiale.",
          "Aprovizionare tank: recepție + reconcilieri volum / temperatură.",
          "Tranzacții & plăți: POS sincron, promoții și card flotă.",
          "Monitorizare continuă: alerte scurgeri, pierderi, duze inactive.",
          "Raportare perioadică: liter vs. stoc, marjă, diferențe tehnice.",
          "Închidere zi: reconciliere automată și push rapoarte către management."
        ].map((step, i) => (
          <li key={step} className="relative">
            <span className="absolute -left-7 top-0 inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white text-xs font-semibold">
              {i + 1}
            </span>
            {step}
          </li>
        ))}
      </ol>
    </section>

    {/* Value / Benefits */}
    <section className="mb-14">
      <SectionTitle eyebrow="Valoare" title="Beneficii business" />
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          {[
            {
              icon: <CheckCircle2 className="w-4 h-4 text-emerald-600" />,
              title: "Reducerea pierderilor",
              text: "Comparare consum vs. stoc real, anomalii și diferențe tehnice explicate."
            },
            {
              icon: <CheckCircle2 className="w-4 h-4 text-emerald-600" />,
              title: "Eficiență operațională",
              text: "Automatizări pentru inventar, raportare, reconcilieri și alerte."
            },
            {
              icon: <CheckCircle2 className="w-4 h-4 text-emerald-600" />,
              title: "Vizibilitate completă",
              text: "Date unificate într-un dashboard clar, acces remote securizat."
            }
          ].map((b) => (
            <div key={b.title} className="flex gap-3">
              <div className="mt-1">{b.icon}</div>
              <div>
                <h4 className="font-semibold text-gray-900">{b.title}</h4>
                <p className="text-sm text-gray-600 mt-0.5">{b.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="space-y-4">
          {[
            {
              icon: <CheckCircle2 className="w-4 h-4 text-emerald-600" />,
              title: "Conformitate",
              text: "Jurnale automate, export autorități și arhivare sigură."
            },
            {
              icon: <CheckCircle2 className="w-4 h-4 text-emerald-600" />,
              title: "Scalabilitate",
              text: "Adaugi rapid noi stații; template centralizat pentru configurări."
            },
            {
              icon: <CheckCircle2 className="w-4 h-4 text-emerald-600" />,
              title: "ROI accelerat",
              text: "Reduci costurile administrative și optimizezi rotația produsului."
            }
          ].map((b) => (
            <div key={b.title} className="flex gap-3">
              <div className="mt-1">{b.icon}</div>
              <div>
                <h4 className="font-semibold text-gray-900">{b.title}</h4>
                <p className="text-sm text-gray-600 mt-0.5">{b.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Technical Components */}
    <section className="mb-14">
      <SectionTitle eyebrow="Tehnic" title="Componente & integrare" />
      <div className="grid md:grid-cols-3 gap-5">
        <div className="bg-white rounded-xl ring-1 ring-gray-200 p-5">
          <h3 className="font-semibold text-gray-900">Hardware</h3>
          <ul className="mt-3 space-y-2 text-sm text-gray-700">
            {[
              "Pompe multi-brand",
              "Sisteme ATG & sondă tank",
              "Terminale POS & pin pad",
              "Cititoare card flotă",
              "Camere & senzori siguranță"
            ].map((i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5" />
                <span>{i}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white rounded-xl ring-1 ring-gray-200 p-5">
          <h3 className="font-semibold text-gray-900">Software & platformă</h3>
          <ul className="mt-3 space-y-2 text-sm text-gray-700">
            {[
              "Web backoffice responsiv",
              "App mobil management",
              "API integrare externă",
              "Alerting & log centralizat",
              "Backup + DR automat"
            ].map((i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5" />
                <span>{i}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white rounded-xl ring-1 ring-gray-200 p-5">
          <h3 className="font-semibold text-gray-900">Avansat & analitică</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-700">
              {[
                "Forecast consum / stoc",
                "Detectare pierderi",
                "Comparativ multi-locație",
                "Raport marjă dinamică",
                "Integrare BI extern"
              ].map((i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5" />
                  <span>{i}</span>
                </li>
              ))}
            </ul>
        </div>
      </div>
    </section>

    {/* Reliability / Safety */}
    <section className="mb-16">
      <SectionTitle eyebrow="Siguranță" title="Reziliență & monitorizare" />
      <div className="grid md:grid-cols-3 gap-4">
        <Feature
          icon={<Cloud className="w-5 h-5" />}
          title="Redundanță cloud"
          desc="Replicare și fallback automat; uptime ridicat și recuperare rapidă."
        />
        <Feature
          icon={<AlertTriangle className="w-5 h-5" />}
          title="Alerte proactive"
          desc="Anomalii debit, diferențe volum, timp tranzacție, temperatură tank."
        />
        <Feature
          icon={<Wrench className="w-5 h-5" />}
          title="Mentenață asistată"
          desc="Jurnal echipamente, istoric intervenții și recomandări service."
        />
        <Feature
          icon={<Workflow className="w-5 h-5" />}
          title="Automatizare"
          desc="Reguli pentru reacție instant la condiții operaționale."
        />
        <Feature
          icon={<Layers className="w-5 h-5" />}
          title="Arhitectură modulară"
          desc="Extinzi fără re-scriere masivă; adaptare rapidă la noi modele."
        />
        <Feature
          icon={<Zap className="w-5 h-5" />}
          title="Performanță"
          desc="Răspuns rapid pentru operații critice și încărcare scalabilă."
        />
      </div>
    </section>

    {/* CTA */}
    <section>
      <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-7 md:p-9 text-white flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <h3 className="text-lg md:text-xl font-semibold">
            Optimizează operațiunile stațiilor tale cu PetroSol
          </h3>
          <p className="mt-1 text-white/80">
            Îți arătăm live monitorizare pompe, stocuri și raportare consolidată.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-white text-blue-700 px-5 py-3 font-medium text-sm hover:bg-blue-50 transition"
          >
            Programează un demo
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="tel:+40738100070"
            className="inline-flex items-center gap-2 rounded-xl ring-1 ring-white/40 text-white px-5 py-3 font-medium text-sm hover:bg-white/10 transition"
          >
            Sună acum
          </a>
        </div>
      </div>
    </section>
  </div>
);

export default ServiceStations;

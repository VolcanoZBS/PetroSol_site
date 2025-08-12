// src/pages/solutions/Ai.tsx
import React from "react";
import {
  Brain,
  BarChart3,
  LineChart,
  Activity,
  Shield,
  Rocket,
  Clock,
  Layers,
  Database,
  Cloud,
  RefreshCcw,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import aiImg from "/images/ai.webp";

const Feature: React.FC<{ icon: React.ReactNode; title: string; desc: string }> = ({
  icon,
  title,
  desc,
}) => (
  <div className="bg-white rounded-xl ring-1 ring-gray-200 p-4 flex items-start gap-3">
    <div className="mt-0.5 text-cyan-600">{icon}</div>
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
      <div className="inline-flex items-center gap-2 rounded-full bg-cyan-50 text-cyan-700 px-3 py-1 text-xs font-medium ring-1 ring-cyan-100">
        {eyebrow}
      </div>
    )}
    <h2 className="mt-2 text-2xl font-semibold text-gray-900">{title}</h2>
    {subtitle && <p className="mt-2 text-gray-600">{subtitle}</p>}
  </div>
);

const Ai: React.FC = () => (
  <div className="max-w-6xl mx-auto px-4 py-12">
    {/* Hero */}
    <div className="bg-gradient-to-br from-cyan-50 via-white to-white ring-1 ring-cyan-100 rounded-2xl p-6 md:p-8 mb-12">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-medium ring-1 ring-cyan-100 text-cyan-700">
            Soluție Avansată
          </div>
          <h1 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">
            Inteligență Artificială & Analiză Predictivă
          </h1>
          <p className="mt-3 text-gray-700 leading-relaxed">
            Modele ML pentru prognoză consum, optimizare stoc, detectare anomalii și recomandări
            operaționale. Colectăm, curățăm și consolidăm date multi‑sursă pentru insight-uri acționabile
            și decizii rapide.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-cyan-600 text-white px-5 py-3 font-medium text-sm hover:bg-cyan-700 transition"
            >
              Programează un demo
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="tel:+40738100070"
              className="inline-flex items-center gap-2 rounded-xl bg-white text-cyan-700 px-5 py-3 font-medium text-sm ring-1 ring-cyan-200 hover:bg-cyan-50 transition"
            >
              Sună acum
            </a>
          </div>
        </div>
        <div className="mx-auto w-full max-w-xl rounded-xl overflow-hidden ring-1 ring-cyan-100 shadow-sm">
          <div className="aspect-video">
            <img
              src={aiImg}
              alt="Analiză avansată susținută de AI"
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
        title="Ce livrăm prin AI & Advanced Analytics"
        subtitle="Pipeline complet: date brute → insight → acțiune măsurabilă."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Feature
          icon={<Brain className="w-5 h-5" />}
          title="Modele predictive"
          desc="Prognoză consum carburanți, volum vânzări, cerere sezonieră."
        />
        <Feature
          icon={<BarChart3 className="w-5 h-5" />}
          title="Dashboards KPI"
          desc="Indicatori operaționali, marjă, rotație stoc, latențe flux."
        />
        <Feature
          icon={<Activity className="w-5 h-5" />}
          title="Detectare anomalii"
          desc="Identifică tranzacții suspecte, pierderi, pattern-uri atipice."
        />
        <Feature
          icon={<LineChart className="w-5 h-5" />}
          title="Optimizare stoc"
          desc="Niveluri recomandate + alerte proactive de reaprovizionare."
        />
        <Feature
          icon={<Clock className="w-5 h-5" />}
          title="Decizii în timp real"
          desc="Stream processing & acțiuni automate pe reguli și scor ML."
        />
        <Feature
          icon={<Rocket className="w-5 h-5" />}
          title="Experimentare"
          desc="A/B test pe promoții, preț dinamic și parametri operaționali."
        />
      </div>
    </section>

    {/* Data Flow */}
    <section className="mb-12">
      <SectionTitle eyebrow="Flux" title="Cum circulă datele" />
      <ol className="relative ml-4 pl-4 border-l border-gray-200 space-y-4 text-gray-700">
        {[
          "Ingest: colectăm date din POS, pompe, ATG, ERP, plăți, telemetrie.",
          "Curățare & normalizare: mapare câmpuri, eliminare outliers, enrichment.",
          "Stocare: data lake + zone modelate pentru rapoarte și modele ML.",
          "Modelare: antrenare, evaluare, versionare modele și deployment.",
          "Servire: API scoring, rule engine, notificări & dashboards.",
          "Îmbunătățire: feedback, drift detection, retraining programat.",
        ].map((s, i) => (
          <li key={s} className="relative">
            <span className="absolute -left-7 top-0 inline-flex h-6 w-6 items-center justify-center rounded-full bg-cyan-600 text-white text-xs font-semibold">
              {i + 1}
            </span>
            {s}
          </li>
        ))}
      </ol>
    </section>

    {/* Architecture blocks */}
    <section className="mb-12">
      <SectionTitle eyebrow="Arhitectură" title="Piese componente" />
      <div className="grid gap-4 md:grid-cols-3">
        <div className="bg-white rounded-xl ring-1 ring-gray-200 p-5 flex gap-3">
          <Layers className="w-5 h-5 text-cyan-600 mt-0.5" />
          <div>
            <h4 className="font-semibold text-gray-900">Strat ingest</h4>
            <p className="text-sm text-gray-600 mt-1">
              Conectori ETL/ELT, streaming, batching configurabil.
            </p>
          </div>
        </div>
        <div className="bg-white rounded-xl ring-1 ring-gray-200 p-5 flex gap-3">
          <Database className="w-5 h-5 text-cyan-600 mt-0.5" />
          <div>
            <h4 className="font-semibold text-gray-900">Data lake & mart</h4>
            <p className="text-sm text-gray-600 mt-1">
              Zone raw / curated / serving pentru acces controlat.
            </p>
          </div>
        </div>
        <div className="bg-white rounded-xl ring-1 ring-gray-200 p-5 flex gap-3">
          <Cloud className="w-5 h-5 text-cyan-600 mt-0.5" />
          <div>
            <h4 className="font-semibold text-gray-900">Model serving</h4>
            <p className="text-sm text-gray-600 mt-1">
              API scoring, caching, rolling updates și observabilitate.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Security & Governance */}
    <section className="mb-12">
      <SectionTitle eyebrow="Conformitate" title="Securitate & governance" />
      <div className="grid gap-4 md:grid-cols-3">
        <div className="bg-white rounded-xl ring-1 ring-gray-200 p-5 flex gap-3">
          <Shield className="w-5 h-5 text-cyan-600 mt-0.5" />
          <div>
            <h4 className="font-semibold text-gray-900">Protecție date</h4>
            <p className="text-sm text-gray-600 mt-1">
              Criptare tranzit & repaus, control granular acces.
            </p>
          </div>
        </div>
        <div className="bg-white rounded-xl ring-1 ring-gray-200 p-5 flex gap-3">
          <RefreshCcw className="w-5 h-5 text-cyan-600 mt-0.5" />
          <div>
            <h4 className="font-semibold text-gray-900">Versionare modele</h4>
            <p className="text-sm text-gray-600 mt-1">
              Tracking performanță, rollback rapid, drift alerts.
            </p>
          </div>
        </div>
        <div className="bg-white rounded-xl ring-1 ring-gray-200 p-5 flex gap-3">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5" />
          <div>
            <h4 className="font-semibold text-gray-900">Audit & trasabilitate</h4>
            <p className="text-sm text-gray-600 mt-1">
              Log evenimente, explicații scor (feature attributions).
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section>
      <div className="bg-gradient-to-br from-cyan-50 to-white ring-1 ring-cyan-100 rounded-2xl p-6 md:p-7 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            Vrei decizii mai rapide bazate pe date?
          </h3>
          <p className="text-gray-700">
            Îți arătăm un demo cu modele, dashboard și flux operativ.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-cyan-600 text-white px-5 py-3 font-medium text-sm hover:bg-cyan-700 transition"
          >
            Cere un demo
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="tel:+40738100070"
            className="inline-flex items-center gap-2 rounded-xl bg-white text-cyan-700 px-5 py-3 font-medium text-sm ring-1 ring-cyan-200 hover:bg-cyan-50 transition"
          >
            Sună acum
          </a>
        </div>
      </div>
    </section>
  </div>
);

export default Ai;

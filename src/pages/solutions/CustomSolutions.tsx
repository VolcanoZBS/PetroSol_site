// src/pages/solutions/CustomSolutions.tsx
import React from "react";
import {
  Code,
  Settings,
  Zap,
  Users,
  Shield,
  Cog,
  Layers,
  Puzzle,
  Workflow,
  Rocket,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import customSolutionsImg from "/images/custom-solutions.webp";
import { useNavigate } from "react-router-dom";

const Feature: React.FC<{ icon: React.ReactNode; title: string; desc: string }> = ({ icon, title, desc }) => (
  <div className="bg-white rounded-xl ring-1 ring-gray-200 p-4 flex items-start gap-3">
    <div className="mt-0.5 text-sky-600">{icon}</div>
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
      <div className="inline-flex items-center gap-2 rounded-full bg-sky-50 text-sky-700 px-3 py-1 text-xs font-medium ring-1 ring-sky-100">
        {eyebrow}
      </div>
    )}
    <h2 className="mt-2 text-2xl font-semibold text-gray-900">{title}</h2>
    {subtitle && <p className="mt-2 text-gray-600">{subtitle}</p>}
  </div>
);

const CustomSolutions: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero */}
      <div className="bg-gradient-to-br from-sky-50 via-white to-white ring-1 ring-sky-100 rounded-2xl p-6 md:p-8 mb-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-medium ring-1 ring-sky-100 text-sky-700">
              Soluție Personalizată
            </div>
            <h1 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">
              Soluții Software Personalizate
            </h1>
            <p className="mt-3 text-gray-700 leading-relaxed">
              Proiectăm și livrăm aplicații adaptate proceselor tale: integrare cu sisteme existente,
              scalare sigură, automatizare și raportare clară. De la analiză la mentenanță – acoperim
              întregul ciclu de viață.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-sky-600 text-white px-5 py-3 font-medium hover:bg-sky-700 transition"
              >
                Discută proiectul
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="tel:+40738100070"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-sky-700 px-5 py-3 font-medium ring-1 ring-sky-200 hover:bg-sky-50 transition"
              >
                Sună acum
              </a>
              <a
                href="/solutions/ai"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-sky-700 px-5 py-3 font-medium ring-1 ring-sky-100 hover:bg-sky-50 transition"
              >
                Vezi componenta AI
              </a>
            </div>
          </div>
          <div className="mx-auto w-full max-w-xl rounded-xl overflow-hidden ring-1 ring-sky-100 shadow-sm">
            <div className="aspect-video">
              <img
                src={customSolutionsImg}
                alt="Echipă dezvoltând soluții software personalizate"
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
          title="Ce putem construi pentru tine"
          subtitle="Abordare modulară pentru viteză, calitate și adaptare continuă."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Feature
            icon={<Code className="w-5 h-5" />}
            title="Aplicații Web & Desktop"
            desc="SPA, portaluri operaționale, dashboard-uri și instrumente interne performante."
          />
          <Feature
            icon={<Settings className="w-5 h-5" />}
            title="Integrări ERP/CRM"
            desc="Sincronizare entități, tranzacții, documente fiscale și schimb de date automat."
          />
          <Feature
            icon={<Zap className="w-5 h-5" />}
            title="API & Microservicii"
            desc="Arhitecturi scalabile, REST/GraphQL, versionare și observability."
          />
          <Feature
            icon={<Users className="w-5 h-5" />}
            title="UX orientat pe procese"
            desc="Fluxuri clare, reducere clicuri, adoptare rapidă și training minim."
          />
          <Feature
            icon={<Shield className="w-5 h-5" />}
            title="Securitate integrată"
            desc="Auth, RBAC, audit, criptare și politici conforme (ISO/27001 best practices)."
          />
          <Feature
            icon={<Cog className="w-5 h-5" />}
            title="Mentenanță & Evoluție"
            desc="Roadmap, backlog grooming, patching, refactoring incremental."
          />
        </div>
      </section>

      {/* Process */}
      <section className="mb-12">
        <SectionTitle eyebrow="Proces" title="Cum lucrăm" />
        <ol className="relative ml-4 pl-4 border-l border-gray-200 space-y-5 text-gray-700">
          {[
            "Analiză & modelare: mapare procese, obiective și riscuri.",
            "Arhitectură & design: module, API, securitate, fluxuri UX.",
            "Implementare incrementală: sprinturi scurte + feedback rapid.",
            "Testare automată & QA: unit, integrare, performanță, securitate.",
            "Livrare & observabilitate: deploy, loguri, monitorizare, alerte.",
            "Îmbunătățire continuă: roadmap, optimizări și scaling.",
          ].map((s, i) => (
            <li key={s} className="relative">
              <span className="absolute -left-7 top-0 inline-flex h-6 w-6 items-center justify-center rounded-full bg-sky-600 text-white text-xs font-semibold">
                {i + 1}
              </span>
              {s}
            </li>
          ))}
        </ol>
      </section>

      {/* Value Blocks */}
      <section className="mb-12">
        <SectionTitle eyebrow="Valoare" title="De ce abordarea noastră" />
        <div className="grid gap-4 md:grid-cols-3">
          <div className="bg-white rounded-xl ring-1 ring-gray-200 p-5 flex gap-3">
            <Layers className="w-5 h-5 text-sky-600 mt-0.5" />
            <div>
              <h4 className="font-semibold text-gray-900">Modularitate</h4>
              <p className="text-sm text-gray-600 mt-1">
                Extinzi sau înlocuiești componente fără riscuri majore.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl ring-1 ring-gray-200 p-5 flex gap-3">
            <Puzzle className="w-5 h-5 text-sky-600 mt-0.5" />
            <div>
              <h4 className="font-semibold text-gray-900">Integrare curată</h4>
              <p className="text-sm text-gray-600 mt-1">
                API resilient + mapping clar al datelor critice.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl ring-1 ring-gray-200 p-5 flex gap-3">
            <Workflow className="w-5 h-5 text-sky-600 mt-0.5" />
            <div>
              <h4 className="font-semibold text-gray-900">Automatizare</h4>
              <p className="text-sm text-gray-600 mt-1">
                Elimină pașii manuali și erorile operaționale.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl ring-1 ring-gray-200 p-5 flex gap-3">
            <Rocket className="w-5 h-5 text-sky-600 mt-0.5" />
            <div>
              <h4 className="font-semibold text-gray-900">Time‑to‑Value rapid</h4>
              <p className="text-sm text-gray-600 mt-1">
                MVP în câteva săptămâni, nu luni.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl ring-1 ring-gray-200 p-5 flex gap-3">
            <Shield className="w-5 h-5 text-sky-600 mt-0.5" />
            <div>
              <h4 className="font-semibold text-gray-900">Siguranță</h4>
              <p className="text-sm text-gray-600 mt-1">
                Politici de acces, audit trail, monitorizare.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl ring-1 ring-gray-200 p-5 flex gap-3">
            <Cog className="w-5 h-5 text-sky-600 mt-0.5" />
            <div>
              <h4 className="font-semibold text-gray-900">Scalabilitate</h4>
              <p className="text-sm text-gray-600 mt-1">
                Arhitectură pregătită pentru volum și extindere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="mb-12">
        <SectionTitle eyebrow="Tech" title="Stack & platforme" />
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Frontend",
              items: [
                "React / Next.js",
                "TypeScript",
                "Tailwind & Component Kits",
                "PWA & Offline",
              ],
            },
            {
              title: "Backend & Data",
              items: [
                "Node.js / .NET",
                "Microservicii & Event Bus",
                "SQL / PostgreSQL / Redis",
                "REST & GraphQL",
              ],
            },
            {
              title: "DevOps & Observabilitate",
              items: [
                "Docker / K8s",
                "CI/CD automat",
                "Logging & tracing",
                "Alerting & SLA",
              ],
            },
          ].map((c) => (
            <div key={c.title} className="bg-white rounded-xl ring-1 ring-gray-200 p-5">
              <h3 className="font-semibold text-gray-900">{c.title}</h3>
              <ul className="mt-3 space-y-2 text-sm text-gray-700">
                {c.items.map((i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5" />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="bg-gradient-to-br from-sky-50 to-white ring-1 ring-sky-100 rounded-2xl p-6 md:p-7 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              Gata să începem dezvoltarea soluției tale?
            </h3>
            <p className="text-gray-700">
              Trimite-ne contextul și revenim cu o propunere inițială.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-sky-600 text-white px-5 py-3 font-medium hover:bg-sky-700 transition"
            >
              Contactează-ne
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="tel:+40738100070"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-sky-700 px-5 py-3 font-medium ring-1 ring-sky-200 hover:bg-sky-50 transition"
            >
              Sună acum
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomSolutions;

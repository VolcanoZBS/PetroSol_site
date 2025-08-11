// src/pages/solutions/Unattended.tsx
import React from "react";
import {
  CreditCard,
  BadgeCheck,
  Camera,
  Server,
  Bell,
  Shield,
  Gauge,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import unattendedImg from "/images/unattended.webp";

const Feature: React.FC<{
  icon: React.ReactNode;
  title: string;
  desc: string;
}> = ({ icon, title, desc }) => (
  <div className="bg-white rounded-xl ring-1 ring-gray-200 p-4 flex items-start gap-3">
    <div className="mt-0.5 text-blue-600">{icon}</div>
    <div>
      <h4 className="font-semibold text-gray-900">{title}</h4>
      <p className="text-sm text-gray-600 mt-1">{desc}</p>
    </div>
  </div>
);

const SectionTitle: React.FC<{
  eyebrow?: string;
  title: string;
  subtitle?: string;
}> = ({ eyebrow, title, subtitle }) => (
  <div className="mb-6">
    {eyebrow && (
      <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 text-blue-700 px-3 py-1 text-xs font-medium ring-1 ring-blue-100">
        {eyebrow}
      </div>
    )}
    <h2 className="mt-2 text-2xl font-semibold text-gray-900">{title}</h2>
    {subtitle && <p className="mt-2 text-gray-600">{subtitle}</p>}
  </div>
);

const Unattended: React.FC = () => (
  <div className="max-w-6xl mx-auto px-4 py-12">
    {/* Hero card */}
    <div className="bg-gradient-to-br from-blue-50 to-white ring-1 ring-blue-100 rounded-2xl p-6 md:p-8 mb-12">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-medium ring-1 ring-blue-100 text-blue-700">
            Soluție PetroSol
          </div>
          <h1 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">
            Stații Nesupravegheate (Unattended)
          </h1>
          <p className="mt-3 text-gray-700 leading-relaxed">
            Operare 24/7 fără personal: identificare utilizator/vehicul, plată
            securizată, autorizare pompă, monitorizare în timp real și rapoarte
            automate. Integram hardware-ul din teren cu platforma software PetroSol
            pentru control, audit și scalare.
          </p>
          <a
            href="/#contact"
            className="mt-5 inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 text-white px-5 py-3 font-medium hover:bg-blue-700 transition"
          >
            Programează un demo
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="mx-auto w-full max-w-xl rounded-xl overflow-hidden ring-1 ring-blue-100 shadow-sm">
          <div className="aspect-video">
            <img
              src={unattendedImg}
              alt="Terminal de plată și pompă într-o stație nesupravegheată"
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
        title="Ce oferă soluția PetroSol"
        subtitle="Tot ce ai nevoie pentru operare sigură și automată, 24/7."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Feature
          icon={<CreditCard className="w-5 h-5" />}
          title="Plăți 24/7"
          desc="Card bancar, contactless (Apple/Google Pay) și carduri de flotă. Autorizare și reconciliere automată."
        />
        <Feature
          icon={<BadgeCheck className="w-5 h-5" />}
          title="Identificare sigură"
          desc="RFID/PIN pentru șofer sau vehicul, cu limite, bandă orară și reguli de consum."
        />
        <Feature
          icon={<Gauge className="w-5 h-5" />}
          title="Control pompă & stoc"
          desc="Autorizare în timp real, blocare la excepții, nivel rezervoare și temperatură (ATG)."
        />
        <Feature
          icon={<Camera className="w-5 h-5" />}
          title="Supraveghere video"
          desc="Evenimente corelate cu imagini (start/stop alimentare, respingeri, alarme) pentru audit."
        />
        <Feature
          icon={<Server className="w-5 h-5" />}
          title="Integrare completă"
          desc="ERP/contabilitate, e-Factura, carduri flotă, telemetrie, raportare centralizată."
        />
        <Feature
          icon={<Bell className="w-5 h-5" />}
          title="Monitorizare & alerte"
          desc="Stare echipamente, căderi rețea, valori depășite – notificări în timp real."
        />
      </div>
    </section>

    {/* How it works */}
    <section className="mb-12">
      <SectionTitle eyebrow="Flux" title="Cum funcționează" />
      <ol className="relative ml-4 pl-4 border-l border-gray-200 space-y-4 text-gray-700">
        {[
          "Utilizatorul se identifică (RFID/PIN/card) la terminal.",
          "Sistemul verifică drepturile și limitele și autorizează pompa.",
          "Alimentarea are loc; datele de tranzacție sunt colectate.",
          "Tranzacția se închide și se transmite către backend/ERP.",
          "Rapoarte, alerte și imagini video se atașează evenimentelor cheie.",
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

    {/* Components */}
    <section className="mb-12">
      <SectionTitle eyebrow="Componente" title="Ce suportăm" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white rounded-xl ring-1 ring-gray-200 p-5">
          <h3 className="font-semibold text-gray-900">Hardware</h3>
          <ul className="mt-3 space-y-2 text-gray-700 text-sm">
            {[
              "Terminal plată EMV/contactless",
              "Cititor RFID / tastatură PIN",
              "Controler pompe / ATG (nivel rezervoare)",
              "Cameră IP pentru corelare evenimente",
              "Imprimantă bon/factură (opțional)",
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
              "Portal administrare flote și limite",
              "API/integrare ERP și e-Factura",
              "Raportare centralizată multi-locație",
              "Alarme și audit evenimente",
              "Management utilizatori și roluri",
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

    {/* Security */}
    <section className="mb-12">
      <SectionTitle eyebrow="Siguranță" title="Securitate & conformitate" />
      <div className="bg-white rounded-xl ring-1 ring-gray-200 p-5">
        <div className="flex items-start gap-3">
          <Shield className="w-5 h-5 text-blue-600 mt-1" />
          <ul className="space-y-2 text-gray-700">
            <li>Criptare end‑to‑end a tranzacțiilor și jurnal de audit.</li>
            <li>Control acces pe roluri, rotație chei/parole, alerte la abateri.</li>
            <li>Aliniere la ISO 9001 și ISO/IEC 27001 pentru procese și securitate.</li>
          </ul>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section>
      <div className="bg-gradient-to-br from-blue-50 to-white ring-1 ring-blue-100 rounded-2xl p-6 md:p-7 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            Gata să treci la operare 24/7 fără personal?
          </h3>
          <p className="text-gray-700">
            Îți arătăm fluxurile, integrarea și monitorizarea în timp real.
          </p>
        </div>
        <a
          href="/#contact"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 text-white px-5 py-3 font-medium hover:bg-blue-700 transition"
        >
          Programează un demo
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  </div>
);

export default Unattended;

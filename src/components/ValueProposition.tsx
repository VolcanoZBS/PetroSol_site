// components/ValueProposition.tsx
import React from "react";
import isoImage from "../assets/images/iso_2015.webp";
import iso27001Image from "../assets/images/iso_27001.webp";

const Check = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="w-5 h-5" {...props}>
    <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function ValueProposition() {
  return (
    <section className="mb-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          {/* Variant A: same vibe as the rest (subtle blue gradient) */}
          <div className="rounded-2xl shadow-sm ring-1 p-6 md:p-8 text-center bg-gradient-to-br from-blue-50 to-white ring-blue-100">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              De ce <span className="text-blue-600">PetroSol</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Platforme software pentru distribuție carburanți, retail și operațiuni industriale -
              cu rezultate măsurabile, nu doar promisiuni.
            </p>
          </div>
        </div>

        {/* 3 value pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {[
            {
              title: "Operațiuni eficiente",
              desc: "Automatizăm procese cheie (stocuri, trasabilitate, prețuri, rapoarte) pentru timpi mai mici și erori reduse.",
            },
            {
              title: "Conformitate & securitate",
              desc: "Respectăm standardele ISO 9001 și ISO/IEC 27001 și bune practici fiscale/ANAF pentru audit fără emoții.",
            },
            {
              title: "Integrare rapidă",
              desc: "Conectăm case fiscale, pompe, ERP/contabilitate, e-Factura și sisteme terțe - fără întreruperi.",
            },
          ].map((item) => (
            <div key={item.title} className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 p-6">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-full bg-blue-50 text-blue-600">
                  <Check />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                  <p className="mt-2 text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Metrics + social proof */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch mb-10">
          {/* Metrics */}
          <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { kpi: "800+", label: "stații care funcționează pe PetroSol" },
              { kpi: "100+", label: "integrări e-Factura" },
              { kpi: "50+", label: "companii care folosesc carduri de flotă" },
              { kpi: "24/7", label: "asistență tehnică dedicată" },
            ].map((m) => (
              <div
                key={m.label}
                className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 p-6 text-center h-32 flex flex-col items-center justify-center"
              >
                <div className="text-3xl font-bold text-gray-900">{m.kpi}</div>
                <div className="mt-1 text-sm text-gray-600">{m.label}</div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 p-4 h-32">
            <div className="h-full flex items-center gap-4">
              {/* Badges */}
              <div className="flex gap-3 shrink-0">
                <div className="w-14 h-14 flex items-center justify-center overflow-hidden">
                  <img src={isoImage} alt="ISO 9001:2015" className="block max-w-full max-h-full object-contain" />
                </div>
                <div className="w-14 h-14 flex items-center justify-center overflow-hidden">
                  <img src={iso27001Image} alt="ISO 27001" className="block max-w-full max-h-full object-contain" />
                </div>
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-semibold text-gray-900 leading-tight">Certificări & standarde</h3>
                <ul className="mt-1 space-y-1 text-sm text-gray-700 leading-snug">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                    <span className="truncate">ISO 9001:2015 — Managementul calității</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-600"></span>
                    <span className="truncate">ISO/IEC 27001 — Securitatea informației</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Mini case study + CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-gradient-to-br from-blue-50 to-white rounded-2xl ring-1 ring-blue-100 p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Studiu de caz: rețea stații carburanți</h3>
                <p className="mt-2 text-gray-700">
                  Implementare în 26 de locații cu sincronizare centralizată, e-Factura și raportare zilnică.
                  Reducere 35% a timpului de închidere lunară.
                </p>
              </div>
              <a href="/studii-de-caz/retea-statii" className="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
                Citește studiul →
              </a>
            </div>
          </div>

          <div className="bg-gray-900 text-white rounded-2xl p-6">
            <h3 className="text-lg font-semibold">Vrei să vezi produsul în acțiune?</h3>
            <p className="mt-2 text-gray-300">Programează o demonstrație de 30 de minute cu echipa PetroSol.</p>
            <div className="mt-4">
              <a
                href="/#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  // If not on home, fallback to navigate
                  if (!document.getElementById('contact')) window.location.href = '/#contact';
                }}
                className="flex w-[95%] mx-auto items-center justify-center px-6 md:px-8 py-3 rounded-xl bg-white text-gray-900 font-semibold hover:bg-gray-100 transition shadow-sm"
              >
                <span>Programează un demo</span>
                <span className="ml-2">-&gt;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

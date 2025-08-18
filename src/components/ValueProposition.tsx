// components/ValueProposition.tsx
import React from "react";
import isoImage from "../assets/images/iso_2015.webp";
import iso27001Image from "../assets/images/iso_27001.webp";
import { useTranslation } from "react-i18next";

const Check = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="w-5 h-5" {...props}>
    <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function ValueProposition() {
  const { t } = useTranslation("homepage", { keyPrefix: "valueProp" });

  const pillars = t("pillars", { returnObjects: true }) as { title: string; desc: string }[];
  const metrics = t("metrics", { returnObjects: true }) as { kpi: string; label: string }[];
  const certItems = t("certifications.items", { returnObjects: true }) as string[];

  return (
    <section className="mb-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          {/* Variant A: same vibe as the rest (subtle blue gradient) */}
          <div className="rounded-2xl shadow-sm ring-1 p-6 md:p-8 text-center bg-gradient-to-br from-blue-50 to-white ring-blue-100">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              {t("header.title.before")} <span className="text-blue-600">{t("header.title.brand")}</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {t("header.subtitle")}
            </p>
          </div>
        </div>

        {/* 3 value pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {pillars.map(p => (
            <div key={p.title} className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 p-6">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-full bg-blue-50 text-blue-600">
                  <Check />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{p.title}</h3>
                  <p className="mt-2 text-gray-600 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Metrics + social proof */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch mb-10">
          {/* Metrics */}
          <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-4">
            {metrics.map(m => (
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
            <div className="flex items-center gap-4">
              {/* Badges */}
              <div className="w-14 flex flex-col gap-2 shrink-0 items-center">
                <div className="w-12 h-12 flex items-center justify-center overflow-hidden">
                  <img src={isoImage} alt="ISO 9001:2015" className="block max-w-full max-h-full object-contain" />
                </div>
                <div className="w-12 h-12 flex items-center justify-center overflow-hidden">
                  <img src={iso27001Image} alt="ISO 27001" className="block max-w-full max-h-full object-contain" />
                </div>
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-semibold text-gray-900 leading-tight">
                  {t("certifications.title")}
                </h3>
                <ul className="mt-1 space-y-1 text-sm text-gray-700 leading-snug">
                  {certItems.map((c, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className={`w-1.5 h-1.5 rounded-full ${i === 0 ? 'bg-blue-600' : 'bg-green-600'}`}></span>
                      <span>{c}</span>
                    </li>
                  ))}
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
                <h3 className="text-xl font-semibold text-gray-900">{t("caseStudy.title")}</h3>
                <p className="mt-2 text-gray-700">{t("caseStudy.text")}</p>
              </div>
              <a
                href={t("caseStudy.linkHref")}
                className="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
              >
                {t("caseStudy.linkLabel")}
              </a>
            </div>
          </div>

          <div className="bg-gray-900 text-white rounded-2xl p-6">
            <h3 className="text-lg font-semibold">{t("demo.title")}</h3>
            <p className="mt-2 text-gray-300">{t("demo.text")}</p>
            <div className="mt-4">
              <a
                href="/#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  if (!document.getElementById('contact')) window.location.href = '/#contact';
                }}
                className="flex w-[95%] mx-auto items-center justify-center px-6 md:px-8 py-3 rounded-xl bg-white text-gray-900 font-semibold hover:bg-gray-100 transition shadow-sm"
              >
                <span>{t("demo.cta")}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

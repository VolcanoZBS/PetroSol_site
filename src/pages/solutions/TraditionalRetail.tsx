// Internationalized Traditional Retail & HoReCa page
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
import { useTranslation } from "react-i18next";
import traditionalRetailImg from "/images/traditional-retail.webp";

const iconMap: Record<string, React.ElementType> = {
  pos: ShoppingBag,
  stock: Layers,
  customer: Users,
  promo: Percent,
  fiscal: Receipt,
  mobile: Smartphone,
  kpi: BarChart3,
  supply: Truck,
  control: Shield,
};

const Feature: React.FC<{ icon: React.ElementType; title: string; desc: string }> = ({
  icon: Icon,
  title,
  desc,
}) => (
  <div className="bg-white rounded-xl ring-1 ring-gray-200 p-4 flex items-start gap-3">
    <div className="mt-0.5 text-amber-600">
      <Icon className="w-5 h-5" />
    </div>
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

const TraditionalRetail: React.FC = () => {
  const { t } = useTranslation("solutions", { keyPrefix: "retail" });

  const capabilities = (t("capabilities.features", { returnObjects: true }) as any[]).map(f => ({
    Icon: iconMap[f.icon] || ShoppingBag,
    title: f.title,
    desc: f.desc,
  }));

  const flowSteps = t("flow.steps", { returnObjects: true }) as string[];
  const hardware = t("components.hardware", { returnObjects: true }) as string[];
  const software = t("components.software", { returnObjects: true }) as string[];
  const analytics = (t("analytics.cards", { returnObjects: true }) as any[]).map(a => ({
    Icon: iconMap[a.icon] || CheckCircle2,
    title: a.title,
    desc: a.desc,
  }));

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero */}
      <div className="bg-gradient-to-br from-amber-50 to-white ring-1 ring-amber-100 rounded-2xl p-6 md:p-8 mb-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-medium ring-1 ring-amber-100 text-amber-700">
              {t("hero.badge")}
            </div>
            <h1 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">
              {t("hero.title")}
            </h1>
            <p className="mt-3 text-gray-700 leading-relaxed">
              {t("hero.text")}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-amber-600 text-white px-5 py-3 font-medium text-sm hover:bg-amber-700 transition"
              >
                {t("hero.primaryCta")}
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="tel:+40738100070"
                className="inline-flex items-center gap-2 rounded-xl bg-white text-amber-700 px-5 py-3 font-medium text-sm ring-1 ring-amber-200 hover:bg-amber-50 transition"
              >
                {t("hero.secondaryCta")}
              </a>
            </div>
          </div>
          <div className="mx-auto w-full max-w-xl rounded-xl overflow-hidden ring-1 ring-amber-100 shadow-sm">
            <div className="aspect-video">
              <img
                src={traditionalRetailImg}
                alt={t("hero.imageAlt")}
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
          eyebrow={t("capabilities.eyebrow")}
          title={t("capabilities.title")}
          subtitle={t("capabilities.subtitle")}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {capabilities.map(c => (
            <Feature key={c.title} icon={c.Icon} title={c.title} desc={c.desc} />
          ))}
        </div>
      </section>

      {/* Flow */}
      <section className="mb-12">
        <SectionTitle eyebrow={t("flow.eyebrow")} title={t("flow.title")} />
        <ol className="relative ml-4 pl-4 border-l border-gray-200 space-y-4 text-gray-700">
          {flowSteps.map((step, i) => (
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
        <SectionTitle eyebrow={t("components.eyebrow")} title={t("components.title")} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-xl ring-1 ring-gray-200 p-5">
            <h3 className="font-semibold text-gray-900">{t("components.hardwareTitle")}</h3>
            <ul className="mt-3 space-y-2 text-gray-700 text-sm">
              {hardware.map(h => (
                <li key={h} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-xl ring-1 ring-gray-200 p-5">
            <h3 className="font-semibold text-gray-900">{t("components.softwareTitle")}</h3>
            <ul className="mt-3 space-y-2 text-gray-700 text-sm">
              {software.map(s => (
                <li key={s} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Analytics */}
      <section className="mb-12">
        <SectionTitle eyebrow={t("analytics.eyebrow")} title={t("analytics.title")} />
        <div className="grid gap-4 md:grid-cols-3">
          {analytics.map(a => (
            <div key={a.title} className="bg-white rounded-xl ring-1 ring-gray-200 p-5 flex gap-3">
              <a.Icon className="w-5 h-5 text-amber-600 mt-0.5" />
              <div>
                <h4 className="font-semibold text-gray-900">{a.title}</h4>
                <p className="text-sm text-gray-600 mt-1">{a.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="bg-gradient-to-br from-amber-50 to-white ring-1 ring-amber-100 rounded-2xl p-6 md:p-7 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              {t("cta.title")}
            </h3>
            <p className="text-gray-700">
              {t("cta.text")}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-amber-600 text-white px-5 py-3 font-medium text-sm hover:bg-amber-700 transition"
            >
              {t("cta.primary")}
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="tel:+40738100070"
              className="inline-flex items-center gap-2 rounded-xl bg-white text-amber-700 px-5 py-3 font-medium text-sm ring-1 ring-amber-200 hover:bg-amber-50 transition"
            >
              {t("cta.secondary")}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TraditionalRetail;

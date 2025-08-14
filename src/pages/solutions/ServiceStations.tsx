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
import { useTranslation } from "react-i18next";
import serviceStationImg from "/images/service-station.webp";

const iconMap: Record<string, React.ElementType> = {
  stock: Fuel,
  pump: Gauge,
  pos: Settings,
  reporting: BarChart3,
  staff: Users,
  compliance: Shield,
  loss: CheckCircle2,
  efficiency: CheckCircle2,
  visibility: CheckCircle2,
  governance: CheckCircle2,
  scalability: CheckCircle2,
  roi: CheckCircle2,
  cloud: Cloud,
  alerts: AlertTriangle,
  maintenance: Wrench,
  automation: Workflow,
  modular: Layers,
  performance: Zap
};

const Feature: React.FC<{ icon: React.ElementType; title: string; desc: string }> = ({
  icon: Icon,
  title,
  desc
}) => (
  <div className="bg-white rounded-xl ring-1 ring-gray-200 p-5 flex items-start gap-3 hover:shadow-sm transition">
    <div className="mt-0.5 text-blue-600">
      <Icon className="w-5 h-5" />
    </div>
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

const ServiceStations: React.FC = () => {
  const { t } = useTranslation("solutions", { keyPrefix: "stations" });

  const capabilities = (t("capabilities.features", { returnObjects: true }) as any[]).map(f => ({
    Icon: iconMap[f.icon] || Fuel,
    title: f.title,
    desc: f.desc
  }));

  const flowSteps = t("flow.steps", { returnObjects: true }) as string[];

  const benefits = t("value.benefits", { returnObjects: true }) as {
    icon: string;
    title: string;
    desc: string;
  }[];

  const mid = Math.ceil(benefits.length / 2);
  const benefitsLeft = benefits.slice(0, mid);
  const benefitsRight = benefits.slice(mid);

  const hardware = t("components.hardware", { returnObjects: true }) as string[];
  const software = t("components.software", { returnObjects: true }) as string[];
  const advanced = t("components.advanced", { returnObjects: true }) as string[];

  const reliability = (t("reliability.features", { returnObjects: true }) as any[]).map(r => ({
    Icon: iconMap[r.icon] || Cloud,
    title: r.title,
    desc: r.desc
  }));

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-white ring-1 ring-blue-100 rounded-2xl p-6 md:p-10 mb-14">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-medium ring-1 ring-blue-100 text-blue-700">
              {t("hero.badge")}
            </div>
            <h1 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              {t("hero.title")}
            </h1>
            <p className="mt-4 text-gray-700 leading-relaxed">
              {t("hero.text")}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 text-white px-5 py-3 font-medium text-sm hover:bg-blue-700 transition"
              >
                {t("hero.primaryCta")}
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="tel:+40738100070"
                className="inline-flex items-center gap-2 rounded-xl bg-white text-blue-700 px-5 py-3 font-medium text-sm ring-1 ring-blue-200 hover:bg-blue-50 transition"
              >
                {t("hero.secondaryCta")}
              </a>
            </div>
          </div>
          <div className="mx-auto w-full max-w-xl rounded-xl overflow-hidden ring-1 ring-blue-100 shadow-sm">
            <div className="aspect-video">
              <img
                src={serviceStationImg}
                alt={t("hero.imageAlt")}
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
          eyebrow={t("capabilities.eyebrow")}
          title={t("capabilities.title")}
          subtitle={t("capabilities.subtitle")}
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map(f => (
            <Feature key={f.title} icon={f.Icon} title={f.title} desc={f.desc} />
          ))}
        </div>
      </section>

      {/* Operational Flow */}
      <section className="mb-14">
        <SectionTitle eyebrow={t("flow.eyebrow")} title={t("flow.title")} />
        <ol className="relative ml-4 pl-4 border-l border-gray-200 space-y-5 text-gray-700">
          {flowSteps.map((step, i) => (
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
        <SectionTitle eyebrow={t("value.eyebrow")} title={t("value.title")} />
        <div className="grid md:grid-cols-2 gap-8">
          {[benefitsLeft, benefitsRight].map((col, idx) => (
            <div key={idx} className="space-y-4">
              {col.map(b => {
                const Icon = iconMap[b.icon] || CheckCircle2;
                return (
                  <div key={b.title} className="flex gap-3">
                    <div className="mt-1">
                      <Icon className="w-4 h-4 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{b.title}</h4>
                      <p className="text-sm text-gray-600 mt-0.5">{b.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </section>

      {/* Technical Components */}
      <section className="mb-14">
        <SectionTitle eyebrow={t("components.eyebrow")} title={t("components.title")} />
        <div className="grid md:grid-cols-3 gap-5">
          <div className="bg-white rounded-xl ring-1 ring-gray-200 p-5">
            <h3 className="font-semibold text-gray-900">{t("components.hardwareTitle")}</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-700">
              {hardware.map(i => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5" />
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-xl ring-1 ring-gray-200 p-5">
            <h3 className="font-semibold text-gray-900">{t("components.softwareTitle")}</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-700">
              {software.map(i => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5" />
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-xl ring-1 ring-gray-200 p-5">
            <h3 className="font-semibold text-gray-900">{t("components.advancedTitle")}</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-700">
              {advanced.map(i => (
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
        <SectionTitle eyebrow={t("reliability.eyebrow")} title={t("reliability.title")} />
        <div className="grid md:grid-cols-3 gap-4">
          {reliability.map(r => (
            <Feature key={r.title} icon={r.Icon} title={r.title} desc={r.desc} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-7 md:p-9 text-white flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h3 className="text-lg md:text-xl font-semibold">
              {t("cta.title")}
            </h3>
            <p className="mt-1 text-white/80">
              {t("cta.text")}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-white text-blue-700 px-5 py-3 font-medium text-sm hover:bg-blue-50 transition"
            >
              {t("cta.primary")}
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="tel:+40738100070"
              className="inline-flex items-center gap-2 rounded-xl ring-1 ring-white/40 text-white px-5 py-3 font-medium text-sm hover:bg-white/10 transition"
            >
              {t("cta.secondary")}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceStations;

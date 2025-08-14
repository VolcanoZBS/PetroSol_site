// Internationalized AI solution page
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
  CheckCircle2
} from "lucide-react";
import { useTranslation } from "react-i18next";
import aiImg from "/images/ai.webp";

const iconMap: Record<string, React.ElementType> = {
  predictive: Brain,
  kpi: BarChart3,
  anomaly: Activity,
  stock: LineChart,
  realtime: Clock,
  experiment: Rocket,
  ingest: Layers,
  storage: Database,
  serving: Cloud,
  protection: Shield,
  versioning: RefreshCcw,
  audit: CheckCircle2
};

const Feature: React.FC<{ icon: React.ElementType; title: string; desc: string }> = ({
  icon: Icon,
  title,
  desc
}) => (
  <div className="bg-white rounded-xl ring-1 ring-gray-200 p-4 flex items-start gap-3">
    <div className="mt-0.5 text-cyan-600">
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
  subtitle
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

const Ai: React.FC = () => {
  const { t } = useTranslation("solutions", { keyPrefix: "ai" });

  const features = (t("capabilities.features", { returnObjects: true }) as any[]).map(f => ({
    Icon: iconMap[f.icon] || Brain,
    title: f.title,
    desc: f.desc
  }));

  const flowSteps = t("flow.steps", { returnObjects: true }) as string[];

  const architectureBlocks = (t("architecture.blocks", { returnObjects: true }) as any[]).map(b => ({
    Icon: iconMap[b.icon] || Layers,
    title: b.title,
    desc: b.desc
  }));

  const securityBlocks = (t("security.blocks", { returnObjects: true }) as any[]).map(b => ({
    Icon: iconMap[b.icon] || Shield,
    title: b.title,
    desc: b.desc
  }));

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero */}
      <div className="bg-gradient-to-br from-cyan-50 via-white to-white ring-1 ring-cyan-100 rounded-2xl p-6 md:p-8 mb-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-medium ring-1 ring-cyan-100 text-cyan-700">
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
                className="inline-flex items-center gap-2 rounded-xl bg-cyan-600 text-white px-5 py-3 font-medium text-sm hover:bg-cyan-700 transition"
              >
                {t("hero.primaryCta")}
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="tel:+40738100070"
                className="inline-flex items-center gap-2 rounded-xl bg-white text-cyan-700 px-5 py-3 font-medium text-sm ring-1 ring-cyan-200 hover:bg-cyan-50 transition"
              >
                {t("hero.secondaryCta")}
              </a>
            </div>
          </div>
          <div className="mx-auto w-full max-w-xl rounded-xl overflow-hidden ring-1 ring-cyan-100 shadow-sm">
            <div className="aspect-video">
              <img
                src={aiImg}
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
          {features.map(f => (
            <Feature key={f.title} icon={f.Icon} title={f.title} desc={f.desc} />
          ))}
        </div>
      </section>

      {/* Data Flow */}
      <section className="mb-12">
        <SectionTitle eyebrow={t("flow.eyebrow")} title={t("flow.title")} />
        <ol className="relative ml-4 pl-4 border-l border-gray-200 space-y-4 text-gray-700">
          {flowSteps.map((s, i) => (
            <li key={i} className="relative">
              <span className="absolute -left-7 top-0 inline-flex h-6 w-6 items-center justify-center rounded-full bg-cyan-600 text-white text-xs font-semibold">
                {i + 1}
              </span>
              {s}
            </li>
          ))}
        </ol>
      </section>

      {/* Architecture */}
      <section className="mb-12">
        <SectionTitle eyebrow={t("architecture.eyebrow")} title={t("architecture.title")} />
        <div className="grid gap-4 md:grid-cols-3">
          {architectureBlocks.map(b => (
            <div key={b.title} className="bg-white rounded-xl ring-1 ring-gray-200 p-5 flex gap-3">
              <b.Icon className="w-5 h-5 text-cyan-600 mt-0.5" />
              <div>
                <h4 className="font-semibold text-gray-900">{b.title}</h4>
                <p className="text-sm text-gray-600 mt-1">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Security & Governance */}
      <section className="mb-12">
        <SectionTitle eyebrow={t("security.eyebrow")} title={t("security.title")} />
        <div className="grid gap-4 md:grid-cols-3">
          {securityBlocks.map(b => (
            <div key={b.title} className="bg-white rounded-xl ring-1 ring-gray-200 p-5 flex gap-3">
              <b.Icon className="w-5 h-5 text-cyan-600 mt-0.5" />
              <div>
                <h4 className="font-semibold text-gray-900">{b.title}</h4>
                <p className="text-sm text-gray-600 mt-1">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="bg-gradient-to-br from-cyan-50 to-white ring-1 ring-cyan-100 rounded-2xl p-6 md:p-7 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
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
              className="inline-flex items-center gap-2 rounded-xl bg-cyan-600 text-white px-5 py-3 font-medium text-sm hover:bg-cyan-700 transition"
            >
              {t("cta.primary")}
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="tel:+40738100070"
              className="inline-flex items-center gap-2 rounded-xl bg-white text-cyan-700 px-5 py-3 font-medium text-sm ring-1 ring-cyan-200 hover:bg-cyan-50 transition"
            >
              {t("cta.secondary")}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ai;

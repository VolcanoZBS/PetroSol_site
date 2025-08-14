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
import { useTranslation } from "react-i18next";

const iconMap: Record<string, React.ElementType> = {
  code: Code,
  integration: Settings,
  api: Zap,
  ux: Users,
  security: Shield,
  maintenance: Cog,
  modularity: Layers,
  cleanIntegration: Puzzle,
  automation: Workflow,
  speed: Rocket,
  safety: Shield,
  scalability: Cog,
  check: CheckCircle2
};

const Feature: React.FC<{ icon: React.ElementType; title: string; desc: string }> = ({ icon: Icon, title, desc }) => (
  <div className="bg-white rounded-xl ring-1 ring-gray-200 p-4 flex items-start gap-3">
    <div className="mt-0.5 text-sky-600">
      <Icon className="w-5 h-5" />
    </div>
    <div>
      <h4 className="font-semibold text-gray-900">{title}</h4>
      <p className="text-sm text-gray-600 mt-1">{desc}</p>
    </div>
  </div>
);

const SectionTitle: React.FC<{ eyebrow?: string; title: string; subtitle?: string }> = ({ eyebrow, title, subtitle }) => (
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
  const { t } = useTranslation("solutions", { keyPrefix: "custom" });

  const features = (t("capabilities.features", { returnObjects: true }) as any[]).map(f => ({
    Icon: iconMap[f.icon] || Code,
    title: f.title,
    desc: f.desc
  }));

  const processSteps = t("process.steps", { returnObjects: true }) as string[];

  const valueBlocks = (t("value.blocks", { returnObjects: true }) as any[]).map(b => ({
    Icon: iconMap[b.icon] || Layers,
    title: b.title,
    desc: b.desc
  }));

  const techCategories = t("tech.categories", { returnObjects: true }) as { title: string; items: string[] }[];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero */}
      <div className="bg-gradient-to-br from-sky-50 via-white to-white ring-1 ring-sky-100 rounded-2xl p-6 md:p-8 mb-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-medium ring-1 ring-sky-100 text-sky-700">
              {t("hero.badge")}
            </div>
            <h1 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">
              {t("hero.title")}
            </h1>
            <p className="mt-3 text-gray-700 leading-relaxed">
              {t("hero.text")}
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-sky-600 text-white px-5 py-3 font-medium text-sm hover:bg-sky-700 transition"
              >
                {t("hero.primaryCta")}
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="tel:+40738100070"
                className="inline-flex items-center gap-2 rounded-xl bg-white text-sky-700 px-5 py-3 font-medium text-sm ring-1 ring-sky-200 hover:bg-sky-50 transition"
              >
                {t("hero.secondaryCta")}
              </a>
            </div>
          </div>
          <div className="mx-auto w-full max-w-xl rounded-xl overflow-hidden ring-1 ring-sky-100 shadow-sm">
            <div className="aspect-video">
              <img
                src={customSolutionsImg}
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

      {/* Process */}
      <section className="mb-12">
        <SectionTitle eyebrow={t("process.eyebrow")} title={t("process.title")} />
        <ol className="relative ml-4 pl-4 border-l border-gray-200 space-y-5 text-gray-700">
          {processSteps.map((s, i) => (
            <li key={i} className="relative">
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
        <SectionTitle eyebrow={t("value.eyebrow")} title={t("value.title")} />
        <div className="grid gap-4 md:grid-cols-3">
          {valueBlocks.map(v => (
            <div key={v.title} className="bg-white rounded-xl ring-1 ring-gray-200 p-5 flex gap-3">
              <v.Icon className="w-5 h-5 text-sky-600 mt-0.5" />
              <div>
                <h4 className="font-semibold text-gray-900">{v.title}</h4>
                <p className="text-sm text-gray-600 mt-1">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="mb-12">
        <SectionTitle eyebrow={t("tech.eyebrow")} title={t("tech.title")} />
        <div className="grid gap-4 md:grid-cols-3">
          {techCategories.map(cat => (
            <div key={cat.title} className="bg-white rounded-xl ring-1 ring-gray-200 p-5">
              <h3 className="font-semibold text-gray-900">{cat.title}</h3>
              <ul className="mt-3 space-y-2 text-sm text-gray-700">
                {cat.items.map(item => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5" />
                    <span>{item}</span>
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
              {t("cta.title")}
            </h3>
            <p className="text-gray-700">
              {t("cta.text")}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-sky-600 text-white px-5 py-3 font-medium text-sm hover:bg-sky-700 transition"
            >
              {t("cta.primary")}
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="tel:+40738100070"
              className="inline-flex items-center gap-2 rounded-xl bg-white text-sky-700 px-5 py-3 font-medium text-sm ring-1 ring-sky-200 hover:bg-sky-50 transition"
            >
              {t("cta.secondary")}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomSolutions;

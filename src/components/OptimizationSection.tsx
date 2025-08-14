import React from "react";
import {
  LifeBuoy,
  Sliders,
  BookOpen,
  Rocket,
  TrendingUp,
  Clock,
  ArrowRight
} from "lucide-react";
import tabletaImg from "../assets/images/tableta.webp";
import { useTranslation } from "react-i18next";

interface FeatureItem {
  Icon: React.ElementType;
  label: string;
  desc: string;
}

export const OptimizationSection: React.FC = () => {
  const { t } = useTranslation("homepage", { keyPrefix: "optimization" });

  const features = (t("features", { returnObjects: true }) as any[]).map(f => {
    const mapIcon: Record<string, React.ElementType> = {
      support: LifeBuoy,
      customize: Sliders,
      training: BookOpen,
      fastImpl: Rocket,
      growth: TrendingUp,
      time: Clock
    };
    return {
      Icon: mapIcon[f.icon as string] || LifeBuoy,
      label: f.label,
      desc: f.desc
    } as FeatureItem;
  });

  const stats = t("stats", { returnObjects: true }) as { k: string; v: string }[];

  return (
    <section className="mt-20">
      <div className="relative rounded-3xl bg-gradient-to-br from-blue-50 via-white to-white px-6 md:px-10 py-14 md:py-16 ring-1 ring-blue-100 overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 -left-16 w-72 h-72 bg-indigo-200/30 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-last md:order-first">
              <div className="rounded-2xl overflow-hidden ring-1 ring-blue-100 shadow-sm bg-white">
                <img
                  src={tabletaImg}
                  alt={t("imageAlt")}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 text-blue-700 px-3 py-1 text-[11px] font-medium ring-1 ring-blue-200">
                {t("badge")}
              </div>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold leading-tight text-gray-900">
                {t("title")}
              </h2>
              <p className="mt-4 text-sm md:text-base text-gray-700 leading-relaxed max-w-prose">
                {t("intro")}
              </p>

              <div className="mt-7 grid grid-cols-2 gap-4">
                {features.map(({ Icon, label, desc }) => (
                  <div
                    key={label}
                    className="group rounded-xl bg-white ring-1 ring-gray-200 hover:ring-blue-200 hover:shadow-sm transition p-4 flex flex-col gap-2"
                  >
                    <div className="inline-flex items-center gap-2">
                      <span className="rounded-lg bg-blue-50 p-2 ring-1 ring-blue-100 text-blue-600">
                        <Icon className="w-4 h-4" />
                      </span>
                      <span className="text-sm font-medium text-gray-900">{label}</span>
                    </div>
                    <p className="text-[11px] leading-relaxed text-gray-600 group-hover:text-gray-700 transition">
                      {desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-600 text-white px-5 py-3 text-sm font-medium hover:bg-blue-700 transition"
                  aria-label={t("cta.contactAria")}
                >
                  {t("cta.contact")}
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="tel:+40738100070"
                  className="inline-flex items-center gap-2 rounded-xl bg-white text-blue-700 px-5 py-3 text-sm font-medium ring-1 ring-blue-200 hover:bg-blue-50 transition"
                  aria-label={t("cta.callAria")}
                >
                  {t("cta.call")}
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {stats.map(stat => (
              <div
                key={stat.v + stat.k}
                className="rounded-xl bg-white ring-1 ring-gray-200 px-5 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1"
              >
                <span className="text-lg font-semibold text-gray-900">{stat.k}</span>
                <span className="text-xs tracking-wide text-gray-600">{stat.v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OptimizationSection;

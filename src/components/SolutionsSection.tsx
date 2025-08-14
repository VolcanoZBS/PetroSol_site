import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

type Solution = {
  title: string;
  desc: string;
  accent: string; // tailwind gradient classes
  path: string;
};

const SolutionsSection: React.FC = () => {
  const { t } = useTranslation("homepage", { keyPrefix: "solutions" });

  const raw = t("list", { returnObjects: true }) as unknown;
  const solutions: Solution[] = Array.isArray(raw) ? (raw as Solution[]) : [];

  return (
    <section className="mb-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          {t("heading")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((s, idx) => {
            const isLast = idx === solutions.length - 1;
            const spanMd = isLast && solutions.length % 2 === 1 ? "md:col-span-2" : "";
            const spanLg = isLast && solutions.length % 3 === 1 ? "lg:col-span-3" : "";
            return (
              <Link
                key={s.title + idx}
                to={`/solutions/${s.path}`}
                aria-label={t("ctaAria", { title: s.title })}
                className={`group block focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-2xl ${spanMd} ${spanLg}`}
              >
                <article className="h-full bg-white rounded-2xl ring-1 ring-gray-200 shadow-sm p-6 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5">
                  <div className={`h-1.5 w-14 rounded-full bg-gradient-to-r ${s.accent} mb-4`} />
                  <h3 className="text-xl font-semibold text-gray-900">{s.title}</h3>
                  <p className="mt-2 text-gray-600">{s.desc}</p>
                  <div className="mt-4 inline-flex items-center text-blue-600 font-medium">
                    <span>{t("cta")}</span>
                    <span className="ml-1 transform transition-transform group-hover:translate-x-1">→</span>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
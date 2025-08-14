import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

type Solution = {
  name: string;
  path: string;
  imageUrl: string;
  description: string;
  accent: string;
  tag: string;
};

const SolutionsIndex: React.FC = () => {
  const { t } = useTranslation("solutions");

  const list = t("list", { returnObjects: true }) as Solution[];

  return (
    <div className="px-4 sm:px-0">
      {/* Header */}
      <div className="mb-8">
        <div className="rounded-2xl shadow-sm ring-1 p-6 md:p-8 text-center bg-gradient-to-br from-blue-50 to-white ring-blue-100">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            {t("heading")}
          </h1>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            {t("subheading")}
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {list.map((sol) => (
          <Link
            key={sol.path}
            to={sol.path}
            aria-label={t("cardAria", { name: sol.name })}
            className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-2xl"
          >
            <article className="h-full bg-white rounded-2xl ring-1 ring-gray-200 shadow-sm overflow-hidden transition-all duration-200 hover:shadow-md hover:-translate-y-0.5">
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={sol.imageUrl}
                  alt={sol.name}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  loading="lazy"
                  decoding="async"
                  sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                />
                <div className={`absolute top-3 left-3 h-1.5 w-14 rounded-full bg-gradient-to-r ${sol.accent}`} />
                <span className="absolute top-3 right-3 inline-flex items-center rounded-full bg-white/80 backdrop-blur px-2.5 py-1 text-xs font-medium text-gray-700 ring-1 ring-white/70">
                  {sol.tag}
                </span>
              </div>

              <div className="p-5 flex flex-col h-full">
                <h2 className="text-xl font-semibold text-gray-900">{sol.name}</h2>
                <p className="mt-2 text-gray-600 leading-relaxed">
                  {sol.description}
                </p>
                <div className="mt-4 inline-flex items-center text-blue-600 font-medium">
                  <span>{t("cta")}</span>
                  <span className="ml-1 transform transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SolutionsIndex;

import React from "react";
import { Link } from "react-router-dom";

type Solution = {
  title: string;
  desc: string;
  accent: string; // tailwind gradient classes
  path: string;
};

const solutions: Solution[] = [
  {
    title: "Stații Distribuție Carburanți",
    desc: "Optimizăm funcționarea stațiilor de alimentare.",
    accent: "from-blue-600 to-blue-500",
    path: "service-stations",
  },
  {
    title: "Unattended (Autoservire)",
    desc: "Sisteme de autoservire eficiente.",
    accent: "from-amber-600 to-amber-500",
    path: "unattended",
  },
  {
    title: "Industrial CRT",
    desc: "Tehnologie CRT robustă.",
    accent: "from-pink-600 to-pink-500",
    path: "industrial-crt",
  },
  {
    title: "Retail și Restaurante",
    desc: "Sisteme integrate pentru retail și HoReCa.",
    accent: "from-green-600 to-green-500",
    path: "traditional-retail",
  },
  {
    title: "Plăți",
    desc: "Platforme de plată securizate.",
    accent: "from-purple-600 to-purple-500",
    path: "payment",
  },
  {
    title: "Soluții personalizate",
    desc: "Aplicații personalizate pentru afacerea ta.",
    accent: "from-indigo-600 to-indigo-500",
    path: "custom-solutions",
  },
  {
    title: "AI",
    desc: "Analiză avansată și automatizare inteligentă.",
    accent: "from-cyan-600 to-cyan-500",
    path: "ai",
  },
];

const SolutionsSection: React.FC = () => {
  return (
    <section className="mb-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Soluții Pentru:
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((s, idx) => {
            const isLast = idx === solutions.length - 1;
            const spanMd = isLast && solutions.length % 2 === 1 ? "md:col-span-2" : "";
            const spanLg = isLast && solutions.length % 3 === 1 ? "lg:col-span-3" : "";
            const spanClasses = `${spanMd} ${spanLg}`;
            return (
              <Link
                key={s.title}
                to={`/solutions/${s.path}`}
                aria-label={`Vezi soluția: ${s.title}`}
                className={`group block focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-2xl ${spanClasses}`}
              >
               <article className="h-full bg-white rounded-2xl ring-1 ring-gray-200 shadow-sm p-6 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5">
                 <div className={`h-1.5 w-14 rounded-full bg-gradient-to-r ${s.accent} mb-4`} />
                 <h3 className="text-xl font-semibold text-gray-900">{s.title}</h3>
                 <p className="mt-2 text-gray-600">{s.desc}</p>
                 <div className="mt-4 inline-flex items-center text-blue-600 font-medium">
                   <span>Află mai multe</span>
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
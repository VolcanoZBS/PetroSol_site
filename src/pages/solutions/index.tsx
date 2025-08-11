import React from "react";
import { Link } from "react-router-dom";

type Solution = {
  name: string;
  path: string;
  imageUrl: string;
  description: string;
  accent: string;
  tag: string;
};

const solutionList: Solution[] = [
  {
    name: "Stații Distribuție Carburanți",
    path: "service-stations",
    imageUrl: "/images/service-station.webp",
    description: "Optimizăm funcționarea stațiilor de alimentare cu soluții integrate și suport 24/7.",
    accent: "from-blue-600 to-blue-500",
    tag: "Retail Fuel",
  },
  {
    name: "Stații Nesupravegheate (Unattended)",
    path: "unattended",
    imageUrl: "/images/unattended.webp",
    description: "Stații nesupravegheate 24/7: plăți, identificare, autorizare pompă, monitorizare.",
    accent: "from-emerald-600 to-emerald-500",
    tag: "24/7",
  },
  {
    name: "Distribuție En-Gros & Industrial (CRT)",
    path: "industrial-crt",
    imageUrl: "/images/industrial-crt.webp",
    description: "Distribuție en-gros și industrială: contracte, rute, POD, facturare automată.",
    accent: "from-indigo-600 to-indigo-500",
    tag: "B2B",
  },
  {
    name: "Retail Tradițional",
    path: "traditional-retail",
    imageUrl: "/images/traditional-retail.webp",
    description: "Soluții POS pentru retail și HoReCa cu integrare rapidă și stabilitate.",
    accent: "from-amber-600 to-amber-500",
    tag: "POS",
  },
  {
    name: "Plăți",
    path: "payment",
    imageUrl: "/images/payment.webp",
    description: "Procesare plăți EMV/contactless și reconciliere sigură.",
    accent: "from-purple-600 to-purple-500",
    tag: "Payments",
  },
  {
    name: "Soluții Personalizate",
    path: "custom-solutions",
    imageUrl: "/images/custom-solutions.webp",
    description: "Aplicații și integrare personalizată pentru procesele tale.",
    accent: "from-pink-600 to-pink-500",
    tag: "Custom",
  },
  {
    name: "Inteligență Artificială",
    path: "ai",
    imageUrl: "/images/ai.webp",
    description: "Analiză predictivă, automatizare și insight-uri pentru operațiuni.",
    accent: "from-cyan-600 to-cyan-500",
    tag: "AI",
  },
];

const SolutionsIndex: React.FC = () => (
  <div className="px-4 sm:px-0">
    {/* Header */}
    <div className="mb-8">
      <div className="rounded-2xl shadow-sm ring-1 p-6 md:p-8 text-center bg-gradient-to-br from-blue-50 to-white ring-blue-100">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
          Soluții PetroSol
        </h1>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          Alege soluția potrivită pentru operațiunile tale
        </p>
      </div>
    </div>

    {/* Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
      {solutionList.map((sol) => (
        <Link
          key={sol.path}
          to={sol.path}
          aria-label={`Vezi soluția: ${sol.name}`}
          className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-2xl"
        >
          <article className="h-full bg-white rounded-2xl ring-1 ring-gray-200 shadow-sm overflow-hidden transition-all duration-200 hover:shadow-md hover:-translate-y-0.5">
            {/* Media */}
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

            {/* Content */}
            <div className="p-5 flex flex-col h-full">
              <h2 className="text-xl font-semibold text-gray-900">{sol.name}</h2>
              <p className="mt-2 text-gray-600 leading-relaxed">
                {sol.description}
              </p>
              <div className="mt-4 inline-flex items-center text-blue-600 font-medium">
                <span>Vezi detalii</span>
                <span className="ml-1 transform transition-transform group-hover:translate-x-1">→</span>
              </div>
            </div>
          </article>
        </Link>
      ))}
    </div>
  </div>
);

export default SolutionsIndex;

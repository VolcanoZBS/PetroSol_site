import React from "react";
import { Link } from "react-router-dom";

// Listă de soluții cu imagini .webp optimizate
const solutionList = [
  {
    name: "Service Stations",
    path: "service-stations",
    imageUrl: "/images/service-station.webp",
    description: "Optimizăm funcționarea stațiilor de alimentare cu soluții integrate și suport 24/7.",
  },
  {
    name: "Unattended",
    path: "unattended",
    imageUrl: "/images/unattended.webp",
    description: "Sisteme de autoservire eficiente și ușor de integrat pentru diverse industrii.",
  },
  {
    name: "Industrial CRT",
    path: "industrial-crt",
    imageUrl: "/images/industrial-crt.webp",
    description: "Tehnologie CRT robustă pentru medii industriale solicitante.",
  },
  {
    name: "Traditional Retail",
    path: "traditional-retail",
    imageUrl: "/images/traditional-retail.webp",
    description: "Soluții pentru puncte de vânzare tradiționale, cu interfațe familiare și rapide.",
  },
  {
    name: "Payment",
    path: "payment",
    imageUrl: "/images/payment.webp",
    description: "Platforme de plată securizate, compatibile cu multiple metode de tranzacție.",
  },
  {
    name: "Custom Solutions",
    path: "custom-solutions",
    imageUrl: "/images/custom-solutions.webp",
    description: "Dezvoltăm aplicații personalizate adaptate nevoilor specifice ale afacerii tale.",
  },
  {
    name: "AI",
    path: "ai",
    imageUrl: "/images/ai.webp",
    description: "Integrare AI pentru analiză avansată și automatizare inteligentă.",
  },
];

const SolutionsIndex: React.FC = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {solutionList.map((sol) => (
      <Link
        key={sol.path}
        to={sol.path}
        className="group bg-white rounded-lg shadow-md overflow-hidden flex flex-col transform transition duration-300 ease-in-out hover:shadow-xl hover:scale-105 no-underline"
      >
        <img
          src={sol.imageUrl}
          alt={sol.name}
          className="h-48 w-full object-cover"
          loading="lazy"
        />
        <div className="p-4 flex-1 flex flex-col">
          <h2 className="text-xl font-semibold mb-2 text-gray-800">{sol.name}</h2>
          <p className="text-gray-600 flex-1 leading-relaxed">{sol.description}</p>
          <span className="mt-4 inline-block text-center border border-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-100 transition self-start">
            Vezi detalii
          </span>
        </div>
      </Link>
    ))}
  </div>
);

export default SolutionsIndex;

import React from "react";
import { Link } from "react-router-dom";

// Listă de soluții cu datele pentru card
const solutionList = [
  {
    name: "Service Stations",
    path: "service-stations",
    imageUrl: "/images/service-station.jpg",
    description: "Optimizăm funcționarea stațiilor de alimentare cu soluții integrate și suport 24/7.",
  },
  {
    name: "Unattended",
    path: "unattended",
    imageUrl: "/images/unattended.jpg",
    description: "Sisteme de autoservire eficiente și ușor de integrat pentru diverse industrii.",
  },
  {
    name: "Industrial CRT",
    path: "industrial-crt",
    imageUrl: "/images/industrial-crt.jpg",
    description: "Tehnologie CRT robustă pentru medii industriale solicitante.",
  },
  {
    name: "Traditional Retail",
    path: "traditional-retail",
    imageUrl: "/images/traditional-retail.jpg",
    description: "Soluții pentru puncte de vânzare tradiționale, cu interfațe familiare și rapide.",
  },
  {
    name: "Payment",
    path: "payment",
    imageUrl: "/images/payment.jpg",
    description: "Platforme de plată securizate, compatibile cu multiple metode de tranzacție.",
  },
  {
    name: "Custom Solutions",
    path: "custom-solutions",
    imageUrl: "/images/custom-solutions.jpg",
    description: "Dezvoltăm aplicații personalizate adaptate nevoilor specifice ale afacerii tale.",
  },
  {
    name: "AI",
    path: "ai",
    imageUrl: "/images/ai.jpg",
    description: "Integrare AI pentru analiză avansată și automatizare inteligentă.",
  },
];

const SolutionsIndex: React.FC = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {solutionList.map((sol) => (
      <div
        key={sol.path}
        className="bg-white rounded-lg shadow overflow-hidden flex flex-col"
      >
        <img
          src={sol.imageUrl}
          alt={sol.name}
          className="h-48 w-full object-cover"
        />
        <div className="p-4 flex-1 flex flex-col">
          <h2 className="text-xl font-semibold mb-2">{sol.name}</h2>
          <p className="text-gray-600 flex-1">{sol.description}</p>
          <Link
            to={sol.path}
            className="mt-4 inline-block text-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Vezi detalii
          </Link>
        </div>
      </div>
    ))}
  </div>
);

export default SolutionsIndex;

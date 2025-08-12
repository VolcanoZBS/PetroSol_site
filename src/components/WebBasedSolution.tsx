import React from "react";
import { Check } from "lucide-react";
import webBasedImg from "../assets/images/petrosol-web-interface.webp";

const WebSolutionSection: React.FC = () => {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-8">
        {/* Textul din stânga (desktop) */}
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Soluție Web-Based Avansată pentru Industria Petrolieră
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            PetroSol Web oferă o interfață intuitivă și scalabilă care îți permite
            să gestionezi operațiunile de distribuție, inventar și vânzare în timp
            real, direct din browser.
          </p>
          <ul className="space-y-4">
            {[
              "Acces 24/7 de pe orice dispozitiv - desktop, tabletă sau mobil",
              "Actualizare instantanee în timp real a stocurilor și vânzărilor",
              "Panou de control personalizat și rapoarte detaliate",
              "Integrare securizată cu sisteme ERP și POS existente",
            ].map((item) => (
              <li key={item} className="flex items-start">
                <Check className="w-6 h-6 text-[#6366F1] flex-shrink-0 mt-1 mr-3" />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Imaginea din dreapta (desktop) */}
        <div className="md:w-1/2">
          <img
            src={webBasedImg}
            alt="Interfață PetroSol Web"
          />
        </div>
      </div>
    </section>
  );
};

export default WebSolutionSection;

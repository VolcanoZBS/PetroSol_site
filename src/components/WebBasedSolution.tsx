import React from "react";
import { Check } from "lucide-react";
import webBasedImg from "../assets/images/petrosol-web-interface.webp";
import { useTranslation } from "react-i18next";

const WebSolutionSection: React.FC = () => {
  const { t } = useTranslation("homepage");
  const features: string[] = t("webSolution.features", { returnObjects: true });

  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-8">
        {/* Textul din stânga (desktop) */}
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t("webSolution.title")}
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            {t("webSolution.description")}
          </p>
          <ul className="space-y-4">
            {features.map((item) => (
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
            alt={t("webSolution.imageAlt")}
          />
        </div>
      </div>
    </section>
  );
};

export default WebSolutionSection;

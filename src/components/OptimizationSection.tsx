import React from "react";
import {
  LifeBuoy,
  Sliders,
  BookOpen,
  Rocket,
  TrendingUp,
  Clock,
} from "lucide-react";

const features = [
  { Icon: LifeBuoy,    label: "Suport 24/7",               colorHex: "#3B82F6" },
  { Icon: Sliders,     label: "Personalizare software",    colorHex: "#10B981" },
  { Icon: BookOpen,    label: "Training nelimitat",         colorHex: "#FBBF24" },
  { Icon: Rocket,      label: "Implementare în 1 zi",       colorHex: "#F59E0B" },
  { Icon: TrendingUp,  label: "Creșterea profitului",       colorHex: "#A855F7" },
  { Icon: Clock,       label: "Reducerea timpilor zilnici", colorHex: "#EC4899" },
];

const OptimizationSection: React.FC = () => {
  return (
    <section
      className="w-screen relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw]"
      style={{ backgroundColor: "#6366F1" }}
    >
      <div className="py-8 md:py-12">
        <div className="max-w-6xl mx-auto px-4">
          {/* Top row: imagine + text */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 mb-12 md:mb-16">
            <div className="md:w-1/2">
              <img
                src="/images/optimizare-operatiuni.webp"
                alt="Optimizare operațiuni"
                className="w-full max-w-xs md:max-w-md mx-auto rounded-2xl shadow-2xl"
              />
            </div>
            <div className="md:w-1/2 text-white">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
                Optimizează-ți operațiunile azi
              </h2>
              <p className="text-base md:text-lg leading-relaxed">
                Cu Petrol Solutions, implementarea soluțiilor noastre este rapidă și
                fără complicații. Beneficiezi de suport 24/7, personalizare avansată
                și instruire continuă pentru a-ți maximiza productivitatea.
              </p>
            </div>
          </div>

          {/* Grid de funcționalități */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {features.map(({ Icon, label, colorHex }) => (
              <div
                key={label}
                className="p-4 md:p-6 rounded-2xl shadow-lg flex flex-col items-center justify-center text-center text-white transform hover:scale-105 transition-transform duration-300"
                style={{ backgroundColor: colorHex }}
              >
                <Icon className="w-8 h-8 mb-2 md:w-10 md:h-10 md:mb-3" />
                <span className="text-xs md:text-sm font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OptimizationSection;

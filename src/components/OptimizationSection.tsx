// import {
//   LifeBuoy,
//   Sliders,
//   BookOpen,
//   Rocket,
//   TrendingUp,
//   Clock,
// } from "lucide-react";

const OptimizationSection = () => {
  return (
    <section className="w-screen relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] bg-[#6366F1]">
      <div className="py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
            {/* Ilustrație operațiuni */}
            <div className="md:w-1/2">
              <img
                src="/illustrations/optimizare-operatiuni.svg"
                alt="Optimizare operațiuni"
                className="w-full max-w-md mx-auto"
              />
            </div>
            <div className="md:w-1/2 text-white">
              <h2 className="text-4xl font-bold mb-4">
                Optimizează-ți operațiunile azi
              </h2>
              <p className="text-lg">
                Cu Petrol Solutions, implementarea soluțiilor noastre este
                rapidă și fără complicații. Beneficiezi de suport 24/7,
                personalizare avansată și instruire continuă pentru a-ți
                maximiza productivitatea.
              </p>
            </div>
          </div>

          {/* Grid de funcționalități */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <div className="bg-emerald-500 p-4 rounded-lg text-white flex flex-col items-center justify-center text-center">
            <span className="text-4xl mb-2">🛟</span>
            <p className="text-sm font-medium">Suport 24/7</p>
            </div>

            <div className="bg-[#FF6B6B] p-4 rounded-lg text-white flex flex-col items-center justify-center text-center">

            <span className="text-4xl mb-2">🎛️</span>
              <p className="text-sm font-medium">Personalizare software</p>
            </div>

            <div className="bg-emerald-500 p-4 rounded-lg text-white flex flex-col items-center justify-center text-center">
            <span className="text-4xl mb-2">📖</span>
              <p className="text-sm font-medium">Training nelimitat</p>
            </div>

            <div className="bg-[#FF6B6B] p-4 rounded-lg text-white flex flex-col items-center justify-center text-center">
            <span className="text-4xl mb-2">🚀</span>
              <p className="text-sm font-medium">Implementare în 1 zi</p>
            </div>

            <div className="bg-emerald-500 p-4 rounded-lg text-white flex flex-col items-center justify-center text-center">
            <span className="text-4xl mb-2">📈</span>
              <p className="text-sm font-medium">Creșterea profitului</p>
            </div>

            <div className="bg-[#FF6B6B] p-4 rounded-lg text-white flex flex-col items-center justify-center text-center">
            <span className="text-4xl mb-2">⏰</span>
              <p className="text-sm font-medium">Reducerea timpilor zilnici</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OptimizationSection;

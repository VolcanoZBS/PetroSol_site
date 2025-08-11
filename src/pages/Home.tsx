import React, { Suspense, lazy } from "react";
import OptimizationSection from "../components/OptimizationSection";
import Hero from "../components/Hero";
import ContactUsSection from "../components/ContactUsSection";
import OurCustomers from "../components/OurCustomers";
import WebBasedSolution from "../components/WebBasedSolution";
import ValueProposition from "../components/ValueProposition";
import SolutionsSection from "../components/SolutionsSection";
import isoImage from "../assets/images/iso_2015.webp"; // Add this import
import iso27001Image from "../assets/images/iso_27001.webp"; // Add this import at the top

const ContactUsSectionLazy = lazy(() => import("../components/ContactUsSection"));

const Home = () => {
  return (
    <>
      <Hero />
      <WebBasedSolution />
      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <ValueProposition />

        <SolutionsSection />

        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Certificări și Standarde de Calitate
            </h2>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Images Section */}
                <div className="w-full md:w-1/2 flex flex-row gap-6 justify-center">
                  <img
                    src={isoImage}
                    alt="Certificare ISO 9001:2015"
                    className="w-32 h-32 object-fill"
                    style={{ width: '128px', height: '128px' }}
                  />
                  <img
                    src={iso27001Image}
                    alt="Certificare ISO 27001"
                    className="w-32 h-32 object-fill"
                    style={{ width: '128px', height: '128px' }}
                  />
                </div>

                {/* Text Section */}
                <div className="w-full md:w-1/2 space-y-4">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Calitate Certificată
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                      <span className="text-lg font-semibold text-gray-700">
                        ISO 9001:2015
                      </span>
                      <span className="text-gray-600">- Managementul Calității</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                      <span className="text-lg font-semibold text-gray-700">
                        ISO/IEC 27001:2013
                      </span>
                      <span className="text-gray-600">- Securitatea Informației</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mt-4 leading-relaxed">
                    Certificările noastre demonstrează angajamentul față de excelența în servicii,
                    securitatea datelor și îmbunătățirea continuă a proceselor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <OurCustomers />
        <OptimizationSection />
        <Suspense fallback={null}>
          <ContactUsSectionLazy />
        </Suspense>
      </main>
    </>
  );
};

export default Home;

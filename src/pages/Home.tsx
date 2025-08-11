import React, { Suspense, lazy } from "react";
import OptimizationSection from "../components/OptimizationSection";
import Hero from "../components/Hero";
import ContactUsSection from "../components/ContactUsSection";
import OurCustomers from "../components/OurCustomers";
import WebBasedSolution from "../components/WebBasedSolution";
import ValueProposition from "../components/ValueProposition";
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
        {/* <section className="mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Transformăm afacerea dumneavoastră
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Noi, la Petrol Solutions, la fel ca dumneavoastră, urmărim
              rezultate concrete. Nu facem consultanţă sau externalizare IT de
              dragul tehnologiei, ci oferim servicii informaționale de ultimă
              generație pentru un salt semnificativ al afacerii. Credem că
              soluțiile cu adevărat valoroase izvorăsc dintr-o înțelegere
              profundă a business-ului și din know-how tehnologic solid.{" "}
            </p>
            <div className="flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Business Transformation"
                className="rounded-lg shadow-lg max-w-full h-auto"
              />
            </div>
          </div>
        </section> */}
        <ValueProposition />

        <section className="mb-16">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Soluții Pentru:
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105">
                <div className="h-3 bg-blue-500"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    Stații Distribuție Carburanți
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Soluții complete pentru stațiile de distribuție carburanți.
                  </p>
                  <button className="text-blue-600 hover:text-blue-800 font-medium">
                    Află mai multe →
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105">
                <div className="h-3 bg-green-500"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    Retail și Restaurante
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Sisteme integrate pentru retail și industria HoReCa.
                  </p>
                  <button className="text-blue-600 hover:text-blue-800 font-medium">
                    Află mai multe →
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105">
                <div className="h-3 bg-pink-500"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    Carburanți En-Gros și Industrial
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Soluții pentru distribuția en-gros și sectorul industrial.
                  </p>
                  <button className="text-blue-600 hover:text-blue-800 font-medium">
                    Află mai multe →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

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

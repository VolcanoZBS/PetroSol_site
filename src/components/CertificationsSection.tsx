import React from "react";
import isoImage from "../assets/images/iso_2015.webp";
import iso27001Image from "../assets/images/iso_27001.webp";

const CertificationsSection: React.FC = () => {
  return (
    <section className="mb-16" aria-labelledby="certifications-heading">
      <div className="max-w-4xl mx-auto">
        <h2
          id="certifications-heading"
          className="text-3xl font-bold text-gray-800 mb-8 text-center"
        >
          Certificări și Standarde de Calitate
        </h2>
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Images */}
            <div className="w-full md:w-1/2 flex flex-row gap-8 justify-center">
              <div className="flex flex-col items-center">
                <img
                  src={isoImage}
                  alt="Certificare ISO 9001:2015"
                  className="w-28 h-28 object-contain"
                  loading="lazy"
                  decoding="async"
                />
                <span className="mt-3 text-sm font-medium text-gray-700">
                  ISO 9001:2015
                </span>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={iso27001Image}
                  alt="Certificare ISO/IEC 27001:2013"
                  className="w-28 h-28 object-contain"
                  loading="lazy"
                  decoding="async"
                />
                <span className="mt-3 text-sm font-medium text-gray-700">
                  ISO/IEC 27001
                </span>
              </div>
            </div>

            {/* Text */}
            <div className="w-full md:w-1/2 space-y-4">
              <h3 className="text-2xl font-bold text-gray-800">
                Calitate Certificată
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <span className="w-3 h-3 mt-1 bg-blue-600 rounded-full" />
                  <p>
                    <span className="font-semibold text-gray-700">
                      ISO 9001:2015
                    </span>{" "}
                    - Managementul Calității
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-3 h-3 mt-1 bg-green-600 rounded-full" />
                  <p>
                    <span className="font-semibold text-gray-700">
                      ISO/IEC 27001:2013
                    </span>{" "}
                    - Securitatea Informației
                  </p>
                </li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                Certificările noastre demonstrează angajamentul față de
                excelență, securitatea datelor și îmbunătățirea continuă a
                proceselor operaționale.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
// src/pages/solutions/ServiceStations.tsx
import React from 'react';
import { Fuel, BarChart3, Shield, Clock, Settings, Users } from 'lucide-react';
import serviceStationImg from "/images/service-station.webp";

const ServiceStations: React.FC = () => (
  <div className="max-w-6xl mx-auto py-12 px-4">
    {/* Hero Section */}
    <div className="text-center mb-16">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        Soluții Complete pentru Stații de Carburanți
      </h1>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        Platforma PetroSol pentru stații oferă control total asupra operațiunilor: 
        de la gestionarea stocurilor și plăților până la raportare avansată și monitorizare în timp real.
      </p>
    </div>

    {/* Image + Info Section */}
    <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
      {/* Image */}
      <div className="w-full md:w-1/2">
        <img
          src={serviceStationImg}
          alt="Stație distribuție carburant PetroSol"
          className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg"
        />
      </div>
      
      {/* Info */}
      <div className="w-full md:w-1/2 space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          De Ce PetroSol?
        </h2>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="bg-blue-100 rounded-full p-1 mt-1">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Control Total</h4>
              <p className="text-gray-600 text-sm">Monitorizează toate aspectele stației dintr-o singură platformă</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="bg-blue-100 rounded-full p-1 mt-1">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Eficiență Maximă</h4>
              <p className="text-gray-600 text-sm">Automatizează procesele și reduce timpul de administrare</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="bg-blue-100 rounded-full p-1 mt-1">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Suport Complet</h4>
              <p className="text-gray-600 text-sm">Echipa noastră te susține 24/7 pentru funcționare optimă</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Key Features Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
      <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
        <Fuel className="h-12 w-12 text-blue-600 mb-4" />
        <h3 className="text-xl font-semibold text-gray-900 mb-3">Gestionare Stocuri</h3>
        <p className="text-gray-600">
          Monitorizare automată a nivelurilor de carburant, alerte pentru stocuri scăzute și planificare inteligentă a reaprovizionării.
        </p>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
        <BarChart3 className="h-12 w-12 text-blue-600 mb-4" />
        <h3 className="text-xl font-semibold text-gray-900 mb-3">Raportare Avansată</h3>
        <p className="text-gray-600">
          Dashboarduri interactive cu vânzări pe produse, comparații pe perioade și analiza profitabilității în timp real.
        </p>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
        <Shield className="h-12 w-12 text-blue-600 mb-4" />
        <h3 className="text-xl font-semibold text-gray-900 mb-3">Securitate & Conformitate</h3>
        <p className="text-gray-600">
          Sisteme de securitate avansate, backup automat și conformitate cu reglementările din industria petrolieră.
        </p>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
        <Clock className="h-12 w-12 text-blue-600 mb-4" />
        <h3 className="text-xl font-semibold text-gray-900 mb-3">Monitorizare 24/7</h3>
        <p className="text-gray-600">
          Supraveghere continuă a operațiunilor cu alerte instantanee pentru probleme tehnice sau operaționale.
        </p>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
        <Settings className="h-12 w-12 text-blue-600 mb-4" />
        <h3 className="text-xl font-semibold text-gray-900 mb-3">Integrare POS</h3>
        <p className="text-gray-600">
          Conectare seamless cu terminale de plată, procesare carduri fleet și sincronizare cu sisteme de facturare.
        </p>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
        <Users className="h-12 w-12 text-blue-600 mb-4" />
        <h3 className="text-xl font-semibold text-gray-900 mb-3">Management Personal</h3>
        <p className="text-gray-600">
          Gestionarea turelor, urmărirea performanțelor și raportare automată pentru managementul eficient al personalului.
        </p>
      </div>
    </div>

    {/* Benefits Section */}
    <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-16">
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
        Beneficii pentru Afacerea Ta
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="bg-green-100 rounded-full p-2 mt-1">
              <div className="w-2 h-2 bg-green-600 rounded-full"></div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Reducerea Pierderilor</h4>
              <p className="text-gray-600">Detectarea automată a discrepanțelor și minimizarea pierderilor de stoc prin monitorizare precisă.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-green-100 rounded-full p-2 mt-1">
              <div className="w-2 h-2 bg-green-600 rounded-full"></div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Eficiență Operațională</h4>
              <p className="text-gray-600">Automatizarea proceselor repetitive și optimizarea timpului personalului pentru activități cu valoare adăugată.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-green-100 rounded-full p-2 mt-1">
              <div className="w-2 h-2 bg-green-600 rounded-full"></div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Vizibilitate Completă</h4>
              <p className="text-gray-600">Dashboard-uri intuitive cu toate informațiile importante la îndemână, accesibile de oriunde.</p>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="bg-blue-100 rounded-full p-2 mt-1">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Conformitate Reglementară</h4>
              <p className="text-gray-600">Raportare automată pentru autorități și conformitate cu toate reglementările din industrie.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-blue-100 rounded-full p-2 mt-1">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Scalabilitate</h4>
              <p className="text-gray-600">Soluția crește odată cu afacerea ta, de la o stație la rețele complexe de distribuție.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-blue-100 rounded-full p-2 mt-1">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">ROI Rapid</h4>
              <p className="text-gray-600">Investiția se recuperează rapid prin optimizări operaționale și reducerea costurilor administrative.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Technical Specs */}
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
        Specificații Tehnice
      </h2>
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Integrări Hardware</h4>
            <ul className="space-y-2 text-gray-600">
              <li>• Pompe de carburant (toate mărcile)</li>
              <li>• Sisteme de măsurare ATG</li>
              <li>• Terminale POS și pinpad-uri</li>
              <li>• Sisteme de supraveghere video</li>
              <li>• Senzori de nivel și temperatură</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Funcționalități Software</h4>
            <ul className="space-y-2 text-gray-600">
              <li>• Interface web responsivă</li>
              <li>• Aplicație mobilă pentru management</li>
              <li>• API pentru integrări externe</li>
              <li>• Raportare automată în Cloud</li>
              <li>• Backup continuu și disaster recovery</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    {/* CTA Section */}
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-center text-white">
      <h2 className="text-3xl font-bold mb-4">
        Transformă-ți Stația în Cea Mai Eficientă din Zonă
      </h2>
      <p className="text-xl mb-8 opacity-90">
        Hai să discutăm cum PetroSol poate optimiza operațiunile stației tale.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="/contact"
          className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
        >
          Solicită Demo
        </a>
        <a
          href="tel:+40123456789"
          className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
        >
          Sună pentru Consultanță
        </a>
      </div>
    </div>
  </div>
);

export default ServiceStations;

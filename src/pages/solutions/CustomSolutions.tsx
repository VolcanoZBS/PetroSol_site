// src/pages/solutions/CustomSolutions.tsx
import React from 'react';
import { Code, Settings, Zap, Users, Shield, Cog } from 'lucide-react';
import customSolutionsImg from "/images/custom-solutions.webp";

const CustomSolutions: React.FC = () => (
  <div className="max-w-6xl mx-auto py-12 px-4">
    {/* Hero Section */}
    <div className="text-center mb-16">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        Soluții Software Personalizate
      </h1>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        Transformăm viziunea dvs. în realitate prin dezvoltarea de aplicații custom, 
        integrări complexe și soluții tehnologice adaptate perfect nevoilor afacerii dvs.
      </p>
    </div>

    {/* Main Image */}
    <div className="mb-16">
      <img
        src={customSolutionsImg}
        alt="Dezvoltare software personalizat PetroSol"
        className="w-full h-96 object-cover rounded-2xl shadow-xl"
      />
    </div>

    {/* Services Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
      <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
        <Code className="h-12 w-12 text-blue-600 mb-4" />
        <h3 className="text-xl font-semibold text-gray-900 mb-3">Dezvoltare Custom</h3>
        <p className="text-gray-600">
          Aplicații web și desktop dezvoltate de la zero, adaptate perfect proceselor dvs. de afaceri.
        </p>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
        <Settings className="h-12 w-12 text-blue-600 mb-4" />
        <h3 className="text-xl font-semibold text-gray-900 mb-3">Integrări ERP/CRM</h3>
        <p className="text-gray-600">
          Conectăm sistemele existente pentru un flux de date seamless între toate platformele.
        </p>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
        <Zap className="h-12 w-12 text-blue-600 mb-4" />
        <h3 className="text-xl font-semibold text-gray-900 mb-3">API Development</h3>
        <p className="text-gray-600">
          Construim API-uri robuste și scalabile pentru integrarea cu sisteme terțe.
        </p>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
        <Users className="h-12 w-12 text-blue-600 mb-4" />
        <h3 className="text-xl font-semibold text-gray-900 mb-3">Consultanță IT</h3>
        <p className="text-gray-600">
          Analiză detaliată a proceselor și recomandări pentru optimizarea tehnologică.
        </p>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
        <Shield className="h-12 w-12 text-blue-600 mb-4" />
        <h3 className="text-xl font-semibold text-gray-900 mb-3">Securitate & Backup</h3>
        <p className="text-gray-600">
          Implementăm cele mai înalte standarde de securitate și soluții de backup automat.
        </p>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
        <Cog className="h-12 w-12 text-blue-600 mb-4" />
        <h3 className="text-xl font-semibold text-gray-900 mb-3">Mentenanță & Suport</h3>
        <p className="text-gray-600">
          Suport tehnic continuu, actualizări regulare și mentenanță proactivă.
        </p>
      </div>
    </div>

    {/* Process Section */}
    <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-16">
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
        Procesul Nostru de Dezvoltare
      </h2>
      <div className="grid md:grid-cols-4 gap-8">
        <div className="text-center">
          <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
          <h4 className="font-semibold text-gray-900 mb-2">Analiză & Planning</h4>
          <p className="text-gray-600 text-sm">Înțelegem nevoile dvs. și definim scopul proiectului</p>
        </div>
        <div className="text-center">
          <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
          <h4 className="font-semibold text-gray-900 mb-2">Design & Arhitectură</h4>
          <p className="text-gray-600 text-sm">Creăm prototipuri și arhitectura tehnică</p>
        </div>
        <div className="text-center">
          <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
          <h4 className="font-semibold text-gray-900 mb-2">Dezvoltare & Testare</h4>
          <p className="text-gray-600 text-sm">Implementăm soluția cu testing continuu</p>
        </div>
        <div className="text-center">
          <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
          <h4 className="font-semibold text-gray-900 mb-2">Lansare & Suport</h4>
          <p className="text-gray-600 text-sm">Deploy în producție cu suport complet</p>
        </div>
      </div>
    </div>

    {/* Technologies Section */}
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
        Tehnologii & Platforme
      </h2>
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Frontend Development</h4>
            <ul className="space-y-2 text-gray-600">
              <li>• React, Vue.js, Angular</li>
              <li>• HTML5, CSS3, JavaScript/TypeScript</li>
              <li>• Progressive Web Apps (PWA)</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Backend Development</h4>
            <ul className="space-y-2 text-gray-600">
              <li>• Node.js, .NET, Python</li>
              <li>• REST & GraphQL APIs</li>
              <li>• Microservices Architecture</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Database & Cloud</h4>
            <ul className="space-y-2 text-gray-600">
              <li>• SQL Server, MySQL, PostgreSQL</li>
              <li>• Azure, AWS, Google Cloud</li>
              <li>• Docker & Kubernetes</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    {/* CTA Section */}
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-center text-white">
      <h2 className="text-3xl font-bold mb-4">
        Gata să Transformăm Ideea în Realitate?
      </h2>
      <p className="text-xl mb-8 opacity-90">
        Contactați-ne pentru o consultație gratuită și să discutăm despre proiectul dvs.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="/contact"
          className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
        >
          Contactează-ne
        </a>
        <a
          href="tel:+40123456789"
          className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
        >
          Sună Acum
        </a>
      </div>
    </div>
  </div>
);

export default CustomSolutions;


import { MapPin, Users, Award, ShieldCheck, Zap } from "lucide-react";

const About = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 lg:px-20 space-y-12">
        {/* Hero Intro */}
        <div className="bg-blue-600 text-white rounded-2xl p-12 text-center shadow-lg">
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-4">Despre Petrosol</h1>
          <p className="max-w-2xl mx-auto text-lg leading-relaxed">
            Din 2005, aducem inovație și excelență în digitalizarea industriei petrolului și gazelor. 
            Alături de partenerii noștri, transformăm complexitatea în eficiență.
          </p>
        </div>

        {/* Sectiuni */}
        <div className="space-y-16">
          {/* Cine Suntem */}
          <section className="bg-white rounded-2xl p-10 shadow-md">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <MapPin className="w-12 h-12 text-blue-600" />
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-3">Cine Suntem</h2>
                <p className="text-gray-700 leading-relaxed">
                  Fondată în 2005 în București, Petrosol este compania românească care oferă soluții IT complete pentru 
                  industria petrolieră și sectoarele conexe. Cu peste 20 de ani de experiență, combinăm cunoștințe tehnice 
                  avansate și expertiză de domeniu pentru optimizarea și creșterea productivității clienților noștri.
                </p>
              </div>
            </div>
          </section>

          {/* Misiune & Viziune */}
          <section className="bg-white rounded-2xl p-10 shadow-md">
            <div className="flex flex-col lg:flex-row items-start gap-8">
              <Zap className="w-12 h-12 text-blue-600" />
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Misiune & Viziune</h2>
                <dl className="space-y-6">
                  <div>
                    <dt className="text-lg font-semibold text-gray-800">Misiunea noastră</dt>
                    <dd className="text-gray-700 leading-relaxed">
                      Să oferim soluții software inovatoare, sigure și scalabile care să transforme modul de operare 
                      al companiilor din sectorul energetic.
                    </dd>
                  </div>
                  <div>
                    <dt className="text-lg font-semibold text-gray-800">Viziunea noastră</dt>
                    <dd className="text-gray-700 leading-relaxed">
                      Să fim partenerul de referință în digitalizarea industriei de petrol și gaze din Europa Centrală 
                      și de Est, contribuind la un viitor energetic sustenabil.
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </section>

          {/* Valorile Noastre */}
          <section className="bg-white rounded-2xl p-10 shadow-md">
            <div className="flex flex-col lg:flex-row items-start gap-8">
              <ShieldCheck className="w-12 h-12 text-blue-600" />
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Valorile Noastre</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <li className="flex items-start space-x-3">
                    <Award className="w-6 h-6 text-blue-600 mt-1" />
                    <span><strong>Inovare:</strong> Investim continuu în R&D pentru a aduce cele mai noi tehnologii.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <ShieldCheck className="w-6 h-6 text-blue-600 mt-1" />
                    <span><strong>Integritate:</strong> Procedăm cu cele mai înalte standarde etice și de calitate.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Users className="w-6 h-6 text-blue-600 mt-1" />
                    <span><strong>Orientare către client:</strong> Relații de parteneriat și suport dedicat.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Zap className="w-6 h-6 text-blue-600 mt-1" />
                    <span><strong>Excelență operațională:</strong> Livrăm proiecte la timp, în buget, cu rezultate măsurabile.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Echipa Noastră */}
          <section className="bg-white rounded-2xl p-10 shadow-md">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <Users className="w-12 h-12 text-blue-600" />
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Echipa Noastră</h2>
                <p className="text-gray-700 leading-relaxed">
                  Peste 50 de profesioniști: dezvoltatori software, ingineri de sistem, analiști de date 
                  și consultanți de industrie, unindu-și forțele pentru implementări eficiente și suport continuu.
                </p>
              </div>
            </div>
          </section>

          {/* De ce să ne alegi */}
          <section className="bg-white rounded-2xl p-10 shadow-md">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-800">De ce să ne alegi?</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <Zap className="w-8 h-8 text-blue-600 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Soluții Personalizate</h3>
                  <p className="text-gray-700 leading-relaxed">Adaptăm software-ul la nevoile tale specifice.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Award className="w-8 h-8 text-blue-600 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Implementare Rapidă</h3>
                  <p className="text-gray-700 leading-relaxed">Proiecte funcționale lansate în timp record.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Users className="w-8 h-8 text-blue-600 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Suport 24/7</h3>
                  <p className="text-gray-700 leading-relaxed">Asigurăm suport tehnic continuu și actualizări regulate.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <ShieldCheck className="w-8 h-8 text-blue-600 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Expertiză Confirmată</h3>
                  <p className="text-gray-700 leading-relaxed">Peste 100 de proiecte finalizate cu succes.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;

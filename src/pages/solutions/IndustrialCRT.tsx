// src/pages/solutions/IndustrialCRT.tsx
import React from "react";
import {
  Truck,
  MapPin,
  FileText,
  ClipboardCheck,
  Shield,
  Server,
  Boxes,
  DollarSign,
  ArrowRight,
} from "lucide-react";
import industrialCrtImg from "/images/industrial-crt.webp";

const Feature: React.FC<{
  icon: React.ReactNode;
  title: string;
  desc: string;
}> = ({ icon, title, desc }) => (
  <div className="bg-white rounded-xl ring-1 ring-gray-200 p-4 flex items-start gap-3">
    <div className="mt-0.5 text-indigo-600">{icon}</div>
    <div>
      <h4 className="font-semibold text-gray-900">{title}</h4>
      <p className="text-sm text-gray-600 mt-1">{desc}</p>
    </div>
  </div>
);

const SectionTitle: React.FC<{ eyebrow?: string; title: string; subtitle?: string }> = ({
  eyebrow,
  title,
  subtitle,
}) => (
  <div className="mb-6">
    {eyebrow && (
      <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 text-indigo-700 px-3 py-1 text-xs font-medium ring-1 ring-indigo-100">
        {eyebrow}
      </div>
    )}
    <h2 className="mt-2 text-2xl font-semibold text-gray-900">{title}</h2>
    {subtitle && <p className="mt-2 text-gray-600">{subtitle}</p>}
  </div>
);

const IndustrialCRT: React.FC = () => (
  <div className="max-w-6xl mx-auto px-4 py-12">
    {/* Hero card */}
    <div className="bg-gradient-to-br from-indigo-50 to-white ring-1 ring-indigo-100 rounded-2xl p-6 md:p-8 mb-12">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-medium ring-1 ring-indigo-100 text-indigo-700">
            Soluție PetroSol
          </div>
          <h1 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">
            Distribuție En-Gros & Industrial (CRT)
          </h1>
          <p className="mt-3 text-gray-700 leading-relaxed">
            Gestionăm cap-coadă livrările de carburanți pentru clienți industriali: contracte și liste
            de preț, limite de credit, planificare rute, telemetrie cisterne, confirmare livrare și
            facturare automată - integrate cu ERP și e-Factura.
          </p>

          {/* Hero buttons */}
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 text-white px-5 py-3 font-medium text-sm hover:bg-indigo-700 transition"
            >
              Discută cu un consultant
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="tel:+40738100070"
              className="inline-flex items-center gap-2 rounded-xl bg-white text-indigo-700 px-5 py-3 font-medium text-sm ring-1 ring-indigo-200 hover:bg-indigo-50 transition"
            >
              Sună acum
            </a>
          </div>
        </div>

        <div className="mx-auto w-full max-w-xl rounded-xl overflow-hidden ring-1 ring-indigo-100 shadow-sm">
          <div className="aspect-video">
            <img
              src={industrialCrtImg}
              alt="Operațiuni en-gros și industriale cu management CRT"
              className="w-full h-full object-cover object-center"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </div>

    {/* Capabilities */}
    <section className="mb-12">
      <SectionTitle
        eyebrow="Capabilități"
        title="Ce include soluția PetroSol pentru en-gros și industrial"
        subtitle="Automatizare operațională, trasabilitate și control financiar - de la contract până la încasare."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Feature
          icon={<FileText className="w-5 h-5" />}
          title="Contracte & prețuri"
          desc="Liste de preț pe client, clauze, indexări, taxes/discounts, valabilități și limite de credit."
        />
        <Feature
          icon={<Truck className="w-5 h-5" />}
          title="Planificare livrări"
          desc="Comenzi, încărcare cisternă, sloturi terminal, trasee și alocare șofer/vehicul."
        />
        <Feature
          icon={<MapPin className="w-5 h-5" />}
          title="Rute & execuție"
          desc="Navigație, check-in geo, timpi, dovezi foto și semnătură/OTP pentru predare (POD)."
        />
        <Feature
          icon={<Boxes className="w-5 h-5" />}
          title="Telemetrie & măsurători"
          desc="Debimetre, sonde în rezervor (ATG), temperatură; reconciliere cantități la încărcare/descărcare."
        />
        <Feature
          icon={<DollarSign className="w-5 h-5" />}
          title="Facturare & e-Factura"
          desc="Calcul automat pe contract, accize/taxe, generare facturi și trimitere ANAF."
        />
        <Feature
          icon={<Server className="w-5 h-5" />}
          title="Integrare ERP"
          desc="Sincronizare parteneri, articole, comenzi, facturi; API deschis pentru sisteme terțe."
        />
      </div>
    </section>

    {/* How it works */}
    <section className="mb-12">
      <SectionTitle eyebrow="Flux" title="Cum funcționează" />
      <ol className="relative ml-4 pl-4 border-l border-gray-200 space-y-4 text-gray-700">
        {[
          "Definești contractul, lista de preț și limitele (credit, volum).",
          "Primești comanda clientului și planifici traseul și slotul de încărcare.",
          "Se încarcă cisterna; datele de cantitate/temperatură se preiau automat.",
          "Livrarea se execută; se colectează POD (semnătură/OTP/foto) și coordonate.",
          "Se reconciliază cantitățile și se emite factura; datele merg în ERP și e-Factura.",
        ].map((step, i) => (
          <li key={step} className="relative">
            <span className="absolute -left-7 top-0 inline-flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 text-white text-xs font-semibold">
              {i + 1}
            </span>
            {step}
          </li>
        ))}
      </ol>
    </section>

    {/* Components */}
    <section className="mb-12">
      <SectionTitle eyebrow="Componente" title="Ce suportăm" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white rounded-xl ring-1 ring-gray-200 p-5">
          <h3 className="font-semibold text-gray-900">Hardware</h3>
          <ul className="mt-3 space-y-2 text-gray-700 text-sm">
            {[
              "Debimetre/contori certificați și sonde ATG în rezervor",
              "GPS/telematică pentru flote și senzori de siguranță",
              "Terminal mobil șofer cu aplicație POD (foto/semnătură/OTP)",
              "Imprimantă mobilă (bon/CMR) - opțional",
              "Coduri de bare/RFID la punctele de descărcare - opțional",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2">
                <ClipboardCheck className="w-4 h-4 text-emerald-600 mt-0.5" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white rounded-xl ring-1 ring-gray-200 p-5">
          <h3 className="font-semibold text-gray-900">Software & integrare</h3>
          <ul className="mt-3 space-y-2 text-gray-700 text-sm">
            {[
              "Contracte, liste de preț și politici de taxare",
              "Comenzi, dispecerizare și optimizare trasee",
              "POD digital, foto și documente atașate livrării",
              "Facturare automată și e-Factura (ANAF)",
              "Integrare ERP/contabilitate și portal clienți",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2">
                <ClipboardCheck className="w-4 h-4 text-emerald-600 mt-0.5" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    {/* Security */}
    <section className="mb-12">
      <SectionTitle eyebrow="Siguranță" title="Securitate & conformitate" />
      <div className="bg-white rounded-xl ring-1 ring-gray-200 p-5">
        <div className="flex items-start gap-3">
          <Shield className="w-5 h-5 text-indigo-600 mt-1" />
          <ul className="space-y-2 text-gray-700">
            <li>Control acces pe roluri, audit trail și criptare în tranzit/repous.</li>
            <li>Politici de retenție date și alerte la abateri operaționale.</li>
            <li>Procese aliniate la ISO 9001 și ISO/IEC 27001.</li>
          </ul>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section>
      <div className="bg-gradient-to-br from-indigo-50 to-white ring-1 ring-indigo-100 rounded-2xl p-6 md:p-7 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            Ești gata să digitalizezi distribuția en-gros?
          </h3>
          <p className="text-gray-700">
            Îți arătăm cum automatizăm contractele, rutele și facturarea.
          </p>
        </div>
        {/* Final CTA buttons */}
        <div className="flex flex-wrap gap-3">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 text-white px-5 py-3 font-medium text-sm hover:bg-indigo-700 transition"
          >
            Contactează-ne
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="tel:+40738100070"
            className="inline-flex items-center gap-2 rounded-xl bg-white text-indigo-700 px-5 py-3 font-medium text-sm ring-1 ring-indigo-200 hover:bg-indigo-50 transition"
          >
            Sună acum
          </a>
        </div>
      </div>
    </section>
  </div>
);

export default IndustrialCRT;

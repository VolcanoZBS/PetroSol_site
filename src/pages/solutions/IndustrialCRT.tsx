// src/pages/solutions/IndustrialCRT.tsx
import React from 'react';
import industrialCrtImg from "/images/industrial-crt.jpg"

const IndustrialCRT: React.FC = () => (
  <div className="max-w-4xl mx-auto py-12 px-4">
    <h1 className="text-3xl font-bold mb-6">Distribuție En-Gros & Industrial</h1>
    <p className="mb-4">
      Pentru clienții industriali și en-gros oferim management de contracte,
      planificare rute pentru flote, facturare automată și telemetrie detaliată
      pentru fiecare livrare.
    </p>
    <img
      src={industrialCrtImg}
      alt="Distribuție en-gros și industrial"
      className="w-full rounded-lg shadow-md"
    />
  </div>
);

export default IndustrialCRT;

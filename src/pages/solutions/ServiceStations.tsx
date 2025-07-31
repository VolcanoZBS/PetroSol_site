// src/pages/solutions/ServiceStations.tsx
import React from 'react';
import serviceStationImg from "/images/service-station.webp"

const ServiceStations: React.FC = () => (
  <div className="max-w-4xl mx-auto py-12 px-4">
    <h1 className="text-3xl font-bold mb-6">Stații Distribuție Carburanți</h1>
    <p className="mb-4">
      Petrol Solutions oferă o platformă completă de gestionare a stațiilor de
      distribuție carburant: monitorizare în timp real a stocurilor, integrare
      cu terminale de plată și rapoarte detaliate privind vânzările.
    </p>
    <img
      src={serviceStationImg}
      alt="Stație distribuție carburant"
      className="w-full rounded-lg shadow-md"
    />
  </div>
);

export default ServiceStations;

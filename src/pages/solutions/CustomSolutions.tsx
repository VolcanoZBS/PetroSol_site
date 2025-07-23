// src/pages/solutions/CustomSolutions.tsx
import React from 'react';
import customSolutionsImg from "/images/custom-solutions.jpg"

const CustomSolutions: React.FC = () => (
  <div className="max-w-4xl mx-auto py-12 px-4">
    <h1 className="text-3xl font-bold mb-6">Soluții Personalizate</h1>
    <p className="mb-4">
      Fiecare client are nevoi unice — dezvoltăm module tailor-made, integrăm cu
      orice ERP/CRM și construim API-uri custom pentru fluxurile voastre operaționale.
    </p>
    <img
      src={customSolutionsImg}
      alt="Dezvoltare software personalizat"
      className="w-full rounded-lg shadow-md"
    />
  </div>
);

export default CustomSolutions;

// src/pages/solutions/Ai.tsx
import React from 'react';
import aiImg from "/images/ai.jpg"

const Ai: React.FC = () => (
  <div className="max-w-4xl mx-auto py-12 px-4">
    <h1 className="text-3xl font-bold mb-6">Inteligență Artificială & Analiză</h1>
    <p className="mb-4">
      Folosim machine learning și AI pentru a prezice consumul de combustibil,
      optimiza stocurile și detecta anomalii, astfel încât deciziile să fie
      bazate pe date concrete.
    </p>
    <img
      src={aiImg}
      alt="Inteligență Artificială"
      className="w-full rounded-lg shadow-md"
    />
  </div>
);

export default Ai;

// src/pages/solutions/TraditionalRetail.tsx
import React from 'react';
import traditionalRetailImg from "/images/traditional-retail.webp";

const TraditionalRetail: React.FC = () => (
  <div className="max-w-4xl mx-auto py-12 px-4">
    <h1 className="text-3xl font-bold mb-6">Retail Tradițional & HoReCa</h1>
    <p className="mb-4">
      Soluțiile noastre includ POS integrat, gestiune stocuri pentru raft și
      module de fidelizare, astfel încât magazinele și restaurantele să-și
      maximizeze vânzările și satisfacția clienților.
    </p>
    <img
      src={traditionalRetailImg}
      alt="Retail tradițional și HoReCa"
      className="w-full rounded-lg shadow-md"
    />
  </div>
);

export default TraditionalRetail;

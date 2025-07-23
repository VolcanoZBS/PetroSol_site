// src/pages/solutions/Unattended.tsx
import React from 'react';
import unattendedImg from "/images/unattended.jpg"

const Unattended: React.FC = () => (
  <div className="max-w-4xl mx-auto py-12 px-4">
    <h1 className="text-3xl font-bold mb-6">Stații Nesupravegheate</h1>
    <p className="mb-4">
      Soluția „Unattended” transformă orice punct de distribuție într-o stație
      automată: acces RFID securizat, supraveghere video integrată și
      alimentare nonstop cu notificări în timp real.
    </p>
    <img
      src={unattendedImg}
      alt="Stație nesupravegheată"
      className="w-full rounded-lg shadow-md"
    />
  </div>
);

export default Unattended;

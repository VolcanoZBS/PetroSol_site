// src/pages/solutions/Payment.tsx
import React from 'react';
import paymentImg from "/images/payment.jpg"

const Payment: React.FC = () => (
  <div className="max-w-4xl mx-auto py-12 px-4">
    <h1 className="text-3xl font-bold mb-6">Plăți & Soluții de Checkout</h1>
    <p className="mb-4">
      Integrați carduri bancare, portofele electronice și plăți contactless cu
      o platformă PCI-DSS compliant. Oferim facturare automată și opțiuni de
      plată anticipată.
    </p>
    <img
      src={paymentImg}
      alt="Soluții de plată online"
      className="w-full rounded-lg shadow-md"
    />
  </div>
);

export default Payment;

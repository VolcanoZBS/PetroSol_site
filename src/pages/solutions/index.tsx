// înainte: pages/solutions.tsx
// acum:  pages/solutions/index.tsx

import React from "react";
import { Link } from "react-router-dom";

const solutionList = [
  { name: "Service Stations", path: "service-stations" },
  { name: "Unattended",        path: "unattended" },
  { name: "Industrial CRT",    path: "industrial-crt" },
  { name: "Traditional Retail",path: "traditional-retail" },
  { name: "Payment",           path: "payment" },
  { name: "Custom Solutions",  path: "custom-solutions" },
  { name: "AI",                path: "ai" },
];

const Solutions: React.FC = () => (
  <div className="space-y-4">
    {solutionList.map((sol) => (
      <Link
        key={sol.path}
        to={sol.path}
        className="block text-xl text-blue-600 hover:underline"
      >
        {sol.name}
      </Link>
    ))}
  </div>
);

export default Solutions;

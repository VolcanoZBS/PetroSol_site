import React from "react";
import { Outlet } from "react-router-dom";

const SolutionsLayout: React.FC = () => (
  <div className="container mx-auto py-8">
    <h1 className="text-3xl font-bold mb-6">Soluțiile noastre</h1>
    {/* Aici vom monta fie index-ul, fie sub-componentele */}
    <Outlet />
  </div>
);

export default SolutionsLayout;

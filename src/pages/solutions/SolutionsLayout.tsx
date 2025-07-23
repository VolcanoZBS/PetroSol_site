import React, { useEffect } from "react";
import { Outlet, useLocation, Link } from "react-router-dom";

// Mapping slug-urilor la numele afișate
const solutionNames: Record<string, string> = {
  "service-stations": "Service Stations",
  "unattended": "Unattended",
  "industrial-crt": "Industrial CRT",
  "traditional-retail": "Traditional Retail",
  "payment": "Payment",
  "custom-solutions": "Custom Solutions",
  "ai": "AI",
};

const SolutionsLayout: React.FC = () => {
  const { pathname } = useLocation();
  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Extragem segmentul după /solutions
  const segments = pathname.split("/").filter(Boolean);
  const currentSlug = segments[1] || null;
  const currentName = currentSlug ? solutionNames[currentSlug] : null;

  return (
    <div className="container mx-auto py-8">
      {/* Titlu dinamic cu link pentru Soluțiile noastre */}
      <h1 className="text-2xl font-medium mb-4 flex items-center space-x-2">
        <Link
          to="/solutions"
          className="hover:underline text-gray-800"
        >
          Soluțiile noastre
        </Link>
        {currentName && (
          <span className="text-gray-500">→</span>
        )}
        {currentName && (
          <span className="text-lg font-normal text-gray-700">{currentName}</span>
        )}
      </h1>
      <Outlet />
    </div>
  );
};

export default SolutionsLayout;

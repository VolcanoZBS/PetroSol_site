import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

const SolutionsLayout: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="container mx-auto py-8 px-4 sm:px-0">
      {/* Am eliminat afișarea 'Soluțiile noastre' și a numelui paginii curente.
          Păstrez un <h1> ascuns doar pentru accesibilitate/SEO. Șterge-l dacă nu îl dorești deloc. */}
      <h1 className="sr-only">Soluții PetroSol</h1>
      <Outlet />
    </div>
  );
};

export default SolutionsLayout;

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.png";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@radix-ui/react-navigation-menu";

const solutionList = [
  { name: "Service Stations", path: "service-stations", description: "Optimizăm funcționarea stațiilor de alimentare." },
  { name: "Unattended", path: "unattended", description: "Sisteme de autoservire eficiente." },
  { name: "Industrial CRT", path: "industrial-crt", description: "Tehnologie CRT robustă." },
  { name: "Traditional Retail", path: "traditional-retail", description: "Interfețe familiare și rapide." },
  { name: "Payment", path: "payment", description: "Platforme de plată securizate." },
  { name: "Custom Solutions", path: "custom-solutions", description: "Aplicații personalizate pentru afacerea ta." },
  { name: "AI", path: "ai", description: "Analiză avansată și automatizare inteligență." },
];

const Header: React.FC = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <img src={logo} alt="PetroSol Logo" className="h-10" />
          <h1 className="text-2xl font-bold text-gray-800">PetroSol</h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 relative">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger asChild>
                  <Link
                    to="/solutions"
                    className={`relative text-base font-medium transition-colors px-2 py-1 ${
                      location.pathname === "/solutions"
                        ? "text-blue-600"
                        : "text-gray-700"
                    } hover:text-blue-600`}
                  >
                    SOLUȚIILE NOASTRE
                  </Link>
                </NavigationMenuTrigger>
                <NavigationMenuContent className="absolute z-50 top-full left-0 mt-1 w-[300px] bg-white rounded-md shadow-lg p-2">
                  <div className="grid grid-cols-1 gap-1">
                    {solutionList.map((sol) => (
                      <NavigationMenuLink key={sol.path} asChild>
                        <Link
                          to={`/solutions/${sol.path}`}
                          className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-gray-100 focus:bg-gray-100"
                        >
                          <div className="text-sm font-medium leading-none text-gray-800">
                            {sol.name}
                          </div>
                          <p className="text-xs leading-snug text-gray-500">
                            {sol.description}
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Link
            to="/about"
            className="text-base text-gray-700 hover:text-blue-600 transition-colors font-medium"
          >
            DESPRE NOI
          </Link>
          <Link
            to="/contact"
            className="text-base text-gray-700 hover:text-blue-600 transition-colors font-medium"
          >
            CONTACT
          </Link>
          <button className="text-base text-gray-700 hover:text-blue-600 transition-colors font-medium">
            EN
          </button>
        </nav>

        {/* Hamburger button (mobile only) */}
        <button
          className="md:hidden flex items-center px-2 py-1 border rounded text-gray-700 hover:text-blue-600 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? (
            // X icon
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // Hamburger icon
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu as separate box */}
      {mobileMenuOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 z-50 flex justify-end"
          onClick={() => setMobileMenuOpen(false)}
        >
          <nav
            className="bg-white shadow-lg w-72 max-w-full mt-6 mr-4 rounded-lg px-4 py-3 flex flex-col gap-1"
            style={{ maxHeight: "60vh", overflowY: "auto" }}
            onClick={e => e.stopPropagation()}
          >
            <button
              className="self-end mb-2"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <svg
                className="h-7 w-7 text-gray-700 hover:text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <Link
              to="/solutions"
              className={`block py-2 font-medium ${
                location.pathname === "/solutions"
                  ? "text-blue-600"
                  : "text-gray-700"
              } hover:text-blue-600`}
              onClick={() => setMobileMenuOpen(false)}
            >
              SOLUȚIILE NOASTRE
            </Link>
            <div className="pl-4">
              {solutionList.map((sol) => (
                <Link
                  key={sol.path}
                  to={`/solutions/${sol.path}`}
                  className="block py-1 text-sm text-gray-700 hover:text-blue-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {sol.name}
                </Link>
              ))}
            </div>
            <Link
              to="/about"
              className="block py-2 font-medium text-gray-700 hover:text-blue-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              DESPRE NOI
            </Link>
            <Link
              to="/contact"
              className="block py-2 font-medium text-gray-700 hover:text-blue-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              CONTACT
            </Link>
            <button
              className="block py-2 font-medium text-gray-700 hover:text-blue-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              EN
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

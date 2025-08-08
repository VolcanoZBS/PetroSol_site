import React from "react";
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
import HamburgerMenu from "../components/HamburgerMenu";

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

        {/* Hamburger menu (mobile only) */}
        <HamburgerMenu />
      </div>
    </header>
  );
};

export default Header;

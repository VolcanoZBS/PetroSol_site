import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/Logo.png";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@radix-ui/react-navigation-menu";
import HamburgerMenu from "../components/HamburgerMenu";

// Toate denumirile și descrierile în română
const solutionList = [
  { name: "Stații de alimentare", path: "service-stations", description: "Optimizăm funcționarea stațiilor de alimentare." },
  { name: "Autoservire", path: "unattended", description: "Sisteme de autoservire eficiente." },
  { name: "CRT industrial", path: "industrial-crt", description: "Tehnologie CRT robustă." },
  { name: "Retail tradițional", path: "traditional-retail", description: "Interfețe familiare și rapide." },
  { name: "Plăți", path: "payment", description: "Platforme de plată securizate." },
  { name: "Soluții personalizate", path: "custom-solutions", description: "Aplicații adaptate afacerii tale." },
  { name: "Inteligență artificială", path: "ai", description: "Analiză avansată și automatizare inteligentă." },
];

const Header: React.FC = () => {
  const location = useLocation();
  const [locale, setLocale] = useState<"ro" | "en">("ro");

  useEffect(() => {
    const saved = localStorage.getItem("site_locale");
    if (saved === "ro" || saved === "en") setLocale(saved);
  }, []);

  const toggleLocale = () => {
    const next = locale === "ro" ? "en" : "ro";
    setLocale(next);
    localStorage.setItem("site_locale", next);
    // TODO: aici vei declanșa mecanismul real de i18n (ex: i18n.changeLanguage(next))
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          onClick={(e) => {
            if (location.pathname === "/") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="flex items-center space-x-3"
          aria-label="Pagina principală PetroSol"
        >
          <img src={logo} alt="Siglă PetroSol" className="h-10" />
          <span className="text-2xl font-bold text-gray-800">PetroSol</span>
        </Link>

        {/* Navigație desktop */}
        <nav className="hidden md:flex items-center space-x-8 relative">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger asChild>
                  <Link
                    to="/solutions"
                    className={`relative text-base font-medium transition-colors px-2 py-1 ${
                      location.pathname.startsWith("/solutions")
                        ? "text-blue-600"
                        : "text-gray-700"
                    } hover:text-blue-600`}
                  >
                    Soluții
                  </Link>
                </NavigationMenuTrigger>
                <NavigationMenuContent className="absolute z-50 top-full left-0 mt-1 w-[320px] bg-white rounded-md shadow-lg p-2">
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
            Despre noi
          </Link>
          <Link
            to="/contact"
            className="text-base text-gray-700 hover:text-blue-600 transition-colors font-medium"
          >
            Contact
          </Link>

          <button
            type="button"
            onClick={toggleLocale}
            aria-label={`Schimbă limba (${locale === "ro" ? "română" : "engleză"})`}
            className="inline-flex items-center gap-1 rounded-lg px-3 py-1.5 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition"
          >
            {locale === "ro" ? (
              <>
                RO<span role="img" aria-label="Steagul României">🇷🇴</span>
              </>
            ) : (
              <>
                EN<span role="img" aria-label="Steagul Regatului Unit">🇬🇧</span>
              </>
            )}
          </button>
        </nav>

        {/* Meniu mobil */}
        <HamburgerMenu />
      </div>
    </header>
  );
};

export default Header;

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
import { useTranslation } from "react-i18next";

interface SolutionItem {
  name: string;
  path: string;
  description: string;
}

const Header: React.FC = () => {
  const location = useLocation();
  const { i18n, t } = useTranslation();
  const current = i18n.language === "en" ? "en" : "ro";

  // obținem lista de soluții din i18n
  const solutionList = t("header.solutions", {
    returnObjects: true,
  }) as SolutionItem[];

  useEffect(() => {
    const saved = localStorage.getItem("site_locale");
    if (!saved) {
      if (current !== "ro") i18n.changeLanguage("ro");
      localStorage.setItem("site_locale", "ro");
    } else if (saved !== current) {
      i18n.changeLanguage(saved);
    }
  }, [current, i18n]);

  const toggleLocale = () => {
    const next = current === "ro" ? "en" : "ro";
    i18n.changeLanguage(next);
    localStorage.setItem("site_locale", next);
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
          aria-label={t("header.homeAria")}
        >
          <img src={logo} alt={t("header.logoAlt")} className="h-10" />
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
                    {t("nav.solutions")}
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
            {t("nav.about")}
          </Link>
          <Link
            to="/contact"
            className="text-base text-gray-700 hover:text-blue-600 transition-colors font-medium"
          >
            {t("nav.contact")}
          </Link>

          <button
            type="button"
            onClick={toggleLocale}
            className="inline-flex items-center gap-1 rounded-lg px-3 py-1.5 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition"
            aria-label={t("header.toggleLocaleAria", {
              lang: current === "ro" ? (current === "ro" ? "română" : "engleză") : current === "en" ? (current === "en" ? "English" : "Romanian") : "",
            })}
          >
            {current === "ro" ? (
              <>
                RO<span aria-label="România">🇷🇴</span>
              </>
            ) : (
              <>
                EN<span aria-label="United Kingdom">🇬🇧</span>
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

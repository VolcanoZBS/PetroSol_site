import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import ro from "./locales/ro/common.json";
import en from "./locales/en/common.json";
import roHomepage from "./locales/ro/homepage.json";
import enHomepage from "./locales/en/homepage.json";
import roSolutions from "./locales/ro/solutions.json";
import enSolutions from "./locales/en/solutions.json";
import roAboutJson from "./locales/ro/about.json";
import enAboutJson from "./locales/en/about.json";
import roContact from "./locales/ro/contact.json";
import enContact from "./locales/en/contact.json";

const saved = ((): "ro" | "en" => {
  const v = localStorage.getItem("site_locale");
  return v === "en" ? "en" : "ro";
})();

i18n
  .use(initReactI18next)
  .init({
    resources: {
      ro: { common: ro, homepage: roHomepage, solutions: roSolutions, about: roAboutJson, contact: roContact },
      en: { common: en, homepage: enHomepage, solutions: enSolutions, about: enAboutJson, contact: enContact }
    },
    ns: ["common", "homepage", "solutions", "about", "contact"],
    defaultNS: "common",
    lng: saved,          // forțează română dacă nu e salvat altceva
    fallbackLng: "ro",
    interpolation: { escapeValue: false }
  });

export default i18n;
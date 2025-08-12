import React from "react";

import datecsLogo from "../assets/images/partners/datecs.webp";
import danubiusLogo from "../assets/images/partners/danubius.webp";
import arigoLogo from "../assets/images/partners/arigo.webp";
import betacontrolLogo from "../assets/images/partners/betacontrol.webp";
import gilbarcoLogo from "../assets/images/partners/gilbarco.svg";
import levtechLogo from "../assets/images/partners/levtech.png";
import printecLogo from "../assets/images/partners/printec.webp";
import sweLogo from "../assets/images/partners/swe.webp";
import tsgLogo from "../assets/images/partners/tsg.png";

interface Partner {
  name: string;
  src: string;
}

const partners: Partner[] = [
  { name: "Datecs", src: datecsLogo },
  { name: "Danubius", src: danubiusLogo },
  { name: "Arigo", src: arigoLogo },
  { name: "BetaControl", src: betacontrolLogo },
  { name: "Gilbarco", src: gilbarcoLogo },
  { name: "Levtech", src: levtechLogo },
  { name: "Printec", src: printecLogo },
  { name: "Swe", src: sweLogo },
  { name: "Tsg", src: tsgLogo },
];

const PartnersLogos: React.FC<{ title?: string }> = ({ title = "Partenerii noștri" }) => {
  if (!partners.length) return null;

  // 6 pe primul rând pe desktop
  const firstRowCount = Math.min(6, partners.length);
  const firstRow = partners.slice(0, firstRowCount);
  const secondRow = partners.slice(firstRowCount);

  const cellCls =
    "h-12 md:h-14 flex items-center justify-center";
  const imgCls =
    "max-h-full max-w-[150px] w-auto object-contain";

  const enlarge = (name: string) =>
    name === "Datecs" || name === "Danubius" ? "scale-[2.2]" : "";

  return (
    <section className="py-14">
      <div className="max-w-6xl mx-auto px-4">
        {title && (
          <div className="mb-8 flex items-center gap-4">
            <h2 className="text-sm font-semibold tracking-wide text-gray-600 uppercase">
              {title}
            </h2>
            <div className="h-px flex-1 bg-gray-200" />
          </div>
        )}

        {/* Mobile / tablet */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 items-center lg:hidden">
          {partners.map(p => (
            <div key={p.name} className={cellCls}>
              <img
                src={p.src}
                alt={p.name}
                loading="lazy"
                decoding="async"
                className={`${imgCls} ${enlarge(p.name)}`}
              />
            </div>
          ))}
        </div>

        {/* Desktop: 6 pe primul rând, restul centrat pe al doilea */}
        <div className="hidden lg:flex flex-col gap-12">
          <div className="grid grid-cols-6 gap-14 justify-items-center">
            {firstRow.map(p => (
              <div key={p.name} className={cellCls}>
                <img
                  src={p.src}
                  alt={p.name}
                  loading="lazy"
                  decoding="async"
                  className={`${imgCls} ${enlarge(p.name)}`}
                />
              </div>
            ))}
          </div>
          {secondRow.length > 0 && (
            <div className="flex flex-wrap justify-center gap-14">
              {secondRow.map(p => (
                <div key={p.name} className={cellCls}>
                  <img
                    src={p.src}
                    alt={p.name}
                    loading="lazy"
                    decoding="async"
                    className={`${imgCls} ${enlarge(p.name)}`}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PartnersLogos;
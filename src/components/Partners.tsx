import React, { useEffect, useRef } from 'react';

// Importă logo-urile partenerilor
import BentoLogo from '../assets/images/partners/Bento_logo.svg';
import ForteLogo from '../assets/images/partners/Forte_logo.png';
import OscarLogo from '../assets/images/partners/Oscar_Downstream_logo.svg.png';
import RompetrolLogo from '../assets/images/partners/Rompetrol_logo.png';
import OctanoLogo from '../assets/images/partners/Octano_logo.png'

const partners = [
  { name: 'Bento', logo: BentoLogo },
  { name: 'Forte', logo: ForteLogo },
  { name: 'Oscar Downstream', logo: OscarLogo },
  { name: 'Rompetrol', logo: RompetrolLogo },
  // Am dublat pentru a umple mai mult spațiu și a asigura fluiditatea
  { name: 'Octano', logo: OctanoLogo }, 
  //{ name: 'Forte', logo: ForteLogo },
];

const Partners: React.FC = () => {
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const scroller = scrollerRef.current;
    if (!scroller) return;
    
    scroller.setAttribute('data-animated', 'true');

    const scrollerInner = scroller.querySelector('.scroller__inner');
    if (!scrollerInner) return;

    const scrollerContent = Array.from(scrollerInner.children);
    scrollerContent.forEach(item => {
      const duplicatedItem = item.cloneNode(true) as HTMLElement;
      duplicatedItem.setAttribute('aria-hidden', 'true');
      scrollerInner.appendChild(duplicatedItem);
    });
  }, []);

  return (
    <section id="partners" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Parteneri <span className="text-blue-600">de Încredere</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Colaborăm cu parteneri tehnologici de top din industrie pentru a oferi 
            cele mai bune soluții clienților noștri.
          </p>
        </div>

        <div className="scroller" ref={scrollerRef}>
          <div className="scroller__inner">
            {partners.map((partner, index) => (
              <div key={index} className="flex items-center justify-center">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-12 object-contain"
                  style={{ maxWidth: '140px' }}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Sunteți pregătit pentru un parteneriat?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Alăturați-vă rețelei noastre de clienți de succes și parteneri tehnologici. 
              Haideți să construim ceva extraordinar împreună.
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300"
            >
              Inițiază un Parteneriat
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .scroller {
          max-width: 900px;
          margin: auto;
          overflow: hidden;
          -webkit-mask: linear-gradient(90deg, transparent, white 20%, white 80%, transparent);
          mask: linear-gradient(90deg, transparent, white 20%, white 80%, transparent);
        }

        .scroller__inner {
          display: flex;
          gap: 2rem;
          width: max-content;
          flex-wrap: nowrap;
        }

        .scroller[data-animated="true"] .scroller__inner {
          animation: scroll 40s linear infinite;
        }
        
        @keyframes scroll {
          to {
            transform: translate(calc(-50% - 1rem));
          }
        }
      `}</style>
    </section>
  );
};

export default Partners;
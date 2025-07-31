import React, { useEffect, useRef } from 'react';

// Importă logo-urile companiilor care folosesc software-ul nostru
import BentoLogo from '../assets/images/partners/Bento_logo.svg';
import ForteLogo from '../assets/images/partners/Forte_logo.png';
import OscarLogo from '../assets/images/partners/Oscar_Downstream_logo.svg.png';
import RompetrolLogo from '../assets/images/partners/Rompetrol_logo.png';
import OctanoLogo from '../assets/images/partners/Octano_logo.png'

const customers = [ // Am redenumit din 'partners' în 'customers'
  { name: 'Bento', logo: BentoLogo },
  { name: 'Forte', logo: ForteLogo },
  { name: 'Oscar Downstream', logo: OscarLogo },
  { name: 'Rompetrol', logo: RompetrolLogo },
  // Am dublat pentru a umple mai mult spațiu și a asigura fluiditatea
  { name: 'Octano', logo: OctanoLogo }, 
  //{ name: 'Forte', logo: ForteLogo }, // Păstrăm comentariul original
];

const OurCustomers: React.FC = () => { // Am redenumit componenta din 'Partners' în 'OurCustomers'
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
    <section id="our-customers" className="py-20 bg-white"> {/* Am actualizat id-ul secțiunii */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Clienții <span className="text-blue-600">Noștri</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Suntem mândri să sprijinim un portofoliu divers de companii de top, ajutându-le să își optimizeze operațiunile și să atingă succesul prin soluțiile și software-ul nostru inovator.
          </p>
        </div>

        <div className="scroller" ref={scrollerRef}>
          <div className="scroller__inner">
            {customers.map((customer, index) => (
              <div key={index} className="flex items-center justify-center">
                <img
                  src={customer.logo}
                  alt={customer.name}
                  className={`object-contain ${customer.name === 'Rompetrol' ? 'h-16' : 'h-12'}`}
                  style={{ maxWidth: customer.name === 'Rompetrol' ? '160px' : '140px' }}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ești pregătit să te alături companiilor de succes care folosesc soluțiile noastre?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Descoperă cum software-ul nostru poate transforma și eficientiza operațiunile afacerii tale. Suntem aici să te ajutăm să crești.
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300"
            >
              Contactează-ne pentru o soluție
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

export default OurCustomers;
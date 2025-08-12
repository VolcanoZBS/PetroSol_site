import React, { useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

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

        <div className="mt-20">
          <div className="relative overflow-hidden rounded-2xl ring-1 ring-gray-200 bg-white">
            <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(circle_at_center,white,transparent)] bg-[linear-gradient(110deg,#dbeafe_0%,#ccfbf1_50%,#ffffff_100%)] opacity-70" />
            <div className="relative p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="max-w-xl">
                <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 text-blue-700 px-3 py-1 text-xs font-medium ring-1 ring-blue-100">
                  Încredere & scalare
                </div>
                <h3 className="mt-3 text-xl md:text-2xl font-semibold text-gray-900">
                  Alătură-te companiilor care și-au optimizat operațiunile cu PetroSol
                </h3>
                <p className="mt-2 text-gray-600 leading-relaxed">
                  Vorbește cu noi și află rapid dacă soluțiile noastre se potrivesc fluxurilor tale.
                </p>
                <dl className="mt-4 grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <dt className="text-gray-500">Stații</dt>
                    <dd className="font-semibold text-gray-900">800+</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500">Integrări</dt>
                    <dd className="font-semibold text-gray-900">100+</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500">Suport</dt>
                    <dd className="font-semibold text-gray-900">24/7</dd>
                  </div>
                </dl>
              </div>
              <div className="flex flex-col items-start md:items-end gap-4">
                <button
                  type="button"
                  onClick={() => navigate('/contact')}
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 text-white px-6 py-3 font-medium hover:bg-blue-700 transition shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  Contactează-ne
                  <span className="transition-transform group-hover:translate-x-0.5">→</span>
                </button>
                <p className="text-xs text-gray-500">
                  Răspundem în <span className="font-medium text-gray-700">sub 1 zi lucrătoare</span>.
                </p>
              </div>
            </div>
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
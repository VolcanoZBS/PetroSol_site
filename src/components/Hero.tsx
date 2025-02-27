import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "Soluții IT Complete pentru Industria Petrolieră",
      description: "Transformăm afacerea dumneavoastră cu tehnologie de ultimă generație",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      color: "from-blue-600 to-blue-800"
    },
    {
      title: "Sisteme Integrate pentru Retail și HoReCa",
      description: "Soluții personalizate pentru eficientizarea operațiunilor",
      image: "https://images.unsplash.com/photo-1556742031-c6961e8560b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      color: "from-green-600 to-green-800"
    },
    {
      title: "Expertiză în Distribuția de Carburanți",
      description: "Peste 20 de ani de experiență în domeniu",
      image: "https://images.unsplash.com/photo-1527018601619-a508a2be00cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      color: "from-pink-600 to-pink-800"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative h-[500px] overflow-hidden">
      {slides.map((slide, index) => (
        <div 
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className={`absolute inset-0 bg-gradient-to-r ${slide.color} opacity-70`}></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container mx-auto px-4 text-white text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 transform transition-transform duration-700 ease-out translate-y-0 opacity-100"
                  style={{
                    transform: index === currentSlide ? 'translateY(0)' : 'translateY(20px)',
                    opacity: index === currentSlide ? 1 : 0,
                    transition: 'transform 0.7s ease-out, opacity 0.7s ease-out'
                  }}>
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto transform transition-transform duration-700 delay-200 ease-out"
                 style={{
                   transform: index === currentSlide ? 'translateY(0)' : 'translateY(20px)',
                   opacity: index === currentSlide ? 1 : 0,
                   transition: 'transform 0.7s ease-out 0.2s, opacity 0.7s ease-out 0.2s'
                 }}>
                {slide.description}
              </p>
              <button className="bg-white text-gray-800 hover:bg-gray-100 px-6 py-3 rounded-full font-medium flex items-center mx-auto transform transition-transform duration-700 delay-400 ease-out"
                      style={{
                        transform: index === currentSlide ? 'translateY(0)' : 'translateY(20px)',
                        opacity: index === currentSlide ? 1 : 0,
                        transition: 'transform 0.7s ease-out 0.4s, opacity 0.7s ease-out 0.4s'
                      }}>
                Descoperă Soluțiile Noastre
                <ChevronRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      ))}
      
      {/* Slide indicators */}
      <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Hero;
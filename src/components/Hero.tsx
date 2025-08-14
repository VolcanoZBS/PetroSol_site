import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import { useTranslation } from "react-i18next";

import stationImg from '../assets/images/Station_hero_image.webp';
import retailImg from '../assets/images/Programming_hero_image.webp';
import carbImg from '../assets/images/Terminal_hero_image.webp';

const Hero: React.FC = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: t("hero.slide1_title"),
      description: t("hero.slide1_desc"),
      image: stationImg,
      color: "from-blue-600 to-blue-800"
    },
    {
      title: t("hero.slide2_title"),
      description: t("hero.slide2_desc"),
      image: retailImg,
      color: "from-green-600 to-green-800"
    },
    {
      title: t("hero.slide3_title"),
      description: t("hero.slide3_desc"),
      image: carbImg,
      color: "from-pink-600 to-pink-800"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index: number) => setCurrentSlide(index);

  return (
    <div className="relative h-[500px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="absolute inset-0 w-full h-full object-cover"
            loading={index === 0 ? "eager" : "lazy"}
            decoding="async"
            {...({ ['fetchpriority']: index === 0 ? 'high' : 'low' } as any)}
          />
          <div className={`absolute inset-0 bg-gradient-to-r ${slide.color} opacity-70`} />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container mx-auto px-4 text-white text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                {slide.description}
              </p>
              <button
                className="bg-white text-gray-800 hover:bg-gray-100 px-6 py-3 rounded-full font-medium flex items-center mx-auto transform transition-transform duration-300 ease-out hover:scale-105"
                onClick={() => window.location.href = '/solutions'}
                aria-label={t("hero.cta")}
              >
                {t("hero.cta")}
                <ChevronRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Indicatori */}
      <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-white w-8' : 'bg-white/50'}`}
            aria-label={t("hero.indicator", { index: index + 1 })}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
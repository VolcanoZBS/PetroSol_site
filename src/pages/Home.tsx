import React from 'react';
import OptimizationSection from '../components/OptimizationSection';
import Hero from '../components/Hero';
import ContactUsSection from '../components/ContactUsSection';
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin } from 'lucide-react';

const Home = () => {
  return (
    <>
      <Hero />
      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <section className="mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Transformăm afacerea dumneavoastră</h2>
            <p className="text-lg text-gray-600 mb-8">
              We at Petrol Solutions, just like you, understand that IT is not just about 
              outsourcing for IT's sake but bringing true business transformation to the next 
              leap. It is our belief that true business transformation comes with the right 
              technology know-how.
            </p>
            <div className="flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Business Transformation" 
                className="rounded-lg shadow-lg max-w-full h-auto"
              />
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">WHERE TO?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105">
                <div className="h-3 bg-blue-500"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Stații Distribuție Carburanți</h3>
                  <p className="text-gray-600 mb-4">Soluții complete pentru stațiile de distribuție carburanți.</p>
                  <button className="text-blue-600 hover:text-blue-800 font-medium">Află mai multe →</button>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105">
                <div className="h-3 bg-green-500"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Retail și Restaurante</h3>
                  <p className="text-gray-600 mb-4">Sisteme integrate pentru retail și industria HoReCa.</p>
                  <button className="text-blue-600 hover:text-blue-800 font-medium">Află mai multe →</button>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105">
                <div className="h-3 bg-pink-500"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Carburanți En-Gros și Industrial</h3>
                  <p className="text-gray-600 mb-4">Soluții pentru distribuția en-gros și sectorul industrial.</p>
                  <button className="text-blue-600 hover:text-blue-800 font-medium">Află mai multe →</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Certificări</h2>
            <div className="flex justify-center items-center">
              <img 
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Certificări" 
                className="rounded-lg shadow-lg max-w-full h-auto"
              />
            </div>
            <p className="text-lg text-gray-600 mt-6">
              CERTIFIED MANAGEMENT SYSTEM<br />
              ISO 9001 - ISO/IEC 27001
            </p>
          </div>
        </section>
        <OptimizationSection />

        {/* Contact Us Section */}
        <ContactUsSection />
      </main>
    </>
  );
};

export default Home; 
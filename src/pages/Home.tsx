import React from 'react';
import Hero from '../components/Hero';
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

        {/* Rest of your sections... */}
      </main>
    </>
  );
};

export default Home; 
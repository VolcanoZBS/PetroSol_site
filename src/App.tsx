import React, { useState } from 'react';
import { ChevronDown, MapPin, Phone, Mail, Globe, Facebook, Twitter, Linkedin, Menu, X } from 'lucide-react';
import SolutionsMenu from './components/SolutionsMenu';
import Hero from './components/Hero';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSolutionsMenuOpen, setIsSolutionsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex items-center space-x-3">
                <img 
                  src="https://i.ibb.co/Qj1bBwM/petrosol-logo.png" 
                  alt="PetroSol Logo" 
                  className="h-10"
                />
                <h1 className="text-2xl font-bold text-gray-800">PetroSol</h1>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <div className="relative">
                <button 
                  className="flex items-center text-gray-700 hover:text-blue-600 transition-colors font-medium"
                  onClick={() => setIsSolutionsMenuOpen(!isSolutionsMenuOpen)}
                >
                  SOLUȚIILE NOASTRE
                  <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${isSolutionsMenuOpen ? 'rotate-180' : ''}`} />
                </button>
                {isSolutionsMenuOpen && <SolutionsMenu />}
              </div>
              <button className="text-gray-700 hover:text-blue-600 transition-colors font-medium">DESPRE NOI</button>
              <button className="text-gray-700 hover:text-blue-600 transition-colors font-medium">CONTACT</button>
              <button className="text-gray-700 hover:text-blue-600 transition-colors font-medium">EN</button>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="container mx-auto px-4 py-2">
              <div className="flex flex-col space-y-3">
                <button 
                  className="flex items-center justify-between text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
                  onClick={() => setIsSolutionsMenuOpen(!isSolutionsMenuOpen)}
                >
                  SOLUȚIILE NOASTRE
                  <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${isSolutionsMenuOpen ? 'rotate-180' : ''}`} />
                </button>
                {isSolutionsMenuOpen && <SolutionsMenu isMobile={true} />}
                <button className="text-left text-gray-700 hover:text-blue-600 transition-colors font-medium py-2">DESPRE NOI</button>
                <button className="text-left text-gray-700 hover:text-blue-600 transition-colors font-medium py-2">CONTACT</button>
                <button className="text-left text-gray-700 hover:text-blue-600 transition-colors font-medium py-2">EN</button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
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
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">PetroSol</h3>
              <p className="text-gray-300 mb-4">
                Soluții IT complete pentru industria petrolieră și nu numai.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 mr-2 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Strada Exemplu, Nr. 123, București, România</p>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-2 flex-shrink-0" />
                  <p className="text-gray-300">+40 123 456 789</p>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-2 flex-shrink-0" />
                  <p className="text-gray-300">contact@petrosol.ro</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Informații</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">Despre noi</a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">Soluțiile noastre</a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">Cariere</a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">Politica de confidențialitate</a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-300">&copy; {new Date().getFullYear()} PetroSol. Toate drepturile rezervate.</p>
          </div>
        </div>
      </footer>

      {/* Cookie Consent */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm mb-4 md:mb-0">
          Acest site web folosește cookie-uri pentru a-ți îmbunătăți experiența. Considerăm că ești de acord cu asta, dar poți oricând să renunți.
        </p>
        <div className="flex space-x-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
            Accept!
          </button>
          <button className="text-gray-300 hover:text-white text-sm font-medium transition-colors">
            Mai Multe Informații
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
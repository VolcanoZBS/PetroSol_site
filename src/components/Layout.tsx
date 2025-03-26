import React, { useState, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, MapPin, Phone, Mail, Facebook, Twitter, Linkedin } from 'lucide-react';
import logo from './Logo.png';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-3">
                <img 
                  src={logo}
                  alt="PetroSol Logo" 
                  className="h-10"
                />
                <h1 className="text-2xl font-bold text-gray-800">PetroSol</h1>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link 
                to="/solutions" 
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                SOLUȚIILE NOASTRE
              </Link>
              <Link 
                to="/about" 
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                DESPRE NOI
              </Link>
              <Link 
                to="/contact" 
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                CONTACT
              </Link>
              <button className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                EN
              </button>
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
                <Link 
                  to="/solutions" 
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
                >
                  SOLUȚIILE NOASTRE
                </Link>
                <Link 
                  to="/about" 
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
                >
                  DESPRE NOI
                </Link>
                <Link 
                  to="/contact" 
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
                >
                  CONTACT
                </Link>
                <button className="text-left text-gray-700 hover:text-blue-600 transition-colors font-medium py-2">
                  EN
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
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
};

export default Layout; 
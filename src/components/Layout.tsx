import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, MapPin, Phone, Mail, Facebook, Twitter, Linkedin } from 'lucide-react';

const Layout = ({ children }) => {
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
                  src="/src/components/logo.png" 
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
        {/* Your existing footer code */}
      </footer>

      {/* Cookie Consent */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 flex flex-col md:flex-row items-center justify-between">
        {/* Your existing cookie consent code */}
      </div>
    </div>
  );
};

export default Layout; 
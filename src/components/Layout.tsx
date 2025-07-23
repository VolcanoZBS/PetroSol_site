import React, { useState, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import Footer from "./Footer.tsx";
import {
  Menu,
  X,
  // MapPin,
  // Phone,
  // Mail,
  // Facebook,
  // Twitter,
  // Linkedin,
} from 'lucide-react';
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
                <img src={logo} alt="PetroSol Logo" className="h-10" />
                <h1 className="text-2xl font-bold text-gray-800">PetroSol</h1>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {/* Soluțiile noastre cu dropdown */}
              <div className="relative group">
                <Link
                  to="/solutions"
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                >
                  SOLUȚIILE NOASTRE
                </Link>
                <div
                  className="
                    absolute left-0 w-48 mt-1 bg-white rounded-md shadow-lg
                    opacity-0 invisible transition-opacity group-hover:opacity-100 group-hover:visible
                    hover:opacity-100 hover:visible
                  "
                >
                  <Link
                    to="/solutions/service-stations"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Service Stations
                  </Link>
                  <Link
                    to="/solutions/unattended"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Unattended
                  </Link>
                  <Link
                    to="/solutions/industrial-crt"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Industrial &amp; CRT
                  </Link>
                  <Link
                    to="/solutions/traditional-retail"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Traditional Retail
                  </Link>
                  <Link
                    to="/solutions/payment"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Payment
                  </Link>
                  <Link
                    to="/solutions/custom-solutions"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Custom Solutions
                  </Link>
                  <Link
                    to="/solutions/ai"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    AI
                  </Link>
                </div>
              </div>

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
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="container mx-auto px-4 py-2">
              <div className="flex flex-col space-y-3">
                {/* Soluțiile noastre extins pentru mobil */}
                <div className="border-b border-gray-200 pb-2">
                  <p className="text-gray-700 font-medium mb-1">
                    SOLUȚIILE NOASTRE
                  </p>
                  <div className="pl-4 flex flex-col space-y-1">
                    <Link
                      to="/solutions/service-stations"
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      Service Stations
                    </Link>
                    <Link
                      to="/solutions/unattended"
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      Unattended
                    </Link>
                    <Link
                      to="/solutions/industrial-crt"
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      Industrial &amp; CRT
                    </Link>
                    <Link
                      to="/solutions/traditional-retail"
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      Traditional Retail
                    </Link>
                    <Link
                      to="/solutions/payment"
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      Payment
                    </Link>
                    <Link
                      to="/solutions/custom-solutions"
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      Custom Solutions
                    </Link>
                    <Link
                      to="/solutions/ai"
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      AI
                    </Link>
                  </div>
                </div>

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
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;

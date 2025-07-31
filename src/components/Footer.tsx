import { Facebook, Linkedin, MapPin, Phone, Mail } from 'lucide-react';
import { SiGoogle } from "react-icons/si";
import logo from '../assets/images/logo.png'; // importă logo-ul

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Bloc PetroSol */}
          <div>
            <div className="flex items-center mb-4">
              <img src={logo} alt="PetroSol Logo" className="h-8 w-auto mr-2" />
              <h3 className="text-xl font-bold">PetroSol</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Soluții IT complete pentru industria petrolieră și nu numai.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/Petrol.Solutions/"
                className="text-gray-300 hover:text-white transition-colors"
                target="_blank" rel="noopener noreferrer"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://share.google/gCArcW0EpSU6NoJRN"
                className="text-gray-300 hover:text-white transition-colors"
                target="_blank" rel="noopener noreferrer"
              >
                <SiGoogle className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/petrol-solutions/?originalSubdomain=ro"
                className="text-gray-300 hover:text-white transition-colors"
                target="_blank" rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Bloc Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 mt-1 flex-shrink-0" />
                <p className="text-gray-300">Bulevardul Primăverii 51, București</p>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2 flex-shrink-0" />
                <p className="text-gray-300">+40 123 456 789</p>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2 flex-shrink-0" />
                <p className="text-gray-300">office@petrosol.ro</p>
              </div>
            </div>
          </div>

          {/* Bloc Informații */}
          <div>
            <h3 className="text-xl font-bold mb-4">Informații</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Despre noi
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Soluțiile noastre
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Politica de confidențialitate
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            &copy; {new Date().getFullYear()} PetroSol. Toate drepturile rezervate.
          </p>
        </div>
      </div>
    </footer>
  );
}

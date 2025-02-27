import React from 'react';
import { 
  ShoppingCart, 
  Fuel, 
  Building2, 
  Truck, 
  BarChart3, 
  CreditCard, 
  Warehouse, 
  Banknote, 
  Layers
} from 'lucide-react';

interface SolutionsMenuProps {
  isMobile?: boolean;
}

const SolutionsMenu: React.FC<SolutionsMenuProps> = ({ isMobile = false }) => {
  return (
    <div className={`${isMobile ? 'relative' : 'absolute'} top-full left-0 w-full md:w-auto bg-white shadow-lg rounded-b-lg z-50 overflow-hidden`}>
      <div className={`${isMobile ? 'grid grid-cols-1' : 'grid grid-cols-1 md:grid-cols-4'} gap-4 p-6`}>
        {/* Column 1 */}
        <div className="p-5 bg-blue-50 rounded-lg">
          <h3 className="text-xl font-semibold text-blue-600 mb-5 border-b pb-3">Stații Distribuție Carburanți</h3>
          <ul className="space-y-4">
            <li>
              <a href="#" className="flex items-center text-gray-700 hover:text-blue-600 transition-colors group">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mr-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <ShoppingCart className="w-5 h-5" />
                </div>
                <span className="text-base">Point Of Sale (POS)</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center text-gray-700 hover:text-blue-600 transition-colors group">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mr-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Fuel className="w-5 h-5" />
                </div>
                <span className="text-base">Automate Plată Cu Autoservire (OPT)</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center text-gray-700 hover:text-blue-600 transition-colors group">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mr-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Layers className="w-5 h-5" />
                </div>
                <span className="text-base">Controller Echipamente (FCC)</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center text-gray-700 hover:text-blue-600 transition-colors group">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mr-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Building2 className="w-5 h-5" />
                </div>
                <span className="text-base">Back Office (BOS)</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center text-gray-700 hover:text-blue-600 transition-colors group">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mr-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Building2 className="w-5 h-5" />
                </div>
                <span className="text-base">Head Office (HOS)</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className="p-5 bg-green-50 rounded-lg">
          <h3 className="text-xl font-semibold text-green-600 mb-5 border-b pb-3">Retail și Restaurante</h3>
          <ul className="space-y-4">
            <li>
              <a href="#" className="flex items-center text-gray-700 hover:text-green-600 transition-colors group">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-100 text-green-600 mr-4 group-hover:bg-green-600 group-hover:text-white transition-colors">
                  <ShoppingCart className="w-5 h-5" />
                </div>
                <span className="text-base">Point Of Sale (POS)</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center text-gray-700 hover:text-green-600 transition-colors group">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-100 text-green-600 mr-4 group-hover:bg-green-600 group-hover:text-white transition-colors">
                  <Building2 className="w-5 h-5" />
                </div>
                <span className="text-base">Back Office (BOS)</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center text-gray-700 hover:text-green-600 transition-colors group">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-100 text-green-600 mr-4 group-hover:bg-green-600 group-hover:text-white transition-colors">
                  <Building2 className="w-5 h-5" />
                </div>
                <span className="text-base">Head Office (HOS)</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="p-5 bg-pink-50 rounded-lg">
          <h3 className="text-xl font-semibold text-pink-600 mb-5 border-b pb-3">Carburanți En-Gros și Industrial</h3>
          <ul className="space-y-4">
            <li>
              <a href="#" className="flex items-center text-gray-700 hover:text-pink-600 transition-colors group">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-pink-100 text-pink-600 mr-4 group-hover:bg-pink-600 group-hover:text-white transition-colors">
                  <Warehouse className="w-5 h-5" />
                </div>
                <span className="text-base">Baze Interne (IHS)</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center text-gray-700 hover:text-pink-600 transition-colors group">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-pink-100 text-pink-600 mr-4 group-hover:bg-pink-600 group-hover:text-white transition-colors">
                  <Truck className="w-5 h-5" />
                </div>
                <span className="text-base">Depozite</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center text-gray-700 hover:text-pink-600 transition-colors group">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-pink-100 text-pink-600 mr-4 group-hover:bg-pink-600 group-hover:text-white transition-colors">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <span className="text-base">Vânzare En-Gros, Livrare și Management</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="p-5 bg-purple-50 rounded-lg">
          <h3 className="text-xl font-semibold text-purple-600 mb-5 border-b pb-3">Soluții Personalizate</h3>
          <ul className="space-y-4">
            <li>
              <a href="#" className="flex items-center text-gray-700 hover:text-purple-600 transition-colors group">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-purple-100 text-purple-600 mr-4 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <span className="text-base">Marketing Digital</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center text-gray-700 hover:text-purple-600 transition-colors group">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-purple-100 text-purple-600 mr-4 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                  <CreditCard className="w-5 h-5" />
                </div>
                <span className="text-base">Fidelizare</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center text-gray-700 hover:text-purple-600 transition-colors group">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-purple-100 text-purple-600 mr-4 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                  <ShoppingCart className="w-5 h-5" />
                </div>
                <span className="text-base">Soluții De Plată</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center text-gray-700 hover:text-purple-600 transition-colors group">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-purple-100 text-purple-600 mr-4 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                  <Truck className="w-5 h-5" />
                </div>
                <span className="text-base">Carduri De Flotă (CMS)</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center text-gray-700 hover:text-purple-600 transition-colors group">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-purple-100 text-purple-600 mr-4 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                  <Banknote className="w-5 h-5" />
                </div>
                <span className="text-base">Bonuri Valorice (VTMS)</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SolutionsMenu;
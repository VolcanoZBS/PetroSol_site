import { useClickAway } from "react-use";
import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";
import { useLocation, NavLink } from "react-router-dom";
import { Home, Info, Users, MessageCircle, Wrench, Phone } from "lucide-react";

// Define your routes here (adjust as needed)
const routes = [
  { title: "Acasă", href: "/", Icon: Home },
  { title: "Soluții", href: "/solutions", Icon: Wrench },
  { title: "Despre noi", href: "/about", Icon: Info },
  { title: "Contact", href: "/contact", Icon: MessageCircle },
  // Removed "Parteneriate" and replaced with call button below
];

const HamburgerMenu = () => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);
  const location = useLocation();

  useClickAway(ref, () => setOpen(false));

  return (
    <div ref={ref} className="md:hidden z-50 relative">
      <Hamburger toggled={isOpen} size={24} toggle={setOpen} color="#2563eb" />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed left-0 right-0 top-16 p-5 pt-0 bg-white border-b border-b-gray-200 shadow-2xl z-50"
          >
            <ul className="grid gap-2">
              {routes.map((route, idx) => {
                const { Icon } = route;
                const isActive = location.pathname === route.href;

                return (
                  <motion.li
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.95, opacity: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.05 + idx / 12,
                    }}
                    key={route.title}
                    className={`w-full rounded-xl ${
                      isActive
                        ? "bg-blue-100 border border-blue-300"
                        : "bg-gray-50"
                    }`}
                  >
                    <NavLink
                      onClick={() => setOpen(false)}
                      className={`flex items-center gap-3 w-full p-4 rounded-xl text-base font-medium transition-colors ${
                        isActive
                          ? "text-blue-700"
                          : "text-gray-700 hover:bg-blue-50 hover:text-blue-700"
                      }`}
                      to={route.href}
                    >
                      <span>{route.title}</span>
                      <Icon className="text-xl" />
                    </NavLink>
                  </motion.li>
                );
              })}
              {/* Call button */}
              <motion.li
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.05 + routes.length / 12,
                }}
                key="call"
                className="w-full rounded-xl bg-green-50"
              >
                <a
                  href="tel:+40123456789"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 w-full p-4 rounded-xl text-base font-medium text-green-700 hover:bg-green-100 transition-colors"
                >
                  <span>Sună acum</span>
                  <Phone className="text-xl" />
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HamburgerMenu;
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'motion/react';
import { Link, NavLink } from 'react-router';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', to: '/' },
    { name: 'About', to: '/about' },
    { name: 'Experience', to: '/experience' },
    { name: 'Projects', to: '/projects' },
    { name: 'Contact', to: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-primary/98 text-primary-foreground shadow-md' : 'bg-primary text-primary-foreground'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[2rem] font-bold text-primary-foreground"
          >
            <Link to="/" className="hover:opacity-90 transition-opacity">
              <span className="text-primary-foreground">Pooja</span>
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.to}
                className={({ isActive }) =>
                  `text-primary-foreground hover:text-white transition-colors duration-300 relative group ${isActive ? 'text-white font-semibold' : ''}`
                }
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="bg-accent text-accent-foreground px-5 py-2 rounded-lg hover:bg-white hover:text-foreground transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              Hire Me
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden bg-primary text-primary-foreground border-t border-border/40"
        >
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.to}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block w-full text-left hover:text-white transition-colors py-2 ${isActive ? 'text-white font-semibold' : 'text-primary-foreground'}`
                }
              >
                {item.name}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full bg-accent text-accent-foreground px-6 py-2.5 rounded-lg hover:bg-white hover:text-foreground transition-all"
            >
              Hire Me
            </Link>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}

import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { NAV_ITEMS } from '../../constants';
import LanguageToggle from '../ui/LanguageToggle';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/90 backdrop-blur-md py-3 shadow-lg'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <a 
            href="/" 
            className="text-white font-bold text-xl tracking-tight flex items-center space-x-2"
          >
            <span className="text-2xl">AirVest</span>
            <span className="text-sm bg-white text-black px-2 py-0.5 rounded-sm mt-0.5">BULGARIA</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {NAV_ITEMS.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-white/80 hover:text-white transition-colors"
            >
              {t(item.label.en, item.label.bg)}
            </a>
          ))}
          <LanguageToggle />
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <LanguageToggle />
          <button
            className="ml-4 text-white p-1"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <nav className="flex flex-col space-y-4">
            {NAV_ITEMS.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-white/80 hover:text-white py-2 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t(item.label.en, item.label.bg)}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
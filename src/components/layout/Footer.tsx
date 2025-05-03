import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import LanguageToggle from '../ui/LanguageToggle';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <a href="/" className="text-white font-bold text-xl flex items-center space-x-2 mb-4">
              <span className="text-2xl">AirVest</span>
              <span className="text-sm bg-white text-black px-2 py-0.5 rounded-sm mt-0.5">BULGARIA</span>
            </a>
            <p className="text-white/70 mb-4">
              {t(
                'Fractional ownership of premium Airbnb properties in Bulgaria.',
                'Фракционна собственост на премиум Airbnb имоти в България.'
              )}
            </p>
            <div className="flex items-center space-x-2">
              <LanguageToggle />
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('Quick Links', 'Бързи връзки')}</h3>
            <ul className="space-y-2">
              <li><a href="#how-it-works" className="text-white/70 hover:text-white transition-colors">{t('How It Works', 'Как работи')}</a></li>
              <li><a href="#properties" className="text-white/70 hover:text-white transition-colors">{t('Properties', 'Имоти')}</a></li>
              <li><a href="#about" className="text-white/70 hover:text-white transition-colors">{t('About Us', 'За нас')}</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('Legal', 'Правна информация')}</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">{t('Terms of Service', 'Условия за ползване')}</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">{t('Privacy Policy', 'Политика за поверителност')}</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">{t('Risk Disclosure', 'Разкриване на риска')}</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('Contact', 'Контакт')}</h3>
            <ul className="space-y-2">
              <li className="text-white/70">
                {t('Email: ', 'Имейл: ')} 
                <a href="mailto:info@airvest.bg" className="hover:text-white transition-colors">info@airvest.bg</a>
              </li>
              <li className="text-white/70">
                {t('Phone: ', 'Телефон: ')} 
                <a href="tel:+35929876543" className="hover:text-white transition-colors">+359 2 987 6543</a>
              </li>
              <li className="text-white/70">{t('Sofia, Bulgaria', 'София, България')}</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm mb-4 md:mb-0">
            © {currentYear} AirVest Bulgaria. {t('All rights reserved.', 'Всички права запазени.')}
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-white/70 hover:text-white transition-colors">
              Facebook
            </a>
            <a href="#" className="text-white/70 hover:text-white transition-colors">
              Instagram
            </a>
            <a href="#" className="text-white/70 hover:text-white transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
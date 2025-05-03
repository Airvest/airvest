import { useState, useEffect, createContext, useContext, ReactNode } from 'react';
import { Language } from '../types';

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (en: string, bg: string) => string;
}

const LanguageContext = createContext<LanguageContextProps>({
  language: 'en',
  setLanguage: () => {},
  t: (en) => en,
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    // Check for stored language preference or browser language
    const storedLanguage = localStorage.getItem('language') as Language;
    if (storedLanguage) {
      setLanguage(storedLanguage);
    } else {
      const browserLang = navigator.language.split('-')[0];
      if (browserLang === 'bg') {
        setLanguage('bg');
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);

  const t = (en: string, bg: string) => {
    return language === 'en' ? en : bg;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
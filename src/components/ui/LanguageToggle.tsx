import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';

const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-1 bg-black/20 backdrop-blur-sm rounded-full p-1">
      <button
        className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
          language === 'en'
            ? 'bg-white text-black'
            : 'text-white/80 hover:text-white'
        }`}
        onClick={() => setLanguage('en')}
      >
        EN
      </button>
      <button
        className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
          language === 'bg'
            ? 'bg-white text-black'
            : 'text-white/80 hover:text-white'
        }`}
        onClick={() => setLanguage('bg')}
      >
        BG
      </button>
    </div>
  );
};

export default LanguageToggle;
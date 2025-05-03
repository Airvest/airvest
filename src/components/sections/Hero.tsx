import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/2079234/pexels-photo-2079234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Luxury property in Bulgaria"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 mt-16">
        <div className="max-w-3xl">
          <div className="inline-block mb-3 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
            <p className="text-white/90 text-sm font-medium">
              {t('COMING SOON — JOIN THE WAITLIST', 'ОЧАКВАЙТЕ СКОРО — ПРИСЪЕДИНЕТЕ СЕ КЪМ СПИСЪКА')}
            </p>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {t(
              'Invest in Bulgaria\'s Best Airbnb Properties — Without Breaking the Bank',
              'Инвестирайте в най-добрите Airbnb имоти в България — Без да разбивате банката'
            )}
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            {t(
              'Starting from €10,000 – Co-own premium properties powered by AI with 85%+ occupancy.',
              'Започвайки от €10,000 – Станете съсобственик на премиум имоти, управлявани от AI с 85%+ заетост.'
            )}
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button 
              variant="primary" 
              size="lg"
              onClick={() => {
                const modal = document.getElementById('waitlist-modal');
                if (modal) modal.classList.remove('hidden');
              }}
            >
              {t('Join the Waitlist', 'Присъединете се към списъка')}
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => {
                const modal = document.getElementById('seller-modal');
                if (modal) modal.classList.remove('hidden');
              }}
            >
              {t('Sell Your Property', 'Продайте своя имот')}
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent z-10"></div>
    </div>
  );
};

export default Hero;
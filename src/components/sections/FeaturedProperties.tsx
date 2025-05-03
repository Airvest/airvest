import React, { useState } from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { FEATURED_PROPERTIES } from '../../constants';
import Button from '../ui/Button';

const FeaturedProperties: React.FC = () => {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);

  const nextProperty = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === FEATURED_PROPERTIES.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevProperty = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? FEATURED_PROPERTIES.length - 1 : prevIndex - 1
    );
  };

  const activeProperty = FEATURED_PROPERTIES[activeIndex];

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-EU', {
      style: 'currency',
      currency: 'EUR',
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <section id="properties" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            {t('Featured Properties', 'Избрани имоти')}
          </h2>
          <p className="text-black/70 mt-4 max-w-2xl mx-auto">
            {t(
              'Preview our curated selection of high-performing Airbnb properties.',
              'Преглед на нашата селекция от високоефективни Airbnb имоти.'
            )}
          </p>
        </div>

        {/* Mobile Property Cards (Stacked for smaller screens) */}
        <div className="md:hidden">
          {FEATURED_PROPERTIES.map((property, index) => (
            <div 
              key={property.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg mb-8 transform transition-transform hover:scale-105"
            >
              <div className="relative h-48">
                <img 
                  src={property.image} 
                  alt={t(property.title.en, property.title.bg)}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3 bg-black text-white px-3 py-1 rounded-full text-sm">
                  {property.roi}% ROI
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  {t(property.title.en, property.title.bg)}
                </h3>
                <p className="text-black/70 mb-4">
                  {t(property.location.en, property.location.bg)}
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <p className="text-black/60 text-sm">{t('Property Value', 'Стойност на имота')}</p>
                    <p className="text-lg font-semibold">{formatCurrency(property.price)}</p>
                  </div>
                  <div>
                    <p className="text-black/60 text-sm">{t('Min Investment', 'Мин. инвестиция')}</p>
                    <p className="text-lg font-semibold">{formatCurrency(property.minInvestment)}</p>
                  </div>
                  <div>
                    <p className="text-black/60 text-sm">{t('Occupancy', 'Заетост')}</p>
                    <p className="text-lg font-semibold">{property.occupancyRate}%</p>
                  </div>
                  <div>
                    <p className="text-black/60 text-sm">{t('Projected ROI', 'Прогнозирана възвръщаемост')}</p>
                    <p className="text-lg font-semibold">{property.roi}%</p>
                  </div>
                </div>
                
                <Button 
                  variant="secondary" 
                  fullWidth 
                  className="mt-2"
                  onClick={() => {
                    const modal = document.getElementById('waitlist-modal');
                    if (modal) modal.classList.remove('hidden');
                  }}
                >
                  {t('Join Waitlist for This Property', 'Присъединете се към списъка за този имот')}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Carousel (for larger screens) */}
        <div className="hidden md:block relative">
          <div className="relative overflow-hidden rounded-xl shadow-xl">
            <div className="flex items-center">
              <div className="w-1/2 relative h-[500px]">
                <img 
                  src={activeProperty.image} 
                  alt={t(activeProperty.title.en, activeProperty.title.bg)}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/50"></div>
              </div>
              
              <div className="w-1/2 bg-white p-12">
                <div className="mb-6">
                  <span className="bg-black/10 text-black/80 px-3 py-1 rounded-full text-sm">
                    {t('Coming Soon', 'Очаквайте скоро')}
                  </span>
                </div>
                
                <h3 className="text-3xl font-bold mb-2">
                  {t(activeProperty.title.en, activeProperty.title.bg)}
                </h3>
                
                <p className="text-black/70 text-lg mb-8">
                  {t(activeProperty.location.en, activeProperty.location.bg)}
                </p>
                
                <div className="grid grid-cols-2 gap-x-8 gap-y-6 mb-10">
                  <div>
                    <p className="text-black/60">{t('Property Value', 'Стойност на имота')}</p>
                    <p className="text-2xl font-bold">{formatCurrency(activeProperty.price)}</p>
                  </div>
                  <div>
                    <p className="text-black/60">{t('Min Investment', 'Мин. инвестиция')}</p>
                    <p className="text-2xl font-bold">{formatCurrency(activeProperty.minInvestment)}</p>
                  </div>
                  <div>
                    <p className="text-black/60">{t('Occupancy Rate', 'Ниво на заетост')}</p>
                    <p className="text-2xl font-bold">{activeProperty.occupancyRate}%</p>
                  </div>
                  <div>
                    <p className="text-black/60">{t('Projected ROI', 'Прогнозирана възвръщаемост')}</p>
                    <p className="text-2xl font-bold">{activeProperty.roi}%</p>
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <Button 
                    variant="secondary" 
                    size="lg"
                    onClick={() => {
                      const modal = document.getElementById('waitlist-modal');
                      if (modal) modal.classList.remove('hidden');
                    }}
                  >
                    {t('Join Waitlist', 'Присъединете се към списъка')}
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="lg"
                    onClick={() => {
                      const modal = document.getElementById('coowner-modal');
                      if (modal) modal.classList.remove('hidden');
                    }}
                  >
                    {t('Find Co-Owners', 'Намерете съсобственици')}
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Carousel Controls */}
          <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
            <button 
              onClick={prevProperty}
              className="bg-white text-black w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-black hover:text-white transition-all"
            >
              &larr;
            </button>
          </div>
          
          <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
            <button 
              onClick={nextProperty}
              className="bg-white text-black w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-black hover:text-white transition-all"
            >
              &rarr;
            </button>
          </div>
          
          {/* Property Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {FEATURED_PROPERTIES.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  index === activeIndex ? 'bg-black' : 'bg-black/30'
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
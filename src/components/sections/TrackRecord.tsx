import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';

const TrackRecord: React.FC = () => {
  const { t } = useLanguage();

  const stats = [
    {
      value: '5+',
      label: {
        en: 'Years Experience',
        bg: 'Години опит',
      },
    },
    {
      value: '85%',
      label: {
        en: 'Average Occupancy',
        bg: 'Средна заетост',
      },
    },
    {
      value: '5.0',
      label: {
        en: 'Star Rating',
        bg: 'Рейтинг звезди',
      },
    },
    {
      value: '€10M',
      label: {
        en: 'Assets Under Management',
        bg: 'Активи под управление',
      },
    },
  ];

  return (
    <section id="track-record" className="py-20 bg-white text-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            {t('Our Track Record', 'Нашите постижения')}
          </h2>
          <p className="text-black/70 mt-4 max-w-2xl mx-auto">
            {t(
              'Years of success in Airbnb property management and investment returns.',
              'Години на успех в управлението на Airbnb имоти и инвестиционни възвръщаемости.'
            )}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 border border-black/10 rounded-xl bg-black/5 transform transition-transform hover:scale-105"
            >
              <p className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</p>
              <p className="text-black/70">{t(stat.label.en, stat.label.bg)}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-black/5 p-8 rounded-xl border border-black/10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h3 className="text-2xl font-bold mb-4">
                {t(
                  'Experience You Can Trust',
                  'Опит, на който можете да се доверите'
                )}
              </h3>
              <p className="text-black/70 mb-4">
                {t(
                  'Our team has been managing and optimizing Airbnb properties in Bulgaria\'s most desirable destinations since 2018. We\'ve perfected the art of maximizing returns while providing exceptional guest experiences.',
                  'Нашият екип управлява и оптимизира Airbnb имоти в най-желаните дестинации в България от 2018 г. Усъвършенствали сме изкуството да максимизираме възвръщаемостта, докато предоставяме изключителни преживявания за гостите.'
                )}
              </p>
              <p className="text-black/70">
                {t(
                  'Now, we\'re opening these investment opportunities to you through fractional ownership, backed by our proven track record of success.',
                  'Сега отваряме тези инвестиционни възможности за вас чрез фракционна собственост, подкрепена от нашите доказани успехи.'
                )}
              </p>
            </div>
            <div className="md:w-1/2 md:pl-8">
              <div className="flex flex-col space-y-4">
                {[1, 2, 3].map((review) => (
                  <div key={review} className="bg-white p-4 rounded-lg shadow">
                    <div className="flex items-center mb-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 text-yellow-500 fill-current" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                          </svg>
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-black/70">
                        {t('Verified Guest', 'Проверен гост')}
                      </span>
                    </div>
                    <p className="text-sm text-black/80">
                      {t(
                        '"Exceptional property and seamless experience. Would definitely book again!"',
                        '"Изключителен имот и безпроблемно преживяване. Определено бих резервирал/а отново!"'
                      )}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrackRecord;
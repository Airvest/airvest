import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';

const AIFeatures: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    {
      title: {
        en: 'Smart Investment Matching',
        bg: 'Интелигентно съвпадение на инвестиции',
      },
      description: {
        en: 'Our AI analyzes your investment goals and preferences to recommend the perfect properties for your portfolio.',
        bg: 'Нашият AI анализира вашите инвестиционни цели и предпочитания, за да препоръча перфектните имоти за вашето портфолио.',
      },
    },
    {
      title: {
        en: 'Market Opportunity Alerts',
        bg: 'Сигнали за пазарни възможности',
      },
      description: {
        en: 'Receive real-time notifications when properties matching your criteria become available or when market conditions favor buying or selling.',
        bg: 'Получавайте известия в реално време, когато имоти, отговарящи на вашите критерии, станат налични или когато пазарните условия благоприятстват покупката или продажбата.',
      },
    },
    {
      title: {
        en: 'Optimized Co-Owner Matching',
        bg: 'Оптимизирано съвпадение на съсобственици',
      },
      description: {
        en: 'Our sophisticated algorithm connects you with like-minded investors whose goals align with yours for successful co-ownership ventures.',
        bg: 'Нашият сложен алгоритъм ви свързва с инвеститори със сходно мислене, чиито цели съвпадат с вашите за успешни начинания в съсобственост.',
      },
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-3 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
            <p className="text-white/90 text-sm font-medium">
              {t('AI-POWERED PLATFORM', 'ПЛАТФОРМА, ЗАХРАНВАНА ОТ AI')}
            </p>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold">
            {t('Smart Investments, Powered by AI', 'Интелигентни инвестиции, захранвани от AI')}
          </h2>
          <p className="text-white/70 mt-4 max-w-2xl mx-auto">
            {t(
              'Our advanced AI analyzes market data, occupancy trends, and investment patterns to maximize your returns.',
              'Нашият напреднал AI анализира пазарни данни, тенденции в заетостта и модели на инвестиции, за да максимизира вашата възвръщаемост.'
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 transform transition-all hover:scale-105 hover:bg-white/10"
            >
              <div className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center text-xl font-bold mb-4">
                AI
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {t(feature.title.en, feature.title.bg)}
              </h3>
              <p className="text-white/70">
                {t(feature.description.en, feature.description.bg)}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-3/5 mb-8 md:mb-0">
              <h3 className="text-2xl font-bold mb-4">
                {t(
                  'AI-Driven Market Analysis',
                  'Пазарен анализ, базиран на AI'
                )}
              </h3>
              <div className="space-y-4">
                <p className="text-white/70">
                  {t(
                    'Our proprietary algorithms continuously analyze Bulgaria\'s property market, tourism trends, and booking patterns to identify the most promising investment opportunities.',
                    'Нашите собствени алгоритми непрекъснато анализират имотния пазар в България, тенденциите в туризма и моделите на резервации, за да идентифицират най-обещаващите инвестиционни възможности.'
                  )}
                </p>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-400 rounded-full mr-2"></div>
                  <p className="text-white/90">
                    {t(
                      'Predict optimal buying and selling periods',
                      'Прогнозиране на оптимални периоди за покупка и продажба'
                    )}
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-400 rounded-full mr-2"></div>
                  <p className="text-white/90">
                    {t(
                      'Identify emerging high-value areas',
                      'Идентифициране на нововъзникващи райони с висока стойност'
                    )}
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-purple-400 rounded-full mr-2"></div>
                  <p className="text-white/90">
                    {t(
                      'Optimize pricing strategies for maximum ROI',
                      'Оптимизиране на ценовите стратегии за максимална възвръщаемост'
                    )}
                  </p>
                </div>
              </div>
            </div>
            <div className="md:w-2/5 md:pl-8">
              <div className="bg-black/50 border border-white/10 rounded-lg p-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-white/20 to-transparent rounded-bl-full"></div>
                <div className="space-y-3">
                  <div className="h-2 bg-white/10 rounded-full w-full"></div>
                  <div className="h-2 bg-white/20 rounded-full w-3/4"></div>
                  <div className="h-2 bg-white/30 rounded-full w-1/2"></div>
                  <div className="h-8 mt-4 flex space-x-2">
                    <div className="w-1/3 bg-green-500/30 rounded"></div>
                    <div className="w-1/3 bg-blue-500/30 rounded"></div>
                    <div className="w-1/3 bg-purple-500/30 rounded"></div>
                  </div>
                  <div className="h-20 bg-white/5 rounded mt-2 flex items-center justify-center">
                    <div className="w-16 h-16 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                  </div>
                  <div className="text-xs text-white/50 text-center mt-2">
                    {t('AI analyzing market trends...', 'AI анализира пазарните тенденции...')}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIFeatures;
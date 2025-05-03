import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { HOW_IT_WORKS_STEPS } from '../../constants';

const HowItWorks: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="how-it-works" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            {t('How It Works', 'Как работи')}
          </h2>
          <p className="text-white/70 mt-4 max-w-2xl mx-auto">
            {t(
              'A simple process designed to make property investment accessible to everyone.',
              'Прост процес, създаден да направи инвестициите в имоти достъпни за всеки.'
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {HOW_IT_WORKS_STEPS.map((step, index) => (
            <div 
              key={index}
              className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10 transform transition-transform hover:scale-105"
            >
              <div className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center text-xl font-bold mb-4">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {t(step.title.en, step.title.bg)}
              </h3>
              <p className="text-white/70">
                {t(step.description.en, step.description.bg)}
              </p>
              
              {/* Connection line between steps (except last) */}
              {index < HOW_IT_WORKS_STEPS.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 h-0.5 w-8 bg-white/30"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
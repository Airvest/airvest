import React, { useState, useCallback } from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import Button from '../ui/Button';
import { X } from 'lucide-react';

const WaitlistModal: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    investorType: '',
    investmentAmount: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Waitlist submission:', formData);
    setSubmitted(true);
  };

  const closeModal = useCallback((e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
    }
    const modal = document.getElementById('waitlist-modal');
    if (modal) {
      modal.classList.add('hidden');
      if (submitted) {
        setSubmitted(false);
        setFormData({
          name: '',
          email: '',
          investorType: '',
          investmentAmount: '',
        });
      }
    }
  }, [submitted]);

  // Close modal when clicking outside
  const handleBackdropClick = useCallback((e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  }, [closeModal]);

  return (
    <div 
      id="waitlist-modal" 
      className="fixed inset-0 z-50 hidden flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div className="bg-white text-black rounded-xl shadow-xl max-w-md w-full mx-4 relative overflow-hidden">
        <button 
          onClick={closeModal}
          className="absolute top-4 right-4 text-black/60 hover:text-black"
        >
          <X size={24} />
        </button>
        
        {!submitted ? (
          <>
            <div className="bg-black text-white p-6">
              <h3 className="text-2xl font-bold">
                {t('Join Our Investor Waitlist', 'Присъединете се към нашия списък за инвеститори')}
              </h3>
              <p className="text-white/80 mt-2">
                {t(
                  'Be the first to know when we launch and get priority access to our exclusive property listings.',
                  'Бъдете първи, който ще научи, когато стартираме, и получете приоритетен достъп до нашите ексклузивни имоти.'
                )}
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-black/70 mb-1">
                    {t('Full Name', 'Пълно име')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-black/20 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                    placeholder={t('Enter your full name', 'Въведете вашето пълно име')}
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-black/70 mb-1">
                    {t('Email Address', 'Имейл адрес')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-black/20 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                    placeholder={t('Enter your email', 'Въведете вашия имейл')}
                  />
                </div>
                
                <div>
                  <label htmlFor="investorType" className="block text-sm font-medium text-black/70 mb-1">
                    {t('Investor Type', 'Тип инвеститор')}
                  </label>
                  <select
                    id="investorType"
                    name="investorType"
                    value={formData.investorType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-black/20 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                  >
                    <option value="">
                      {t('Select investor type', 'Изберете тип инвеститор')}
                    </option>
                    <option value="individual">
                      {t('Individual Investor', 'Индивидуален инвеститор')}
                    </option>
                    <option value="group">
                      {t('Group/Partnership', 'Група/Партньорство')}
                    </option>
                    <option value="company">
                      {t('Company', 'Компания')}
                    </option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="investmentAmount" className="block text-sm font-medium text-black/70 mb-1">
                    {t('Interested Investment Amount', 'Интересувана инвестиционна сума')}
                  </label>
                  <select
                    id="investmentAmount"
                    name="investmentAmount"
                    value={formData.investmentAmount}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-black/20 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                  >
                    <option value="">
                      {t('Select amount range', 'Изберете диапазон на сумата')}
                    </option>
                    <option value="10000-25000">€10,000 - €25,000</option>
                    <option value="25001-50000">€25,001 - €50,000</option>
                    <option value="50001-100000">€50,001 - €100,000</option>
                    <option value="100001+">€100,001+</option>
                  </select>
                </div>
              </div>
              
              <div className="mt-6">
                <Button
                  variant="secondary"
                  type="submit"
                  fullWidth
                >
                  {t('Join Waitlist', 'Присъединете се към списъка')}
                </Button>
              </div>
            </form>
          </>
        ) : (
          <div className="p-8 text-center">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-2">
              {t('Thank You!', 'Благодарим Ви!')}
            </h3>
            <p className="text-black/70 mb-6">
              {t(
                'You\'ve been successfully added to our waitlist. We\'ll be in touch soon with exclusive updates and early access opportunities.',
                'Вие бяхте успешно добавени към нашия списък. Скоро ще се свържем с вас с ексклузивни актуализации и възможности за ранен достъп.'
              )}
            </p>
            <Button
              variant="secondary"
              onClick={closeModal}
            >
              {t('Close', 'Затвори')}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default WaitlistModal;
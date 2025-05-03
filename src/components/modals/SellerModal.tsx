import React, { useState, useCallback } from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import Button from '../ui/Button';
import { X } from 'lucide-react';

const SellerModal: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyType: '',
    propertyLocation: '',
    description: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Seller submission:', formData);
    setSubmitted(true);
  };

  const closeModal = useCallback((e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
    }
    const modal = document.getElementById('seller-modal');
    if (modal) {
      modal.classList.add('hidden');
      if (submitted) {
        setSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          propertyType: '',
          propertyLocation: '',
          description: '',
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
      id="seller-modal" 
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
                {t('List Your Property', 'Публикувайте Вашия имот')}
              </h3>
              <p className="text-white/80 mt-2">
                {t(
                  'Sell your property to our network of investors or have us manage it for maximum returns.',
                  'Продайте вашия имот на нашата мрежа от инвеститори или позволете да го управляваме за максимална възвръщаемост.'
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
                  <label htmlFor="phone" className="block text-sm font-medium text-black/70 mb-1">
                    {t('Phone Number', 'Телефонен номер')}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-black/20 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                    placeholder={t('Enter your phone number', 'Въведете вашия телефонен номер')}
                  />
                </div>
                
                <div>
                  <label htmlFor="propertyType" className="block text-sm font-medium text-black/70 mb-1">
                    {t('Property Type', 'Тип имот')}
                  </label>
                  <select
                    id="propertyType"
                    name="propertyType"
                    value={formData.propertyType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-black/20 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                  >
                    <option value="">
                      {t('Select property type', 'Изберете тип имот')}
                    </option>
                    <option value="apartment">
                      {t('Apartment', 'Апартамент')}
                    </option>
                    <option value="house">
                      {t('House', 'Къща')}
                    </option>
                    <option value="villa">
                      {t('Villa', 'Вила')}
                    </option>
                    <option value="other">
                      {t('Other', 'Друго')}
                    </option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="propertyLocation" className="block text-sm font-medium text-black/70 mb-1">
                    {t('Property Location', 'Местоположение на имота')}
                  </label>
                  <input
                    type="text"
                    id="propertyLocation"
                    name="propertyLocation"
                    value={formData.propertyLocation}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-black/20 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                    placeholder={t('City, Area', 'Град, Район')}
                  />
                </div>
                
                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-black/70 mb-1">
                    {t('Property Description', 'Описание на имота')}
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-2 border border-black/20 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                    placeholder={t('Brief description of your property', 'Кратко описание на вашия имот')}
                  ></textarea>
                </div>
              </div>
              
              <div className="mt-6">
                <Button
                  variant="secondary"
                  type="submit"
                  fullWidth
                >
                  {t('Submit Property', 'Изпратете имот')}
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
                'Your property has been submitted successfully. Our team will review your listing and contact you shortly to discuss next steps.',
                'Вашият имот беше изпратен успешно. Нашият екип ще прегледа вашето предложение и ще се свърже с вас скоро, за да обсъдим следващите стъпки.'
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

export default SellerModal;
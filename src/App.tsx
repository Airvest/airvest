import React from 'react';
import { LanguageProvider } from './hooks/useLanguage';
import Home from './pages/Home';

function App() {
  // Set page title and meta tags for SEO
  React.useEffect(() => {
    document.title = 'AirVest Bulgaria | Invest in Premium Airbnb Properties';
    
    // Create and update meta descriptions
    const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    metaDescription.setAttribute('content', 'Invest in Bulgaria\'s best Airbnb properties starting from €10,000. AI-powered platform with 85%+ occupancy. Find co-owners or buy 100% of properties.');
    if (!document.querySelector('meta[name="description"]')) {
      document.head.appendChild(metaDescription);
    }
    
    // Add more SEO-related meta tags
    const keywords = document.querySelector('meta[name="keywords"]') || document.createElement('meta');
    keywords.setAttribute('name', 'keywords');
    keywords.setAttribute('content', 'Bulgaria property investment, Airbnb investment, fractional ownership, real estate Bulgaria, passive income, property co-ownership');
    if (!document.querySelector('meta[name="keywords"]')) {
      document.head.appendChild(keywords);
    }
    
    const ogTitle = document.querySelector('meta[property="og:title"]') || document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    ogTitle.setAttribute('content', 'AirVest Bulgaria | Invest in Premium Airbnb Properties');
    if (!document.querySelector('meta[property="og:title"]')) {
      document.head.appendChild(ogTitle);
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]') || document.createElement('meta');
    ogDescription.setAttribute('property', 'og:description');
    ogDescription.setAttribute('content', 'Invest in Bulgaria\'s best Airbnb properties starting from €10,000. AI-powered platform with 85%+ occupancy rates.');
    if (!document.querySelector('meta[property="og:description"]')) {
      document.head.appendChild(ogDescription);
    }
    
    const ogType = document.querySelector('meta[property="og:type"]') || document.createElement('meta');
    ogType.setAttribute('property', 'og:type');
    ogType.setAttribute('content', 'website');
    if (!document.querySelector('meta[property="og:type"]')) {
      document.head.appendChild(ogType);
    }
  }, []);

  return (
    <LanguageProvider>
      <Home />
    </LanguageProvider>
  );
}

export default App;
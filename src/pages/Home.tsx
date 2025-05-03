import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import HowItWorks from '../components/sections/HowItWorks';
import TrackRecord from '../components/sections/TrackRecord';
import AIFeatures from '../components/sections/AIFeatures';
import FeaturedProperties from '../components/sections/FeaturedProperties';
import WaitlistModal from '../components/modals/WaitlistModal';
import SellerModal from '../components/modals/SellerModal';
import CoOwnerModal from '../components/modals/CoOwnerModal';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <TrackRecord />
        <AIFeatures />
        <FeaturedProperties />
      </main>
      <Footer />
      
      {/* Modals */}
      <WaitlistModal />
      <SellerModal />
      <CoOwnerModal />
    </>
  );
};

export default Home;
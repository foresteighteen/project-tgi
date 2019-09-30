import React from 'react';

import HeroSection from './HeroSection';
import ProductSection from './ProductSection';
import DeliverySection from './DeliverySection';
import ProductionSection from './ProductionSection';
import PartnersSection from './PartnersSection';
import NewsSection from './NewsSection';

import './MainPage.sass';

const MainPage = () => (
  <React.Fragment>
    <HeroSection />
    <ProductSection />
    <DeliverySection />
    <ProductionSection />
    <PartnersSection />
    <NewsSection />
    {/* ostalus' voprosu section */}
  </React.Fragment>
);

export default MainPage;

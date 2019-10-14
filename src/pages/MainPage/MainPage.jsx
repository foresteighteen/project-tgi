import React from 'react';

import HeroSection from './HeroSection';
import ProductSection from './ProductSection';
import DeliverySection from './DeliverySection';
import ProductionSection from './ProductionSection';
import PartnersSection from './PartnersSection';
import NewsSection from './NewsSection';
import SectionNumbers from './SectionNumbers';

import './MainPage.sass';

const MainPage = () => (
  <main className="main main__page">
    <SectionNumbers>
      <HeroSection />
      <ProductSection />
      <DeliverySection />
      <ProductionSection />
      <PartnersSection />
      <NewsSection />
    </SectionNumbers>
  </main>
);

export default MainPage;

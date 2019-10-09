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
  <React.Fragment>
    <SectionNumbers>
      <HeroSection />
      <ProductSection />
      <DeliverySection />
      <ProductionSection />
      <PartnersSection />
      <NewsSection />
    </SectionNumbers>
  </React.Fragment>
);

export default MainPage;

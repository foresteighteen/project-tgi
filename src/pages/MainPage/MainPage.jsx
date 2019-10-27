import React from 'react';

import withPageData from '../../containers/withPageData';

import HeroSection from './HeroSection';
import ProductSection from './ProductSection';
import DeliverySection from './DeliverySection';
import ProductionSection from './ProductionSection';
import PartnersSection from './PartnersSection';
import NewsSection from './NewsSection';
import SectionNumbers from './SectionNumbers';
import { QuestionForm } from '../../components';

import './MainPage.sass';

const WP_PAGE_ID = 9;

const MainPage = ({ pageData, pageLoaded }) => (
  <main className="main main__page">
    {pageLoaded ? (
      <>
        <SectionNumbers>
          <HeroSection data={pageData.acf.hero} />
          <ProductSection data={pageData.acf.products} />
          <DeliverySection data={pageData.acf.geography} />
          <ProductionSection data={pageData.acf.production} />
          <PartnersSection data={pageData.acf.partners} />
          <NewsSection />
        </SectionNumbers>
        <QuestionForm />
      </>
    ) : null}
  </main>
);

export default withPageData(WP_PAGE_ID)(MainPage);

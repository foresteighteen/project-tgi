import React from 'react';
import { Helmet } from 'react-helmet';

import withPageData from '../../containers/withPageData';

import HeroSection from './HeroSection';
import ProductSection from './ProductSection';
import DeliverySection from './DeliverySection';
import ProductionSection from './ProductionSection';
import PartnersSection from './PartnersSection';
import NewsSection from './NewsSection';
import SectionNumbers from './SectionNumbers';
import { QuestionForm } from '../../components';
import { HeaderContext } from '../../containers/HeaderProvider';

import './MainPage.sass';

const WP_PAGE_ID = 9;

const MainPage = ({ pageData, pageLoaded }) => {
  const { setHeaderTheme } = React.useContext(HeaderContext);
  React.useEffect(() => {
    setHeaderTheme('light');
  }, []);
  return (
    <main className="main main__page">
      {pageLoaded ? (
        <>
          <Helmet>
            <title>{pageData.title.rendered}</title>
          </Helmet>
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
};

export default withPageData(WP_PAGE_ID)(MainPage);

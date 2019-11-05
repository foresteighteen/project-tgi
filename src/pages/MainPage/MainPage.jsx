import React from 'react';

import withPageData from '../../containers/withPageData';

import HeroSection from './HeroSection';
import ProductSection from './ProductSection';
import DeliverySection from './DeliverySection';
import ProductionSection from './ProductionSection';
import PartnersSection from './PartnersSection';
import NewsSection from './NewsSection';
import SectionNumbers from './SectionNumbers';
import { QuestionForm, ErrorBoundary } from '../../components';
import { HeaderContext } from '../../containers/HeaderProvider';

import './MainPage.sass';

const WP_PAGE_ID = 9;

const MainPage = ({ pageData, pageLoaded }) => {
  const { setHeaderTheme } = React.useContext(HeaderContext);
  React.useEffect(() => {
    setHeaderTheme('light');
  }, []);
  return (
    <ErrorBoundary>
      <main className="main main__page">
        {pageLoaded ? (
          <ErrorBoundary>
            <SectionNumbers>
              <ErrorBoundary>
                <HeroSection data={pageData.acf.hero} />
              </ErrorBoundary>

              <ErrorBoundary>
                <ProductSection data={pageData.acf.products} />
              </ErrorBoundary>

              <ErrorBoundary>
                <DeliverySection data={pageData.acf.geography} />
              </ErrorBoundary>

              <ErrorBoundary>
                <ProductionSection data={pageData.acf.production} />
              </ErrorBoundary>

              <ErrorBoundary>
                <PartnersSection data={pageData.acf.partners} />
              </ErrorBoundary>

              <ErrorBoundary>
                <NewsSection />
              </ErrorBoundary>
            </SectionNumbers>
            <QuestionForm />
          </ErrorBoundary>
        ) : null}
      </main>
    </ErrorBoundary>
  );
};

export default withPageData(WP_PAGE_ID)(MainPage);

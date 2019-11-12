import React from 'react';
import { Helmet } from 'react-helmet';

import withPageData from '../../containers/withPageData';
import { HeaderContext } from '../../containers/HeaderProvider';

import CatalogHeroSection from './CatalogHeroSection';
import CatalogGridSection from './CatalogGridSection';
import CatalogProductsSection from './CatalogProductsSection';
import CatalogCategoriesSection from './CatalogCategoriesSection';

import { QuestionForm, ErrorBoundary } from '../../components';

import './CatalogPage.sass';

const CatalogPage = ({ pageData, pageLoaded, location: { hash } }) => {
  const { setHeaderTheme } = React.useContext(HeaderContext);

  React.useEffect(() => {
    setHeaderTheme('dark');
  }, []);

  // const scrollTo = window.location.href.indexOf('#');

  if (pageLoaded && hash) {
    setTimeout(() => {
      window['page-wrap'].scrollTo({
        top: document.querySelector(hash).offsetTop - 85,
        left: 0,
        behavior: 'smooth',
      });
    }, 300);
  }
  return (
    <ErrorBoundary>
      <main className="main catalog-page">
        {pageLoaded ? (
          <React.Fragment>
            <Helmet>
              <title>{pageData.title.rendered}</title>
            </Helmet>
            <ErrorBoundary>
              <CatalogHeroSection data={pageData.acf.hero} />
            </ErrorBoundary>
            <ErrorBoundary>
              <CatalogGridSection {...pageData.acf.complects} />
            </ErrorBoundary>
            <ErrorBoundary>
              <CatalogProductsSection data={pageData.acf.isolation} />
            </ErrorBoundary>
            <ErrorBoundary>
              <CatalogCategoriesSection data={pageData.acf.products} />
            </ErrorBoundary>
            <QuestionForm />
          </React.Fragment>
        ) : null}
      </main>
    </ErrorBoundary>
  );
};

export default withPageData(43)(CatalogPage);

import React from 'react';

import withPageData from '../../containers/withPageData';
import CatalogHeroSection from './CatalogHeroSection';
import CatalogGridSection from './CatalogGridSection';
import CatalogProductsSection from './CatalogProductsSection';
import CatalogCategoriesSection from './CatalogCategoriesSection';
import { QuestionForm } from '../../components';

import './CatalogPage.sass';

const CatalogPage = ({ pageData, pageLoaded }) => (
  <main className="main catalog-page">
    {pageLoaded ? (
      <React.Fragment>
        <CatalogHeroSection data={pageData.acf.hero} />
        <CatalogGridSection {...pageData.acf.complects} />
        <CatalogProductsSection data={pageData.acf.isolation} />
        <CatalogCategoriesSection data={pageData.acf.products} />
        <QuestionForm />
      </React.Fragment>
    ) : null}
  </main>
);

export default withPageData(43)(CatalogPage);

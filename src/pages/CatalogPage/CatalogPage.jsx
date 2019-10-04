import React, { Component } from 'react';

import CatalogHeroSection from './CatalogHeroSection';
import CatalogGridSection from './CatalogGridSection';
import CatalogProductsSection from './CatalogProductsSection';
import CatalogCategoriesSection from './CatalogCategoriesSection';
import { QuestionForm } from '../../components';

import './CatalogPage.sass';

class CatalogPage extends Component {
  render() {
    return (
      <main className="main catalog-page">
        <CatalogHeroSection />
        <CatalogGridSection />
        <CatalogProductsSection />
        <CatalogCategoriesSection />
        <QuestionForm />
      </main>
    );
  }
}

export default CatalogPage;

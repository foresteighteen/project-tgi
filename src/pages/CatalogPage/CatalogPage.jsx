import React, { Component } from 'react';

import CatalogGridSection from './CatalogGridSection';
import CatalogProductsSection from './CatalogProductsSection';
import CatalogCategoriesSection from './CatalogCategoriesSection';
import { QuestionForm } from '../../components';

import './CatalogPage.sass';

class CatalogPage extends Component {
  render() {
    return (
      <main className="main catalog-page">
        <CatalogGridSection />
        <CatalogProductsSection />
        <CatalogCategoriesSection />
        <QuestionForm />
      </main>
    );
  }
}

export default CatalogPage;

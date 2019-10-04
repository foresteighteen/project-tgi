import React from 'react';

import ProductHeroSection from './ProductHeroSection';
import ProductInfoSection from './ProductInfoSection';
import ProductSliderSection from './ProductSliderSection';

import { QuestionForm } from '../../components';

import './ProductPage.sass';

const ProductPage = () => {
  return (
    <main className="main product-page">
      <ProductHeroSection />
      <ProductInfoSection />
      <ProductSliderSection />
      <QuestionForm />
    </main>
  );
};

export default ProductPage;

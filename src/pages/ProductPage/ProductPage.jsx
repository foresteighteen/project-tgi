import React from 'react';
import withPostData from '../../containers/withPostData';
import ProductInfoSection from './ProductInfoSection';
import ProductIncludesSection from './ProductIncludesSection';
import ProductSliderSection from './ProductSliderSection';
import ProductHeroSection from './ProductHeroSection';
import { QuestionForm } from '../../components';

import './ProductPage.sass';

const ProductPage = ({ postData, postLoaded }) => {
  if (!postLoaded) return null;
  // console.log(postData);
  return (
    <main className="main product-page">
      <ProductHeroSection data={postData.acf.hero} />
      <ProductInfoSection data={postData.acf.info} title={postData.title.rendered} />
      <ProductIncludesSection data={postData.acf.complects} />
      <ProductSliderSection data={postData.acf.production} />
      <QuestionForm />
    </main>
  );
};

export default withPostData('products')(ProductPage);

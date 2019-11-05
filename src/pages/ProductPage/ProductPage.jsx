import React from 'react';
import { Helmet } from 'react-helmet';

import withPostData from '../../containers/withPostData';
import ProductInfoSection from './ProductInfoSection';
import ProductIncludesSection from './ProductIncludesSection';
import ProductSliderSection from './ProductSliderSection';
import ProductHeroSection from './ProductHeroSection';
import { QuestionForm } from '../../components';
import { HeaderContext } from '../../containers/HeaderProvider';

import './ProductPage.sass';

const ProductPage = ({ postData, postLoaded }) => {
  if (!postLoaded) return <main className="main product-page"></main>;
  const { setHeaderTheme } = React.useContext(HeaderContext);

  React.useEffect(() => {
    setHeaderTheme('dark');
  }, []);

  // console.log(postData);
  return (
    <main className="main product-page">
      <Helmet>
        <title>{postData.title.rendered}</title>
      </Helmet>
      <ProductHeroSection data={postData.acf.hero} />
      <ProductInfoSection
        data={postData.acf.info}
        title={postData.title.rendered}
      />
      <ProductIncludesSection data={postData.acf.complects} />
      <ProductSliderSection data={postData.acf.production} />
      <QuestionForm />
    </main>
  );
};

export default withPostData('products')(ProductPage);

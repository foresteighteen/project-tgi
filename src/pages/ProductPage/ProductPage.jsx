import React from 'react';
import { Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import withPostData from '../../containers/withPostData';
import ProductInfoSection from './ProductInfoSection';
import ProductIncludesSection from './ProductIncludesSection';
import ProductSliderSection from './ProductSliderSection';
import ProductHeroSection from './ProductHeroSection';
import { QuestionForm, ErrorBoundary } from '../../components';
import { HeaderContext } from '../../containers/HeaderProvider';

import './ProductPage.sass';

const ProductPage = ({ postData, postLoaded }) => {
  if (!postLoaded) return <main className="main product-page"></main>;
  const { setHeaderTheme } = React.useContext(HeaderContext);

  React.useEffect(() => {
    setHeaderTheme('dark');
  }, []);

  const PAGE_TITLE = postData?.title?.rendered;

  if (!PAGE_TITLE) return <Redirect to="/" />;

  return (
    <ErrorBoundary>
      <Helmet>
        <title>{PAGE_TITLE}</title>
      </Helmet>

      <main className="main product-page">
        <ErrorBoundary>
          <ProductHeroSection data={postData.acf.hero} />
        </ErrorBoundary>
        <ErrorBoundary>
          <ProductInfoSection
            data={postData.acf.info}
            title={postData.title.rendered}
          />
        </ErrorBoundary>
        <ErrorBoundary>
          <ProductIncludesSection data={postData.acf.complects} />
        </ErrorBoundary>
        <ErrorBoundary>
          <ProductSliderSection data={postData.acf.production} />
        </ErrorBoundary>
        <QuestionForm />
      </main>
    </ErrorBoundary>
  );
};

export default withPostData('products')(ProductPage);

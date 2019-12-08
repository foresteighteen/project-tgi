import React from 'react';
import { Helmet } from 'react-helmet';

import withPageData from '../../containers/withPageData';
import { HeaderContext } from '../../containers/HeaderProvider';
import { ErrorBoundary } from '../../components';
import NewsHeroSection from './NewsHeroSection';
import NewsRowSection from './NewsRowSection';

import './NewsPage.sass';

const WP_PAGE_ID = 314;

const NewsPage = ({ pageData, pageLoaded }) => {
  if (!pageLoaded) return <main className="main news-page"></main>;
  const { setHeaderTheme } = React.useContext(HeaderContext);

  React.useEffect(() => {
    setHeaderTheme('dark');
  }, []);

  return (
    <ErrorBoundary>
      <Helmet>
        <title>{pageData.title.rendered}</title>
      </Helmet>
      <main className="main news-page">
        <NewsHeroSection data={pageData.acf} />
        <NewsRowSection />
      </main>
    </ErrorBoundary>
  );
};

export default withPageData(WP_PAGE_ID)(NewsPage);

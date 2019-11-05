import React from 'react';
import withPageData from '../../containers/withPageData';
import { HeaderContext } from '../../containers/HeaderProvider';
import { ErrorBoundary } from '../../components';
import NewsHeroSection from './NewsHeroSection';
import NewsRowSection from './NewsRowSection';

import './NewsPage.sass';

const NewsPage = ({ pageData, pageLoaded }) => {
  if (!pageLoaded) return <main className="main news-page"></main>;
  const { setHeaderTheme } = React.useContext(HeaderContext);

  React.useEffect(() => {
    setHeaderTheme('dark');
  }, []);

  return (
    <ErrorBoundary>
      <main className="main news-page">
        <NewsHeroSection data={pageData.acf} />
        <NewsRowSection />
      </main>
    </ErrorBoundary>
  );
};

export default withPageData(100)(NewsPage);

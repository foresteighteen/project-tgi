import React from 'react';
import { Helmet } from 'react-helmet';

import withPageData from '../../containers/withPageData';
import { HeaderContext } from '../../containers/HeaderProvider';

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
    <main className="main news-page">
      <Helmet>
        <title>{pageData.title.rendered}</title>
      </Helmet>
      <NewsHeroSection data={pageData.acf} />
      <NewsRowSection />
    </main>
  );
};

export default withPageData(100)(NewsPage);

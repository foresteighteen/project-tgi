import React from 'react';
import withPageData from '../../containers/withPageData';

import NewsHeroSection from './NewsHeroSection';
import NewsRowSection from './NewsRowSection';

import './NewsPage.sass';

const NewsPage = ({ pageData, pageLoaded }) => {
  if (!pageLoaded) return null;
  return (
    <main className="main news-page">
      <NewsHeroSection data={pageData.acf} />
      <NewsRowSection />
    </main>
  );
};

export default withPageData(100)(NewsPage);

import React from 'react';

import { NewsRow, SubscribeForm } from '../../components';

import NewsHeroSection from './NewsHeroSection';

import './NewsPage.sass';

const NewsPage = () => (
  <main className="main news-page">
    <NewsHeroSection />
    <div className="container">
      <NewsRow first />
      <SubscribeForm />
      <NewsRow />
    </div>
  </main>
);

export default NewsPage;

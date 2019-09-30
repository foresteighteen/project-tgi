import React from 'react';

import { NewsRow, SubscribeForm } from '../../components';

const NewsPage = () => (
  <main className="all-news-page">
    <div className="container">
      <NewsRow first />
      <SubscribeForm />
      <NewsRow />
    </div>
  </main>
);

export default NewsPage;

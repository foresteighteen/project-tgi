import React from 'react';

import { NewsRow, SubscribeForm } from '../../components';

const NewsPage = () => {
  return (
    <main className="all-news-page">
      <div className="container">
        <NewsRow first={true}/>
        <SubscribeForm />
        <NewsRow />
      </div>
    </main>
  );
};

export default NewsPage;

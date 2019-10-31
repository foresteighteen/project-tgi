import React from 'react';

import NewsItem from '../NewsItem';

import './NewsRow.sass';

const NewsRow = ({ data }) => {
  console.log(data)
  const renderNews = item => <NewsItem key={item.id} {...item} />;
  return (
    <div className="news-grid news-grid__bottom">
      {data.map(renderNews)}
    </div>
  );
};

export default NewsRow;

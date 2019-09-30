import React from 'react';

import NewsItem from '../NewsItem';

import './NewsRow.sass';

const NewsRow = props => {
  const { first } = props;
  return (
    <div className="news-grid news-grid__bottom">
      {first ? (
        <React.Fragment>
          <NewsItem />
          <NewsItem />
        </React.Fragment>
      ) : (
        <React.Fragment>
          <NewsItem />
          <NewsItem />
          <NewsItem />
          <NewsItem />
          <NewsItem />
          <NewsItem />
        </React.Fragment>
      )}
    </div>
  );
};

export default NewsRow;

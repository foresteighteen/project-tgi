import React from 'react';
import { Link } from 'react-router-dom';

import Time from '../Time';

import './NewsItem.sass';

const NewsItem = ({ title, date, className, acf, slug, id }) => (
  <article className={`news-item ${className}`}>
    <div className="news-item__img">
      <Link
        to={`/news/${slug}`}
      >
        <img src={acf.img} alt="" />
      </Link>
    </div>
    <div className="news-item__date">
      <Time date={date} />
    </div>
    <div className="news-item__title">
      <h3>{title.rendered}</h3>
    </div>
  </article>
);

export default NewsItem;

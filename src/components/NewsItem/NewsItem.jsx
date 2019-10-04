import React from 'react';
import { Link } from 'react-router-dom';

import Time from '../Time';

import './NewsItem.sass';

const NewsItem = ({ className }) => (
  <article className={`news-item ${className}`}>
    <div className="news-item__img">
      <Link to="/">
        <img src="/src/assets/img/news/1.png" alt="" />
      </Link>
    </div>
    <div className="news-item__date">
      <Time />
    </div>
    <div className="news-item__title">
      <h3>
        Компания «Завод Теплогидроизоляции» внесла вклад в реализацию
        масштабного проекта ООО «Тулачермет-Сталь»
      </h3>
    </div>
  </article>
);

export default NewsItem;

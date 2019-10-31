import React from 'react';
import { Link } from 'react-router-dom';
import { LangContext } from '../../containers/LangProvider';
import Time from '../Time';

import './NewsItem.sass';

const NewsItem = ({ meta, date, className, slug, lang }) => {
  const { state } = React.useContext(LangContext);
  
  return(
  <article className={`news-item ${className}`}>
    <div className="news-item__img">
      <Link to={`/${state.lang}/news/${slug}`}>
        <img src={meta.img} alt="" />
      </Link>
    </div>
    <div className="news-item__date">
      <Time date={date} />
    </div>
    <div className="news-item__title">
      <h3>{meta.title}</h3>
    </div>
  </article>
)};

export default NewsItem;

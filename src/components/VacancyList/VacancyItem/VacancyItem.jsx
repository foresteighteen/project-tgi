import React from 'react';
import uniqid from 'uniqid';
import { ButtonM } from '../../Buttons';

import './VacancyItem.sass';

const VacancyItem = ({position, salary, info, duties, buttonText, currencySymbol, link }) => {

  const renderInfo = ({desc, title}) => (
    <li className="vacancy__item__info__item" key={uniqid()}>
      {title}: {desc}
    </li>
  );
  return (
    <article className="vacancy__item">
      <div className="vacancy__item__title">
        <h3 className="font-nova">{position}</h3>
        <h4 className="font-nova">{salary.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')} {currencySymbol}</h4>
        <ul className="vacancy__item__info">
          {info.map(renderInfo)}
        </ul>
      </div>
      <div className="vacancy__item__duties" dangerouslySetInnerHTML={{ __html: duties }}></div>
      <div className="vacancy__item__btn">
        <a href={link} target="_blank" className="btn-main" rel="noopener noreferrer">
          <span className="btn-text">{buttonText}</span>
        </a>
        {/* <ButtonM text={buttonText} /> */}
      </div>
    </article>
  )
}

export default VacancyItem;


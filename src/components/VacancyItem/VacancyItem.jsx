import React from 'react';

import {ButtonM} from '../Buttons';

import './VacancyItem.sass';

const VacancyItem = ({position, salary, info, duties, buttonText, currencySymbol}) => {

  const renderInfo = ({desc, title}) => (
    <li className="vacancy__item__info__item">
      {title}: {desc}
    </li>
  );
  const renderDuty = ({title, items}) => (
    <li >      
      <ul>
      <li>{title}:</li>
        {items.map(e=><li className="vacancy__item__duties__item">{e}</li>)}
      </ul>
    </li>
  );
  // console.log(props)
  return (
    <article className="vacancy__item">
      <div className="vacancy__item__title">
        <h3 className="font-nova">{position}</h3>
        <h4 className="font-nova">{salary} {currencySymbol}</h4>
        <ul className="vacancy__item__info">
          {info.map(renderInfo)}
        </ul>
      </div>
      <ul className="vacancy__item__duties">
        {duties.map(renderDuty)}
      </ul>
      <div className="vacancy__item__btn">
        <ButtonM text={buttonText}/>
      </div>
    </article>
  )
}

export default VacancyItem;


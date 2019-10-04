import React from 'react';
import VacancyItem from '../VacancyItem';

const VacancyList = ({ vacancies, currencySymbol, buttonText }) => {
  const renderVacancy = props => <VacancyItem currencySymbol={currencySymbol} buttonText={buttonText} {...props} />;
  return (
    <ul className="vacancy__list">
      {vacancies.map(renderVacancy)}
    </ul>
  )
}

export default VacancyList;


import React from 'react';
import { useTransition, animated } from 'react-spring';
import VacancyItem from './VacancyItem';

const VacancyList = ({
  vacancies,
  currencySymbol,
  buttonText,
}) => {
  const transition = useTransition(vacancies, item => item.id, {
    from: { opacity: 0, transform: 'translate3d(0,150px,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: {
      opacity: 0,
      transform: 'translate3d(0,-150px,0)',
      position: 'absolute',
    },
  });
  return (
    <ul className="vacancy__list">
      {transition.map(({ item, key, props }) => {
        return (
          <animated.div
            key={key}
            style={{ ...props, zIndex: `-${key}` }}
            className="vacancy-wrapp"
          >
            <VacancyItem
              currencySymbol={currencySymbol}
              buttonText={buttonText}
              {...item}
            />
          </animated.div>
        );
      })}
    </ul>
  );
};

export default VacancyList;

import React from 'react';

import './Time.sass';

const Time = ({ date }) => {
  const monthNames = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря',
  ];

  const d = new Date(date);

  return (
    <time dateTime="2019-02-14 20:00" className="time-block">
      <span className="time-block__day">{d.getUTCDate()}</span>
      <span className="time-block__month">{monthNames[d.getMonth()]}</span>
      <span className="time-block__year">{d.getFullYear()}</span>
    </time>
  );
};

export default Time;

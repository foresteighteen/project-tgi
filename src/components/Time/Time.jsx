import React from 'react';

import './Time.sass';

const Time = () => {
  return (
    <time dateTime="2019-02-14 20:00" className="time-block">
      <span className="time-block__day">21</span>
      <span className="time-block__month">июля</span>
      <span className="time-block__year">2019</span>
    </time>
  );
};

export default Time;

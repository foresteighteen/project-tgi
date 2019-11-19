import React, { useContext } from 'react';
import { LangContext } from '../../containers/LangProvider';
import './Time.sass';

const Time = ({ date }) => {

  const { state: { lang }} = useContext(LangContext);

  const d = new Date(date);

  return (
    <time dateTime="2019-02-14 20:00" className="time-block">
      <span className="time-block">
        {d.toLocaleString(lang, {
          month: 'long',
          day: 'numeric',
        })}
      </span>
      <span className="time-block__year">{d.getFullYear()}</span>
    </time>
  );
};

export default Time;

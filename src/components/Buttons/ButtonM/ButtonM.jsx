import React from 'react';

import './ButtonM.sass';

const ButtonM = props => {
  const { text, classes, type, clickF = (e) =>{ console.log(e.target) } } = props;
  return (
    <button type={type || 'button'} className={`btn-main ${classes}`} onClick={(e)=>clickF(e)} >
      <span className="btn-text" >{text}</span>
    </button>
  );
};

export default ButtonM;

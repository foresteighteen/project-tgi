import React from 'react';

import './SidePhotoBlock.sass';

const SidePhotoBlock = ({ classes, title, textArray, imgSrc, imgAlt }) => (
  <div className={`side-photo__block ${classes}`}>
    <div className="side-photo__block__after"></div>
    <div className="side-photo__block__info">
      <h2 className="font-bold font-nova">
        <span className="side-photo__block__before"></span>
        {title || ''}
      </h2>
      <div className="side-photo__block__img">
        <img src={imgSrc} alt={imgAlt} />
      </div>
      {textArray.map((item, i) => (
        <p key={i}>{item.text}</p>
      ))}
    </div>
  </div>
);

export default SidePhotoBlock;

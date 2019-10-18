import React from 'react';

import './KtcIncludesItem.sass';

const KtcIncludesItem = ({ img_big, img_sm, text }) => {
  return (
    <div className="ktc-item">
      <div className="ktc-item-left">
        <img src={img_big} alt="" />
      </div>
      <div className="ktc-item-text">{text}</div>
      <div className="ktc-item-right">
        <img src={img_sm} alt="" />
      </div>
    </div>
  );
};

export default KtcIncludesItem;

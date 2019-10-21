import React from 'react';

import './ProductIncludesItem.sass';

const ProductIncludesItem = ({ img_big, img_sm, text }) => {
  return (
    <div className="product-item">
      <div className="product-item-left">
        <img src={img_big} alt="" />
      </div>
      <div className="product-item-text">{text}</div>
      <div className="product-item-right">
        <img src={img_sm} alt="" />
      </div>
    </div>
  );
};

export default ProductIncludesItem;

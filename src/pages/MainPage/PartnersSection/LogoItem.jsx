import React from 'react';

const LogoItem = ({ src, alt }) => (
  <div className="partners__item">
    <img src={src} alt={alt} className="partners__item__img" />
  </div>
);

export default LogoItem;

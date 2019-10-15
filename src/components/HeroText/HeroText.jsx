import React from 'react';

import './HeroText.sass';

const HeroText = ({ items }) => (
  <div className="hero__text">
    {Array.isArray(items) ? (
      items.map((item, i) => (
        <p key={i} className="hero__text__p">
          {item}
        </p>
      ))
    ) : (
      <p className="hero__text__p">{items || ''}</p>
    )}
  </div>
);

export default HeroText;

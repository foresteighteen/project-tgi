import React from 'react';

import './HeroText.sass';

const HeroText = ({ desc }) => {
  return (
    <div className="hero__text" dangerouslySetInnerHTML={{ __html: desc}} />
  );
};

export default HeroText;

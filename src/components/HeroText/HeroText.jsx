import React from 'react';

import './HeroText.sass';

const HeroText = ({ desc }) => (
  <div className="hero__text" dangerouslySetInnerHTML={{ __html: desc }}></div>
);

export default HeroText;

import React from 'react';

import './H1.sass';

const H1 = ({ text, className }) => (
  <h1 className={`heading heading--h1 ${className}`}>{text}</h1>
);

export default H1;

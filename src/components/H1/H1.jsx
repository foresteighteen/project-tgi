import React from 'react';

import './H1.sass';

const H1 = ({ children, className }) => (
  <h1 className={`heading heading--h1 ${className}`}>{children}</h1>
);

export default H1;

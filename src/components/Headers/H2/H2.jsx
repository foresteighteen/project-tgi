import React from 'react';

import './H2.sass';

const H2 = ({ text, classes }) => <h2 className={`h2__header ${classes}`}>{text}</h2>;

export default H2;

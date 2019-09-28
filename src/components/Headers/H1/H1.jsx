import React from 'react';

import './H1.sass';

const H1 = ({ text }) => <h1 className="main__header">{text}</h1>;
const H1white = ({ text }) => <h1 className="main__header color-w">{text}</h1>;

export { H1, H1white };

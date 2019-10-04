import React from 'react';
import { Link } from 'react-router-dom';

import './Breadcrumb.sass';

const Breadcrumb = () => {
  return (
    <nav className="breadcrumb">
      <Link to="/">Главная</Link>     
    </nav>
  )
}

export default Breadcrumb;

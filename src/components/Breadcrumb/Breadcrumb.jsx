import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LangContext } from '../../containers/LangProvider';
import './Breadcrumb.sass';

const Breadcrumb = props => {
  const { path = '', title = 'Главная'} = props;
  const { state } = React.useContext(LangContext);
  return (
    <nav className="breadcrumb">
      <Link to={`/${state.lang}/${path}`}>{title}</Link>     
    </nav>
  )
}

export default Breadcrumb;

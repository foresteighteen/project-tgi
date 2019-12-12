import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LangContext } from '../../containers/LangProvider';
import './Breadcrumb.sass';

import { getPageTitle } from '../../api';

const Breadcrumb = props => {
  const { path = '', title = '', id = 295 } = props;
  const [prevTitle, setData] = useState(title);
  const { state } = useContext(LangContext);

  useEffect(() => {
    const fetchTitle = async () => {
      const response = await getPageTitle(id, state.lang);
      if (!response.success) {
        setData(response.error);
      } else {
        setData(response.data);
      }
    };
    fetchTitle();
  }, [state.lang, id]);

  return (
    prevTitle && (
      <nav className="breadcrumb">
        <Link to={`/${state.lang}/${path}`}>{prevTitle}</Link>
      </nav>
    )
  );
};

export default Breadcrumb;

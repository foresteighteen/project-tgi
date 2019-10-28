import React from 'react';
import { Link } from 'react-router-dom';
import { LangContext } from '../../../../containers/LangProvider';
import RevealBlock from '../../../../containers/Animations/RevealBlock';

import './CatalogCategorie.sass';

const CatalogCategorie = ({ item }) => {
  const { state } = React.useContext(LangContext);
  const { img, post_title, post_name } = item;
  return (
    <RevealBlock>
      <Link
        to={`/${state.lang}/catalog/${post_name}`}
        className="catalog__categorie-item"
      >
        <h4 className="font-nova">{post_title}</h4>
        <img src={img} alt="" />
      </Link>
    </RevealBlock>
  );
};

export default CatalogCategorie;

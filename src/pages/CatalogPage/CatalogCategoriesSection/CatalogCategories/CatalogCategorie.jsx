import React from 'react';
import { Link } from 'react-router-dom';
import { LangContext } from '../../../../containers/LangProvider';

import './CatalogCategorie.sass';

const CatalogCategorie = ({ img }) => {
  const { state } = React.useContext(LangContext);
  return (
    <Link to={`/${state.lang}/product`} className="catalog__categorie-item">
      <h4 className="font-nova">Изделия из мин.ваты TECHWOOL</h4>
      <img src={`/src/assets/img/catalog/categories/${img}.png`} alt="" />
    </Link>
  );
};

export default CatalogCategorie;

import React, { Component } from 'react';

import CatalogGrid from './CatalogGrid';
import CatalogProducts from './CatalogProducts';
import CatalogCategories from './CatalogCategories';
import { ButtonM } from '../../components/Buttons';

export default class CatalogPage extends Component {
  render() {
    return (
      <main className="main">
        {/* <H1white text={'hello'} /> */}
        <CatalogGrid />
        <CatalogProducts />
        {/* <ButtonM classes={'red blue'} clickF={(e)=>{console.log(e)}} text={'hello'} /> */}
        <CatalogCategories />
      </main>
    );
  }
}

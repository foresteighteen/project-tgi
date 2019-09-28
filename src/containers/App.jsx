import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CatalogPage from '../pages/CatalogPage';
import KtcPage from '../pages/KtcPage';
import AboutPage from '../pages/AboutPage';

const App = () => (
  <div
    id="page-wrap"
    style={{
      overflow: 'auto',
      overflowX: 'hidden',
      // overflow: 'hidden',
    }}
  >
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" render={() => 'main'} />
        <Route exact path="/catalog" component={CatalogPage} />
        <Route exact path="/ktc" component={KtcPage} />
        <Route exact path="/about" component={AboutPage} />
        <Route render={() => 'else'} />
      </Switch>
      {/* <Footer /> */}
    </BrowserRouter>
  </div>
);

export default App;

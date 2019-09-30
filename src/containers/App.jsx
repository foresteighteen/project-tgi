import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Header, Footer } from '../components';

// import Header from '../components/Header';
// import Footer from '../components/Footer';
import CatalogPage from '../pages/CatalogPage';
import KtcPage from '../pages/KtcPage';
import AboutPage from '../pages/AboutPage';
import NewsPage from '../pages/NewsPage';
import QualityPage from '../pages/QualityPage';
import ContactsPage from '../pages/ContactsPage';
import CertificatesPage from '../pages/CertificatesPage';
import MainPage from '../pages/MainPage';

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
        <Route exact path="/" component={MainPage} />
        <Route exact path="/catalog" component={CatalogPage} />
        <Route exact path="/ktc" component={KtcPage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/news" component={NewsPage} />
        <Route exact path="/quality" component={QualityPage} />
        <Route exact path="/contacts" component={ContactsPage} />
        <Route exact path="/certificates" component={CertificatesPage} />
        <Route render={() => 'else'} />
      </Switch>
      {/* <Footer /> */}
    </BrowserRouter>
  </div>
);

export default App;

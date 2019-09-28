import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import ContactsPage from '../pages/ContactsPage';
import CertificatesPage from '../pages/CertificatesPage';
import TestMap from '../pages/TestMap';

const App = () => (
  <div id="page-wrap">
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" render={() => 'main'} />
        <Route exact path="/contacts" component={ContactsPage} />
        <Route exact path="/certificates" component={CertificatesPage} />
        <Route exact path="/map" component={TestMap} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;

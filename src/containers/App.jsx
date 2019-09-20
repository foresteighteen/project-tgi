import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import ContactsPage from '../pages/ContactsPage';

const App = () => (
  <div id="page-wrap">
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" render={() => 'main'} />
        <Route exact path="/contacts" component={ContactsPage} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;

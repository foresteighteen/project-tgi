import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';

const App = () => (
  <div
    id="page-wrap"
    style={{
      overflow: 'auto',
      overflowX: 'hidden',
    }}
  >
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" render={() => 'main'} />
        <Route render={() => 'else'} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;

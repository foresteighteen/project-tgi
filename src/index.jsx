import 'regenerator-runtime/runtime';
import 'core-js/modules/es.promise';
import 'core-js/modules/es.array.iterator';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import configureStore, { history } from './store';

const MOUNT_NODE = document.getElementById('app');

const store = configureStore({}, history);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <h1>Hello, TGI</h1>
    </ConnectedRouter>
  </Provider>,
  MOUNT_NODE,
);

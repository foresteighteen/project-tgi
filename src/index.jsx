import 'regenerator-runtime/runtime';
import 'core-js/modules/es.promise';
import 'core-js/modules/es.array.iterator';
import 'bootstrap/dist/css/bootstrap-grid.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import configureStore, { history } from './store';

import './assets/css/fonts.css';
import './assets/css/reset.scss';
import './assets/css/custom-grid.css';
import './assets/css/main.sass';

import App from './containers/App';

const MOUNT_NODE = document.getElementById('app');

const store = configureStore({}, history);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  MOUNT_NODE,
);

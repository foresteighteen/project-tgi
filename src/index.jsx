import React from 'react';
import ReactDOM from 'react-dom';


import 'bootstrap/dist/css/bootstrap-grid.min.css';

import './assets/css/fonts.css';
import './assets/css/reset.scss';
import './assets/css/custom-grid.css';
import './assets/css/main.sass';

import App from './containers/App';

const MOUNT_NODE = document.getElementById('app');

ReactDOM.render(
  <App />,
  MOUNT_NODE
);

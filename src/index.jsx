import 'core-js/stable';
import 'regenerator-runtime/runtime';
import 'whatwg-fetch';
import 'svgxuse';
// import 'core-js/modules/es.promise';
// import 'core-js/modules/es.array.iterator';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'react-image-lightbox/style.css';
import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import objectFitImages from 'object-fit-images';

import './assets/css/reset.scss';
import './assets/css/custom-grid.css';
import './assets/css/fonts.css';
import './assets/css/main.sass';

import App from './containers/App';

const rootNode = document.getElementById('app');

Modal.setAppElement(rootNode);

library.add(fab);

ReactDOM.render(<App />, rootNode);

objectFitImages();

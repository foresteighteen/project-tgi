import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Header, Footer, Main } from '../components';
import ScrollToTop from '../utils/ScrollToTop';

// import Header from '../components/Header';
// import Footer from '../components/Footer';

const App = () => (
  <div
    id="page-wrap"
    style={{
      overflow: 'auto',
      overflowX: 'hidden',
      height: '100%',
      // overflow: 'hidden',
    }}
  >
    <BrowserRouter>
      <Header />
      {/* <ScrollToTop /> */}
      <Main />
      <Footer />
    </BrowserRouter>
  </div>
);

export default App;

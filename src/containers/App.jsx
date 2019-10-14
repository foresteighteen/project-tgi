import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Header, Footer, Main } from '../components';
import ScrollToTop from '../utils/ScrollToTop';
import { ModalProvider } from '../containers/ContactsModal/ModalProvider';
import ContactsModal from '../containers/ContactsModal';

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
    <ModalProvider>
      <ContactsModal />
      <BrowserRouter>
        <Header />
        {/* <ScrollToTop /> */}
        <Main />
        <Footer />
      </BrowserRouter>
    </ModalProvider>
  </div>
);

export default App;

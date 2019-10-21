import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Header, Footer } from '../components';
import Main from './Main';
import ScrollToTop from '../utils/ScrollToTop';
import { ModalProvider } from '../containers/ContactsModal/ModalProvider';
import ContactsModal from '../containers/ContactsModal';
import LangProvider from './LangProvider';
// import Header from '../components/Header';
// import Footer from '../components/Footer';

const App = () => {
  return (
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
        <LangProvider>
          <ModalProvider>
            <ContactsModal />
            <Header />
            {/* <ScrollToTop /> */}
            <Main />
            <Footer />
          </ModalProvider>
        </LangProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;

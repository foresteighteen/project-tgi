import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Header, Footer } from '../components';
import Main from './Main';
// import ScrollToTop from '../utils/ScrollToTop';
import { ModalProvider } from '../containers/ContactsModal/ModalProvider';
import ContactsModal from '../containers/ContactsModal';
import LangProvider from './LangProvider';
import { HeaderProvider } from './HeaderProvider';
import ScrollRestoration from './ScrollRestoration';

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
        {/* <ScrollToTop /> */}
        <ScrollRestoration>
          <LangProvider>
            <HeaderProvider>
              <ModalProvider>
                <ContactsModal />
                <Header />
                <Main />
                <Footer />
              </ModalProvider>
            </HeaderProvider>
          </LangProvider>
        </ScrollRestoration>
      </BrowserRouter>
    </div>
  );
};

export default App;

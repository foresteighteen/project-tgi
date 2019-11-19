import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Header, Footer, ErrorBoundary } from '../components';
import Main from './Main';
import { ModalProvider } from '../containers/ContactsModal/ModalProvider';
import ContactsModal from '../containers/ContactsModal';
import LangProvider from './LangProvider';
import GlobalOptsProvider from './GlobalOptsProvider';
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
      <ErrorBoundary>
        <BrowserRouter>
          <ScrollRestoration>
            <LangProvider>
              <GlobalOptsProvider>
                <HeaderProvider>
                  <ModalProvider>
                    <ErrorBoundary>
                      <ContactsModal />
                    </ErrorBoundary>
                    <ErrorBoundary>
                      <Header />
                    </ErrorBoundary>
                    <ErrorBoundary>
                      <Main />
                    </ErrorBoundary>
                    <ErrorBoundary>
                      <Footer />
                    </ErrorBoundary>
                  </ModalProvider>
                </HeaderProvider>
              </GlobalOptsProvider>
            </LangProvider>
          </ScrollRestoration>
        </BrowserRouter>
      </ErrorBoundary>
    </div>
  );
};

export default App;

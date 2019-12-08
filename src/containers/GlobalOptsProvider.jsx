import React, { createContext } from 'react';
import withPageData from './withPageData';

export const GlobalOptsContext = createContext({});

const GlobalOptsProvider = props => {
  const { children, pageData, pageLoaded } = props;
  if (!pageLoaded) return null;
  return (
    <GlobalOptsContext.Provider value={pageData.acf}>
      {children}
    </GlobalOptsContext.Provider>
  );
};

export default withPageData(318)(GlobalOptsProvider);

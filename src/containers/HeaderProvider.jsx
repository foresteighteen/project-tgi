import React from 'react';

export const HeaderContext = React.createContext({ theme: 'dark' });

export const HeaderProvider = props => {
  const [theme, setTheme] = React.useState('dark');
  return (
    <HeaderContext.Provider value={{ theme, setHeaderTheme: setTheme }}>
      {props.children}
    </HeaderContext.Provider>
  );
};

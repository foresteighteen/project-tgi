import React from 'react';
import { withRouter } from 'react-router-dom';

const initialState = {
  lang: 'ru',
};

export const LangContext = React.createContext(initialState);

const reducer = (state, action) => {
  switch (action.type) {
    case 'changeLang':
      return { ...state, lang: action.lang };
    default:
      return state;
  }
};

const LangProvider = ({ children, history }) => {
  const { pathname } = history.location;
  const onloadPrefixEN = pathname.split('/')[1] === 'en' ? 'en' : false;

  const [state, dispatch] = React.useReducer(reducer, {
    lang: onloadPrefixEN || 'ru',
  });

  React.useEffect(() => {
    if (onloadPrefixEN) {
      return;
    }

    const savedLang = localStorage.getItem('tgi_lang');

    if (savedLang) {
      dispatch({ type: 'changeLang', lang: savedLang });
    } else {
      dispatch({ type: 'changeLang', lang: 'ru' });
      localStorage.setItem('tgi_lang', 'ru');
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem('tgi_lang', state.lang);
  }, [state.lang]);

  return (
    <LangContext.Provider value={{ state, dispatch }}>
      {children}
    </LangContext.Provider>
  );
};

export default withRouter(LangProvider);

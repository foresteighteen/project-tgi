import React, { useContext } from 'react';
import { Route, Switch, __RouterContext, Redirect } from 'react-router-dom';

import CatalogPage from '../../pages/CatalogPage';
import AboutPage from '../../pages/AboutPage';
import NewsPage from '../../pages/NewsPage';
import SingleNewsPage from '../../pages/SingleNewsPage';
import QualityPage from '../../pages/QualityPage';
import ContactsPage from '../../pages/ContactsPage';
import CertificatesPage from '../../pages/CertificatesPage';
import MainPage from '../../pages/MainPage';
import VacancyPage from '../../pages/VacancyPage';
import ProductPage from '../../pages/ProductPage';
import SitemapPage from '../../pages/SitemapPage';

import { LangContext } from '../../containers/LangProvider';

const useRouter = () => useContext(__RouterContext);

const RootRouter = ({ component: Component, exact, path, lang }) => (
  <Route
    exact={exact}
    path={path}
    render={props =>
      props.location.pathname === '/' && lang !== '' ? (
        <Redirect to={`/${lang}`} />
      ) : (
        <Component {...props} lang={lang} />
      )
    }
  />
);

const Main = () => {
  const { state } = useContext(LangContext);
  return (
    <Switch>
      <RootRouter
        exact
        path={`/:lang(${state.lang})?`}
        lang={state.lang}
        component={MainPage}
      />
      <Route exact path={`/:lang(${state.lang})?/`} component={MainPage} />
      <Route exact path={`/:lang(${state.lang})?/catalog`} component={CatalogPage} />
      <Route exact path={`/:lang(${state.lang})?/catalog/:slug`} component={ProductPage} />
      <Route exact path={`/:lang(${state.lang})?/about`} component={AboutPage} />
      <Route exact path={`/:lang(${state.lang})?/news`} component={NewsPage} />
      <Route exact path={`/:lang(${state.lang})?/news/:slug`} component={SingleNewsPage} />
      <Route exact path={`/:lang(${state.lang})?/quality`} component={QualityPage} />
      <Route exact path={`/:lang(${state.lang})?/contacts`} component={ContactsPage} />
      <Route exact path={`/:lang(${state.lang})?/certificates`} component={CertificatesPage} />
      <Route exact path={`/:lang(${state.lang})?/vacancy`} component={VacancyPage} />
      <Route exact path={`/:lang(${state.lang})?/sitemap`} component={SitemapPage} />
      <Redirect to="/" />
      {/* <Route render={() => <main className="main" style={{'display':'flex'}}><div className="container">404</div></main>} /> */}
    </Switch>
  );
};

export default Main;

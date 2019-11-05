import React, { useContext } from 'react';
import { Route, Switch, __RouterContext, Redirect } from 'react-router-dom';

import { animated, useTransition, config } from 'react-spring';

import CatalogPage from '../../pages/CatalogPage';
// import KtcPage from '../../pages/KtcPage';
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
  const { location } = useRouter();
  const { state } = useContext(LangContext);
  const transitions = useTransition(location, loc => loc.key, {
    // from: {
    //   transform: 'translate3d(0, 100%,0)',
    //   position: 'absolute',
    //   width: '100%',
    //   overflow: 'hidden',
    //   height: '100vh',
    // },
    // enter: { transform: 'translate3d(0,0,0)', overflowY: 'auto' },
    // leave: { transform: 'translate3d(0,-100%,0)' },
    // from: { opacity: 1 },
    // enter: { opacity: 1 },
    // leave: { opacity: 1 },
    // from: {
    //   opacity: 0,
    //   transform: 'perspective(400px) translate3d(-200px,0 ,0)',
    //   position: 'absolute',
    //   width: '100%',
    //   overflow: 'hidden',
    // },
    // enter: {
    //   opacity: 1,
    //   transform: 'perspective(400px) translate3d(0,0,0)',
    //   // position: 'relative',
    // },
    // leave: {
    //   opacity: 0,
    //   transform: 'perspective(400px) translate3d(200px,0 ,0)',
    // },
    // from: {
    //   opacity: 0,
    //   transform: 'perspective(400px) translate3d(0, 0,-1000px )',
    //   position: 'absolute',
    //   width: '100%',
    //   overflow: 'hidden',
    //   height: '100vh',
    // },
    // enter: {
    //   opacity: 1,
    //   transform: 'perspective(400px) translate3d(0,0,0)',
    //   overflowY: 'auto',
    // },
    // leave: {
    //   opacity: 0,
    //   transform: 'perspective(400px) translate3d(0, 0,200px)',
    // },
    // from: { opacity: 1, transform: 'translate3d(100%,0,0)', overflow: 'hidden'},
    // enter: { opacity: 1, transform: 'translate3d(0,0,0)', overflow: 'auto' },
    // leave: { opacity: 0, transform: 'translate3d(-100%,0,0)', position: 'absolute' },
    // from: { opacity: 1, transformOrigin: 'center left', transform: 'perspective(0) scale3d(1,1,1)'},
    // enter: { opacity: 1, transformOrigin: 'center left', transform: 'perspective(0) scale3d(1,1,1)' },
    // leave: { opacity: 0, transformOrigin: 'center left', transform: 'perspective(0) scale3d(-1,1,1)', position: 'absolute' },
    //
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    // from: { opacity: 1, width: 0 },
    // enter: { opacity: 1, width: 1000 },
    // leave: { opacity: 1, width: 0 },
    config: config.stiff,
    unique: true,
  });

  // return transitions.map(({ item, props, key }) => (
  //   <animated.div key={key} style={props}>
  //     <Switch location={item}>
  return (
    <Switch>
      <RootRouter
        exact
        path={'/:lang(en|ru)?'}
        lang={state.lang}
        component={MainPage}
      />
      <Route exact path="/:lang(en|ru)?/" component={MainPage} />
      <Route exact path="/:lang(en|ru)?/catalog" component={CatalogPage} />
      <Route
        exact
        path="/:lang(en|ru)?/catalog/:slug"
        component={ProductPage}
      />
      {/* <Redirect from="/:lang(en|ru)?/products/:slug" to="/:lang(en|ru)?/catalog/:slug" /> */}
      {/* <Route exact path="/:lang(en|ru)?/ktc" component={KtcPage} /> */}
      <Route exact path="/:lang(en|ru)?/about" component={AboutPage} />
      <Route exact path="/:lang(en|ru)?/news" component={NewsPage} />
      <Route
        exact
        path="/:lang(en|ru)?/news/:slug"
        component={SingleNewsPage}
      />
      <Route exact path="/:lang(en|ru)?/quality" component={QualityPage} />
      <Route exact path="/:lang(en|ru)?/contacts" component={ContactsPage} />
      <Route
        exact
        path="/:lang(en|ru)?/certificates"
        component={CertificatesPage}
      />
      <Route exact path="/:lang(en|ru)?/vacancy" component={VacancyPage} />
      <Route exact path="/:lang(en|ru)?/sitemap" component={SitemapPage} />
      <Route render={() => <div className="container">404</div>} />
    </Switch>
    //   </animated.div>
    // ));
  );
  // return transitions.map(({ item, props, key }) => (
  //   <animated.div key={key} style={props}>
  //     <Switch location={item}>
  //       <Route exact path="/" component={MainPage} />
  //       <Route exact path="/catalog" component={CatalogPage} />
  //       <Route exact path="/ktc" component={KtcPage} />
  //       <Route exact path="/product" component={ProductPage} />
  //       <Route exact path="/about" component={AboutPage} />
  //       <Route exact path="/news" component={NewsPage} />
  //       <Route exact path="/quality" component={QualityPage} />
  //       <Route exact path="/contacts" component={ContactsPage} />
  //       <Route exact path="/certificates" component={CertificatesPage} />
  //       <Route exact path="/vacancy" component={VacancyPage} />
  //       <Route render={() => 'else'} />
  //     </Switch>
  //   </animated.div>
  // ));
};

export default Main;

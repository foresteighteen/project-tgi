import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Waypoint } from 'react-waypoint';
import { animated, useSpring, useTrail, useChain, config } from 'react-spring';
import { LangContext } from '../../../../containers/LangProvider';

import './CatalogProductMain.sass';

const CatalogProductMain = ({ item, index }) => {
  const [animate, play] = useState(false);
  const { state } = React.useContext(LangContext);
  const { img, title, vertical, products = [] } = item;

  const springRef1 = useRef();
  const springPhotoBLock = useSpring({
    ref: springRef1,
    // transform: animate ? 'translate3d(0,0,0)' : 'translate3d(0,-100%,0)',
    from: { transform: 'translate3d(0,-100%,0)' },
    to: { transform: 'translate3d(0,0,0)' },
    // config: config.gentle,
  });

  const springRef2 = useRef();
  const springOverlay = useSpring({
    ref: springRef2,
    // backgroundColor: animate ? '#EE9D35': '#fff',
    // height: animate ? '0px': '100%',
    // top: animate ? '100%': '0%',
    from: {
      backgroundColor: '#EE9D35',
      height: '100%',
      top: '0%',
    },
    to: {
      backgroundColor: '#fff',
      height: '0px',
      top: '100%',
    },
  });

  const direction = i => {
    const result = (3 + i) % 3;
    let x = 0;
    if (result === 0) x = 'translate3d(20%,0,0)';
    if (result === 1) x = 'translate3d(-20%,0,0)';
    if (result === 2) x = 'translate3d(0,20%,0)';

    return x;
  };

  const springRef3 = useRef();
  const spring3 = useSpring({
    ref: springRef3,
    from: { transform: direction(index), opacity: '0' },
    to: { transform: 'translate3d(0,0,0)', opacity: '1' },
    config: config.slow,
  });

  const springRef4 = useRef();
  const spring4 = useTrail(products.length, {
    ref: springRef4,
    from: { transform: 'translate3d(0,50%,0)', opacity: '0' },
    to: { transform: 'translate3d(0,0,0)', opacity: '1' },
    config: config.slow,
  });

  const springRef5 = useRef();
  const spring5 = useSpring({
    ref: springRef5,
    from: { transform: 'translate3d(0,50%,0)', opacity: '0' },
    to: { transform: 'translate3d(0,0,0)', opacity: '1' },
  });

  useChain(animate ? [springRef1, springRef2, springRef3] : []);
  useChain(animate ? [springRef5, springRef4] : []);

  // const renderLi = ({ name, product }) => (
  //   <li className="catalog-product__grid__list-item" key={product.ID}>
  //     <Link to={`/${state.lang}/catalog/${product.post_name}`}>
  //       <span className="link-arrow"></span>
  //       <span className="fill-text" data-text={name}>
  //         {name}
  //       </span>
  //     </Link>
  //   </li>
  // );

  const renderLi = ({ ...animation }, index) => {
    const { product, name } = products[index];
    return (
      <animated.li
        className="catalog-product__grid__list-item"
        key={product.ID || index}
        style={animation}
      >
        <Link to={`/${state.lang}/catalog/${product.post_name}`}>
          <span className="link-arrow"></span>
          <span className="fill-text" data-text={name}>
            {name}
          </span>
        </Link>
      </animated.li>
    );
  };
  return (
    <React.Fragment>
      <Waypoint
        bottomOffset="40%"
        onEnter={() => {
          if (!animate) play(true);
        }}
      >
        <div className="catalog-product__grid">
          <div className="flip-text">
            <animated.h2 style={spring5}>{vertical}</animated.h2>
          </div>
          <animated.div
            className="catalog-product__grid__title"
            style={spring5}
          >
            <h3 dangerouslySetInnerHTML={{ __html: title }}></h3>
          </animated.div>
          <div className="catalog-product__grid__items">
            <ul className="catalog-product__grid__list">
              {/* {products.map(renderLi)} */}
              {spring4.map(renderLi)}
            </ul>
          </div>
          <div className="catalog-product__grid__img">
            <animated.div
              style={spring3}
              className="catalog-product__grid__img__wrap"
            >
              <img src={`${img}`} alt="" />
            </animated.div>
            <div className="white-bg">
              <animated.div className="white-bg__wrap" style={springPhotoBLock}>
                <animated.div
                  style={springOverlay}
                  className="white-bg__overlay-block"
                />
              </animated.div>
            </div>
          </div>
        </div>
        {/* <div className="catalog-product__grid grid-reverse">
      <div className="flip-text">
        <h2>Теплогидроизоляция труб</h2>
      </div>
      <div className="catalog-product__grid__title">
        <h3>Фасонные <br />изделия</h3>
      </div>
      <div className="catalog-product__grid__items">
        <ul className="catalog-product__grid__list">
          <li className="catalog-product__grid__list-item">
            <Link to="/product">
              <span className="link-arrow"></span><span className="fill-text" data-text="Пенополиуретан">Пенополиуретан</span>
            </Link>
          </li>
          <li className="catalog-product__grid__list-item">
            <Link to="/product">
              <span className="link-arrow"></span><span className="fill-text" data-text="Пенополиуретан">Пенополиуретан</span>
            </Link>
          </li>
          <li className="catalog-product__grid__list-item">
            <Link to="/product">
              <span className="link-arrow"></span><span className="fill-text" data-text="Пенополиуретан">Пенополиуретан</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="catalog-product__grid__img">
        <img src="/src/assets/img/catalog/fason.png" />
        <div className="white-bg"></div>
      </div>
    </div>
    <div className="catalog-product__grid grid-left flat-wbg">
      <div className="flip-text">
        <h2></h2>
      </div>
      <div className="catalog-product__grid__title">
        <h3>Плита</h3>
      </div>
      <div className="catalog-product__grid__items">
        <ul className="catalog-product__grid__list">
          <li className="catalog-product__grid__list-item">
            <Link to="/">
              <span className="link-arrow"></span><span className="fill-text" data-text="Пенополиуретан">Пенополиуретан</span>
            </Link>
          </li>
          <li className="catalog-product__grid__list-item">
            <Link to="/product">
              <span className="link-arrow"></span><span className="fill-text" data-text="Пенополиуретан">Пенополиуретан</span>
            </Link>
          </li>
          <li className="catalog-product__grid__list-item">
            <Link to="/product">
              <span className="link-arrow"></span><span className="fill-text" data-text="Пенополиуретан">Пенополиуретан</span>
            </Link>
          </li>
          <li className="catalog-product__grid__list-item">
            <Link to="/product">
              <span className="link-arrow"></span><span className="fill-text" data-text="Пенополиуретан">Пенополиуретан</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="catalog-product__grid__img">
        <img src="/src/assets/img/catalog/plita.png" />
        <div className="white-bg"></div>
      </div>
    </div>
     */}
      </Waypoint>
    </React.Fragment>
  );
};

export default CatalogProductMain;

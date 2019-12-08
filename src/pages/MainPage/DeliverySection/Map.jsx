import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
} from 'react-simple-maps';
import ReactTooltip from 'react-tooltip';
import WaterDropSVG from '../../../assets/img/water-drop.svg';

import './Map.sass';

const defaultStyles = {
  default: {
    // fill: '#F2A857',
    transition: 'transform .55s',
    // animation: 'upLift 1.55s reverse',
    position: 'relative',
    zIndex: '1',
    fill: '#F2A857',
    stroke: '#fff',
    outline: 'none',
  },
  hover: {
    fill: '#F78B28',
    stroke: '#fff',
    outline: 'none',
    transform: 'translate3d(10px,-10px,0)',
    animation: 'upLift 1.55s forwards normal',
    zIndex: '10',
    transition: 'transform .55s',
  },
  pressed: {
    fill: '#F78B28',
    stroke: '#fff',
    outline: 'none',
    // animation: 'upLift 1.55s forwards normal',
  },
};
const randomStyles = {
  default: {
    // fill: '#F2A857',
    transition: 'transform .55s',
    // animation: 'upLift 1.55s reverse',
    position: 'relative',
    zIndex: '1',
    fill: '#E0E0E0',
    stroke: '#fff',
    outline: 'none',
    pointerEvents: 'none',
  },
  hover: {
    fill: '#F78B28',
    stroke: '#fff',
    outline: 'none',
    transform: 'translate3d(10px,-10px,0)',
    animation: 'upLift 1.55s forwards normal',
    zIndex: '10',
    transition: 'transform .55s',
  },
  pressed: {
    fill: '#F78B28',
    stroke: '#fff',
    outline: 'none',
    // animation: 'upLift 1.55s forwards normal',
  },
};

const Tooltip = React.memo(({ activePath, texts }) => {
  return (
    <div
      className={classnames({
        tooltip: true,
        'tooltip-single': !activePath.oil || !activePath.water,
      })}
    >
      <div className="tooltip-cross"></div>
      {/* <div className="tooltip__title">{parsed.countryName}</div> */}
      <div className="tooltip__title">{activePath.name}</div>
      <div className="tooltip__list">
        {activePath.oil ? (
          <div className="tooltip__item">
            <WaterDropSVG className="water-drop" />
            <div className="tooltip__item-info">
              <p className="tooltip__item-title">{activePath.oil}</p>
              <p className="tooltip__item-subtitle">{texts.oil_text}</p>
            </div>
          </div>
        ) : null}
        {activePath.water ? (
          <div className="tooltip__item">
            <WaterDropSVG className="water-drop water-drop--blue" />
            <div className="tooltip__item-info">
              <p className="tooltip__item-title">{activePath.water}</p>
              <p className="tooltip__item-subtitle">{texts.water_text}</p>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
});

const Map = ({ activeData, texts }) => {
  const [data, setData] = useState(null);
  const [mapCompiled, setCompiled] = useState(false);
  const [activePath, setActivePath] = useState(null);
  useEffect(() => {
    setActivePath(activeData);
    async function fetchData() {
      const result = await fetch('/src/gadm36.json');
      const jsoned = await result.json();

      setData(jsoned);
    }
    if (!data) fetchData();
  }, [activeData]);

  const rerenderFunc = index => {
    // if (!index) return;
    const oldItems = data.objects.m.geometries;

    if (index === oldItems.length - 1) return;
    const newItems = [
      ...oldItems.slice(0, index),
      ...oldItems.slice(index + 1),
      ...oldItems.slice(index, index + 1),
    ];
    const newData = {
      ...data,
      objects: { m: { ...data.objects.m, geometries: newItems } },
    };
    setData(newData);
    // setData(oldData => ({
    //   ...oldData,
    //   objects: { m: { ...data.objects.m, geometries: newItems } },
    // }));
  };

  if (!data || !activePath) return null;

  return (
    <div className="delivery__map-container">
      <ComposableMap
        width={1600}
        height={1000}
        viewBox="0 0 1670 1000"
        style={{
          width: '100%',
          height: '100%',
          position: 'relative',
          zIndex: '1',
        }}
        projectionConfig={{
          scale: 900,
          xOffset: -500,
          yOffset: 450,
        }}
      >
        <ZoomableGroup disablePanning>
          {/* <Geographies ref={test} geography="/src/gadm36.json"> */}
          <Geographies geography={data} disableOptimization>
            {(geographies, projection) => {
              return geographies.map((geography, i) => {
                if (!mapCompiled && i === geographies.length - 1) {
                  setTimeout(() => {
                    ReactTooltip.rebuild();
                    setCompiled(true);
                  }, 0);
                }

                return (
                  <Geography
                    // onMouseEnter={() => {
                    //   rerenderFunc(i);
                    // }}
                    data-for="country-tooltip"
                    // data-event="click"
                    // data-tip={JSON.stringify({
                    //   countryName: geography.properties.NL_NAME_1,
                    // })}
                    data-tip={geography.properties.NL_NAME_1}
                    key={geography.properties.GID_1}
                    geography={geography}
                    projection={projection}
                    style={
                      activePath[geography.properties.NL_NAME_1]
                        ? defaultStyles
                        : randomStyles
                    }
                  />
                );
              });
            }}
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
      {/* Map 3d effect */}
      <ComposableMap
        width={1600}
        height={1000}
        className="bottom-map"
        viewBox="0 0 1670 1000"
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: '0',
          left: '0',
          zIndex: '0',
        }}
        projectionConfig={{
          scale: 900,
          xOffset: -500,
          yOffset: 450,
        }}
      >
        <ZoomableGroup disablePanning>
          <Geographies geography={data}>
            {(geographies, projection) => {
              return geographies.map((geography, i) => {
                return (
                  <Geography
                    geography={geography}
                    projection={projection}
                    key={geography.properties.GID_1}
                    style={{
                      default: {
                        fill: '#CC722F',
                        stroke: '#fff',
                        outline: 'none',
                        pointerEvents: 'none',
                      },
                    }}
                  />
                );
              });
            }}
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
      {/* <Tooltip activePath={activePath} texts={texts} /> */}
      <ReactTooltip
        id="country-tooltip"
        getContent={tdata => {
          return activePath[tdata] ? (
            <Tooltip activePath={activePath[tdata]} texts={texts} />
          ) : null;
        }}
        type="light"
      />
      {/* <ReactTooltip
        id="country-tooltip"
        getContent={data => {
          return activePath[data] ? (
            <div
              className={classnames({
                tooltip: true,
                'tooltip-single':
                  !activePath[data].oil || !activePath[data].water,
              })}
            >
              <div className="tooltip-cross"></div>
              <div className="tooltip__title">{activePath[data].name}</div>
              <div className="tooltip__list">
                {activePath[data].oil ? (
                  <div className="tooltip__item">
                    <WaterDropSVG className="water-drop" />
                    <div className="tooltip__item-info">
                      <p className="tooltip__item-title">
                        {activePath[data].oil}
                      </p>
                      <p className="tooltip__item-subtitle">{texts.oil_text}</p>
                    </div>
                  </div>
                ) : null}
                {activePath[data].water ? (
                  <div className="tooltip__item">
                    <WaterDropSVG className="water-drop water-drop--blue" />
                    <div className="tooltip__item-info">
                      <p className="tooltip__item-title">
                        {activePath[data].water}
                      </p>
                      <p className="tooltip__item-subtitle">
                        {texts.water_text}
                      </p>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          ) : null;
        }}
        type="light"
      /> */}
    </div>
  );
};

export default Map;

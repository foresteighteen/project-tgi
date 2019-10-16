import React, { useEffect, useState, useRef } from 'react';
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

const immutableMove = (arr, old_index, new_index) => {
  const copy = Object.assign([], arr);
  if (new_index >= copy.length) {
    let k = new_index - copy.length;
    while (k-- + 1) {
      copy.push(undefined);
    }
  }
  copy.splice(new_index, 0, copy.splice(old_index, 1)[0]);
  return copy;
};

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

const Map = ({ activeData }) => {
  const [data, setData] = useState(null);
  const [mapCompiled, setCompiled] = useState(false);
  const [activePath, {}] = useState(activeData);
  useEffect(() => {
    async function fetchData() {
      const result = await fetch('/src/gadm36.json');
      const jsoned = await result.json();
      setData(jsoned);
    }
    if (!data) fetchData();
  }, []);

  const rerenderFunc = index => {
    const oldItems = data.objects.m.geometries;
    if (index === oldItems.length - 1) return;
    // const left = oldItems.slice(0, index);
    // const right = oldItems.slice(index + 1);
    // const current = oldItems.slice(index, index + 1);
    // const newItems = [...left, ...right, ...current];
    const newItems = [
      ...oldItems.slice(0, index),
      ...oldItems.slice(index + 1),
      ...oldItems.slice(index, index + 1),
    ];
    // const test = data.objects.m.geometries.slice(index, index + 1);
    // const oldItems = data.objects.m.geometries;
    // const newItems = immutableMove(oldItems, index, oldItems.length - 1);
    const newData = {
      ...data,
      objects: { m: { ...data.objects.m, geometries: newItems } },
    };
    setData(newData);
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
          height: 'auto',
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
                    onMouseEnter={() => {
                      rerenderFunc(i);
                    }}
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
        viewBox="0 0 1670 1000"
        style={{
          width: '100%',
          height: 'auto',
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

      <ReactTooltip
        id="country-tooltip"
        getContent={data => {
          // const parsed = JSON.parse(data);
          // const parsed = activePath[data];
          return activePath[data] ? (
            <div
              className={classnames({
                tooltip: true,
                'tooltip-single': !activePath[data].oil || !activePath[data].water,
              })}
            >
              {/* <div className="tooltip__title">{parsed.countryName}</div> */}
              <div className="tooltip__title">{activePath[data].active}</div>
              <div className="tooltip__list">
                {activePath[data].oil ? (
                  <div className="tooltip__item">
                    <WaterDropSVG className="water-drop" />
                    <div className="tooltip__item-info">
                      <p className="tooltip__item-title">
                        {activePath[data].oil}
                      </p>
                      <p className="tooltip__item-subtitle">КОМПЛЕКТОВ</p>
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
                      <p className="tooltip__item-subtitle">КОМПЛЕКТОВ</p>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          ) : null;
        }}
        type="light"
      />
    </div>
  );
};

export default Map;

import React, { useEffect, useState, useRef } from 'react';
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

const Map = () => {
  const [data, setData] = useState(null);
  const [mapCompiled, setCompiled] = useState(false);

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
    const newItems = immutableMove(oldItems, index, oldItems.length - 1);
    const newData = {
      ...data,
      objects: { m: { ...data.objects.m, geometries: newItems } },
    };
    setData(newData);
  };
  if (!data) return null;
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
                    style={{
                      default: {
                        // fill: '#F2A857',
                        transition: 'transform .55s',
                        // animation: 'upLift 1.55s reverse',
                        position: 'relative',
                        zIndex: '1',
                        fill:
                          geography.properties.NL_NAME_1 === 'Республика Саха'
                            ? '#E0E0E0'
                            : '#F2A857',
                        stroke: '#fff',
                        outline: 'none',
                        pointerEvents:
                          geography.properties.NL_NAME_1 === 'Республика Саха'
                            ? 'none'
                            : 'all',
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
                    }}
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
          const parsed = true;
          return parsed ? (
            <div className="tooltip">
              {/* <div className="tooltip__title">{parsed.countryName}</div> */}
              <div className="tooltip__title">{data}</div>
              <div className="tooltip__list">
                <div className="tooltip__item">
                  <WaterDropSVG className="water-drop" />
                  <div className="tooltip__item-info">
                    <p className="tooltip__item-title">56 666</p>
                    <p className="tooltip__item-subtitle">КОМПЛЕКТОВ</p>
                  </div>
                </div>
                <div className="tooltip__item">
                  <WaterDropSVG className="water-drop water-drop--blue" />
                  <div className="tooltip__item-info">
                    <p className="tooltip__item-title">56 666</p>
                    <p className="tooltip__item-subtitle">КОМПЛЕКТОВ</p>
                  </div>
                </div>
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

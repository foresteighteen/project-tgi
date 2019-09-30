import React from 'react';
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
} from 'react-simple-maps';
import ReactTooltip from 'react-tooltip';
import WaterDropSVG from '../../../assets/img/water-drop.svg';

import './Map.sass';

const Map = () => {
  React.useEffect(() => {
    setTimeout(() => {
      ReactTooltip.rebuild();
    }, 100);
  }, []);
  return (
    <div className="delivery__map-container">
      <ComposableMap
        width={1600}
        height={1000}
        style={{
          width: '100%',
          height: 'auto',
        }}
        projectionConfig={{
          scale: 900,
          xOffset: -500,
          yOffset: 450,
        }}
      >
        <ZoomableGroup disablePanning>
          <Geographies geography="/src/gadm36.json">
            {(geographies, projection) =>
              geographies.map(geography => (
                <Geography
                  data-for="country-tooltip"
                  data-event="click"
                  data-tip={JSON.stringify({
                    countryName: geography.properties.NL_NAME_1,
                  })}
                  key={geography.properties.GID_1}
                  geography={geography}
                  projection={projection}
                  style={{
                    default: {
                      fill: '#F2A857',
                      stroke: '#fff',
                      outline: 'none',
                    },
                    hover: {
                      fill: '#F78B28',
                      stroke: '#fff',
                      outline: 'none',
                    },
                    pressed: {
                      fill: '#F78B28',
                      stroke: '#fff',
                      outline: 'none',
                    },
                  }}
                />
              ))
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
      <ReactTooltip
        id="country-tooltip"
        getContent={data => {
          const parsed = JSON.parse(data);
          return parsed ? (
            <div className="tooltip">
              <div className="tooltip__title">{parsed.countryName}</div>
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

import React, { useState, useRef } from 'react';
// import GoogleMapReact from 'google-map-react';
import {
  animated,
  useSpring,
  useChain,
  useTransition,
  config,
} from 'react-spring';

import { YMaps, Map, Placemark } from 'react-yandex-maps';

import { Spinner } from '../../components';

const MapContainer = ({
  zoom = 17,
  markers = [{ lat: 55.856131, lng: 37.558883 }],
  center = { lat: 55.856131, lng: 37.558883 },
  apiKey,
}) => {
  // const renderMarker = (map, maps) => {
  //   /* eslint-disable-next-line no-new */
  //   markers.forEach(
  //     marker =>
  //       new maps.Marker({
  //         map,
  //         position: new maps.LatLng(Number(marker.lat), Number(marker.lng)),
  //         // label: 'Empire',
  //       }),
  //   );
  // };
  const [animate, play] = useState(false);

  const springOverlay = useSpring({
    backgroundColor: animate ? '#fff' : '#EE9D35',
    width: animate ? '0px' : '100%',
    left: animate ? '100%' : '0%',
  });

  const defaultState = {
    center: [Number(center.lat), Number(center.lng)],
    zoom: Number(zoom),
  };

  return (
    <div className="container">
      <div className="contacts__map">
        <animated.div style={springOverlay} className="overlay-block" />
        {!animate && (
          <div className="contacts__map__spinner">
            <Spinner />
          </div>
        )}
        <YMaps>
          <Map
            onLoad={() => {
              play(true);
            }}
            state={defaultState}
            style={{ width: '100%', height: '100%' }}
          >
            {markers.map((marker, i) => (
              <Placemark key={i} geometry={[Number(marker.lat), Number(marker.lng)]} />
            ))}
          </Map>
        </YMaps>
        {/* <GoogleMapReact
        bootstrapURLKeys={{ key: apiKey }}
        defaultCenter={{ lat: Number(center.lat), lng: Number(center.lng) }}
        defaultZoom={Number(zoom)}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => renderMarker(map, maps)}
      >
      </GoogleMapReact> */}
      </div>
    </div>
  );
};

export default MapContainer;

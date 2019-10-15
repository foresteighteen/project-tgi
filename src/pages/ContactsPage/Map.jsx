import React from 'react';
import GoogleMapReact from 'google-map-react';

const Map = ({
  zoom = 17,
  markers = [{ lat: 55.856131, lng: 37.558883 }],
  center = { lat: 55.856131, lng: 37.558883 },
  apiKey,
}) => {
  const renderMarker = (map, maps) => {
    /* eslint-disable-next-line no-new */
    markers.forEach(
      marker =>
        new maps.Marker({
          map,
          position: new maps.LatLng(Number(marker.lat), Number(marker.lng)),
          // label: 'Empire',
        }),
    );
  };
  return (
    <div className="contacts__map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: apiKey }}
        defaultCenter={{ lat: Number(center.lat), lng: Number(center.lng) }}
        defaultZoom={Number(zoom)}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => renderMarker(map, maps)}
      >
      </GoogleMapReact>
    </div>
  );
};

export default Map;

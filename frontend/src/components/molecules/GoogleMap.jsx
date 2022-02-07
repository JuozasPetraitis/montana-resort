import React from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export const MapContainer = ({ google }) => {
  return (
    <>
      <Map
        google={google}
        zoom={10}
        Center={{
          lat: 40.854885,
          lng: -88.081807,
        }}
        style={{ width: 500, height: 500 }}
      ></Map>
    </>
  );
};

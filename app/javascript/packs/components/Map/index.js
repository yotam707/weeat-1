import React from 'react';
import { compose, withProps } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'

export default compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAhobpqGOLRrOHgz4OQjaP1MR8iQh2x3UE&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: '773px', width: '100%' }} />,
        containerElement: <div className="content-main map" style={{ height: '773px', width: '100%' }} />,
        mapElement: <div style={{ height: '773px', width: '100%' }} />,
    }),
    withScriptjs,
    withGoogleMap
)(() =>
    <GoogleMap defaultZoom={16} defaultCenter={{ lat: 32.0769979, lng: 34.7925037 }}>
        <Marker position={{ lat: 32.0769979, lng: 34.7925037 }} label="You are here"/>
    </GoogleMap>
);

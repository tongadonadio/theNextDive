import React, { Component } from 'react';
import { compose } from 'recompose';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps';

const MyMapComponent = compose(
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap
    defaultZoom={7}
    defaultCenter={{
      lat: props.latitude, //props.latitude,
      lng: props.longitude //props.longitude
    }}
  >
    <Marker
      position={{
        lat: props.latitude,
        lng: props.longitude
      }}
    />
  </GoogleMap>
));

class Map extends Component {
  state = {
    latitude: parseFloat(this.props.latitude),
    longitude: parseFloat(this.props.longitude)
  };

  render() {
    return (
      <div>
        {this.props.latitude &&
          this.props.longitude && (
            <MyMapComponent
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCINT-XIdCZ_iSVC9IUc4MhJfIF9Ml_xww&v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: '100%' }} />}
              containerElement={<div style={{ height: this.props.height }} />}
              mapElement={<div style={{ height: '100%' }} />}
              latitude={parseFloat(this.props.latitude)}
              longitude={parseFloat(this.props.longitude)}
            />
          )}
      </div>
    );
  }
}

export default Map;

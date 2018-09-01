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
    defaultZoom={8}
    defaultCenter={{ lat: props.position.lat, lng: props.position.lng }}
  >
    <Marker
      position={{ lat: props.position.lat, lng: props.position.lng }}
      onDragEnd={e => props.onMarkerDragEnd(e)}
      draggable={true}
    />
  </GoogleMap>
));

class Map extends Component {
  state = {
    position: {
      lat: this.props.latitude ? parseFloat(this.props.latitude) : 34.22567,
      lng: this.props.longitude ? parseFloat(this.props.longitude) : -77.944694
    }
  };

  onMarkerDragEnd = event => {
    this.props.updatePosition(event.latLng.lat(), event.latLng.lng());
    this.setState({
      position: { lat: event.latLng.lat(), lng: event.latLng.lng() }
    });
  };

  render() {
    return (
      <div>
        <MyMapComponent
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCINT-XIdCZ_iSVC9IUc4MhJfIF9Ml_xww&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: '100%' }} />}
          containerElement={<div style={{ height: '400px' }} />}
          mapElement={<div style={{ height: '100%' }} />}
          onMarkerDragEnd={this.onMarkerDragEnd}
          position={this.state.position}
        />
      </div>
    );
  }
}

export default Map;

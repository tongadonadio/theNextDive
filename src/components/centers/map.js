import React, { Component } from 'react';
import { compose } from 'recompose';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from 'react-google-maps';

const MyMapComponent = compose(
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap
    defaultZoom={7}
    defaultCenter={{
      lat: props.map.latitude,
      lng: props.map.longitude
    }}
  >
    {props.centers.map((center, i) => (
      <Marker
        key={i}
        position={{
          lat: parseFloat(center.latitude),
          lng: parseFloat(center.longitude)
        }}
        onClick={() => props.handleToggle(i)}
      >
        {props.showInfo[i] && (
          <InfoWindow onCloseClick={props.onToggleOpen}>
            <div style={{ cursor: 'pointer' }}>
              <img
                className="image-infoWindow"
                src={center.image}
                alt=""
                onClick={() => props.toggleModal(center)}
              />
              <h6 onClick={() => props.toggleModal(center)}>{center.name}</h6>
            </div>
          </InfoWindow>
        )}
      </Marker>
    ))}
  </GoogleMap>
));

class Map extends Component {
  state = {
    centers: this.props.centers,
    map: this.props.map,
    showInfo: []
  };

  handleToggle = i => {
    let array = [];
    array[i] = true;
    this.setState({ showInfo: array });
  };

  render() {
    return (
      <div>
        <MyMapComponent
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCINT-XIdCZ_iSVC9IUc4MhJfIF9Ml_xww&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: '100%' }} />}
          containerElement={<div style={{ height: this.props.height }} />}
          mapElement={<div style={{ height: '100%' }} />}
          map={this.state.map}
          centers={this.state.centers}
          showInfo={this.state.showInfo}
          handleToggle={this.handleToggle}
          toggleModal={this.props.toggleModal}
        />
      </div>
    );
  }
}

export default Map;

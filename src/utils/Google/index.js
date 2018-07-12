import React from 'react';
import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';

class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    }
    //binding this to event-handler functions
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClick = this.onMapClick.bind(this);
  }

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  onMapClick = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  }
  render() {
    const style = {
      width: '50vw',
      height: '75vh',
      'marginLeft': 'auto',
      'marginRight' : 'auto'
    }
    return (
      <Map 
      item
      xs = {12}
      google={this.props.google} 
      zoom={14}
      style={style}
      initialCenter= {{
        lat: 32.7767,
        lng: -96.7970
      }}
      onClick={this.onMapClick}
      >

        <Marker 
          onClick={this.onMarkerClick}
          name={'Current location'} 
        />

        <InfoWindow 
          onClose= {this.onInfoWindowClose}
          marker = { this.state.activeMarker}
          visible ={this.state.showingInfoWindow}
        >
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}
export default GoogleApiWrapper({
    key: (process.env.API_KEY)
})(MapContainer)
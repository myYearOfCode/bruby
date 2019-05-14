import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div classname="breweryLabel">{text}</div>;

class SimpleMap extends Component {

  static defaultProps = {
    center: {
      lat: 42.3819723,
      lng: -71.1062676
    },
    zoom: 13
  };

  createBreweriesLabels(){
    let labels = []
    if (this.props.breweries){
      return Object.keys(this.props.breweries).map(brewery => {
        if ((this.props.breweries[brewery].latitude) && (this.props.breweries[brewery].longitude)){
          return    <AnyReactComponent
                      lat={this.props.breweries[brewery].latitude}
                      lng={this.props.breweries[brewery].longitude}
                      text={this.props.breweries[brewery].name}
                    />
        }
      })
    }
  }

  render() {
    return (
      <div style={{ height: '30vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBzvVjZQzuICeFkBiz4Cv7LWkv4qfAhsjM" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={this.props.latitude}
            lng={this.props.longitude}
            text="My Marker"
          />
          {this.createBreweriesLabels()}
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;

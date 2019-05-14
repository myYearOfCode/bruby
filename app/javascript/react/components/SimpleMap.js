import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const MyLabelComponent = ({ text }) => <div className="breweryLabel">{text}</div>;

class SimpleMap extends Component {

  createDefaultcenter(){
    if (this.props && this.props.brewerLat && this.props.brewerLon){
      return {
          lat: this.props.brewerLat,
          lng: this.props.brewerLon
        }
    } else {
      return {
          lat: 59.95,
          lng: 30.33
      }
    }
  }

  createBreweriesLabels(){
    let labels = []
    Object.keys(this.props.breweries).forEach(brewery => {
      if ((this.props.breweries[brewery].latitude) && (this.props.breweries[brewery].longitude)){
        // console.log(labels)
        labels.push(
          <MyLabelComponent
            lat={this.props.breweries[brewery].latitude}
            lng={this.props.breweries[brewery].longitude}
            text={this.props.breweries[brewery].name}
          />)
      }
    })
    return labels
  }

  render() {
    console.log(this.props)
    return (
      <div style={{ height: '30vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBzvVjZQzuICeFkBiz4Cv7LWkv4qfAhsjM" }}
          defaultCenter={this.createDefaultcenter()}
          defaultZoom={12}
        >
          {this.createBreweriesLabels()}
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;

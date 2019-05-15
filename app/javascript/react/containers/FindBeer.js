import React, { Component } from 'react';
import Brewery from '../components/Brewery'
import SimpleMap from '../components/SimpleMap'

class findBrewery extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  componentDidMount(){
    fetch('/api/v1/geo')
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText}) ,`
        let error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      this.props.geoBrewerState(body)
    })
    .catch(error => console.error( `Error in fetch: ${error.message}` ));
  }

  showBreweries() {
    let breweries = {}
    if (this.props.distanceSortedBreweries !== null){
      breweries = this.props.distanceSortedBreweries
    } else {
      breweries = this.props.breweries
    }
    if (Object.keys(breweries).length > 0){
      let sorted = Object.keys(breweries).sort()
      return sorted.map(brewery => {
        return <Brewery
          key={breweries[brewery].id} brewery={breweries[brewery]}
        />
      })
    }
  }

  breweriesCount(){
    if (this.props.breweries && Object.keys(this.props.breweries).length > 0){
      return(
        <div className="breweriesCount">
          {Object.keys(this.props.breweries).length} breweries found.
        </div>
      )
    }
  }

  simpleMapWrapper(){
    let brewerLat;
    let brewerLon;
    if (this.props.brewerLocation && this.props.brewerLocation.latitude){
      brewerLat=this.props.brewerLocation.latitude
    }
    if (this.props.brewerLocation && this.props.brewerLocation.longitude){
      brewerLon=this.props.brewerLocation.longitude
    }
    if (brewerLat && brewerLon){
      return <SimpleMap
        brewerLon={brewerLon || 42.3572211}
        brewerLat={brewerLat || -71.0577151}
        breweries={this.props.breweries}
      />
    }
  }

  render () {
    return(
      <div className="findBeerBody">
        <div className="findBeerWrapper">
          <div className="scriptHeader">
            Find Beer
          </div>
          <div className="mapWrapper">
            {this.simpleMapWrapper()}
          </div>
          <form onSubmit={this.props.paginateStateBreweries}>
            <input
              name="state"
              onChange={this.props.setBrewerState}
              placeholder="enter your state"
              value={this.props.brewerState}
            />
          </form>
          {this.breweriesCount()}
          {this.showBreweries()}
        </div>
      </div>
    )
  }
}

export default findBrewery;

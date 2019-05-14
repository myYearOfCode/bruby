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
    let breweries = this.props.breweries
    if (this.props.breweries){
      return Object.keys(this.props.breweries).map(brewery => {
        return <Brewery
          key={this.props.breweries[brewery].id} brewery={this.props.breweries[brewery]}
        />
      })
    }
  }

  breweriesCount(){
    if (this.props.breweries && Object.keys(this.props.breweries).length > 0){
      return(
        <div className="breweriesCount">
          {Object.keys(this.props.breweries).length} total breweries found.
        </div>
      )
    }
  }

simpleMapWrapper(){
  // debugger
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
  console.log(this.props)
}

  render () {
    return(
      <div className="findBeerBody">
        <div className="findBeerWrapper">
          <div className="scriptHeader">
            Find Beer
          </div>
          {this.simpleMapWrapper()}
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

//https://api.openbrewerydb.org/breweries?page=2&per_page=30
//https://api.openbrewerydb.org/breweries?by_state=Massachusetts
//https://api.openbrewerydb.org/breweries
//{
//   id: 5494,
//   name: "MadTree Brewing",
//   brewery_type: "regional",
//   street: "3301 Madison Rd",
//   city: "Cincinnati",
//   state: "Ohio",
//   postal_code: "45209-1132",
//   country: "United States",
//   longitude: "-84.4239715",
//   latitude: "39.1563725",
//   phone: "5138368733",
//   website_url: "http://www.madtreebrewing.com",
//   updated_at: "2018-08-24T15:44:22.281Z",
//   tag_list: [
//     "patio"
//   ]
// }

//autocomplete
//https://api.openbrewerydb.org/breweries/autocomplete?query=dog

// how it work
// enter in state. enable geolocation
// or do it based on ip.
// // https://github.com/alexreisner/geocoder
// crawl the db in the bkg. however I can. save it to json.
// if the state isn't in the db then start crawling the State
// make an entry for every brewery found.
// run a search for the city targeted in the geolocation first.
// calculate
import React, { Component } from 'react';

class findBrewery extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }
  showBreweries() {
    let breweries = this.props.breweries
    if (this.props.breweries){
      return Object.keys(this.props.breweries).map(brewery => {
        return <div key={`${breweries[brewery].id}_${breweries[brewery].name}_${breweries[brewery].updated_at}`}>{breweries[brewery].name}</div>
      })
    }
  }
  breweriesCount(){
    if (this.props.breweries && Object.keys(this.props.breweries).length > 0){
      return(
        <div>
          {Object.keys(this.props.breweries).length} total breweries found.
        </div>
      )
    }
  }
  render () {
    return(
      <div>
        <form onSubmit={this.props.paginateStateBreweries}>
          <input name="state" onChange={this.props.setBrewerState}></input>
        </form>
        {this.breweriesCount()}
        {this.showBreweries()}
      </div>
    )
  }
}
export default findBrewery;

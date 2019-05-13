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
      <div className="findBeerBody">
        <div className="findBeerWrapper">
          <form onSubmit={this.props.paginateStateBreweries}>
          <input
            name="state"
            onChange={this.props.setBrewerState}
            placeholder="enter your state"
          ></input>
          </form>
          {this.breweriesCount()}
          {this.showBreweries()}
        </div>
      </div>
    )
  }
}


// <select>
//     <option value="Alabama">Alabama</option>
//     <option value="Alaska">Alaska</option>
//     <option value="Arizona">Arizona</option>
//     <option value="Arkansas">Arkansas</option>
//     <option value="California">California</option>
//     <option value="Colorado">Colorado</option>
//     <option value="Connecticut">Connecticut</option>
//     <option value="Delaware">Delaware</option>
//     <option value="District_Of_Columbia">District Of Columbia</option>
//     <option value="Florida">Florida</option>
//     <option value="Georgia">Georgia</option>
//     <option value="Hawaii">Hawaii</option>
//     <option value="Idaho">Idaho</option>
//     <option value="Illinois">Illinois</option>
//     <option value="Indiana">Indiana</option>
//     <option value="Iowa">Iowa</option>
//     <option value="Kansas">Kansas</option>
//     <option value="Kentucky">Kentucky</option>
//     <option value="Louisiana">Louisiana</option>
//     <option value="Maine">Maine</option>
//     <option value="Maryland">Maryland</option>
//     <option value="Massachusetts">Massachusetts</option>
//     <option value="Michigan">Michigan</option>
//     <option value="Minnesota">Minnesota</option>
//     <option value="Mississippi">Mississippi</option>
//     <option value="Missouri">Missouri</option>
//     <option value="Montana">Montana</option>
//     <option value="Nebraska">Nebraska</option>
//     <option value="Nevada">Nevada</option>
//     <option value="New_Hampshire">New Hampshire</option>
//     <option value="New_Jersey">New Jersey</option>
//     <option value="New_Mexico">New Mexico</option>
//     <option value="New_York">New York</option>
//     <option value="North_Carolina">North Carolina</option>
//     <option value="North_Dakota">North Dakota</option>
//     <option value="Ohio">Ohio</option>
//     <option value="Oklahoma">Oklahoma</option>
//     <option value="Oregon">Oregon</option>
//     <option value="Pennsylvania">Pennsylvania</option>
//     <option value="Rhode_Island">Rhode Island</option>
//     <option value="South_Carolina">South Carolina</option>
//     <option value="South_Dakota">South Dakota</option>
//     <option value="Tennessee">Tennessee</option>
//     <option value="Texas">Texas</option>
//     <option value="Utah">Utah</option>
//     <option value="Vermont">Vermont</option>
//     <option value="Virginia">Virginia</option>
//     <option value="Washington">Washington</option>
//     <option value="West_Virginia">West Virginia</option>
//     <option value="Wisconsin">Wisconsin</option>
//     <option value="Wyoming">Wyoming</option>
//   </select>
export default findBrewery;

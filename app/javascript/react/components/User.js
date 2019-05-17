import React, { Component } from 'react';

class User extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  render () {
    return(
      <div className="userInfoBody">
        <div className="userInfoWrapper">
          <div onClick={this.props.toggleUserExpanded}>
            <div className="scriptHeader">
              User Info
            </div>
          </div>
          <div>
            <div className="welcomeBackText">
              Welcome back{`, ${this.props.user.username}.` || "."}
            </div>

            <div className="userContainer">
              <div className="statsContainer">
                <div className="statsWrapper userWrapper">
                  <div className="numBrewsWrapper">
                    <div className="numBrews big">
                      10
                    </div>
                    <div className="numBrews description">
                      Brews
                      </div>
                  </div>
                  <div className="numRecipesWrapper">
                    <div className="numRecipes big">
                      8
                    </div>
                    <div className="numRecipes description">
                      recipes
                    </div>
                  </div>
                </div>
                <div className="statsWrapper userWrapper">
                  <div className="numHoursWrapper">
                    <div className="numHours big">
                      10
                    </div>
                    <div className="numBrews description">
                      Hours Brewing
                    </div>
                  </div>
                  <div className="numRecipesWrapper userWrapper">
                    <div className="numRecipes big">
                      8
                    </div>
                    <div className="numRecipes description">
                      Liters
                    </div>
                  </div>
                </div>
              </div>
              <div className="recapContainer">
                <div className="brewingRecap">
                  Brewed Last:
                </div>
                <div className="brewingRecap beerName">
                  Chocolate Stout
                </div>
                <div className="brewingRecap">
                  Brewing Next:
                </div>
                <div className="brewingRecap beerName">
                  NEIPA
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default User;

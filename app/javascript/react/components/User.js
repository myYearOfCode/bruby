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
            <h1 className="scriptHeader">
              User Info
            </h1>
          </div>
          <div>
            <div className="welcomeBackText">
              Welcome back{`, ${this.props.user.username}!` || "!"}.
            </div>
            <div className="statsWrapper">
              <div className="leftSide">
                <div className="upperLeft">
                  <div className="numBrews big">
                    10
                  </div>
                  <div className="numBrews description">
                    Brews
                    </div>
                </div>
                <div className="upperRight">
                  <div className="numRecipes big">
                    8
                  </div>
                  <div className="numRecipes description">
                    recipes
                  </div>
                </div>
                <div className="bottomLeft">
                  <div className="numHours big">
                    10
                  </div>
                  <div className="numBrews description">
                    Hours Brewing
                  </div>
                </div>
                <div className="bottomRight">
                  <div className="numRecipes big">
                    8
                  </div>
                  <div className="numRecipes description">
                    Liters
                  </div>
                </div>
              </div>
              <div className="rightSide">
                <div className="numSomething big">
                  8
                </div>
                <div className="numSomething description">
                  Liters
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

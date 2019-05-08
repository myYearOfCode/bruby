import React, { Component } from 'react';

class User extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  render () {
    return(
      <div className="userInfo">
        <div
          onClick={this.props.toggleUserExpanded}
        >
          <h1 className="scriptHeader">
            User Info
          </h1>
        </div>
          <div className={this.props.userInfoExpanded}
        >
        <div className="welcomeBackText">
          Welcome back{`, ${this.props.user.username}!` || "!"}.
        </div>
          <ul>
            <li>
              this will have your stats using big numbers whenever possible.
            </li>
            <li>
              # of brews
            </li>
            <li>
              # of recipes
            </li>
            <li>
              hours of brewing
            </li>
            <li>
              gallons of beer
            </li>
            <div classname="statsWrapper">
            <div classname="leftSide">
            </div>
            <div classname="rightSide">
            </div>
            </div>
          </ul>
        </div>
      </div>
    )
  }
}

export default User;

import React, { Component } from 'react';

class Brew extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }
  makeList() {
    if (this.props.sessions){
      return Object.keys(this.props.sessions).map(session => {
        return <div>{session}</div>
      })
    }
  }
  render () {
    return(
      <div>
        Brew log
        {this.makeList()}
      </div>
    )
  }
}

export default Brew;

import React, { Component } from 'react';
import RecipeForm from './RecipeForm'
import RecipesContainer from '../containers/RecipesContainer'
// this will be the main user page.
// this will have state, and grab data from fetch to get
// user name, currently selected 'brewNext'

class Brew extends Component {
  constructor(props){
    super(props);
    this.state = {
      recipeName: ''
    }
  }

  componentDidMount(){
    fetch('api/v1/users')
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
      this.setState({user: body.user.username})
    })
    .catch(error => console.error( `Error in fetch: ${error.message}` ));
  }

  render () {
    return(
      <div className="userContent" >
        Welcome back, {this.state.user}.
        <RecipesContainer />
        <hr/>
        <RecipeForm />
      </div>
    )
  }
}

export default Brew;

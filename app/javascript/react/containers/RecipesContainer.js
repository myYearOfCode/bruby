import React, { Component } from 'react';
import RecipeOverview from '../components/RecipeOverview'

class RecipesContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      recipes: []
    }
  }

  componentDidMount() {
    fetch('/api/v1/recipes')
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
      console.log(body);
      this.setState({recipes: body.recipes})
    })
    .catch(error => console.error( `Error in fetch: ${error.message}` ));
  }

  renderRecipes() {
    if (this.state.recipes.length > 0) {
      return this.state.recipes.map((recipe) => {
        return (
          <RecipeOverview recipe= {recipe} />
        )
      })
    }
    else {
      return ("")
    }
  }

  render () {
    return(
      <div>
        <h1> hello world! </h1>
        { this.renderRecipes() }
      </div>
    )
  }
}
export default RecipesContainer;

import React, { Component } from 'react';
import RecipeOverview from '../components/RecipeOverview'

class RecipesContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  renderRecipes() {
    if (this.props.recipes.length > 0) {
      return this.props.recipes.map((recipe) => {
        return (
          <RecipeOverview
            recipe={recipe}
            key={recipe.id}
            deleteRecipe={this.props.deleteRecipe}
            brewNextOnChangeHandler={this.props.brewNextOnChangeHandler}
          />
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
        <h1> USER RECIPES </h1>
        <div className="recipesWrapper">
          { this.renderRecipes() }
        </div>
      </div>
    )
  }
}
export default RecipesContainer;

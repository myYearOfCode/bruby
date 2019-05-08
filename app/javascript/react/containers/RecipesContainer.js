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
            user={this.props.user}
            recipe={recipe}
            key={recipe.id}
            deleteRecipe={this.props.deleteRecipe}
            brewNextOnChangeHandler={this.props.brewNextOnChangeHandler}
            loadRecipeHandler={this.props.loadRecipeHandler}
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
      <div className="yourRecipes">
        <h1 className="scriptHeader"> Your Recipes </h1>
        <div className="recipesWrapper">
          { this.renderRecipes() }
        </div>
      </div>
    )
  }
}
export default RecipesContainer;

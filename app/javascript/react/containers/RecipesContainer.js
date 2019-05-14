import React, { Component } from 'react';
import RecipeOverview from '../components/RecipeOverview'

class RecipesContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      recipesWrapper: "recipesWrapper is-active"
    }
    this.toggleSelected = this.toggleSelected.bind(this);
    // this.isBrewingNext = this.isBrewingNext.bind(this);
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
            recipeExpanded={this.props.recipeExpanded}
            viewRecipeHandler={this.props.viewRecipeHandler}
          />
        )
      })
    }
    else {
      return ("")
    }
  }

  toggleSelected() {
    if (this.state.recipesWrapper === "recipesWrapper" ) {
      this.setState({recipesWrapper: "recipesWrapper is-active" })
    } else {
      this.setState({recipesWrapper: "recipesWrapper"})
    }
  }

  render () {
    return(
      <div
        id="yourRecipes"
        className="yourRecipes"
      >
        <div
          className={this.state.recipesWrapper}
        >
          <div
          className="scriptHeader"
          >
          Recipes
          </div>
          { this.renderRecipes() }
        </div>
      </div>
    )
  }
}
export default RecipesContainer;

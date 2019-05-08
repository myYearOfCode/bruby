import React, { Component } from 'react';
import RecipeStep from './RecipeStep'

class RecipeForm extends Component {
  constructor(props){
    super(props);
  }

  recipeSteps() {
    let recipeStepNames = ["Preparing to Brew","Heating","Dough In","Mash 1","Mash 2","Mash Out","Hops 1","Hops 2","Hops 3","Hops 4"]
    return recipeStepNames.map((stepName, index) => {
      return (
        <RecipeStep
          stepName={stepName}
          recipeOnChangeHandler={this.props.recipeOnChangeHandler}
          step_num={index+1}
          time_val={this.props.recipe[`s${index+1}Time`] || 0}
          temp_val={this.props.recipe[`s${index+1}Temp`] || 0}
          key={`step${index+1}`}
        />
      )
    })
  }

  render () {



    return (
      <div>
        <div id="form_container">
          <form onSubmit={this.props.recipe.editRecipe !== null ? this.props.updateRecipe : this.props.createRecipe }>
            <div className="Recipe Builder">
            <h1 className="scriptHeader">
            Bruby Recipe Builder
            </h1>
              <ul>
                <div className="step_wrapper">
                  <label className="label" htmlFor="recipeName">Recipe Name </label>
                  <input
                    id="name"
                    name="name"
                    className="element text medium"
                    type="text"
                    value={this.props.recipe.name || ""}
                    onChange={this.props.recipeOnChangeHandler}
                  />
                </div>
                { this.recipeSteps() }
              </ul>
            </div>
            <div className="button-group">
              <button
                className="button"
                type="submit"
                value="Submit"
              >
                { this.props.recipe.editRecipe !== null ? "Update" : "Submit" }
              </button>
              <button
                className="button"
                onClick={this.props.clearForm}
                value="Clear"
              >
              Clear
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default RecipeForm

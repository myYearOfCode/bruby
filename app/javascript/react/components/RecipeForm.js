import React, { Component } from 'react';
import RecipeStep from './RecipeStep'

class RecipeForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      // recipesFormClass: "recipesFormClass"
    }
    // this.toggleSelected = this.toggleSelected.bind(this);
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

  // toggleSelected() {
  //   if (this.state.recipesFormClass === "recipesFormClass" ) {
  //     this.setState({recipesFormClass: "recipesFormClass is-active" })
  //   } else {
  //     this.setState({recipesFormClass: "recipesFormClass"})
  //   }
  // }

  render () {
    return (
      <div className="recipeBuilder">
        <div id="form_container">
          <form
          className="newRecipeForm"
          onSubmit={this.props.editRecipe !== null ? this.props.updateRecipe : this.props.createRecipe }>
            <div >
            <h3 className="scriptHeader">
              Recipe Builder
            </h3>
            </div>
            <div className="formElements">
                <div className="step_wrapper">
                  <div className="text_input">
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
                </div>
                <div className="step_wrapper">
                  <div className="text_input">
                    <label className="label" htmlFor="style">Style </label>
                    <input
                      id="style"
                      name="style"
                      className="element text medium"
                      type="text"
                      value={this.props.recipe.style || ""}
                      onChange={this.props.recipeOnChangeHandler}
                    />
                  </div>
                </div>
                <div className="step_wrapper">
                  <div className="text_input">
                    <label className="label" htmlFor="yeast">Yeast </label>
                    <input
                      id="yeast"
                      name="yeast"
                      className="element text medium"
                      type="text"
                      value={this.props.recipe.yeast || ""}
                      onChange={this.props.recipeOnChangeHandler}
                    />
                  </div>
                </div>
                <div className="step_wrapper">
                  <div className="text_input">
                    <label className="label" htmlFor="description">Description </label>
                    <textarea
                    rows="4"
                    id="description"
                    name="description"
                    className="element text medium"
                    type="text"
                    value={this.props.recipe.description || ""}
                    onChange={this.props.recipeOnChangeHandler}
                    />
                  </div>
                </div>
                { this.recipeSteps() }
              <div className="button-group">
                <button
                  className="button"
                  type="submit"
                  value="Submit"
                >
                  { this.props.editRecipe !== null ? "Update" : "Submit" }
                </button>
                <button
                  className="button"
                  onClick={this.props.clearForm}
                  value="Clear"
                >
                Clear
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default RecipeForm

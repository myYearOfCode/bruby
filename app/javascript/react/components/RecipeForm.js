import React, { Component } from 'react';
import RecipeStep from './RecipeStep'
import Dropzone from 'react-dropzone';

class RecipeForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      file: []
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
  onDrop(file) {
    if(file.length == 1) {
      this.setState({ file: file })
    } else {
      this.setState({ message: 'You can only upload one photo per board game.'})
    }
  }

  render () {

  console.log(this.state)

    return (
      <div className="recipeBuilder">
        <div id="form_container">
          <form onSubmit={this.props.recipe.editRecipe !== null ? this.props.updateRecipe : this.props.createRecipe }>
            <div
              onClick={this.props.toggleRecipeEditor}
            >
            <h3 className="scriptHeader">
              Recipe Builder
            </h3>
            </div>
            <div className={this.props.recipesFormExpanded}>
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
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default RecipeForm

//
// <section>
//   <div className="dropzone">
//     <Dropzone onDrop={this.onDrop}>
//       <p>Try dropping some files here, or click to select files to upload.</p>
//     </Dropzone>
//   </div>
//   <aside>
//     <h2>Dropped files</h2>
//     <ul>
//       {
//         this.state.files.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
//       }
//     </ul>
//   </aside>
// </section>

import React, { Component } from 'react';
import TextField from './TextField'
import RecipeStep from './RecipeStep'

class RecipeForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      recipeName: ''
    }
    this.handlerFunction = this.handlerFunction.bind(this)
  }

  handlerFunction(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  render () {

    let recipeStepNames = ["Preparing to Brew","Heating","Dough In","Mash 1","Mash 2","Mash Out","Hops 1","Hops 2","Hops 3","Hops 4"]

    let recipeSteps = () => {
      return recipeStepNames.map((stepName, index) => {
        return (
          <div>
            <RecipeStep
              stepName={stepName}
              handlerFunction={this.handlerFunction}
              step_num={index+1}
              time_val={this.state[`s${index+1}time`]}
              temp_val={5}
            />
          </div>
        )
      })
    }

    return (
      <div>
        <div id="form_container">
            <h1>
              Bruby Recipe Builder
            </h1>
            <form method="post" action="/setRecipe">
              <div className="MyMatic Recipe Builder">
              <ul>
                <div className="step_wrapper">
                  <label className="label" htmlFor="recipeName">Recipe Name </label>
                  <input
                    id="recipeName"
                    name="recipeName"
                    className="element text medium"
                    type="text"
                    onChange={this.handlerFunction}
                  />
                </div>
                {recipeSteps()}
              </ul>
              <input type="hidden" name="form_id" value="53587" />


          </div>
          <div className="button-group">
            <button className="button" onClick={this.handleClearForm}>Clear</button>
            <input className="button" type="submit" value="Submit" />
          </div>
        </form>
        </div>
      </div>
    )
  }

}

export default RecipeForm

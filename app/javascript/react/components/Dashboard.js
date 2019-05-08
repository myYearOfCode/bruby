import React, { Component } from 'react';
import RecipeForm from './RecipeForm'
import { Link } from 'react-router'
import RecipesContainer from '../containers/RecipesContainer'
import Brew from './Brew'
import User from './User'

class Dashboard extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: {
        username: "",
        id: null,
        brewNext: null
      },
      recipeName: '',
      recipes: [],
      name:   "",
      s1Temp: 0,
      s1Time: 0,
      s2Temp: 0,
      s2Time: 0,
      s3Temp: 0,
      s3Time: 0,
      s4Temp: 0,
      s4Time: 0,
      s5Temp: 0,
      s5Time: 0,
      s6Temp: 0,
      s6Time: 0,
      s7Temp: 0,
      s7Time: 0,
      s8Temp: 0,
      s8Time: 0,
      s9Temp: 0,
      s9Time: 0,
      s10Temp: 0,
      s10Time: 0,
      editRecipe: null,
      recipeExpanded: 0,
      recipesFormExpanded: "recipesFormExpanded",
      userInfoExpanded: "userDashboard is-active"
    }
    this.createRecipe = this.createRecipe.bind(this);
    this.recipeOnChangeHandler = this.recipeOnChangeHandler.bind(this);
    this.clearForm = this.clearForm.bind(this);
    this.deleteRecipe = this.deleteRecipe.bind(this);
    this.brewNextOnChangeHandler = this.brewNextOnChangeHandler.bind(this);
    this.loadRecipeHandler = this.loadRecipeHandler.bind(this);
    this.updateRecipe = this.updateRecipe.bind(this);
    this.viewRecipeHandler = this.viewRecipeHandler.bind(this);
    this.toggleRecipeEditor = this.toggleRecipeEditor.bind(this);
    this.toggleUserExpanded = this.toggleUserExpanded.bind(this);
  }

  clearForm(event) {
    if (event){
      event.preventDefault()
    }
    this.setState({
      name:   "",
      s1Temp: 0,
      s1Time: 0,
      s2Temp: 0,
      s2Time: 0,
      s3Temp: 0,
      s3Time: 0,
      s4Temp: 0,
      s4Time: 0,
      s5Temp: 0,
      s5Time: 0,
      s6Temp: 0,
      s6Time: 0,
      s7Temp: 0,
      s7Time: 0,
      s8Temp: 0,
      s8Time: 0,
      s9Temp: 0,
      s9Time: 0,
      s10Temp: 0,
      s10Time: 0,
      editRecipe: null
    })
  }

  recipeOnChangeHandler(event) {
    console.log(event.target.value)
    this.setState({ [event.target.name]: event.target.value })
  }

  brewNextOnChangeHandler(event) {
    fetch(`/api/v1/users/${this.state.user.id}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({user: {
          brewNext: event.target.value,
          id: this.state.user.id
        }
      })
    })
    .then(response => {
      console.log(response)
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
      this.setState({user: body.user})
    })
    .catch(error => {
      console.error( `Error in fetch: ${error.message}`)
      this.setState({error: error.message})
    });
  }

  deleteRecipe(event) {
    event.preventDefault()
    fetch(`/api/v1/recipes/${event.target.value}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        recipe: {
          id: event.target.value
        }
      })
    })
    .then(response => {
      console.log(response)
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
      this.setState({recipes: body.recipes, error: ""})
    })
    .catch(error => {
      console.error( `Error in fetch: ${error.message}`)
      this.setState({error: error.message})
    });
  }

  viewRecipeHandler(event){
    if (this.state.recipeExpanded === event){
      this.setState({recipeExpanded: null})
    } else {
      this.setState({recipeExpanded: event})
    }
  }

  toggleUserExpanded() {
    if (this.state.userInfoExpanded === "userDashboard" ) {
      this.setState({userInfoExpanded: "userDashboard is-active" })
    } else {
      this.setState({userInfoExpanded: "userDashboard"})
    }
  }

  loadRecipeHandler(event){
    this.setState({editRecipe: event.target.value})
    // X set editRecipe to recipe id
    fetch(`api/v1/recipes/${event.target.value}`)
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
      this.setState({
        name:   body.recipe.name,
        s1Temp: body.recipe.s1Temp.toString(),
        s1Time: body.recipe.s1Time.toString(),
        s2Temp: body.recipe.s2Temp.toString(),
        s2Time: body.recipe.s2Time.toString(),
        s3Temp: body.recipe.s3Temp.toString(),
        s3Time: body.recipe.s3Time.toString(),
        s4Temp: body.recipe.s4Temp.toString(),
        s4Time: body.recipe.s4Time.toString(),
        s5Temp: body.recipe.s5Temp.toString(),
        s5Time: body.recipe.s5Time.toString(),
        s6Temp: body.recipe.s6Temp.toString(),
        s6Time: body.recipe.s6Time.toString(),
        s7Temp: body.recipe.s7Temp.toString(),
        s7Time: body.recipe.s7Time.toString(),
        s8Temp: body.recipe.s8Temp.toString(),
        s8Time: body.recipe.s8Time.toString(),
        s9Temp: body.recipe.s9Temp.toString(),
        s9Time: body.recipe.s9Time.toString(),
        s10Temp: body.recipe.s10Temp.toString(),
        s10Time: body.recipe.s10Time
      })
    })
    .catch(error => console.error( `Error in fetch: ${error.message}` ));

    // X api call for recipe.
    // X set state to all recipe steps
    // change 'submit' button in form to 'update'
    // set updateRecipe to the onClick for the update button
    // change interface somehow as well.
    // use updateRecipe()
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
      console.log(body.user)
      this.setState({user: body.user})
    })
    .catch(error => console.error( `Error in fetch: ${error.message}` ));

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

      this.setState({recipes: body.recipes})
    })
    .catch(error => console.error( `Error in fetch: ${error.message}` ));

    fetch('api/v1/sessions')
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
      console.log(body)
      this.setState({sessions: body})
    })
    .catch(error => console.error( `Error in fetch: ${error.message}` ));
  }

  createRecipe(event){
    event.preventDefault()
    fetch('/api/v1/recipes/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        recipe: {
          name:   this.state.name,
          s1Temp: this.state.s1Temp,
          s1Time: this.state.s1Time,
          s2Temp: this.state.s2Temp,
          s2Time: this.state.s2Time,
          s3Temp: this.state.s3Temp,
          s3Time: this.state.s3Time,
          s4Temp: this.state.s4Temp,
          s4Time: this.state.s4Time,
          s5Temp: this.state.s5Temp,
          s5Time: this.state.s5Time,
          s6Temp: this.state.s6Temp,
          s6Time: this.state.s6Time,
          s7Temp: this.state.s7Temp,
          s7Time: this.state.s7Time,
          s8Temp: this.state.s8Temp,
          s8Time: this.state.s8Time,
          s9Temp: this.state.s9Temp,
          s9Time: this.state.s9Time,
          s10Temp: this.state.s10Temp,
          s10Time: this.state.s10Time
        }
      })
    })
    .then(response => {
      console.log(response)
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
      this.clearForm()
      this.setState({recipes: body.recipes, error: ""})
    })
    .catch(error => {
      console.error( `Error in fetch: ${error.message}`)
      this.setState({error: error.message})
    });
  }

  updateRecipe(event){
    event.preventDefault()
    fetch(`/api/v1/recipes/${this.state.editRecipe}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        recipe: {
          name:   this.state.name,
          s1Temp: this.state.s1Temp,
          s1Time: this.state.s1Time,
          s2Temp: this.state.s2Temp,
          s2Time: this.state.s2Time,
          s3Temp: this.state.s3Temp,
          s3Time: this.state.s3Time,
          s4Temp: this.state.s4Temp,
          s4Time: this.state.s4Time,
          s5Temp: this.state.s5Temp,
          s5Time: this.state.s5Time,
          s6Temp: this.state.s6Temp,
          s6Time: this.state.s6Time,
          s7Temp: this.state.s7Temp,
          s7Time: this.state.s7Time,
          s8Temp: this.state.s8Temp,
          s8Time: this.state.s8Time,
          s9Temp: this.state.s9Temp,
          s9Time: this.state.s9Time,
          s10Temp: this.state.s10Temp,
          s10Time: this.state.s10Time,
        }
      })
    })
    .then(response => {
      console.log(response)
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
      this.clearForm()
      this.setState({recipes: body.recipes, error: ""})
    })
    .catch(error => {
      console.error( `Error in fetch: ${error.message}`)
      this.setState({error: error.message})
    });
  }

  toggleRecipeEditor() {
    if (this.state.recipesFormExpanded === "recipesFormExpanded" ) {
      this.setState({recipesFormExpanded: "recipesFormExpanded is-active" })
    } else {
      this.setState({recipesFormExpanded: "recipesFormExpanded"})
    }
  }
  render () {
    let makePayload = () => {
      return {
        name:   this.state.name || 0,
        s1Temp: this.state.s1Temp || 0,
        s1Time: this.state.s1Time || 0,
        s2Temp: this.state.s2Temp || 0,
        s2Time: this.state.s2Time || 0,
        s3Temp: this.state.s3Temp || 0,
        s3Time: this.state.s3Time || 0,
        s4Temp: this.state.s4Temp || 0,
        s4Time: this.state.s4Time || 0,
        s5Temp: this.state.s5Temp || 0,
        s5Time: this.state.s5Time || 0,
        s6Temp: this.state.s6Temp || 0,
        s6Time: this.state.s6Time || 0,
        s7Temp: this.state.s7Temp || 0,
        s7Time: this.state.s7Time || 0,
        s8Temp: this.state.s8Temp || 0,
        s8Time: this.state.s8Time || 0,
        s9Temp: this.state.s9Temp || 0,
        s9Time: this.state.s9Time || 0,
        s10Temp: this.state.s10Temp || 0,
        s10Time: this.state.s10Time || 0,
        editRecipe: this.state.editRecipe
      }
    }
    return(
      <div className="userContent" >
        <User
          userInfoExpanded={this.state.userInfoExpanded}
          toggleUserExpanded={this.toggleUserExpanded}
          user={this.state.user}
        />
        <RecipesContainer
          loadRecipeHandler={this.loadRecipeHandler}
          deleteRecipe={this.deleteRecipe}
          brewNextOnChangeHandler={this.brewNextOnChangeHandler}
          viewRecipeHandler={this.viewRecipeHandler}
          recipes={this.state.recipes}
          user={this.state.user}
          recipeExpanded={this.state.recipeExpanded}
        />
        <RecipeForm
          clearForm={this.clearForm}
          createRecipe={this.createRecipe}
          recipeOnChangeHandler={this.recipeOnChangeHandler}
          updateRecipe={this.updateRecipe}
          recipe={makePayload()}
          recipesFormExpanded={this.state.recipesFormExpanded}
          toggleRecipeEditor={this.toggleRecipeEditor}
        />
        <Brew sessions={this.state.sessions}/>
      </div>
    )
  }
}

export default Dashboard;

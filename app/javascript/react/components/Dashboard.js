import React, { Component } from 'react';
import RecipeForm from './RecipeForm'
import { Link } from 'react-router'
import RecipesContainer from '../containers/RecipesContainer'
// this will be the main user page.
// this will have state, and grab data from fetch to get
// user name, currently selected 'brewNext'

class Dashboard extends Component {
  constructor(props){
    super(props);
    this.state = {
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
      s10Time: 0
    }
    this.createRecipe = this.createRecipe.bind(this);
    this.recipeOnChangeHandler = this.recipeOnChangeHandler.bind(this);
    this.clearForm = this.clearForm.bind(this);
    this.deleteRecipe = this.deleteRecipe.bind(this);
  }

  clearForm(event) {
    event.preventDefault()
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
      s10Time: 0
    })
  }

  recipeOnChangeHandler(event) {
    console.log(event.target.value)
    this.setState({ [event.target.name]: event.target.value })
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
      // if (body.hasOwnProperty('error')) {
      //   console.log(`fetch error ${body.error}`)
      // } else {
        this.setState({recipes: body.recipes, error: ""})
      // }
    })
    .catch(error => {
      console.error( `Error in fetch: ${error.message}`)
      this.setState({error: error.message})
    });
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
      }
    }
    return(
      <div className="userContent" >
        <div>
          Welcome back, {this.state.user}.
        </div>
        <Link to="/dashboard/recipes">View Recipes</Link>-
        <Link to="/dashboard/newRecipe">New Recipe</Link>
        <RecipesContainer
          recipes={this.state.recipes}
          deleteRecipe={this.deleteRecipe}
        />
        <hr/>
        <RecipeForm
          clearForm={this.clearForm}
          createRecipe={this.createRecipe}
          recipeOnChangeHandler={this.recipeOnChangeHandler}
          recipe={makePayload()}
        />
      </div>
    )
  }
}

export default Dashboard;

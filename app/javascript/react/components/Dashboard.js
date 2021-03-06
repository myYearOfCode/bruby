import React, { Component } from 'react';
// import { Link } from 'react-router'

import RecipeForm from './RecipeForm'
import RecipesContainer from '../containers/RecipesContainer'
import Brew from './Brew'
import User from './User'
import NowBrewing from './NowBrewing'

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
      userInfoExpanded: "userDashboard is-active",
      nowBrewing: false,
      nowBrewingSesId: "",
      nowBrewingSession: {},
    }
    this.createRecipe = this.createRecipe.bind(this);
    this.recipeOnChangeHandler = this.recipeOnChangeHandler.bind(this);
    this.clearForm = this.clearForm.bind(this);
    this.deleteRecipe = this.deleteRecipe.bind(this);
    this.brewNextOnChangeHandler = this.brewNextOnChangeHandler.bind(this);
    this.loadRecipeHandler = this.loadRecipeHandler.bind(this);
    this.updateRecipe = this.updateRecipe.bind(this);
    this.viewRecipeHandler = this.viewRecipeHandler.bind(this);
    this.toggleNowBrewing = this.toggleNowBrewing.bind(this);
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
      this.setState({sessions: body})
    })
    .catch(error => console.error( `Error in fetch: ${error.message}` ));
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
      description: "",
      yeast: "",
      style: "",
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
        s1Temp: body.recipe.s1Temp,
        s1Time: body.recipe.s1Time,
        s2Temp: body.recipe.s2Temp,
        s2Time: body.recipe.s2Time,
        s3Temp: body.recipe.s3Temp,
        s3Time: body.recipe.s3Time,
        s4Temp: body.recipe.s4Temp,
        s4Time: body.recipe.s4Time,
        s5Temp: body.recipe.s5Temp,
        s5Time: body.recipe.s5Time,
        s6Temp: body.recipe.s6Temp,
        s6Time: body.recipe.s6Time,
        s7Temp: body.recipe.s7Temp,
        s7Time: body.recipe.s7Time,
        s8Temp: body.recipe.s8Temp,
        s8Time: body.recipe.s8Time,
        s9Temp: body.recipe.s9Temp,
        s9Time: body.recipe.s9Time,
        s10Temp: body.recipe.s10Temp,
        s10Time: body.recipe.s10Time,
        description: body.recipe.description,
        style: body.recipe.style,
        yeast: body.recipe.yeast
      })
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
      body: JSON.stringify(this.stateToRecipeObject())
    })
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
      this.clearForm()
      this.setState({recipes: body.recipes, error: ""})
    })
    .catch(error => {
      console.error( `Error in fetch: ${error.message}`)
      this.setState({error: error.message})
    });
  }

  stateToRecipeObject(){
    return {
      recipe: {
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
        description: this.state.description || "",
        style: this.state.style || "",
        yeast: this.state.yeast || "",
      }
    }
  }

  updateRecipe(event){
    event.preventDefault()
    fetch(`/api/v1/recipes/${this.state.editRecipe}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.stateToRecipeObject())
    })
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

  toggleNowBrewing(event) {
    event.preventDefault()
    this.fetchNewestSession()
    this.setState({nowBrewing: !this.state.nowBrewing})
  }

  showNowBrewing() {
    if (this.state.nowBrewing){
      return <NowBrewing
        nowBrewingSesId={this.state.nowBrewingSesId}
        session={this.state.nowBrewingSession}
      />
    }
  }

  fetchNewestSession(){
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
      let sesId=Object.keys(body).pop()
      this.setState({
        nowBrewingSesId: sesId,
        nowBrewingSession: body[sesId]
      })
    })
    .catch(error => console.error( `Error in fetch: ${error.message}` ));
  }

  render () {
    return(
      <div className="userContent" >
        <button onClick={this.toggleNowBrewing}>Show live stats</button>
        {this.showNowBrewing()}

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
          recipe={this.stateToRecipeObject().recipe}
          editRecipe={this.state.editRecipe}
          recipesFormExpanded={this.state.recipesFormExpanded}
          toggleRecipeEditor={this.toggleRecipeEditor}
        />
      </div>

      // <Switch>
      //   <Route exact path="/" component={Dashboard} />
      //   <Route path="/Dashboard/first" component={() => <div>Test1</div>} />
      //   <Route path="/Dashboard/second" component={() => <div>Test2</div>} />
      //   <Route path="/Dashboard/recipeForm" component={RecipeForm} />
      // </Switch>

    )
  }
}
// <Brew sessions={this.state.sessions}/>
// <NowBrewing />

export default Dashboard;

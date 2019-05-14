import React, { Component } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";

import Dashboard from "../components/Dashboard";
import RecipeForm from '../components/RecipeForm'
import RecipesContainer from './RecipesContainer'
import BrewContainer from './BrewContainer'
import User from '../components/User'
import FindBeer from './FindBeer'
import NowBrewing from '../components/NowBrewing'

class ContentContainer extends Component {
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
      recipeExpanded: 1,
      recipesFormExpanded: "recipesFormExpanded is-active",
      userInfoExpanded: "userDashboard is-active",
      nowBrewing: false,
      nowBrewingSesId: "",
      nowBrewingSession: {},
      breweries: {},
      redirect: null,
      breweriesPageCount: 0,
      brewerLocation: {},
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
    this.getStateBreweries = this.getStateBreweries.bind(this);
    this.setBrewerState = this.setBrewerState.bind(this);
    this.paginateStateBreweries = this.paginateStateBreweries.bind(this);
    this.fetchNewestSession = this.fetchNewestSession.bind(this);
    this.setGeoBrewerState = this.setGeoBrewerState.bind(this);
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
      fetch(`/api/v1/recipes/${event.target.value}`)
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
      this.setState({editRecipe: event.target.value, redirect: "/dashboard/newRecipe"})
    }

    componentDidMount(){
      fetch('/api/v1/users')
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
        console.log('user returned ok')
        console.log(body)
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
        console.log('recipes returned ok')
        console.log(body)
        this.setState({recipes: body.recipes})
      })
      .catch(error => console.error( `Error in fetch: ${error.message}` ));

      fetch('/api/v1/sessions')
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
        console.log('sessions returned ok')
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
      fetch('/api/v1/sessions')
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
        console.log(`hello`);
        // if (
        //   (sesId !== this.state.nowBrewingSesId) ||
        //   (body[sesId] !== this.state.nowBrewingSession))
        this.setState({
          nowBrewingSesId: sesId,
          nowBrewingSession: body[sesId]
        })
      })
      .then(() => this.state.nowBrewingSession)
      .catch(error => console.error( `Error in fetch: ${error.message}` ));
      console.log(this.state.nowBrewingSesId)
    }

    getStateBreweries(){
      if (!this.state.breweriesListComplete) {
        console.log(`getting https://api.openbrewerydb.org/breweries?by_state=${this.state.brewerState}&page=${this.state.breweriesPageCount}&per_page=50`)
        fetch(`https://api.openbrewerydb.org/breweries?by_state=${this.state.brewerState}&page=${this.state.breweriesPageCount}&per_page=50`)
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
          if (body.length === 0){
            this.setState({breweriesListComplete: true})
            clearInterval(this.timer)
            this.timer = null;
            this.sortBreweriesByDistance()
          } else {
            let masterBreweriesList = this.state.breweries || {}
            body.map(brewery => {
              if (!(brewery.id in masterBreweriesList)){
                masterBreweriesList[brewery.id] = brewery
              }
            })
            if (masterBreweriesList !== this.state.breweries){
              this.setState({
                breweries: masterBreweriesList,
                breweriesPageCount: (this.state.breweriesPageCount + 1)
              })
            } else {
              this.setState({
                breweriesPageCount: (this.state.breweriesPageCount + 1)
              })
            }
          }
        })
        .catch(error => console.error( `Error in fetch: ${error.message}` ));
      }
    }

    paginateStateBreweries(event){
      event.preventDefault()
      this.timer = setInterval(()=> this.getStateBreweries(), 1100);
      this.setState({
        breweriesPageCount: 0,
        breweries: 0,
        breweriesListComplete: false
      })
      this.getStateBreweries()
    }

    setBrewerState(event){
      this.setState({brewerState: event.target.value})
    }

    sortBreweriesByDistance(){
      let sortedArray = []
      Object.keys(this.state.breweries).map(brewery => {
        let breweryLat = this.state.breweries[brewery].latitude
        let breweryLon = this.state.breweries[brewery].longitude
        if ((breweryLat)&&(breweryLon)&&(this.state.brewerLocation.latitude)&&(this.state.brewerLocation.latitude)){
          // console.log(breweryLat, breweryLon)
          let brewerLat=this.state.brewerLocation.latitude
          let brewerLon=this.state.brewerLocation.longitude
          this.calcDistance(brewerLat, brewerLon, breweryLat, breweryLon)
        }
      })
    }

    calcDistance(brewerLat, brewerLon, breweryLat, breweryLon){
  		let distance = Math.sqrt(
  			Math.pow(brewerLat - breweryLat, 2) + Math.pow(brewerLon - breweryLon, 2)
  		);
    	// console.log(distance);
    }

    setGeoBrewerState(location){
      this.timer = setInterval(()=> this.getStateBreweries(), 1100);
      this.setState({
        breweriesPageCount: 0,
        breweries: 0,
        breweriesListComplete: false,
        brewerState: location.region_name,
        brewerLocation: location
      })
      this.getStateBreweries()
    }

  render () {
    if (this.state.redirect) {
      let goTo = this.state.redirect
      this.setState({redirect: null})
      return <Redirect to={goTo}/>;
    }

    return(
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route
          path='/dashboard/home'
          render={() =>
            <User
              user={this.state.user}
            />
          }
        />
        <Route
          path='/dashboard/recipes'
          render={() =>
            <RecipesContainer
              loadRecipeHandler={this.loadRecipeHandler}
              deleteRecipe={this.deleteRecipe}
              brewNextOnChangeHandler={this.brewNextOnChangeHandler}
              viewRecipeHandler={this.viewRecipeHandler}
              recipes={this.state.recipes}
              user={this.state.user}
              recipeExpanded={this.state.recipeExpanded}
            />
          }
        />
        <Route
          path='/dashboard/newRecipe'
          render={() =>
            <RecipeForm
              clearForm={this.clearForm}
              createRecipe={this.createRecipe}
              recipeOnChangeHandler={this.recipeOnChangeHandler}
              updateRecipe={this.updateRecipe}
              recipe={this.stateToRecipeObject().recipe}
              editRecipe={this.state.editRecipe}
            />
          }
        />
        <Route
          path='/dashboard/nowBrewing'
          // onEnter={() => this.fetchNewestSession()}
          render={() =>
            <NowBrewing
              nowBrewingSesId = {this.state.nowBrewingSesId}
              nowBrewingSession = {this.state.nowBrewingSession}
              fetchNewestSession = {this.fetchNewestSession}
            />
          }
        />
        <Route
          path='/dashboard/brews'
          render={() =>
            <BrewContainer sessions = {this.state.sessions}/>
          }
        />
        <Route
          path='/dashboard/findBeer'
          render={() =>
            <FindBeer
              paginateStateBreweries={this.paginateStateBreweries}
              setBrewerState={this.setBrewerState}
              breweries={this.state.breweries}
              geoBrewerState={this.setGeoBrewerState}
              brewerState={this.state.brewerState}
              brewerLocation={this.state.brewerLocation}
            />
          }
        />

      </Switch>

    )
  }
}

export default ContentContainer;

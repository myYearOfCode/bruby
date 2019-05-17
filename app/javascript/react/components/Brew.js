import React, { Component } from 'react';

class Brew extends Component {
  constructor(props){
    super(props);
    this.state = {
      session: {},
      recipeName: ""
    }
    this.changeGraphTarget = this.changeGraphTarget.bind(this);
    this.updateBrew = this.updateBrew.bind(this);
    this.setDescription = this.setDescription.bind(this);
    this.setRating = this.setRating.bind(this);
  }


  componentDidMount(){
    this.getRecipeFromBrew(this.props.you[0].sesId)
    // this.getRecipeFromBrew(this.props.sessions[this.props.session][0].sesId)
  }

  getRecipeFromBrew(){
    fetch(`/api/v1/brews/${this.props.you[0].brew_id}`)
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
      this.setState({brew: body.brew, recipe: body.recipe})
    })
    .catch(error => console.error( `Error in fetch: ${error.message}` ));
  }


  updateBrew(event){
    event.preventDefault()
    fetch(`/api/v1/brews/${this.state.brew.id}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({brew: {description: this.state.description, rating: this.state.rating}})
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
      // debugger
      // console.log(body)
      this.setState({recipes: body.recipes, error: ""})
    })
    .catch(error => {
      console.error( `Error in fetch: ${error.message}`)
      this.setState({error: error.message})
    });
  }

  changeGraphTarget(event){
    this.setState({graphTarget: event.target.id})
  }

  showName(){
    if (this.state.recipe && this.state.recipe.name){
      return this.state.recipe.name
    }
  }

  showDescription(){
    if (this.state.brew && this.state.brew.description){
      return this.state.brew.description
    }
  }

  formatDate(){
    if (this.props.sessions && this.props.sessionId && this.props.sessions[this.props.sessionId][0].created_at){
      return this.props.sessions[this.props.sessionId][0].created_at.split('T')[0]
    }
  }

  setDescription(event){
    this.setState({description: event.target.value})
  }

  setRating(event){
    this.setState({rating: event.target.value})
  }

  getDescription(){
    if (this.state.brew && this.state.brew.description){
      return this.state.brew.description
    }
  }

  getRating(){
    if (this.state.brew && this.state.brew.rating){
      return "⭐".repeat(this.state.brew.rating)
    }
  }

  render () {
    return(
      <div className="brewBody">
        <div className="brewWrapper">
          <div className="brewTitleBar">
            <div className="brewRecipeName">
              {this.showName()}
            </div>
            <div>
              Brewed on {this.formatDate()}
            </div>
            <div>
              {this.getRating()}
            </div>
          </div>
          <div className="showReview">
            {this.showDescription()}
          </div>
          <form onSubmit={this.updateBrew}>
            <div className="text_input">
              <label className="label" htmlFor="style">Review </label>
              <textarea
              onChange={this.setDescription}
                rows="4"
                id="review"
                name="review"
                className="element text medium"
                type="text"
                value={this.getDescription()}
              />
            </div>
            <div className="text_input">
              <label className="label" htmlFor="style">Rating </label>
              <select onChange={this.setRating}>
                 <option value="1">1</option>
                 <option value="2">2</option>
                 <option value="3">3</option>
                 <option value="4">4</option>
                 <option value="5">5</option>
               </select>
            </div>
            <div className="button-box">
              <button
                className="button"
                type="submit"
                value="Submit"
              >
                { this.props.editRecipe !== null ? "Update" : "Submit" }
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Brew;

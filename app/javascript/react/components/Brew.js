import React, { Component } from 'react';

class Brew extends Component {
  constructor(props){
    super(props);
    this.state = {
      session: {},
      recipeName: ""
    }
    this.changeGraphTarget = this.changeGraphTarget.bind(this);
  }


  componentDidMount(){
    this.getRecipeFromBrew(this.props.sessions[this.props.session][0].sesId)
  }

  getRecipeFromBrew(){
    fetch(`/api/v1/brews/${this.props.sessions[this.props.session][0].brew_id}`)
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
      this.setState({session: body.brew, recipe: body.recipe})
    })
    .catch(error => console.error( `Error in fetch: ${error.message}` ));
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
    if (this.state.recipe && this.state.recipe.description){
      return this.state.recipe.description
    }
  }

  formatDate(){
    if (this.state.session && this.state.session.created_at){
      return this.state.session.created_at.split('T')[0]
    }
  }

  render () {
    return(
      <div className="brewBody">
        <div className="brewWrapper">
          <div>
            {`${this.showName()} - Brewed on ${this.formatDate()} - ⭐⭐⭐⭐⭐`}
          </div>
          <div className="showReview">
            {this.showDescription()}
          </div>
          <form>
            <div className="text_input">
              <label className="label" htmlFor="style">Review </label>
              <textarea
                rows="4"
                id="review"
                name="review"
                className="element text medium"
                type="text"
              />
            </div>
            <div className="text_input">
              <label className="label" htmlFor="style">Rating </label>
              <select>
                 <option value="1">1</option>
                 <option value="2">2</option>
                 <option value="3">3</option>
                 <option value="4">4</option>
                 <option value="5">5</option>
               </select>
            </div>
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
          </form>
        </div>
      </div>
    )
  }
}

// {this.props.sessions}
// <div id="curve_chart"></div>

export default Brew;

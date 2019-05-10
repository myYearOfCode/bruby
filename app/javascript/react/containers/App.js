import React from 'react'
import { Router, browserHistory, Route, IndexRoute } from 'react-router';

import Dashboard from '../components/Dashboard'
import RecipeForm from '../components/RecipeForm'
import RecipesContainer from './RecipesContainer'

export const App = (props) => {
  return (
    <Dashboard />
  )
}

// <Router history={browserHistory}>
//   <Route path="/dashboard" component={Dashboard}/>
//   <Route path="/dashboard/recipes" component={RecipesContainer}/>
//   <Route path="/dashboard/newRecipe" component={RecipeForm}/>
// </Router>
export default App

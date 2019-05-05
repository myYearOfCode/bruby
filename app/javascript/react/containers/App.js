import React from 'react'
import { Router, browserHistory, Route, IndexRoute } from 'react-router';

import Sample from '../components/Sample'
import Dashboard from '../components/Dashboard'
import RecipesContainer from './RecipesContainer'

export const App = (props) => {
  return (
  <Router history={browserHistory}>
    <Route path="/" component={RecipesContainer}/>
    <Route path="/dashboard" component={Dashboard}/>
    <Route path="/dashboard/recipes" component={RecipesContainer}/>
  </Router>
  )
}

export default App

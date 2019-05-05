import React from 'react'
import { Router, browserHistory, Route, IndexRoute } from 'react-router';

import Sample from '../components/Sample'
import Brew from '../components/Brew'
import RecipesContainer from './RecipesContainer'

export const App = (props) => {
  return (
  <Router history={browserHistory}>
    <Route path="/" component={RecipesContainer}/>
    <Route path="/brew" component={Brew}/>
    <Route path="/brew/recipes" component={RecipesContainer}/>
  </Router>
  )
}

export default App

import React from 'react'
import { Router, browserHistory, Route, IndexRoute } from 'react-router';

import Sample from './Sample'
import Brew from './Brew'


export const App = (props) => {
  return (
  <Router history={browserHistory}>
    <Route path="/" component={Sample}/>
    <Route path="/brew" component={Brew}/>
  </Router>
  )
}

export default App

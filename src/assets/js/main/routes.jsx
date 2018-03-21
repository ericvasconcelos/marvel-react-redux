import React from 'react'
import { Router, Route, Redirect, hashHistory} from 'react-router'

import Login from '../login/login'
import Characters from '../characters/characters'
import Hero from '../hero/hero'

export default props => (
  <Router history={hashHistory} onUpdate={() => window.scrollTo(0, 0)}>
    <Route exact={true} path='/' component={Login} />
    <Route exact={true} path='/characters' component={Characters} />
    <Route exact={true} path='/hero/:id' component={Hero} />
    <Redirect from='*' to='/' />
  </Router>
)
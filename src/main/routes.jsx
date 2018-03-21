import React from 'react'
import { Router, Route, Redirect, hashHistory} from 'react-router'

import Login from '../login/login'
import Heros from '../heros/heros'
import Characters from '../characters/characters'

export default props => (
  <Router history={hashHistory} onUpdate={() => window.scrollTo(0, 0)}>
    <Route exact={true} path='/' component={Login} />
    <Route exact={true} path='/heros' component={Heros} />
    <Route exact={true} path='/characters/:id' component={Characters} />
    <Redirect from='*' to='/' />
  </Router>
)
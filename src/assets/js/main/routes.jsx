import React from 'react';
import { Router, Route, Redirect, hashHistory } from 'react-router';

import Login from '../login/login';
import Characters from '../characters/characters';
import Hero from '../hero/hero';

export default props => (
  <Router history={hashHistory} onUpdate={() => window.scrollTo(0, 0)}>
    <Route exact path="/" component={Login} />
    <Route exact path="/characters" component={Characters} />
    <Route exact path="/hero/:id" component={Hero} />
    <Redirect from="*" to="/" />
  </Router>
);

import React from 'react'
import ReactDOM from 'react-dom'
import App from './assets/js/main/app'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './assets/js/main/reducers'
import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'
import './assets/scss/app.scss';


if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
  && window.__REDUX_DEVTOOLS_EXTENSION__()

ReactDOM.render(
  <Provider store={applyMiddleware(thunk, multi, promise)(createStore)(reducers, devTools)}>
    <App />
  </Provider>
 , document.getElementById('app'))


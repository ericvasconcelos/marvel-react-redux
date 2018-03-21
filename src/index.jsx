import React from 'react'
import ReactDOM from 'react-dom'
import App from './main/app'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './main/reducers'
import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'
import './styles/main.scss'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
  && window.__REDUX_DEVTOOLS_EXTENSION__()

ReactDOM.render(
  <Provider store={applyMiddleware(thunk, multi, promise)(createStore)(reducers, devTools)}>
    <App />
  </Provider>
 , document.getElementById('app'))
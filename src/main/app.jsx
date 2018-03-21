import React, { Component } from 'react'
import Routes from './routes'
import Header from '../template/header/header'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="container general">
        <Header />
        <Routes />
      </div>
    )
  }
}

export default App
import React, { Component } from 'react'
// import NavBar from './components/NavBar'
import Dashboard from './Dashboard'
import DataService from './services/DataService'

class App extends Component {
  constructor (props) {
    super(props)

    DataService.write()
    DataService.read()
  }

  render () {
    return (
      <div>
        <Dashboard />
      </div>
    )
  }
}
export default App

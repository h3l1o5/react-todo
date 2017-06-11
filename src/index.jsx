import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class App extends Component {

  render() {
    return (
      <div className='main'>
        <h1>HELLO WORLD</h1>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
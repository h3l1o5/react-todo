import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import TodoApp from './components/TodoApp'
import './style/index.css'

class App extends Component {

  render() {
    return (
      <div className='main'>
        <TodoApp initText='ADD TODO'/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
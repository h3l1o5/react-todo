import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import TodoList from './components/TodoList'

class App extends Component {

  render() {
    return (
      <div>
        <TodoList initText='ADD TODO'/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
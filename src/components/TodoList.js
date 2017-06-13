import React, { Component } from 'react'
import PropTypes from 'prop-types'

import TodoItem from './TodoItem'

class TodoList extends Component {
  static propTypes = {
    todos: PropTypes.array,
    onRemoveTodo: PropTypes.func.isRequired
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.todos.map((element, index) => (
            <li key={index}>
              <TodoItem index={index} text={element.text} isCompleted={element.isCompleted} onItemClicked={this.props.onRemoveTodo} />
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default TodoList
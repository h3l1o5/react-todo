import React, { Component } from 'react'

import TodoAddForm from './TodoAddForm'
import TodoList from './TodoList'

class TodoApp extends Component {
  constructor() {
    super()
    this.state = {
      todos: [],
    }
  }

  handleSubmitNewTodo = (text) => {
    const newTodos = [
      {text: text, isCompleted: false},
        ...this.state.todos
    ]
    this.setState({
      todos: newTodos
    })
  }

  handleRemoveTodo = (index) => {
    let newTodos = this.state.todos
    newTodos[index].isCompleted = !newTodos[index].isCompleted
    this.setState({
      Todos: newTodos
    })
  }

  render() {
    return (
      <div>
        <TodoAddForm onSubmitNewTodo={this.handleSubmitNewTodo} placeholder='ADD TODO'/>
        <TodoList onRemoveTodo={this.handleRemoveTodo} todos={this.state.todos}/>
      </div>      
    )
  }
}

export default TodoApp
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import TodoItem from './TodoItem'

class TodoList extends Component {
  static propTypes = {
    initText: PropTypes.string
  }

  constructor() {
    super()
    this.state = {
      items: [],
      inputText: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      inputText: e.target.value
    })
  }

  handleEnterPressed = (e) => {
    if(e.key === 'Enter') {
      if(!this.state.inputText) {
        return
      }

      const newItems = [e.target.value, ...this.state.items]
      this.setState({
        items: newItems,
        inputText: ''
      })
    }
  }

  handleRemoveItem = (index) => {
    let oldItems = this.state.items
    const newItems = oldItems.slice(0, index).concat(oldItems.slice(index + 1))
    this.setState({
      items: newItems
    })
  }

  render() {
    return (
      <div>
        <input 
          type="text"
          value={this.state.inputText}  
          placeholder={this.props.initText}
          onChange={this.handleChange}
          onKeyPress={this.handleEnterPressed}
        />
        <ul>
          {this.state.items.map((value, index) => (
            <li key={index}>
              <TodoItem index={index} text={value} onItemClicked={this.handleRemoveItem} />
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default TodoList
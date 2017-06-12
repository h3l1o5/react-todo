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

      const newItems = [
        {text: e.target.value, isCompleted: false},
         ...this.state.items
      ]
      this.setState({
        items: newItems,
        inputText: ''
      })
    }
  }

  handleRemoveItem = (index) => {
    let newItems = this.state.items
    newItems[index].isCompleted = !newItems[index].isCompleted
    this.setState({
      items: newItems
    })
  }

  render() {
    return (
      <div>
        <input 
          type="text"
          style={{fontSize: '20px'}}
          value={this.state.inputText}  
          placeholder={this.props.initText}
          onChange={this.handleChange}
          onKeyPress={this.handleEnterPressed}
        />
        <ul>
          {this.state.items.map((element, index) => (
            <li key={index}>
              <TodoItem index={index} text={element.text} isCompleted={element.isCompleted} onItemClicked={this.handleRemoveItem} />
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default TodoList
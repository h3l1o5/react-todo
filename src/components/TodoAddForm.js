import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { FormStyle } from '../style/todo/style'

class TodoAddForm extends Component {
  static propTypes = {
    placeholder: PropTypes.string
  }

  constructor() {
    super()
    this.state = {
      inputText: '',
    }
  }

  handleChange = (e) => {
    this.setState({
      inputText: e.target.value
    })
  }

  handleEnterPressed = (e) => {
    if(e.key === 'Enter') {
      this.props.onSubmitNewTodo(this.state.inputText)
      this.setState({
        inputText: ''
      })
    }
  }

  render() {
    return (
      <input 
        type="text"
        style={FormStyle}
        value={this.state.inputText}  
        placeholder={this.props.placeholder}
        onChange={this.handleChange}
        onKeyPress={this.handleEnterPressed}
      />
    )
  }
}

export default TodoAddForm
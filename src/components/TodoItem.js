import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { ItemStyle } from '../style/todo/style'

class TodoItem extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    onItemClicked: PropTypes.func.isRequired,
    isCompleted: PropTypes.bool.isRequired
  }

  constructor() {
    super()
    this.state = {
      style: ItemStyle
    }
  }

  componentWillReceiveProps(newProps) {
    if(newProps.isCompleted === true) {
      this.setState({
        style: {
          color: 'red',
          textDecoration: 'line-through'
        }
      })
    } else {
      this.setState({
        style: ItemStyle
      })
    }
  }

  handleClick = () => {
    this.props.onItemClicked(this.props.index)
  }

  render() {
    return (
      <h1 style={this.state.style}onClick={this.handleClick}>{this.props.text}</h1>
    )
  }
}

export default TodoItem
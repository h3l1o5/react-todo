import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TodoItem extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    onItemClicked: PropTypes.func.isRequired
  }

  constructor() {
    super()
    this.state = {
    }
  }

  handleClick = () => {
    this.props.onItemClicked(this.props.index)
  }

  render() {
    return (
      <h3 onClick={this.handleClick}>{this.props.text}</h3>
    )
  }
}

export default TodoItem
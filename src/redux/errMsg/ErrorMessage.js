import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

class ErrorMessage extends Component {
  constructor(props) {
    super(props)
    this.handleDismissClick = this.handleDismissClick.bind(this)
  }

  handleDismissClick(err) {
    this.props.resetErrorMessage()
    err.preventDefault()
  }

  render() {
    const { errorMessage } = this.props
    if (!errorMessage) {
      return null
    }
    return (
      <p style={{ backgroundColor: '#e99', padding: 10 }}>
        <b>{errorMessage}</b>
        {' '}
        <a href="#" onClick={this.handleDismissClick}>Dismiss</a>
      </p>
    )
  }
}

ErrorMessage.propTypes = {
  errorMessage: PropTypes.string,
  resetErrorMessage: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
  const { errorMessage } = state
  return {
    errorMessage,
  }
}

// Resets the currently visible error message.
export function resetErrorMessage() {
  return {
    type: 'RESET_ERROR_MESSAGE',
  }
}
export default connect(mapStateToProps, {
  resetErrorMessage,
})(ErrorMessage)

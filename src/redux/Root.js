import React, { Component, PropTypes } from 'react'
// Component makes Redux store available to the connect() calls in children.
import { connect, Provider } from 'react-redux'

import Router from '../Router'
import DevTools from './DevTools'
import { ErrorMessage } from './errMsg'
import routing from './routing'

const AppWrap = connect(routing)(Router)

// Using a class for live/hot reload
class Root extends Component {
  render() {
    // Provider only wants a single child.
    const { store } = this.props
    return (
      <Provider store={store}>
        <div>
          <ErrorMessage />
          <AppWrap />
          <DevTools />
        </div>
      </Provider>
    )
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
}
export default Root

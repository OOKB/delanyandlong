// Redux.
import { applyMiddleware } from 'redux'
import merge from 'lodash/merge'
// Allow function action creators.
import thunk from 'redux-thunk'

import {
  getInitState,
  historyMiddleware,
  syncHistoryWithStore,
} from 'redux-history-sync'

// Socket.io linking
import io from 'socket.io-client'
import { middleware as createSocketMiddleware } from 'cape-redux-socket'
const location = process.env.SOCKET_LOC || ''
const socket = createSocketMiddleware(io(location))

import createStore from './createStore'
// Redux Reducers.
// Our reducer index.
import reducer from './reducer'
import defaultState from './defaultState'

// Define the middeware we want to apply to the store.
const middleware = [
  historyMiddleware(window.history),
  socket,
  thunk,
]

// Configure and create Redux store.
// Function requires an initialState object.
export default function configureStore(initialState) {
  const calculatedState = {
    db: {
      currentYear: new Date().getFullYear(),
    },
    history: getInitState(window.location, window.document.title),
  }
  const initState = merge(initialState, calculatedState, defaultState)
  const store = createStore(
    reducer,
    initState,
    applyMiddleware(...middleware)
  )
  syncHistoryWithStore(store, window)
  return store
}

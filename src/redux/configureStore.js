import { merge } from 'lodash'
import { applyMiddleware, combineReducers, createStore } from 'redux'
// Allow function action creators.
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import {
  getInitState,
  historyMiddleware,
  syncHistoryWithStore,
} from 'redux-history-sync'

// Socket.io linking
import io from 'socket.io-client'
import { middleware as createSocketMiddleware, cookieMiddleware } from 'cape-redux-socket'
// Redux Reducers.
// Our reducer index.
import * as reducers from './reducer'
import defaultState from './defaultState'
import * as firebase from './fire/firebase'
import fireMiddleware from './fire/middleware'
import storeListener from './fire/storeListener'

/* global window */

const location = process.env.SOCKET_LOC || 'https://socket.cape.io/'
const socket = createSocketMiddleware(io(location))
// Define the middeware we want to apply to the store.
const middleware = [
  historyMiddleware(window.history),
  fireMiddleware(firebase),
  socket,
  cookieMiddleware,
  thunk,
]

// Configure and create Redux store.
// Function requires an initialState object.
export default function configureStore(initialState) {
  const calculatedState = {
    db: {
      currentYear: new Date().getFullYear(),
    },
    history: getInitState(window.location, window.document.title, window.history),
  }
  const initState = merge(initialState, calculatedState, defaultState)
  const store = createStore(
    combineReducers(reducers),
    initState,
    composeWithDevTools(applyMiddleware(...middleware))
  )
  syncHistoryWithStore(store, window)
  storeListener(store, firebase)
  return store
}

import { createElement } from 'react'
import { render } from 'react-dom'

import configureStore from './redux/configureStore'
// Root React component.
import Root from './redux/Root'

/* global window */

// Define our inital state object. This could be a fetch() to an API endpoint.
const initialState = window.reactData || {}
// Configure and create our Redux store.
const store = configureStore(initialState)

// Define our destination where we insert our root react component.
const destEl = window.document.getElementById('root')

// The root component needs the Redux `store`.
render(createElement(Root, { store }), destEl)

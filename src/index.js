import { renderRoot } from 'cape-router-component'
import registerServiceWorker from './registerServiceWorker'
import configureStore from './redux/configureStore'
import * as RouteIndex from './RouteIndex'

/* global window */

// Define our inital state object. This could be a fetch() to an API endpoint.
const initialState = window.reactData || {}
// Configure and create our Redux store.
const store = configureStore(initialState)

// Define our destination where we insert our root react component.
const rootDestEl = window.document.getElementById('root')

// The root component needs the Redux `store`.
renderRoot({ rootDestEl, RouteIndex, store })
registerServiceWorker()

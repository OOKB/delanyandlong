import { selectActiveKeyDefault } from 'redux-history-sync'
import { createSelector } from 'reselect'
import { select } from 'cape-select'

import locationInfo from '../routes'

// We are using the redux-history-sync to put location into state.
function routeInfoSelector(history) {
  if (!history) return history
  return {
    history,
    // Location object gets sent to locationInfo
    route: locationInfo(history.location),
  }
}
// Pass in the state object and return some info about a "route".
// selectActiveKeyDefault() is a helper function to grab the current location info.
const routingSelector = createSelector(selectActiveKeyDefault, routeInfoSelector)
export const getRoute = select(routingSelector, 'route')
export const getRouteId = select(getRoute, 'id')
export default routingSelector

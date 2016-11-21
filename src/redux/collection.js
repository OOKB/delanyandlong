import { flow, partial } from 'lodash'
// import { createSelector } from 'reselect'
import { clear, fieldValue } from 'redux-field'
import {
  createListThunk, FAV_TITLE, toggle,
} from 'cape-redux-collection'
// import { getSelect, select } from 'cape-select'
import { selectUser } from 'cape-redux-auth'
import { getDataFeed, getWebApp } from './select'
// import { itemsFilled } from './select/items'
// import { routeParam } from './routing'
export function projectLink({ id }) {
  return `/project/${id}`
}

// Creating a new project popup.
export const fieldPrefix = [ 'collection', 'title' ]
const getTitle = fieldValue(fieldPrefix)
// Return user if there was a title set. Otherwise return webApp.
export function collectionListAgent(state, props) {
  if (getTitle(state, props) !== FAV_TITLE) return selectUser(state)
  return getWebApp(state)
}
export function listAgentMain(item) {
  return {
    item,
    additionalType: 'ProjectDelanyLong',
    agent: collectionListAgent,
    mainEntity: getDataFeed,
  }
}
export const editItemCollections = flow(listAgentMain, toggle)

export const resetField = partial(clear, fieldPrefix)
export function createCollection(dispatch) {
  return () => {
    dispatch(createListThunk({ additionalType: 'ProjectDelanyLong', title: getTitle }))
    .then(() => dispatch(resetField()))
  }
}
// export function listItemField() {
//   const selector = fieldValue(fieldPrefix)
// }

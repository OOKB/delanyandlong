import { flow, partial } from 'lodash'
// import { createSelector } from 'reselect'
import { clear, fieldValue } from 'redux-field'
import {
  FAV_TITLE, toggle,
} from 'cape-redux-collection'
// import { getSelect, select } from 'cape-select'
import { selectUser } from 'cape-redux-auth'
import { getDataFeed, getWebApp } from './select'
// import { itemsFilled } from './select/items'
// import { routeParam } from './routing'

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
// // @TODO Make a builder function that accepts the projectId selector and then builds the rest.
// export const listItems = createSelector(favListElements, itemsFilled, fixListItems)
// // mapStateToProps for Favs.
// export const listItemsSorted = createSelector(listItems, orderListItems)
// export const favsItemIndex = createSelector(listItems, listItemIndex)
//
// // Project page.
// export const projectId = routeParam('projectId')
// export const projectState = getSelect(collections, projectId)
// export const projectItems = select(projectState, PREDICATE)
// export const projectItemsFilled = createSelector(projectItems, itemsFilled, fixListItems)
// export const projectItemsSorted = createSelector(projectItemsFilled, orderListItems)
//
// export const createCollection = constant(
//   createCollectionList({ ...listAgentMain, title: getTitle })
// )
export const resetField = partial(clear, fieldPrefix)

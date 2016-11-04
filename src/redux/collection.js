import { createSelector } from 'reselect'
import { clear, fieldValue } from 'redux-field'
import { constant, partial } from 'lodash'
import {
  collections, createCollectionList, favListElements, fixListItems, favTitle,
  listItemIndex, orderListItems, PREDICATE,
} from 'cape-redux-collection'
import { getSelect, select } from 'cape-select'
import { selectUser } from 'cape-redux-auth'
import { getDataFeed, getWebApp } from './select'
import { itemsFilled } from './select/items'
import { routeParam } from './routing'

// @TODO Make a builder function that accepts the projectId selector and then builds the rest.
export const listItems = createSelector(favListElements, itemsFilled, fixListItems)
// mapStateToProps for Favs.
export const listItemsSorted = createSelector(listItems, orderListItems)
export const favsItemIndex = createSelector(listItems, listItemIndex)

// Project page.
export const projectId = routeParam('projectId')
export const projectState = getSelect(collections, projectId)
export const projectItems = select(projectState, PREDICATE)
export const projectItemsFilled = createSelector(projectItems, itemsFilled, fixListItems)
export const projectItemsSorted = createSelector(projectItemsFilled, orderListItems)

// Creating a new project popup.
export const fieldPrefix = [ 'collection', 'title' ]
const getTitle = fieldValue(fieldPrefix)

// Return user if there was a title set. Otherwise return webApp.
export function collectionListAgent(state, props) {
  if (getTitle(state, props) !== favTitle) return selectUser(state)
  return getWebApp(state)
}
export const listAgentMain = {
  additionalType: 'ProjectDelanyLong',
  agent: collectionListAgent,
  mainEntity: getDataFeed,
}
export const createCollection = constant(
  createCollectionList({ ...listAgentMain, title: getTitle })
)
export const resetField = partial(clear, fieldPrefix)

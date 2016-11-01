import { createSelector } from 'reselect'
import { fieldValue } from 'redux-field'
import {
  createCollectionList, favListElements, fixListItems, favTitle,
  listItemIndex, orderListItems,
} from 'cape-redux-collection'
import { selectUser } from 'cape-redux-auth'
import { getDataFeed, getWebApp } from './select'
import { itemsFilled } from './select/items'

export const listItems = createSelector(favListElements, itemsFilled, fixListItems)
export const listItemsSorted = createSelector(listItems, orderListItems)
export const favsItemIndex = createSelector(listItems, listItemIndex)

const getTitle = fieldValue([ 'collection', 'title' ])

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
export const createCollection = createCollectionList({ ...listAgentMain, title: getTitle })

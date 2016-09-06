import { entityTypeSelector, rebuildEntitySelector } from 'redux-graph'
import { createSelector } from 'reselect'
import find from 'lodash/find'

import { select } from '../utils'
import { getDataFeed, getWebApp } from '../select'
import { getUser } from '../select/user'
import { itemsFilled } from '../select/items'
import { collectionType, favTitle, fixListItems, listItemIndex, orderListItems } from './helpers'

// This will select all collection lists from the database.
export const collectionListSelector = entityTypeSelector(collectionType)
export function isFavList(list) {
  return list.title === favTitle
}
// Find user favs project from list entities.
export function findFavList(listEntities) {
  const found = find(listEntities, isFavList)
  return found
}

// Grab all collectionList entities and return user favorites project.
export const favsListSelector = createSelector(
  collectionListSelector,
  findFavList,
)
export const favsListId = select('id', favsListSelector)
export const listSelector = rebuildEntitySelector(favsListId)
export const listItems = createSelector(
  listSelector,
  itemsFilled,
  (list, items) => list && fixListItems(list.itemListElement, items)
)
export const favsLength = select('length', listItems)
export function hasFavorites(state) { return !!favsLength(state) }
export const listItemsSorted = createSelector(listItems, orderListItems)
export const favsItemIndex = createSelector(listItems, listItemIndex)

export function buildCollectionList(agent, creator, mainEntity, title) {
  return {
    additionalType: 'ProjectDelanyLong',
    agent,
    creator, // User that created the thing.
    itemListOrder: 'Ascending',
    mainEntity, // List of what.
    title,
    type: collectionType,
  }
}
export function getTitle(props, defaultTitle) {
  return props && props.title || defaultTitle
}
export function collectionListAgent(state, props) {
  if (getTitle(props)) return getUser(state)
  return getWebApp(state)
}
// create a new Favs list for the user.
export const createCollectionList = createSelector(
  collectionListAgent,
  getUser,
  getDataFeed,
  (state, props) => getTitle(props, favTitle),
  buildCollectionList
)
// Need to know if we should display a confirm window or a projectEdit window.

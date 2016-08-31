import { entityTypeSelector, rebuildEntitySelector, selectTypeIndex } from 'redux-graph'
import { createSelector } from 'reselect'
import get from 'lodash/get'
import find from 'lodash/find'
import { getDataFeed, getWebApp } from '../select'
import { getUser } from '../select/user'
import { collectionType, favTitle, fixListItems, listItemIndex, orderListItems } from './helpers'

// This will select all collection lists from the database.
// export const collectionListSelector = entityTypeSelector(collectionType)
export function collectionListSelector(state) {
  return selectTypeIndex(state)[collectionType]
}
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
export function favsListId(state) {
  return get(favsListSelector(state), 'id')
}
export const listSelector = rebuildEntitySelector(favsListId)
export const listItems = createSelector(
  listSelector,
  list => list && fixListItems(list.itemListElement)
)
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

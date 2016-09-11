import {
  entityDomainIncludes, entityTypeSelector, rebuildEntitiesSelector,
} from 'redux-graph'
import { createSelector, createStructuredSelector } from 'reselect'

import { boolSelector, getProps, select, createSimpleSelector } from '../utils'
import { createCollectionList } from './entity'
import { getDataFeed, getWebApp } from '../select'
import { getUser } from '../select/user'
import { itemsFilled } from '../select/items'
// import { isAnonymous } from '../auth/select'

import {
  findActive, fixListItems, listItemIndex, orderListItems, getItemCollections,
} from './helpers'
import { isFavList } from './lang'
import { filterCreator, findCreator } from './util'
import { collectionType, liType, favTitle } from './const'

// COLLECTIONS

// Select all CollectionList entities from the database.
export const collectionListSelector = entityTypeSelector(collectionType)
export const collections = rebuildEntitiesSelector(collectionListSelector)
// Select all ListItem entities.
export const listItemSelector = entityTypeSelector(liType)

// USER COLLECTIONS - No props needed.

// Find user collections.
export const userCollections = createSelector(collections, getUser, filterCreator('creator'))
export const userHasCollections = boolSelector(userCollections)
// Find (first) user favs project from list entities.
export const favsListSelector = createSelector(userCollections, findCreator(isFavList))
export const favListElements = select('itemListElement', favsListSelector)
export const userHasFavorites = boolSelector(favListElements)
export const listItems = createSelector(favListElements, itemsFilled, fixListItems)

export const activeListItem = createSelector(favListElements, findActive)
export const listItemsSorted = createSelector(listItems, orderListItems)
export const favsItemIndex = createSelector(listItems, listItemIndex)

// ITEM LISTS & COLLECTIONS. Uses item prop.

// Select props.item.id from (state, props)
export const getItemId = select('item.id', getProps)
// Need to ListItems this textile shows up on.
export const itemParents = entityDomainIncludes(getItemId)
export const itemLists = select('domainIncludes.item', itemParents)
// Reorder list -> collection to collection -> list. Returns object or null if no list.
export const itemCollections = createSelector(itemLists, getItemCollections)
export const itemInCollections = boolSelector(itemCollections)
export const itemFavCollection = createSelector(itemCollections, findCreator(isFavList))
// Need to know if we should display a confirm window or a projectEdit window.
// Find fav or active collection under edit.
// export const getActiveCollection = createSimpleSelector(favCollection, firstValArg)
// export const favId = select('itemListElement.id', favCollection)
// export const favIfAnon = createSelector(isAnonymous, favCollection, (anon, favs) => anon && favs)
// export const itemIcon = createSelector(itemCollections, getItemIcon)

// CREATE

// Gep props.litlte or return favTitle default.
export const getTitle = select('title', getProps, favTitle)
// Return user if there was a title set. Otherwise return webApp.
export function collectionListAgent(state, props) {
  if (getTitle(state, props) !== favTitle) return getUser(state)
  return getWebApp(state)
}
// create a new Favs list for the user.
export const buildCollectionList = createSimpleSelector(
  collectionListAgent, getUser, getDataFeed, getTitle, createCollectionList
)

// ITEM CONTAINER
// Used in the ItemFav container.
export const mapStateToProps = createStructuredSelector({
  itemInCollections,
  itemCollections,
})

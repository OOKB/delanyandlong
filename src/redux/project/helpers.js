import { create, entityHasType } from 'redux-graph'
import keyBy from 'lodash/keyBy'
import map from 'lodash/map'
import orderBy from 'lodash/orderBy'
import values from 'lodash/values'

import { createCollectionList, favsListSelector } from './select'

// List of what kind of things.

export const collectionType = 'CollectionList'
export const favTitle = 'Favorites'
export const isValidCollection = entityHasType(collectionType)


// We need to know what collection we are adding this item to.
export function getCollection(state, collectionList, dispatch) {
  // Collection is known. Use that.
  if (isValidCollection(collectionList)) return collectionList
  // The default collection is the favorites.
  // create a new Favs list for the user because they don't have one yet.
  return favsListSelector(state) || create(dispatch, createCollectionList(state))
}
export function createCollectionItem(item, agent, position = 100) {
  return {
    actionStatus: 'created',
    agent,
    item, // Thing that the user is adding to the collection.
    position,
    startTime: new Date(),
    type: 'ListItem',
  }
}
// Adding an item to a list requires a new triple. Adding a field value to the collection.
// @list: The project/collection this item is being added/attached to.
export function createCollectionItemTriple(list, item, agent, position) {
  // Create the ListItem.
  const object = createCollectionItem(item, agent, position)
  const triple = { subject: list, predicate: 'itemListElement', object }
  // The item is attached to the list by adding an itemListElement predicate triple.
  return triple
}
export function getFirstVal(obj) { return values(obj)[0] }
export function fixListItem(listItem) {
  const item = getFirstVal(listItem.item)
  return listItem.set('item', item)
}
export function fixListItems(listItems) { return map(listItems, fixListItem) }
export function listItemIndex(listItems) { return keyBy(listItems, 'item.id') }
export function orderListItems(listItems) {
  console.log(listItems)
  return orderBy(listItems, [ 'position', 'id' ])
}

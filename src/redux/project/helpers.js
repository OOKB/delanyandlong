import { create, entityHasType, key0, val0 } from 'redux-graph'
import find from 'lodash/find'
import get from 'lodash/get'
import keyBy from 'lodash/keyBy'
import mapValues from 'lodash/mapValues'
import matchesProperty from 'lodash/matchesProperty'
import negate from 'lodash/negate'
import orderBy from 'lodash/orderBy'
import reduce from 'lodash/reduce'
import set from 'lodash/set'

import { createCollectionList, favsListSelector } from './select'
import { collectionType, liType, favTitle } from './const'

export const isValidCollection = entityHasType(collectionType)
// Valid unless ended/removed.
export const isValidListItem = negate(matchesProperty('actionStatus', 'ended'))
// Is the CollectionList the default favorite one?
export const isFavList = matchesProperty('title', favTitle)

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
    type: liType,
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

// Reducer to replace the items with filled versions. Filters out the invalids.
export function fixListItem(items) {
  return (res, listItem, key) => {
    if (!isValidListItem(listItem)) return res
    // Use first object key to get filled entity.
    const item = get(listItem.item, key0(items))
    return set(res, key, listItem.set('item', item))
  }
}
// listItems is an object.
export function fixListItems(listItems, items) {
  if (!listItems) return listItems
  return reduce(listItems, fixListItem(items), {})
}
export function listItemIndex(listItems) { return keyBy(listItems, 'item.id') }
export function orderListItems(listItems) {
  return orderBy(listItems, [ 'position', 'id' ])
}
export function findActive(listItems) {
  return find(listItems, { actionStatus: 'created' })
}
export function getItemCollection(list) {
  return list.set('collection', val0(list.domainIncludes.itemListElement))
  .without('domainIncludes')
}
export function getItemCollections(lists) {
  console.log('lis', lists)
  const listElems = mapValues(lists, getItemCollection)
  console.log(listElems)
  return listElems
}

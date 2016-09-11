import { key0, val0 } from 'redux-graph'
import find from 'lodash/find'
import get from 'lodash/get'
import isEmpty from 'lodash/isEmpty'
import keyBy from 'lodash/keyBy'
import orderBy from 'lodash/orderBy'
import reduce from 'lodash/reduce'
import set from 'lodash/set'

import { isFavList, isValidListItem } from './lang'

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
export function setItemCollection(res, { domainIncludes, ...listItem }) {
  const collectionList = val0(domainIncludes.itemListElement)
  const collection = collectionList.merge({
    itemListElement: listItem,
    isFavList: isFavList(collectionList),
  })
  // Add collection only if listItem is valid/active.
  return isValidListItem(listItem) && set(res, collection.id, collection) || res
}
// Invert from list -> collection to collection -> list
export function getItemCollections(lists) {
  const collections = lists && reduce(lists, setItemCollection, {})
  return !isEmpty(collections) && collections || null
}
export function getFavCollection(isAnon, collections) {
  return isAnon && collections && find(collections, { isFavList }) || null
}

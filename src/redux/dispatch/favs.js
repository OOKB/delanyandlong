import {
  createIfNew, createTriple, entityHasType, entityTypeSelector, entityUpdate,
} from 'redux-graph'
import { getUser } from '../select'

const collectionType = 'CollectionList'
export const favTitle = 'Favorites'
// This will select all collection lists from the database.
const collectionListSelector = entityTypeSelector(collectionType)
export const mainEntity = { id: 'pBlf', type: 'DataFeed' }
export function createCollectionList(creator, title = favTitle) {
  return {
    additionalType: 'ProjectDelanyLong',
    creator, // User that created the thing.
    itemListOrder: 'Ascending',
    mainEntity, // List of what.
    title,
    type: collectionType,
  }
}
export const isValidCollection = entityHasType(collectionType)

export function findFavList(listEntities) {
  return listEntities && find(listEntities, { title: favTitle })
}
export function getCollection(collectionList, listEntities, creator) {
  // Collection is known. Use that.
  if (collectionList && collectionList.type === collectionType) return collectionList
  // Find and return user favs list or create a new Favs list for the user.
  return findFavList(listEntities) || createCollectionList(creator)
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
  // The item is attached to the list by adding an itemListElement predicate triple.
  return { subject: list, predicate: 'itemListElement', object }
}

// Action to dispatch when a user clicks the (+) favorite button.
export function favoriteItem(item, collectionList) {
  return (dispatch, getState) => {
    const state = getState()
    const creator = getUser(state)
    // We need to know what collection we are adding this item to.
    // The default dollection is the favorites.
    // grab all collectionList entities
    const listEntities = collectionListSelector(state)
    const list = getCollection(collectionList, listEntities, creator)
    const triple = createCollectionItemTriple(list, item, creator)
    createTriple(dispatch, triple)
  }
}
export function confirmFavorite(id) {
  return entityUpdate({ id, actionStatus: 'confirmed', dateUpdated: new Date() })
}
export function endFavorite(id) {
  return entityUpdate({ id, actionStatus: 'ended', endTime: new Date() })
}

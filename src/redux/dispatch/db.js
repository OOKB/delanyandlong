import { createTriple } from 'redux-graph'

export function nextId() {
  return Math.random().toString(36).substr(6)
  .substring(1, 9)
}
export function insertFields(data) {
  return {
    ...data,
    dateCreated: new Date(),
    id: nextId(),
  }
}
export function createCollectionList(creator, title = 'Favorites') {
  const mainEntity = { id: 'pBlf', type: 'DataFeed' }
  return {
    additionalType: 'ProjectDelanyLong',
    creator, // User that created the thing.
    itemListOrder: 'Ascending',
    mainEntity, // List of what.
    title,
    type: 'CollectionList',
  }
}

export function createCollectionItem(item, position = 100) {
  return {
    actionStatus: 'created',
    item,
    position,
    startTime: new Date(),
    type: 'ListItem',
  }
}
// Adding an item to a list requires a new triple.
export function createCollectionItemTriple(list, item, position) {
  // Create the ListItem.
  const object = createCollectionItem(item, position)
  // The item is attached to the list by adding an itemListElement predicate triple.
  return { subject: list, predicate: 'itemListElement', object }
}

export function favoriteItem(item, listId) {
  return (dispatch) => {
    // const state = getState()
    const list = { type: 'CollectionList', id: listId }
    const listItem = createCollectionItemTriple(list, item)
    dispatch(createTriple(listItem))
  }
}

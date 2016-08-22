import { createTriple } from 'redux-graph'




export function favoriteItem(item, listId) {
  return (dispatch) => {
    // const state = getState()
    const list = { type: 'CollectionList', id: listId }
    const listItem = createCollectionItemTriple(list, item)
    dispatch(createTriple(listItem))
  }
}

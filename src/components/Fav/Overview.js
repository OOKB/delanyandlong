import { connect } from 'react-redux'
import { constant, flow, map, partial } from 'lodash'
import { createStructuredSelector } from 'reselect'
import {
  addItemToCollection, createItemThunk, createListThunk, close, endItem,
} from 'cape-redux-collection'
// import { resetField } from '../../redux/collection'

import Component from './OverviewEl'

function getMessage(state, { item }) {
  return `Add ${item.id} to one of your collections.`
}
const getState = createStructuredSelector({
  message: getMessage,
})
function getAction(list, item) {
  if (list.itemListId) return partial(endItem, { id: list.itemListId })
  return createItemThunk({ mainEntity: list, item })
}
function mapDispatchToProps(dispatch, { collections, item }) {
  function collectionPick(collection) {
    return {
      id: collection.id,
      title: collection.title,
      onClick: flow(getAction(collection, item), dispatch),
    }
  }
  return {
    createCollection: createListThunk,
    onClose: flow(close, dispatch),
    userCollections: map(collections, collectionPick),
  }
}

export default connect(getState, mapDispatchToProps)(Component)

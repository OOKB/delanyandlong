import { connect } from 'react-redux'
import { constant, flow, get, map, over } from 'lodash'
import { createStructuredSelector } from 'reselect'
import { addItemToCollection, close, endAction, PREDICATE } from 'cape-redux-collection'
import { createCollection, resetField } from '../../redux/collection'

import Component from './OverviewEl'

function getMessage(state, { item }) {
  return `Add ${item.id} to one of your collections.`
}
const getState = createStructuredSelector({
  message: getMessage,
})

function mapDispatchToProps(dispatch, { collections, item, userCollections }) {
  function collectionPick(collection) {
    const listItem = get(collections, [ collection.id, PREDICATE ], false)
    const action = listItem ? endAction(constant(listItem)) : addItemToCollection(collection, item)
    return {
      inList: !!listItem,
      title: collection.title,
      onClick: flow(action, dispatch),
    }
  }
  return {
    createCollection: over(flow(createCollection, dispatch), flow(resetField, dispatch)),
    onClose: flow(close, dispatch),
    userCollections: map(userCollections, collectionPick),
  }
}
export default connect(getState, mapDispatchToProps)(Component)

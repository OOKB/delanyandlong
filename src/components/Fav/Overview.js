import { connect } from 'react-redux'
import { flow, map } from 'lodash'
import { createStructuredSelector } from 'reselect'
import { addItemToCollection, close } from 'cape-redux-collection'

import Component from './OverviewEl'

function getMessage(state, { item }) {
  return `Add ${item.id} to one of your collections.`
}
const getState = createStructuredSelector({
  message: getMessage,
})

function mapDispatchToProps(dispatch, { collections, item, userCollections }) {
  function collectionPick(collection) {
    return {
      inList: !!collections[collection.id],
      title: collection.title,
      onClick: flow(addItemToCollection(collection, item), dispatch),
    }
  }
  return {
    onClose: flow(close, dispatch),
    userCollections: map(userCollections, collectionPick),
  }
}
export default connect(getState, mapDispatchToProps)(Component)

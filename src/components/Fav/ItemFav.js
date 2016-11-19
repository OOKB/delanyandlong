import { partial } from 'lodash'
import { connect } from 'react-redux'
import { mapDispatchToProps } from 'cape-redux'
import { createStructuredSelector } from 'reselect'
import {
  activeListItem, itemInFavs, itemIsActive, toggle, userCollectionsItem,
} from 'cape-redux-collection'

import Component from './ItemFavEl'

const mapStateToProps = createStructuredSelector({
  // activeListItem,
  collections: userCollectionsItem,
  itemInFavs,
  itemIsActive,
})

function getActions({ item }) {
  return {
    editItemCollections: partial(toggle, item),
  }
}
const actions = mapDispatchToProps(getActions)
export default connect(mapStateToProps, actions)(Component)

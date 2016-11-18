import { partial } from 'lodash'
import { connect } from 'react-redux'
import { mapDispatchToProps } from 'cape-redux'
import { boolSelector } from 'cape-select'
import { createStructuredSelector } from 'reselect'
import { findItemInFavs, itemIsActive, toggle, userCollectionsItem } from 'cape-redux-collection'

import Component from './ItemFavEl'

const mapStateToProps = createStructuredSelector({
  collections: userCollectionsItem,
  itemInFavs: boolSelector(findItemInFavs),
  itemIsActive,
})

function getActions({ item }) {
  return {
    editItemCollections: partial(toggle, item),
  }
}
const actions = mapDispatchToProps(getActions)
export default connect(mapStateToProps, actions)(Component)

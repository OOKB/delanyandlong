import { partial } from 'lodash'
import { connect } from 'react-redux'
import { mapDispatchToProps } from 'cape-redux'
import { boolSelector } from 'cape-select'
import { createStructuredSelector } from 'reselect'
import { findItemInFavs, itemIsActive, toggle, userCollections } from 'cape-redux-collection'

import Component from './ItemFavEl'

const mapStateToProps = createStructuredSelector({
  collections: userCollections,
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

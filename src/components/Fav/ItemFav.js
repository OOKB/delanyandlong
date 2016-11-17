import { partial } from 'lodash'
import { connect } from 'react-redux'
import { mapDispatchToProps } from 'cape-redux'
import { toggle } from 'cape-redux-collection'

import Component from './ItemFavEl'

console.log('collection', collection)

function getActions({ item }) {
  return {
    editItemCollections: partial(toggle, item),
  }
}
const actions = {} // mapDispatchToProps(getActions)
export default connect(mapStateToProps, actions)(Component)

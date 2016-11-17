// import { partial } from 'lodash'
import { connect } from 'react-redux'
import { mapDispatchToProps } from 'cape-redux'
import { mapStateToProps, toggle } from 'cape-redux-collection'

import Component from './ItemFavEl'

function getActions({ item }) {
  return {
    editItemCollections: toggle(item),
  }
}
const actions = mapDispatchToProps(getActions)
export default connect(mapStateToProps, actions)(Component)

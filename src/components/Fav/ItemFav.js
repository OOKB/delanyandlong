import { partial } from 'lodash'
import { connect } from 'react-redux'
import { mapDispatchToProps } from 'cape-redux'
import { mapStateToProps } from 'cape-redux-collection'

import { editItemCollections } from '../../redux/collection'
import Component from './ItemFavEl'

function getActions({ item }) {
  return {
    editItemCollections: partial(editItemCollections, item),
  }
}
const actions = mapDispatchToProps(getActions)
export default connect(mapStateToProps, actions)(Component)

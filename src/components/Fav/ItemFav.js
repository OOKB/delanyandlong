import { connect } from 'react-redux'
import { constant } from 'lodash'
import { mapDispatchToProps } from 'cape-redux'
import { editItemCollections, mapStateToProps } from 'cape-redux-collection'

import { listAgentMain } from '../../redux/select/collection'
import Component from './ItemFavEl'

function getActions({ item }) {
  return {
    editItemCollections: constant(editItemCollections(listAgentMain, item)),
  }
}
const actions = mapDispatchToProps(getActions)
export default connect(mapStateToProps, actions)(Component)

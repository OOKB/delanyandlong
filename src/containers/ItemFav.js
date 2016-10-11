import { connect } from 'react-redux'
import partial from 'lodash/partial'
import { mapDispatchToProps } from 'cape-redux'
import { editItemCollections, mapStateToProps } from 'cape-redux-collection'

import Component from '../components/Fav'

function getActions({ item }) {
  return {
    editItemCollections: partial(editItemCollections, item),
  }
}

export default connect(mapStateToProps, mapDispatchToProps(getActions))(Component)

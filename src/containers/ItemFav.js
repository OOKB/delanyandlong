import { connect } from 'react-redux'
import partial from 'lodash/partial'

import { mapDispatchToProps } from 'cape-redux'
import { mapStateToProps } from '../redux/project/select'
import { editItemCollections } from '../redux/project/actions'
import Component from '../components/Fav'

function getActions({ item }) {
  return {
    editItemCollections: partial(editItemCollections, item),
  }
}

export default connect(mapStateToProps, mapDispatchToProps(getActions))(Component)

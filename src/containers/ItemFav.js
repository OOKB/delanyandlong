import { connect } from 'react-redux'
import partial from 'lodash/partial'

import { mapDispatchToProps } from '../redux/utils'
import { mapStateToProps } from '../redux/project/select'
import { editItemCollections } from '../redux/project/actions'

function getActions({ item }) {
  return {
    editItemCollections: partial(editItemCollections, item),
  }
}


import Component from '../components/Fav'

export default connect(mapStateToProps, mapDispatchToProps(getActions))(Component)

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import partial from 'lodash/partial'

import { mapStateToProps } from '../redux/project/select'

import { editItemCollections } from '../redux/project/actions'

function getActions({ item }) {
  return {
    editItemCollections: partial(editItemCollections, item),
  }
}
function mapDispatchToProps(dispatch, props) {
  return bindActionCreators(getActions(props), dispatch)
}

import Component from '../components/Fav'

export default connect(mapStateToProps, mapDispatchToProps)(Component)

import { connect } from 'react-redux'

import { createStructuredSelector } from 'reselect'
import { editCollection, userCollections } from 'cape-redux-collection'

import Component from './ProjectsEl'

export const mapStateToProps = createStructuredSelector({
  lists: userCollections,
})
const mapDispatchToProps = {
  edit: editCollection,
}
export default connect(mapStateToProps, mapDispatchToProps)(Component)

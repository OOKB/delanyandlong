import { connect } from 'react-redux'

import { createStructuredSelector } from 'reselect'
import { userCollections } from 'cape-redux-collection'

import Component from './ProjectsEl'

export const mapStateToProps = createStructuredSelector({
  lists: userCollections,
})

export default connect(mapStateToProps)(Component)

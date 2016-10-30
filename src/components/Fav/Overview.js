import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { close } from 'cape-redux-collection'

import Component from './OverviewEl'

function getMessage(state, { item }) {
  return `Add ${item.id} to one of your collections.`
}
const getState = createStructuredSelector({
  message: getMessage,
})

const actions = { onClose: close }

export default connect(getState, actions)(Component)

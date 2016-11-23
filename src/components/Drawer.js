import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { entityUpdate } from '@kaicurry/redux-graph'
import { selectUser } from 'cape-redux-auth'

import Component from './DrawerEl'

export const mapStateToProps = createStructuredSelector({
  user: selectUser,
})
function update(user, drawerId) {
  return entityUpdate({ type: user.type, id: user.id, drawer: { [drawerId]: true } })
}
const mapDispatchToProps = {
  onClose: update,
}
export default connect(mapStateToProps, mapDispatchToProps)(Component)

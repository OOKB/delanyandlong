import { connect } from 'react-redux'
import { login } from 'cape-redux-auth'
import { mapStateToProps } from '../redux/select/trade'
import Component from '../components/Login'

function onClick(uid) {
  return login({ id: uid })
}
const mapDispatchToProps = {
  onClick,
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)

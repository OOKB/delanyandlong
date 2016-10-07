import { connect } from 'react-redux'
import { login } from 'cape-redux-auth'
import { mapStateToProps } from '../redux/select/trade'
import Component from '../components/Login'

const mapDispatchToProps = {
  login,
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)

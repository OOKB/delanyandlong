import { connect } from 'react-redux'
import { mapStateToProps } from '../redux/select/trade'
import Component from '../components/Login'

// const mapDispatchToProps = {
//   onClick: partial(ary(login, 1), { id: 'auth123' }),
// }

export default connect(mapStateToProps)(Component)

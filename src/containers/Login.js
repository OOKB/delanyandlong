import { connect } from 'react-redux'
import ary from 'lodash/ary'
import partial from 'lodash/partial'
import { login } from 'cape-redux-auth'
import { getFormEvents } from 'redux-field'
import { getTrade as mapStateToProps } from '../redux/select/trade'
import Component from '../components/Login'

// const mapDispatchToProps = {
//   onClick: partial(ary(login, 1), { id: 'auth123' }),
// }
const custNum = {
  description: 'D&L Account Number',
  label: 'D&L Account Number',
  id: 'customerNumber',
  prefix: [ 'login', 'customerNumber' ],
}
const mapDispatchToProps = getFormEvents(custNum.prefix)
export default connect(mapStateToProps, mapDispatchToProps)(Component)

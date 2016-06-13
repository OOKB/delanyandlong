import { connect } from 'react-redux'
import FloatPlan from '../components/FloatPlan/FloatPlan'

function boatInfo(state) {
  const { currentInfo: { name, hailingPort, registration } } = state
  return { name, hailingPort, docNumber: registration.uscg }
}
function mapStateToProps(state) {
  return { boatInfo: boatInfo(state.db) }
}
export default connect(mapStateToProps)(FloatPlan)

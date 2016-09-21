import { createStructuredSelector } from 'reselect'
import { isAnonymous, isAuthenticated } from 'cape-redux-auth'
import { userHasFavorites } from '../project/select'

const permissions = createStructuredSelector({
  hasFavorites: userHasFavorites,
  isAnonymous,
  isAuthenticated,
})
export default permissions

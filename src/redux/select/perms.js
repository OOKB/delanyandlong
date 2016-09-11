import { createStructuredSelector } from 'reselect'
import { isAnonymous, isAuthenticated } from '../auth/select'
import { userHasFavorites } from '../project/select'

const permissions = createStructuredSelector({
  hasFavorites: userHasFavorites,
  isAnonymous,
  isAuthenticated,
})
export default permissions

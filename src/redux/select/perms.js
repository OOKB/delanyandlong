import { createStructuredSelector } from 'reselect'
import { isAnonymous, isAuthenticated } from '../auth/select'
import { hasFavorites } from '../project/select'

const permissions = createStructuredSelector({
  hasFavorites,
  isAnonymous,
  isAuthenticated,
})
export default permissions

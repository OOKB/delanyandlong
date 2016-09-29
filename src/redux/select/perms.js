import { createStructuredSelector } from 'reselect'
import { isAnonymous, isAuthenticated } from 'cape-redux-auth'
import { userHasFavorites } from 'cape-redux-collection'

const permissions = createStructuredSelector({
  hasFavorites: userHasFavorites,
  isAnonymous,
  isAuthenticated,
})
export default permissions

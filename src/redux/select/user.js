import { createStructuredSelector } from 'reselect'
import { getIndexPath, tripleTypeIndexSelector } from 'redux-graph'

import { isAnonymous, isAuthenticated } from '../auth/select'

export const getUser = state => state.graph.entity.user0

export function buildUserPredicateSelector(predicate) {
  return state => getIndexPath.pos([ predicate, getUser(state).id ], state)
}
export const userAgentTypeIndex = tripleTypeIndexSelector(buildUserPredicateSelector('agent'))
export const userCreatorTypeIndex = tripleTypeIndexSelector(buildUserPredicateSelector('creator'))

export const permission = createStructuredSelector({
  isAnonymous,
  isAuthenticated,
})

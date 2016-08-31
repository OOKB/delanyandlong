import { entitySelector } from 'redux-graph'
import { createSelector } from 'reselect'
import { getIndex } from '../select/triple'

import { favsListSelector } from './select'

// Get all list items of a project.
export const listElements = createSelector(
  favsListSelector,
  entitySelector,
  getIndex.pso,

)

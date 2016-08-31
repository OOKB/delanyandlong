import { entitySelector } from 'redux-graph'

import { select } from '../utils'

export const getUser = select('user0', entitySelector)
export const getUserId = select('id', getUser)

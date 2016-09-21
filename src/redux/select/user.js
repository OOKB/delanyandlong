import { entitySelector } from 'redux-graph'

import { select } from 'cape-select'

export const getUser = select('user0', entitySelector)
export const getUserId = select('id', getUser)

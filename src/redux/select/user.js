import { entitySelector } from 'redux-graph'

import { select } from 'cape-select'

export const getUser = select(entitySelector, 'user0')
export const getUserId = select(getUser, 'id')

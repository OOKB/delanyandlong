import negate from 'lodash/negate'

import { select } from '../utils'

export const selectAuth = select('auth')
export const selectUser = select('user', selectAuth)
export const isAuthenticated = select('authenticated', selectAuth)
export const isAnonymous = negate(isAuthenticated)
export const selectUid = select('id', selectUser)

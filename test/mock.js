import immutable from 'seamless-immutable'
import { applyMiddleware, createStore } from 'redux'
import { entityPutAll } from 'redux-graph'
import reducer from 'cape-redux-reducer'
import thunk from 'redux-thunk'

import items from './items'

import defaultState from '../src/redux/defaultState'

export const store = createStore(reducer, defaultState, applyMiddleware(thunk))
store.dispatch(entityPutAll(items))

export const user = {
  type: 'Person',
  id: 'anon',
  name: 'foo',
  gender: 'bar',
}
export const user2 = {
  type: 'Person',
  id: 'auth',
  name: 'Auth User',
}
export const state = immutable({
  user,
})
export const props = {
  item: { id: 'bar' },
  title: 'strawberry',
}
export const collection = {
  a1: {
    id: 'a1',
    type: 'Sample',
    title: 'Rubish',
    creator: {
      anon: user,
      auth: user2,
    },
  },
  a2: {
    id: 'a2',
    type: 'Sample',
    creator: {
      auth: user2,
    },
  },
  a3: {
    id: 'a3',
    type: 'Sample',
    title: 'Favorites',
    creator: {
      anon: user,
    },
  },
}

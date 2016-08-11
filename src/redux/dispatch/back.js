import {
  createHistory, parseUrl, restoreHistory, selectHistoryState, selectActiveKey,
} from 'redux-history-sync'
import find from 'lodash/find'
import orderBy from 'lodash/orderBy'

export function selectPrevious(state) {
  const historyState = selectHistoryState(state)
  const active = selectActiveKey(historyState)
  if (historyState.length < 2) return null
  return find(historyState.key, { index: active.index - 1 })
}

export function isNonDetail({ location: { pathname } }) {
  return !pathname.startsWith('/detail/')
}

export function findNonDetail(state) {
  const historyState = selectHistoryState(state)
  if (historyState.length < 2) return null
  const historyItems = orderBy(historyState.key, 'index', 'desc')
  return find(historyItems, isNonDetail)
}
export const collectionLocation = parseUrl('/collection')
export function closeDetail(state) {
  const previous = findNonDetail(state)
  console.log(previous)
  if (previous) return restoreHistory(previous.key, false)
  return createHistory(collectionLocation)
}

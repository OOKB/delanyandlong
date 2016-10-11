import { buildCollectionList, favTitle, getTitle } from 'cape-redux-collection'
import { selectUser } from 'cape-redux-auth'
import { structuredSelector } from 'cape-select'
import { getDataFeed, getWebApp } from './'

// Return user if there was a title set. Otherwise return webApp.
export function collectionListAgent(state, props) {
  if (getTitle(state, props) !== favTitle) return selectUser(state)
  return getWebApp(state)
}
export const listAgentMain = structuredSelector({
  agent: collectionListAgent,
  mainEntity: getDataFeed,
})
export const createCollectionList = buildCollectionList(listAgentMain)
export const collectionSelector = {}

import { createSelector, createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'
import { fullEntitySelector } from '@kaicurry/redux-graph'
import { getSelect } from 'cape-select'
import { collectionListSelector } from 'cape-redux-collection'

import Component from '../components/Fav/Favs'
import { routeParam } from '../redux/routing'
import { itemsFilled } from '../redux/select/items'

const getProjectId = routeParam('projectId')
const getList = getSelect(collectionListSelector, getProjectId)
const listFull = fullEntitySelector(getList)
// const mixItems = createSelector(listFull, itemsFilled,
//   (list, items) => {
//     const listItems = mapValues(list[PREDICATE], (listItem) => {
//       const itemId = key0(listItem.item)
//       const item = get(items, itemId, listItem.item[itemId])
//       return set(res, key, listItem.set('item', item))
//     })
//     set(PREDICATE, list, )
//   }
// )
export const mapStateToProps = createStructuredSelector({
  list: listFull,
  getList,
})

export default connect(mapStateToProps)(Component)

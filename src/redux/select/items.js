import { createSelector } from 'reselect'
import { entitySelector } from 'redux-graph'
import compact from 'lodash/compact'
import curry from 'lodash/curry'
import every from 'lodash/every'
import filter from 'lodash/filter'
import map from 'lodash/map'
import mapValues from 'lodash/mapValues'
import orderBy from 'lodash/orderBy'
import pickBy from 'lodash/pickBy'
import uniq from 'lodash/uniq'

import { activeCategorySelector, getFilterText } from './'
import { categoryCodeIndex } from './category'

export function isValidItem(entity) {
  return entity.id.startsWith('DL')
}

// const CDN = 'https://3f363c8bf5767a720417-fdf7aa33c10c7fb6e1c8c4e342fa358c.ssl.cf5.rackcdn.com'
const CDN = 'http://65.110.85.163'
export function itemFill(item, catCodeIndex) {
  if (!item || !item.id) return item
  const { id, category, color, contents, name, patternNumber, price } = item
  const colorNumber = id.replace(`${patternNumber}-`, '')
  return {
    ...item,
    categoryCode: catCodeIndex[category],
    colorNumber,
    link: `/detail/${id}`,
    img: `${CDN}/images/fabrics/${patternNumber}/${colorNumber}_big.jpg`,
    price: `$${price}${category === 'leather' ? ' sq ft' : ''}`,
    searchable: (color + contents + name + id).toLowerCase(),
  }
}
export const itemsRaw = createSelector(
  entitySelector,
  entity => pickBy(entity, isValidItem)
)
export const itemsFilled = createSelector(
  itemsRaw,
  categoryCodeIndex,
  (items, catCodeIndex) => mapValues(items, item => itemFill(item, catCodeIndex))
)
export function orderItems(items) {
  return orderBy(items, 'id')
}
export const filterSort = curry((filterBy, items) => orderItems(filter(items, filterBy)))

export const itemsSorted = createSelector(
  itemsFilled,
  orderItems
)
export const categorySelector = createSelector(
  itemsFilled,
  activeCategorySelector,
  (items, category) => category && filterSort({ category }, items) || orderItems(items)
)
export function textSearch(searchValue) {
  return item =>
    every(compact(searchValue.split(' ')), searchTxt =>
      item.searchable.includes(searchTxt)
    )
}
export const textSearchSelector = createSelector(
  categorySelector,
  getFilterText,
  (items, searchValue) => searchValue && filter(items, textSearch(searchValue)) || items
)
export const patternColorSelector = createSelector(
  textSearchSelector,
  items => {
    let currentPattern = null
    return map(items, item => {
      const isPattern = currentPattern !== item.patternNumber
      currentPattern = item.patternNumber
      return {
        ...item,
        isPattern,
      }
    })
  }
)
export const colorSelector = createSelector(
  itemsFilled,
  items => uniq(map(items, 'color'))
)

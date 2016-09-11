import curry from 'lodash/curry'
import filter from 'lodash/filter'

export const filterCreator = curry((propKey, collection, entity) => {
  filter(collection, item => item[propKey].id === entity.id)
})
export function findCreator(predicate) {
  return collection => find(collection, predicate)
}

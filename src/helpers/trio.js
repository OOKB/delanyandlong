import defaults from 'lodash/defaults'
const defaultOpts = {
  index: 0,
}
export function maxIndex(items) {
  return items.length - 1
}
export function getNextIndex(items, index) {
  if (maxIndex(items) <= index) return 0
  if (index <= 0) return 1
  return index + 1
}
export function getPrevIndex(items, index) {
  const lastIndex = maxIndex(items)
  if (index <= 0) return lastIndex
  if (lastIndex < index) return lastIndex - 1
  return index - 1
}
export function createItemIndex(item, index) {
  return { item, index }
}
export default function trio(items, opts) {
  const { index } = defaults(opts, defaultOpts)
  const nextIndex = getNextIndex(items, index)
  const prevIndex = getPrevIndex(items, index)
  return {
    active: createItemIndex(items[index], index),
    next: createItemIndex(items[nextIndex], nextIndex),
    previous: createItemIndex(items[prevIndex], prevIndex),
  }
}

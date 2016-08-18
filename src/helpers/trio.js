import defaults from 'lodash/defaults'
const defaultOpts = {
  index: 0,
}
function maxIndex(items) {
  return items.length - 1
}
function getNextIndex(items, index) {
  if (maxIndex(items) === index) return 0
  return index + 1
}
function getPrevIndex(items, index) {
  if (index === 0) return maxIndex(items)
  return index - 1
}
function createItemIndex(item, index) {
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

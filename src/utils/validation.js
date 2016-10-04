import curry from 'lodash/curry'
import isEmpty from 'lodash/isEmpty'

export const minLength = curry((min, value) => {
  if (!isEmpty(value) && value.length < min) {
    return `Must be at least ${min} characters`
  }
  return undefined
})
export const maxLength = curry((max, value) => {
  if (!isEmpty(value) && value.length > max) {
    return `Must be no more than ${max} characters`
  }
  return undefined
})
export function numString(val) {
  if (!/^\d+$/.test(val)) return 'Must contain only numbers.'
  return undefined
}

import { constant, flow, overEvery, partialRight, property } from 'lodash'
import { getState } from 'redux-field'
import { createSelector, createStructuredSelector } from 'reselect'

import { getDb } from './'
import fieldValidation from '../../utils/formValidation'

const custNum = {
  className: 'accountNumber',
  icon: { className: 'light-gray', symbol: 'hashtag' },
  placeholder: 'D&L Account Number',
  prefix: [ 'login', 'customerNumber' ],
  validate: fieldValidation([ 'numString', [ 'length', 6 ] ]),
}
const zip = {
  className: 'zipCode',
  icon: { className: 'light-gray', symbol: 'hashtag' },
  placeholder: 'Postal Code',
  prefix: [ 'login', 'postalCode' ],
  validate: fieldValidation([ 'numString', [ 'length', 5 ] ]),
}

export function mergeTwo(obj1, obj2) {
  return { ...obj1, ...obj2 }
}
export const getTrade = getDb('trade')
export const getSchema = constant({ custNum, zip })
export const constState = createSelector(getTrade, getSchema, mergeTwo)

export function formState(props) {
  return state => getState(state, props)
}
export const acctNumState = formState(custNum)
export const fieldValid = partialRight(flow, overEvery(property('isValid'), property('value')))
export const showZip = fieldValid(acctNumState)
export const zipState = formState(zip)
export const showLoginButton = fieldValid(zipState)

export const validInfo = createStructuredSelector({
  showZip,
  showLoginButton,
})
export const mapStateToProps = createSelector(constState, validInfo, mergeTwo)

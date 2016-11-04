import {
  cond, constant, eq, flow, lowerCase, over, overEvery, overSome, partialRight, property, spread,
} from 'lodash'
import { oneOf } from 'cape-lodash'
import { isEqual } from 'lodash/fp'
import { getState } from 'redux-field'
import { createSelector, createStructuredSelector } from 'reselect'
import { fieldValidation } from 'cape-validate'
import { getSelect, select } from 'cape-select'
import { entitySelector } from 'redux-graph'

import { getDb } from './'

// Login fields.
const custNum = {
  className: 'accountNumber',
  icon: { className: 'light-gray', symbol: 'hashtag' },
  placeholder: 'D&L Account Number',
  prefix: [ 'login', 'customerNumber' ],
  validate: fieldValidation([ 'numString', [ 'firstChar', '0' ], [ 'length', 6 ] ]),
}
const validZipCountries = [ 'canada', 'paris', 'mexico' ]
const zip = {
  className: 'zipCode',
  icon: { className: 'light-gray', symbol: 'hashtag' },
  placeholder: 'Postal Code',
  prefix: [ 'login', 'postalCode' ],
  validate: overSome(
    fieldValidation([ 'numString', [ 'length', 5 ] ]),
    flow(lowerCase, oneOf(validZipCountries)),
  ),
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
export const acctNumValid = fieldValid(acctNumState)
export const acctNumId = flow(acctNumState, property('validValue'))
export const acctNumChecking = flow(over(acctNumValid, acctNumId), isEqual([ true, null ]))
export const showZip = overEvery(acctNumValid, acctNumId)

export const zipState = formState(zip)
export const zipValue = select(zipState, 'value')
export const getCustomerZip = flow(
  getSelect(entitySelector, acctNumId),
  property('postalCode')
)
export const zipMatch = flow(
  over(getCustomerZip, zipValue),
  spread(eq)
)
export const zipInvalid = flow(over(fieldValid(zipState), zipMatch), isEqual([ true, false ]))
export const showLoginButton = overEvery(showZip, fieldValid(zipState), zipMatch)
export const uid = cond([ [ showLoginButton, acctNumId ] ])
export const validInfo = createStructuredSelector({
  acctNumChecking,
  showZip,
  uid,
  zipInvalid,
})
export const mapStateToProps = createSelector(constState, validInfo, mergeTwo)

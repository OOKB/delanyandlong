import { createSelector } from 'reselect'
import { favListElements, fixListItems, listItemIndex, orderListItems } from 'cape-redux-collection'
import { itemsFilled } from './select/items'

export const listItems = createSelector(favListElements, itemsFilled, fixListItems)
export const listItemsSorted = createSelector(listItems, orderListItems)
export const favsItemIndex = createSelector(listItems, listItemIndex)

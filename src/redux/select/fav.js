import get from 'lodash/get'

import { listItems } from '../project/select'

export function userFavs(state) {
  return get(listItems(state), 'itemListElement')
}

import { select } from '../utils'
import { listItems } from '../project/select'

export const userFavs = select('itemListElement', listItems)

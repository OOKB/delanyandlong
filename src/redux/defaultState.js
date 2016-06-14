import keyBy from 'lodash/keyBy'
import entity from './defaultStateEntity'

export default {
  db: {
    pricelist: {
      columns: [ 'id', 'color', 'price', 'content', 'width', 'repeat' ],
    },
  },
  entity: keyBy(entity, 'id'),
}

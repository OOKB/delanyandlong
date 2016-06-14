import keyBy from 'lodash/keyBy'
import entity from './defaultStateEntity'

export default {
  db: {
    categoryOptions: [
      { name: 'Textile', value: 'textile' },
      { name: 'Passementerie', value: 'trim' },
      { name: 'Leather', value: 'leather' },
    ],
    pricelist: {
      columns: [ 'id', 'color', 'price', 'contents', 'approxWidth', 'repeat' ],
      defaultCategory: 'textile',
      prefix: [ 'pricelist', 'category' ],
    },
  },
  graph: {
    entity: keyBy(entity, 'id'),
  },
}

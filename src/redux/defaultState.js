import keyBy from 'lodash/keyBy'
import entity from './defaultStateEntity'

export default {
  db: {
    categoryOptions: [ 'textile', 'trim', 'leather' ],
    pricelist: {
      columns: {
        textile: [ 'id', 'color', 'price', 'contents', 'repeat', 'approxWidth', 'originCountry' ],
        trim: [ 'id', 'color', 'price', 'contents', 'approxWidth', 'originCountry' ],
        leather: [
          'id', 'color', 'price', 'contents',
          { value: 'approxWidth', label: 'Approx. Hide Size' },
          'originCountry',
        ],
      },
      colorColumnValues: [ 'id', 'color' ],
      defaultCategory: 'textile',
      prefix: {
        category: [ 'pricelist', 'category' ],
        pgIndex: [ 'pricelist', 'pgIndex' ],
        pgSize: [ 'pricelist', 'pgSize' ],
        text: [ 'pricelist', 'text' ],
      },
      printWhenColor: { id: 'colorNumber', color: 'color' },
    },
    schema: {
      id: {
        label: 'Item#',
      },
      approxWidth: {
        label: 'Approx. Width',
      },
      color: {
        label: 'Color',
      },
      colorNumber: {
        label: 'Color Number',
      },
      contents: {
        label: 'Content',
      },
      leather: {
        label: 'Leather',
      },
      originCountry: {
        label: 'Origin Country',
      },
      price: {
        label: 'Net Price',
      },
      repeat: {
        label: 'Approx. Repeat',
      },
      textile: {
        label: 'Textile',
      },
      trim: {
        label: 'Passementerie',
      },
    },
  },
  graph: {
    entity: keyBy(entity, 'id'),
  },
}

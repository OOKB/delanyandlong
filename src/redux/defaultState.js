import keyBy from 'lodash/keyBy'
import items from './defaultStateEntity'
const entity = keyBy(items, 'id')
entity.user0 = {
  id: 'user0',
  type: 'Person', // ???
  name: 'Anonymous Person or User of the website',
}
export default {
  db: {
    about: `But there were still other and more vital practical influences at work. Not even at the
      present day has the original prestige of the Sperm Whale, as fearfully distinguished from all
      other species of the leviathan, died out of the minds of the whalemen as a body.
      There are those this day among them, who, though intelligent and courageous enough in offering
       battle to the Greenland or Right whale, would perhaps—either from professional inexperience,
       or incompetency, or timidity, decline a contest with the Sperm Whale; at any rate, there are
       plenty of whalemen, especially among those whaling nations not sailing under the American
       flag, who have never hostilely encountered the Sperm Whale, but whose sole knowledge of the
       leviathan is restricted to the ignoble monster primitively pursued in the North; seated on
       their hatches, these men will hearken with a childish fireside interest and awe, to the wild,
        strange tales of Southern whaling.`,
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
    menu: [
      { id: 'about', href: '/about', label: 'About Us' },
      { id: 'collection', href: '/collection', label: 'Collection' },
      { id: 'pricelist', href: '/trade/pricelist', label: 'Pricelist' },
      { id: 'favs', href: '/favs', label: 'Favorites' },
    ],
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
    entity,
  },
}

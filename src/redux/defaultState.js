import keyBy from 'lodash/keyBy'
import merge from 'lodash/merge'

import items from './defaultStateEntity'
import showrooms from './showrooms'
const entity = merge(keyBy(items, 'id'), keyBy(showrooms, 'id'))

entity.user0 = {
  id: 'user0',
  type: 'Person', // ???
  name: 'Anonymous Person or User of the website',
}

export default {
  db: {
    aboutImgSrc: 'https://images.unsplash.com/photo-1459128806329-1b61d19a0f93?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=800&h=600&fit=crop&s=d7eb9a7a335cbd55db5ecd2db7bf1afd',
    about: `<p>DeLany & Long Ltd. is a new company established by the creative team of John Flynn and Jamie Gould, founders of Rogers & Goffigon Ltd. The wholly independent company is dedicated to the design and marketing of distinctive textiles for outdoor applications. We bring to the outdoor fabric market the signature style and quality which make Rogers & Goffigon an important resource for fine interior fabrics.</p><p>DeLany & Long fabrics are marked by a singular approach to color, texture and construction and are developed and produced in collaboration with European specialty mills. The collection is integrated in its overall character and individual characteristics. Seventeen coordinated colorways include solids, stripes and textures in a subtle, muted palette. Our colors are derived from vegetable dyes, chosen because they reflect nature rather than compete with it. Our weaves have visual and tactile interest not found in outdoor fabrics currently in the marketplace. The quality of our construction reflects the long tradition of our mill partners in weaving fine fabrics.</p><p>DeLany & Long fabrics transition between inside and outside. They are ideal for use in the home garden, patio and poolside, at hotels and resorts, on beaches and boats. And they are also inspired solutions for playrooms, kitchens, sunrooms and other interior areas subject to hard wear.</p>`,
    service: `DeLany & Long is a small, focused company, responsive to our customers and committed to quality service. Our combination of exceptional service and product availability makes us unique in the industry. Our Customer Service department is directed and staffed by experienced professionals. All of our fabrics are woven to order for us and we maintain a large inventory at our Greenwich, Connecticut location. Business is conducted on a pro forma basis and most fabrics can be shipped immediately.`,
    contact: `DeLany & Long fabrics are distributed through Rogers & Goffigon sales representatives and a growing group of allied business distributors.`,
    categoryOptions: [ 'textile', 'trim', 'leather' ],
    pricelist: {
      columns: {
        textile: [ 'id', 'img', 'color', 'price', 'contents', 'repeat', 'approxWidth', 'originCountry' ],
        trim: [ 'id', 'color', 'price', 'contents', 'approxWidth', 'originCountry' ],
        leather: [
          'id', 'img', 'color', 'price', 'contents',
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
        display: [ 'pricelist', 'display' ],
      },
      printWhenColor: { id: 'colorNumber', color: 'color', img: 'img' },
    },
    menu: [
      { id: 'about', href: '/about', label: 'About Us' },
      { id: 'collection', href: '/collection', label: 'Collection' },
      { id: 'pricelist', href: '/trade/pricelist', label: 'Pricelist' },
      { id: 'favs', href: '/favs', label: 'Favorites' },
      { id: 'contact', href: '/contact', label: 'Contact Us' },
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
      img: {
        label: 'Image',
      },
      leather: {
        label: 'Leather',
      },
      originCountry: {
        label: 'Origin',
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
    styles: [
      { id: 'list', label: 'List' },
      { id: 'grid', label: 'Grid' },
      { id: 'film', label: 'Vertical' },
    ],
  },
  graph: {
    entity,
  },
}

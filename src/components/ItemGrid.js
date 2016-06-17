import React, { PropTypes } from 'react'
import map from 'lodash/map'

import { Link } from 'redux-history-sync'

function Item({ item }) {
  return (
    <li>
      <Link href={item.link}>
        <img src={item.img} alt={item.id} title={item.id} />
      </Link>
    </li>
  )
}
Item.propTypes = {
  item: PropTypes.object.isRequired,
}

function ItemGrid({ items }) {
  return (
    <div className="items">
      <ul>
        {map(items, item => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </div>
  )
}

ItemGrid.propTypes = {
  items: PropTypes.array.isRequired,
}

export default ItemGrid

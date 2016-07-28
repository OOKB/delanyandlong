import React, { PropTypes } from 'react'
import map from 'lodash/map'

import { Link } from 'redux-history-sync'

function Item({ item, onError }) {
  function handleImgError() {
    if (onError) onError(item)
    // console.log('img error', item.id, err.type)
  }

  return (
    <li>
      <Link href={item.link}>
        <img src={item.img} alt={item.id} title={item.id} onError={handleImgError} />
        <div className="description">
          <h2>{item.color}</h2>
          <p>{item.id}</p>
        </div>
      </Link>
    </li>
  )
}
Item.propTypes = {
  item: PropTypes.object.isRequired,
  onError: PropTypes.func,
}

function ItemGrid({ items, missingImage }) {
  return (
    <div className="items">
      <ul className="list-reset item-grid clearfix">
        {map(items, item => (
          <Item key={item.id} item={item} onError={missingImage} />
        ))}
      </ul>
      {!items || !items.length && <p>No Items</p>}
    </div>
  )
}

ItemGrid.propTypes = {
  items: PropTypes.array.isRequired,
  missingImage: PropTypes.func,
}

export default ItemGrid

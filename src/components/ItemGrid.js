import React, { PropTypes } from 'react'
import map from 'lodash/map'

import Item from './Item'

function ItemGrid({ items, missingImage }) {
  return (
    <div className="items">
      <ul className="list-reset item-grid clearfix">
        {map(items, item => (
          <Item key={item.id} item={item} onError={missingImage} />
        ))}
      </ul>
      {!items || !items.length && <p className="homeHidden">No Items</p>}
    </div>
  )
}

ItemGrid.propTypes = {
  items: PropTypes.array.isRequired,
  missingImage: PropTypes.func,
}

export default ItemGrid
